[@sparkx/core](../README.md) > ["core/src/ServiceBase"](../modules/_core_src_servicebase_.md) > [ServiceBase](../classes/_core_src_servicebase_.servicebase.md)

# Class: ServiceBase

Base for all services to extend. It ensures that all services are singleton.

## Hierarchy

**ServiceBase**

## Index

### Constructors

* [constructor](_core_src_servicebase_.servicebase.md#constructor)

### Properties

* [instance](_core_src_servicebase_.servicebase.md#instance)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ServiceBase**(): [ServiceBase](_core_src_servicebase_.servicebase.md)

*Defined in [core/src/ServiceBase.ts:9](https://github.com/pushkar8723/sparkx/blob/980f391/packages/core/src/ServiceBase.ts#L9)*

**Returns:** [ServiceBase](_core_src_servicebase_.servicebase.md)

___

## Properties

<a id="instance"></a>

### `<Static>``<Private>` instance

**● instance**: *`WeakMap`<`any`, [ServiceBase](_core_src_servicebase_.servicebase.md)>* =  new WeakMap()

*Defined in [core/src/ServiceBase.ts:9](https://github.com/pushkar8723/sparkx/blob/980f391/packages/core/src/ServiceBase.ts#L9)*

Maintains the map of instance of the services.

___

