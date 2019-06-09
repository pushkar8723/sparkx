[sparkx](../README.md) > ["react/RoutingService"](../modules/_react_routingservice_.md) > [RoutingService](../classes/_react_routingservice_.routingservice.md)

# Class: RoutingService

Routing Service. For easy managemet of routes.

## Hierarchy

 [ServiceBase](_core_servicebase_.servicebase.md)

**↳ RoutingService**

## Index

### Constructors

* [constructor](_react_routingservice_.routingservice.md#constructor)

### Properties

* [router](_react_routingservice_.routingservice.md#router)

### Methods

* [getRouter](_react_routingservice_.routingservice.md#getrouter)
* [goTo](_react_routingservice_.routingservice.md#goto)
* [registerBeforeHook](_react_routingservice_.routingservice.md#registerbeforehook)
* [registerPlugin](_react_routingservice_.routingservice.md#registerplugin)
* [registerRoutes](_react_routingservice_.routingservice.md#registerroutes)
* [registerSuccessHook](_react_routingservice_.routingservice.md#registersuccesshook)
* [set404State](_react_routingservice_.routingservice.md#set404state)
* [setInitialState](_react_routingservice_.routingservice.md#setinitialstate)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RoutingService**(): [RoutingService](_react_routingservice_.routingservice.md)

*Overrides [ServiceBase](_core_servicebase_.servicebase.md).[constructor](_core_servicebase_.servicebase.md#constructor)*

*Defined in [react/RoutingService.ts:19](https://github.com/pushkar8723/sparkx/blob/f8f96d7/src/react/RoutingService.ts#L19)*

**Returns:** [RoutingService](_react_routingservice_.routingservice.md)

___

## Properties

<a id="router"></a>

### `<Private>` router

**● router**: *`UIRouterReact`*

*Defined in [react/RoutingService.ts:19](https://github.com/pushkar8723/sparkx/blob/f8f96d7/src/react/RoutingService.ts#L19)*

Router instance.

___

## Methods

<a id="getrouter"></a>

###  getRouter

▸ **getRouter**(): `UIRouterReact`

*Defined in [react/RoutingService.ts:70](https://github.com/pushkar8723/sparkx/blob/f8f96d7/src/react/RoutingService.ts#L70)*

Returns the configured router.

**Returns:** `UIRouterReact`

___
<a id="goto"></a>

###  goTo

▸ **goTo**(stateName: *`string`*, stateParams?: *`any`*): `void`

*Defined in [react/RoutingService.ts:63](https://github.com/pushkar8723/sparkx/blob/f8f96d7/src/react/RoutingService.ts#L63)*

Redirects to the given state.

**Parameters:**

| Name | Type |
| ------ | ------ |
| stateName | `string` |
| `Optional` stateParams | `any` |

**Returns:** `void`

___
<a id="registerbeforehook"></a>

###  registerBeforeHook

▸ **registerBeforeHook**(callback: *`TransitionHookFn`*): `void`

*Defined in [react/RoutingService.ts:77](https://github.com/pushkar8723/sparkx/blob/f8f96d7/src/react/RoutingService.ts#L77)*

Registers hook function which is called before state transition is started.

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | `TransitionHookFn` |

**Returns:** `void`

___
<a id="registerplugin"></a>

###  registerPlugin

▸ **registerPlugin**(plugin: *`PluginFactory`<`UIRouterPlugin`>*): `void`

*Defined in [react/RoutingService.ts:49](https://github.com/pushkar8723/sparkx/blob/f8f96d7/src/react/RoutingService.ts#L49)*

Registers a plugin

**Parameters:**

| Name | Type |
| ------ | ------ |
| plugin | `PluginFactory`<`UIRouterPlugin`> |

**Returns:** `void`

___
<a id="registerroutes"></a>

###  registerRoutes

▸ **registerRoutes**(routes: *[IRouteState](../interfaces/_core_types_.iroutestate.md)<`any`>[]*): `void`

*Defined in [react/RoutingService.ts:35](https://github.com/pushkar8723/sparkx/blob/f8f96d7/src/react/RoutingService.ts#L35)*

Registers routes for appliaction

**Parameters:**

| Name | Type |
| ------ | ------ |
| routes | [IRouteState](../interfaces/_core_types_.iroutestate.md)<`any`>[] |

**Returns:** `void`

___
<a id="registersuccesshook"></a>

###  registerSuccessHook

▸ **registerSuccessHook**(callback: *`TransitionHookFn`*): `void`

*Defined in [react/RoutingService.ts:84](https://github.com/pushkar8723/sparkx/blob/f8f96d7/src/react/RoutingService.ts#L84)*

Registers hook function which is called when state transition is success.

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | `TransitionHookFn` |

**Returns:** `void`

___
<a id="set404state"></a>

###  set404State

▸ **set404State**(state: *`string`*): `void`

*Defined in [react/RoutingService.ts:56](https://github.com/pushkar8723/sparkx/blob/f8f96d7/src/react/RoutingService.ts#L56)*

Sets fallback state for the application.

**Parameters:**

| Name | Type |
| ------ | ------ |
| state | `string` |

**Returns:** `void`

___
<a id="setinitialstate"></a>

###  setInitialState

▸ **setInitialState**(state: *`string`*): `void`

*Defined in [react/RoutingService.ts:42](https://github.com/pushkar8723/sparkx/blob/f8f96d7/src/react/RoutingService.ts#L42)*

Sets starting route of application

**Parameters:**

| Name | Type |
| ------ | ------ |
| state | `string` |

**Returns:** `void`

___

