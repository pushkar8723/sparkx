/**
 * Base for all services to extend.
 * It ensures that all services are singleton.
 */
export default class ServiceBase {
    /**
     * Maintains the map of instance of the services.
     */
    private static instance: WeakMap<any, ServiceBase> = new WeakMap();

    constructor() {
        if (ServiceBase.instance.has(this.constructor)) {
            return ServiceBase.instance.get(this.constructor);
        }
        ServiceBase.instance.set(this.constructor, this);
    }
}
