import { GlobalActions } from './model/globalReducer';
import { ScopeActions } from './model/scopeReducer';

/**
 * Takes in payload to genrate global actions.
 * When dispatched, this action will update the global state.
 * It also takes in scope name which is not stored in state,
 * however it may help in debugging which component updated the
 * global scope in case of any conflict.
 *
 * @param scopeName
 * @param payload
 */
function updateGlobalStore(scopeName: string, payload: any) {
    return {
        payload,
        scopeName,
        type: GlobalActions.UPDATE_GLOBAL,
    };
}

/**
 * Takes in scope name and payload to update the scope with
 * given name.
 *
 * @param scopeName
 * @param payload
 */
function updateScopeStore(scopeName: string, payload: any) {
    return {
        payload,
        scopeName,
        type: ScopeActions.UPDATE_SCOPE,
    };
}

enum storeType {
    GLOBAL = 'GLOBAL',
    SCOPE = 'SCOPE',
}

interface IPayloadType {
    /**
     * Payload sent by controller.
     */
    payload: any;
    /**
     * Type of payload.
     */
    type: storeType;
}

/**
 * Function to be invoked by controllers if they want to
 * update global store.
 *
 * @param payload
 */
export function setGlobal(payload: any): IPayloadType {
    return {
        payload,
        type: storeType.GLOBAL,
    };
}

/**
 * Function to be invoked by controllers if they want to
 * update local scope.
 * @param payload
 */
export function setScope(payload: any): IPayloadType {
    return {
        payload,
        type: storeType.SCOPE,
    };
}

/**
 * Maps payload type to action.
 *
 * @param scopeName
 * @param payloadType
 */
export function mapPayloadToAction(scopeName: string, payloadType: IPayloadType) {
    switch (payloadType && payloadType.type) {
    case storeType.GLOBAL:
        return updateGlobalStore(scopeName, payloadType.payload);
    case storeType.SCOPE:
        return updateScopeStore(scopeName, payloadType.payload);
    default:
        return {
            scopeName,
            type: 'NOOP',
        };
    }
}

interface IDispatchObj {
    [name: string]: () => void;
}

/**
 * Wraps all exported functions by controller to dispatch.
 *
 * @param controller
 * @param scopeName
 */
export function mapCtrl(controller: any) {
    const functionNames = Object.keys(controller).filter((name: string) => name[0] !== '_');
    return functionNames.reduce(
        (prev: IDispatchObj, name: any) => {
            return {
                ...prev,
                [name]: controller[name],
            };
        },
        {},
    );
}

/**
 * Returns a scope with parent scopes attached in prototype of scope object.
 *
 * @param state
 * @param scopeName
 */
export function getScope(state: any, scopeName: string) {
    const pojoScope = state.scopes.get(scopeName);
    const scope = {
        ...(pojoScope && pojoScope.toJS()),
    };
    const parentScopeName = scopeName.split('.').slice(0, -1).join('.');
    if (parentScopeName.length > 0) {
        scope.__proto__ = getScope(state, parentScopeName);
    }
    return scope;
}
