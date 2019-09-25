import { fromJS } from '../../packages/core/node_modules/immutable';
import { createStore } from '../../packages/react/node_modules/@sparkx/core';
import { initApp } from '../../packages/react/src';

const mockDispatch = jest.fn();
let clearFn: (transition: any) => void;
jest.mock('../../packages/react/node_modules/@uirouter/react', () => ({
    UIRouterReact: jest.fn().mockImplementation(() => (
        {
            plugin: jest.fn(),
            transitionService: {
                onSuccess: jest.fn().mockImplementation(
                    (condition: any, fn: (transition: any) => void) => {
                        clearFn = fn;
                    },
                ),
            },
        }
    )),
}));
jest.mock('../../packages/core/node_modules/redux', () => {
    return {
        combineReducers: jest.fn().mockImplementation((store) => {
            const finalStore = {};
            for (const key of Object.keys(store)) {
                finalStore[key] = store[key](undefined, {});
            }
            return finalStore;
        }),
        compose: jest.fn((...args) => [...args]),
        createStore: jest.fn().mockImplementation(() => ({
            dispatch: mockDispatch,
            getState: jest.fn(),
            subscribe: jest.fn(),
        })),
    };
});

describe('Test App', () => {
    beforeEach(() => {
        delete window.__MODE__;
        delete window.__REDUX_DEVTOOLS_EXTENSION__;
        mockDispatch.mockClear();
    });

    it('Test store creation', () => {
        initApp();
        expect(createStore).toBeCalledWith(
            {
                global: fromJS({}),
                scopes: fromJS({}),
            },
            [],
        );
    });

    it('Test init app __MODE__ production', () => {
        const mockFn = jest.fn();
        window.__REDUX_DEVTOOLS_EXTENSION__ = mockFn;
        initApp(null, 'production');
        expect(mockFn).toBeCalledTimes(0);
    });

    it('Test init app __MODE__ development and redux extension', () => {
        const mockFn = jest.fn();
        window.__REDUX_DEVTOOLS_EXTENSION__ = mockFn;
        initApp(null, 'development');
        expect(mockFn).toBeCalled();
    });

    it('Test init app without __MODE__', () => {
        const mockFn = jest.fn();
        window.__REDUX_DEVTOOLS_EXTENSION__ = mockFn;
        initApp();
        expect(mockFn).toBeCalledTimes(0);
    });

    it('Test config function to trigger global action', () => {
        initApp((setGlobal) => {
            setGlobal({ a: 'global' });
        });
        expect(mockDispatch).toBeCalledWith({
            payload: { a: 'global' },
            scopeName: 'CONFIG',
            type: 'UPDATE_GLOBAL',
        });
    });

    it('Test Clear Scope on Transition', () => {
        initApp();
        clearFn({
            from: () => ({
                name: 'state.child.grandChild',
            }),
            to: () => ({
                name: 'stat',
            }),
        });
        expect(mockDispatch).toBeCalledTimes(3);
        expect(mockDispatch).toHaveBeenNthCalledWith(1, {
            scopeName: 'state.child.grandChild',
            type: 'CLEAR_SCOPE',
        });
        expect(mockDispatch).toHaveBeenNthCalledWith(2, {
            scopeName: 'state.child',
            type: 'CLEAR_SCOPE',
        });
        expect(mockDispatch).toHaveBeenNthCalledWith(3, {
            scopeName: 'state',
            type: 'CLEAR_SCOPE',
        });
    });
});
