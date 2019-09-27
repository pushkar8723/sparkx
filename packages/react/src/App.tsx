import { compose, createStore } from '@sparkx/core';
import model from '@sparkx/core/lib/model';
import { GlobalActions } from '@sparkx/core/lib/model/globalReducer';
import { ScopeActions } from '@sparkx/core/lib/model/scopeReducer';
import { Transition, UIRouter, UIView } from '@uirouter/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import RoutingService from './RoutingService';

/**
 * Creates a new app with store and router configured.
 */
export function initApp<G>(
    config?: (setGlobal: <K extends keyof G>(payload: Pick<G, K>) => void) => void,
    mode: string = 'production',
): JSX.Element {
    const routingService = new RoutingService();
    const middlewares: any = [];

    // Adding devtool extension midleware if its a non production build.
    if (mode !== 'production' &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__) {
        middlewares.push((window as any).__REDUX_DEVTOOLS_EXTENSION__());
    }

    // Creating store.
    const store = createStore(
      model,
      compose.apply(this, middlewares),
    );

    /**
     * Callback function to update global scope.
     * @param payload
     */
    // tslint:disable-next-line: completed-docs
    function configFn<K extends keyof G>(payload: Pick<G, K>) {
        store.dispatch({
            payload,
            scopeName: 'CONFIG',
            type: GlobalActions.UPDATE_GLOBAL,
        });
    }

    // tslint:disable-next-line: no-unused-expression
    config && config(configFn);

    // Registering hook to clear states of previous routes.
    routingService.registerSuccessHook((transition: Transition) => {
        const toState = transition.to();
        const fromState = transition.from();
        let stateName = fromState.name;
        while (stateName.length && !toState.name.startsWith(stateName)) {
            store.dispatch({
                scopeName: stateName,
                type: ScopeActions.CLEAR_SCOPE,
            });
            stateName = stateName.split('.').slice(0, -1).join('.');
        }
    });

    const router = routingService.getRouter();

    return (
        <Provider store={store}>
            <UIRouter router={router}>
                <UIView />
            </UIRouter>
        </Provider>
    );
}
