import { ControllerBase } from '@sparkx/core';
import {
    getScope,
    mapCtrl,
    mapPayloadToAction,
    setGlobal,
    setScope,
} from '@sparkx/core/lib/stateManagement';
import { IRouteState } from '@sparkx/core/lib/types';
import { ComponentType } from 'react';
import { connect } from 'react-redux';

/**
 * Binds Model in Redux to component and controller.
 *
 * @param scopeName
 * @param component
 * @param controller
 */
export function bindMVC(component: ComponentType, scopeName: string,
                        controller?: any) {
    return connect(
        (state: any): any => {
            return {
                global: state.global.toJS(),
                scope: getScope(state, scopeName),
            };
        },
        (dispatch: any) => {
            return { dispatch };
        },
        (stateProps: any, dispatchProps: any, ownProps: any) => {
            const dispatch = dispatchProps.dispatch;
            let ctrl: ControllerBase<any, any>;
            if (controller) {
                ctrl = new controller(
                    stateProps.scope,
                    (scope: any) => dispatch(mapPayloadToAction(scopeName, setScope(scope))),
                    stateProps.global,
                    (global: any) => dispatch(mapPayloadToAction(scopeName, setGlobal(global))),
                );
            }
            return {
                ...ownProps,
                ...stateProps,
                ...(controller
                    ? mapCtrl(ctrl)
                    : null),
            };
        },
    )(component);
}

/**
 * Takes in a route state and returns transformed state that can be
 * plugged into UI router.
 *
 * @param routeState
 */
export function createRoute<IRouteData>(routeState: IRouteState<IRouteData>) {
    return {
        component: routeState.component
            ? bindMVC(routeState.component, routeState.name, routeState.controller)
            : null,
        data: routeState.data,
        lazyLoad: routeState.lazyLoad,
        name: routeState.name,
        redirectTo: routeState.redirectTo,
        url: routeState.url,
    };
}
