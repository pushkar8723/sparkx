import { ServiceBase } from '@sparkx/core';
import { IRouteState } from '@sparkx/core/lib/types';
import {
    PluginFactory,
    servicesPlugin,
    TransitionHookFn,
    UIRouterPlugin,
    UIRouterReact,
} from '@uirouter/react';

/**
 * Routing Service.
 * For easy managemet of routes.
 */
export default class RoutingService extends ServiceBase {
    /**
     * Router instance.
     */
    private router: UIRouterReact;

    constructor() {
        super();
        if (!this.router) {
            this.router = new UIRouterReact();
            this.router.plugin(servicesPlugin);

            // Lazy load visualizer. Helps in debugging
            // import('@uirouter/visualizer').then(module => this.router.plugin(module.Visualizer));
        }
    }

    /**
     * Registers routes for appliaction
     */
    public registerRoutes(routes: IRouteState<any>[]) {
        routes.forEach(state => this.router.stateRegistry.register(state));
    }

    /**
     * Sets starting route of application
     */
    public setInitialState(state: string) {
        this.router.urlService.rules.initial({ state });
    }

    /**
     * Registers a plugin
     */
    public registerPlugin(plugin: PluginFactory<UIRouterPlugin>) {
        this.router.plugin(plugin);
    }

    /**
     * Sets fallback state for the application.
     */
    public set404State(state: string) {
        this.router.urlService.rules.otherwise({ state });
    }

    /**
     * Redirects to the given state.
     */
    public goTo(stateName: string, stateParams?: any) {
        this.router.stateService.go(stateName, stateParams);
    }

    /**
     * Returns the configured router.
     */
    public getRouter() {
        return this.router;
    }

    /**
     * Registers hook function which is called before state transition is started.
     */
    public registerBeforeHook(callback: TransitionHookFn) {
        this.router.transitionService.onBefore({}, callback);
    }

    /**
     * Registers hook function which is called when state transition is success.
     */
    public registerSuccessHook(callback: TransitionHookFn) {
        this.router.transitionService.onSuccess({}, callback);
    }
}
