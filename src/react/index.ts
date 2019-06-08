import { UIViewInjectedProps } from '@uirouter/react';

export { Transition } from '@uirouter/react';
export { UIView, UISref, pushStateLocationPlugin, hashLocationPlugin } from '@uirouter/react';
export { initApp } from './App';
export { createRoute, bindMVC } from './route';
export { default as RoutingService } from './RoutingService';

export interface IInjectedProps<G, S> extends UIViewInjectedProps {
    /**
     * Global scope.
     */
    global: G;
    /**
     * Local scope.
     */
    scope: S;
}
