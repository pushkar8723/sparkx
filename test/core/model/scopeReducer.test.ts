import { fromJS } from 'immutable';
import scopeReducer, { defaultState, ScopeActions } from 'src/core/model/scopeReducer';

describe('Scope Reducer Test', () => {

    it('Init Scope', () => {
        expect(scopeReducer(undefined, {
            type: ScopeActions.INIT,
        })).toStrictEqual(defaultState);
    });

    it('Update Scope', () => {
        const payload = {
            someKey: 'value',
        };
        expect(scopeReducer(defaultState, {
            payload,
            scopeName: 'nested.scope',
            type: ScopeActions.UPDATE_SCOPE,
        })).toStrictEqual(fromJS({
            'nested.scope': payload,
        }));
    });

    it('Update Scope should combine keys', () => {
        const initialState = {
            'nested.scope': {
                key: 'value',
            },
        };
        const payload = {
            someKey: 'value',
        };
        expect(scopeReducer(fromJS(initialState), {
            payload,
            scopeName: 'nested.scope',
            type: ScopeActions.UPDATE_SCOPE,
        })).toStrictEqual(fromJS({
            'nested.scope': {
                ...initialState['nested.scope'],
                ...payload,
            },
        }));
    });

    it('Clear Scope', () => {
        const initialState = {
            'nested.scope': {
                key: 'value',
            },
        };
        expect(scopeReducer(fromJS(initialState), {
            scopeName: 'nested.scope',
            type: ScopeActions.CLEAR_SCOPE,
        })).toStrictEqual(fromJS({
            'nested.scope': undefined,
        }));
    });
});
