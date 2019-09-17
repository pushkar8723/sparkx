import { fromJS } from 'immutable';
import globalReducer, {
    defaultState,
    GlobalActions,
} from '../../../packages/core/src/model/globalReducer';

describe('Global Reducer Test', () => {

    it('Init Scope', () => {
        expect(globalReducer(undefined, {
            type: GlobalActions.INIT,
        })).toStrictEqual(defaultState);
    });

    it('Update Scope', () => {
        const payload = {
            key: 'value',
        };
        expect(globalReducer(defaultState, {
            payload,
            type: GlobalActions.UPDATE_GLOBAL,
        })).toStrictEqual(fromJS(payload));
    });

    it('Update Scope should combile keys', () => {
        const initialState = {
            key: 'value',
        };
        const payload = {
            anotherKey: 'Some Value',
        };
        expect(globalReducer(fromJS(initialState), {
            payload,
            type: GlobalActions.UPDATE_GLOBAL,
        })).toStrictEqual(fromJS({
            ...initialState,
            ...payload,
        }));
    });
});
