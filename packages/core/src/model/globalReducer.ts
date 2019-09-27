import { fromJS } from 'immutable';

export const defaultState = fromJS({});
export enum GlobalActions {
    UPDATE_GLOBAL = 'UPDATE_GLOBAL',
    INIT = '@@INIT',
}

interface IAction {
    /**
     * Action Identifier.
     */
    type: GlobalActions;
    /**
     * Name of the scope from where the action was called.
     */
    scopeName?: string;
    /**
     * Payload for global state.
     */
    payload?: any;
}

/**
 * Reducer for global state.
 * This state will be made available to all components.
 *
 * @param state
 * @param action
 */
export default function globalReducer(state: any = defaultState, action: IAction) {
    const pojoState = state.toJS();
    switch (action.type) {
    case GlobalActions.UPDATE_GLOBAL:
        return fromJS({
            ...pojoState,
            ...action.payload,
        });
    default:
        return fromJS(state);
    }
}
