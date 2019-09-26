[@sparkx/core](../README.md) > ["react/src/route"](../modules/_react_src_route_.md)

# External module: "react/src/route"

## Index

### Functions

* [bindMVC](_react_src_route_.md#bindmvc)
* [createRoute](_react_src_route_.md#createroute)

---

## Functions

<a id="bindmvc"></a>

###  bindMVC

▸ **bindMVC**(component: *`ComponentType`*, scopeName: *`string`*, controller?: *`any`*): `ComponentClass`<`any`, `any`> & `object` & `object`

*Defined in [react/src/route.ts:20](https://github.com/pushkar8723/sparkx/blob/980f391/packages/react/src/route.ts#L20)*

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

▸ **createRoute**<`IRouteData`>(routeState: *`IRouteState`<`IRouteData`>*): `object`

*Defined in [react/src/route.ts:60](https://github.com/pushkar8723/sparkx/blob/980f391/packages/react/src/route.ts#L60)*

Takes in a route state and returns transformed state that can be plugged into UI router.

**Type parameters:**

#### IRouteData 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| routeState | `IRouteState`<`IRouteData`> |   |

**Returns:** `object`

___

