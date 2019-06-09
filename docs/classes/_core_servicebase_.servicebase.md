[sparkx](../README.md) > ["core/ServiceBase"](../modules/_core_servicebase_.md) > [ServiceBase](../classes/_core_servicebase_.servicebase.md)

# Class: ServiceBase

Base for all services to extend. It ensures that all services are singleton.

## Hierarchy

**ServiceBase**

↳  [RoutingService](_react_routingservice_.routingservice.md)

↳  [HTTPService](_services_httpservice_.httpservice.md)

## Index

### Constructors

* [constructor](_core_servicebase_.servicebase.md#constructor)

### Properties

* [instance](_core_servicebase_.servicebase.md#instance)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ServiceBase**(): [ServiceBase](_core_servicebase_.servicebase.md)

*Defined in [core/ServiceBase.ts:9](https://github.com/pushkar8723/sparkx/blob/f8f96d7/src/core/ServiceBase.ts#L9)*

**Returns:** [ServiceBase](_core_servicebase_.servicebase.md)

___

## Properties

<a id="instance"></a>

### `<Static>``<Private>` instance

**● instance**: *`WeakMap`<`any`, [ServiceBase](_core_servicebase_.servicebase.md)>* =  new WeakMap()

*Defined in [core/ServiceBase.ts:9](https://github.com/pushkar8723/sparkx/blob/f8f96d7/src/core/ServiceBase.ts#L9)*

Maintains the map of instance of the services.

___

