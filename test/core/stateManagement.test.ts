import { fromJS } from '../../packages/core/node_modules/immutable';
import * as stateManagement from '../../packages/core/src/stateManagement';

const payload = {
    key: 'value',
};

describe('State Management Test', () => {

    it('Set Global', () => {
        expect(stateManagement.setGlobal(payload)).toEqual({
            payload,
            type: 'GLOBAL',
        });
    });

    it('Set Scope', () => {
        expect(stateManagement.setScope(payload)).toEqual({
            payload,
            type: 'SCOPE',
        });
    });

    it('Map Global Payload To Action', () => {
        expect(stateManagement.mapPayloadToAction(
            'scope.name',
            stateManagement.setGlobal(payload),
        )).toStrictEqual({
            payload,
            scopeName: 'scope.name',
            type: 'UPDATE_GLOBAL',
        });
    });

    it('Map Scope Payload To Action', () => {
        expect(stateManagement.mapPayloadToAction(
            'scope.name',
            stateManagement.setScope(payload),
        )).toStrictEqual({
            payload,
            scopeName: 'scope.name',
            type: 'UPDATE_SCOPE',
        });
    });

    it('Map Invalid Payload To Action', () => {
        expect(stateManagement.mapPayloadToAction(
            'scope.name',
            undefined,
        )).toStrictEqual({
            scopeName: 'scope.name',
            type: 'NOOP',
        });
    });

    it('Map Controller', () => {
        // tslint:disable-next-line: no-empty
        const mockFn = () => {};
        expect(stateManagement.mapCtrl(
            {
                _privateFn: mockFn,
                anotherPublicFn: mockFn,
                publicFn: mockFn,
            },
        )).toStrictEqual({
            anotherPublicFn: mockFn,
            publicFn: mockFn,
        });
    });

    it('Get Scope', () => {
        expect(stateManagement.getScope(
            {
                scopes: fromJS({
                    scope: {
                        key: 'value',
                    },
                    'scope.nested': {
                        myKey: 'value',
                    },
                }),
            },
            'scope.nested',
        )).toStrictEqual({
            __proto__: {
                key: 'value',
            },
            myKey: 'value',
        });
    });
});
