import ControllerBase from './ControllerBase';

export interface IRouteState<D> {
    /**
     * Name of the route
     */
    name: string;
    /**
     * Controller for the component
     */
    controller?: ControllerBase<any, any>;
    /**
     * Route data object
     */
    data?: D;
    /**
     * Component to be rendered.
     */
    component?: any;
    /**
     * url for the route.
     */
    url?: string;
    /**
     * Redirection State.
     */
    redirectTo?: string;
    /**
     * Lazy loaded function
     */
    lazyLoad?: () => Promise<any>;
    /**
     * State params definition
     */
    params: {
        [name: string]: {
            /**
             * Data type of param
             */
            type: string,
            /**
             * Flag to disable param encoding.
             */
            raw: boolean,
        };
    };
}
