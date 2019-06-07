import { ControllerBase } from 'src/core';

describe('Test Controller Base', () => {

    it('Test constructor signature', () => {
        const scope = 'scope';
        const setScope = jest.fn();
        const global = 'global';
        const setGlobal = jest.fn();
        const ctrl = new ControllerBase(scope, setScope, global, setGlobal);
        // tslint:disable-next-line: no-string-literal
        expect(ctrl['_scope']).toBe('scope');
        // tslint:disable-next-line: no-string-literal
        expect(ctrl['_setScope']).toBe(setScope);
        // tslint:disable-next-line: no-string-literal
        expect(ctrl['_global']).toBe('global');
        // tslint:disable-next-line: no-string-literal
        expect(ctrl['_setGlobal']).toBe(setGlobal);
    });

});
