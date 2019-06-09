[sparkx](../README.md) > ["react/route"](../modules/_react_route_.md)

# External module: "react/route"

## Index

### Functions

* [bindMVC](_react_route_.md#bindmvc)
* [createRoute](_react_route_.md#createroute)

---

## Functions

<a id="bindmvc"></a>

###  bindMVC

▸ **bindMVC**(component: *`ComponentType`*, scopeName: *`string`*, controller?: *`any`*): `ComponentClass`<`any`, `any`> & `object` & `object`

*Defined in [react/route.ts:20](https://github.com/pushkar8723/sparkx/blob/f8f96d7/src/react/route.ts#L20)*

Binds Model in Redux to component and controller.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| component | `ComponentType` |  \- |
| scopeName | `string` |  \- |
| `Optional` controller | `any` |   |

**Returns:** `ComponentClass`<`any`, `any`> & `object` & `object`

___
<a id="createroute"></a>

###  createRoute

▸ **createRoute**<`IRouteData`>(routeState: *[IRouteState](../interfaces/_core_types_.iroutestate.md)<`IRouteData`>*): `object`

*Defined in [react/route.ts:60](https://github.com/pushkar8723/sparkx/blob/f8f96d7/src/react/route.ts#L60)*

Takes in a route state and returns transformed state that can be plugged into UI router.

**Type parameters:**

#### IRouteData 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| routeState | [IRouteState](../interfaces/_core_types_.iroutestate.md)<`IRouteData`> |   |

**Returns:** `object`

___

