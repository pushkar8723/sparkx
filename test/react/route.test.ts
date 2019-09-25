import { connect } from '../../packages/react/node_modules/react-redux';
import * as route from '../../packages/react/src/route';

const mockDispatch = jest.fn();

jest.mock('../../packages/react/node_modules/react-redux', () => ({
    connect: jest.fn().mockImplementation(
        (mapStateToProps, mapDispatchToProps, mergeProps) => {
            const { fromJS } = require('../../packages/core/node_modules/immutable');
            const stateProps = mapStateToProps({
                global: fromJS({
                    key: 'global value',
                }),
                scopes: fromJS({
                    test: {
                        key: 'test value',
                    },
                }),
            });
            const dispatchProps = mapDispatchToProps(mockDispatch);
            const finalProps = mergeProps(stateProps, dispatchProps, {});
            return jest.fn(() => finalProps);
        },
    ),
}));

describe('Test Routes', () => {

    it('Create route with controller', () => {
        const testCtrl = jest.fn().mockImplementation(
            (scope, setScope, global, setGlobal) => {
                expect(scope).toEqual({
                    key: 'test value',
                });
                expect(global).toEqual({
                    key: 'global value',
                });
                setGlobal({ a: 'global' });
                expect(mockDispatch).toBeCalledWith({
                    payload: { a: 'global' },
                    scopeName: 'test',
                    type: 'UPDATE_GLOBAL',
                });
                mockDispatch.mockClear();
                setScope({ b: 'scope' });
                expect(mockDispatch).toBeCalledWith({
                    payload: { b: 'scope' },
                    scopeName: 'test',
                    type: 'UPDATE_SCOPE',
                });
            });

        const result = route.createRoute({
            component: jest.fn(),
            controller: testCtrl,
            name: 'test',
            url: '/',
        });

        expect(connect).toBeCalled();
        expect(result).toStrictEqual({
            component: {
                global: {
                    key: 'global value',
                },
                scope: {
                    key: 'test value',
                },
            },
            data: undefined,
            lazyLoad: undefined,
            name: 'test',
            redirectTo: undefined,
            url: '/',
        });
        expect(testCtrl).toBeCalled();
    });

    it('Create route without controller', () => {
        const result = route.createRoute({
            component: jest.fn(),
            name: 'test',
            url: '/',
        });

        expect(connect).toBeCalled();
        expect(result).toStrictEqual({
            component: {
                global: {
                    key: 'global value',
                },
                scope: {
                    key: 'test value',
                },
            },
            data: undefined,
            lazyLoad: undefined,
            name: 'test',
            redirectTo: undefined,
            url: '/',
        });
    });

    it('Create route without controller and component', () => {
        const result = route.createRoute({
            name: 'test',
            url: '/',
        });

        expect(connect).toBeCalled();
        expect(result).toStrictEqual({
            component: null,
            data: undefined,
            lazyLoad: undefined,
            name: 'test',
            redirectTo: undefined,
            url: '/',
        });
    });
});
