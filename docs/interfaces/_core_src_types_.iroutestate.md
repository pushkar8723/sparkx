[Sparkx](../README.md) > ["core/src/types"](../modules/_core_src_types_.md) > [IRouteState](../interfaces/_core_src_types_.iroutestate.md)

# Interface: IRouteState

## Type parameters
#### D 
## Hierarchy

**IRouteState**

## Index

### Properties

* [component](_core_src_types_.iroutestate.md#component)
* [controller](_core_src_types_.iroutestate.md#controller)
* [data](_core_src_types_.iroutestate.md#data)
* [lazyLoad](_core_src_types_.iroutestate.md#lazyload)
* [name](_core_src_types_.iroutestate.md#name)
* [redirectTo](_core_src_types_.iroutestate.md#redirectto)
* [url](_core_src_types_.iroutestate.md#url)

---

## Properties

<a id="component"></a>

### `<Optional>` component

**● component**: *`any`*

*Defined in [core/src/types.ts:19](https://github.com/pushkar8723/sparkx/blob/54aa3d4/packages/core/src/types.ts#L19)*

Component to be rendered.

___
<a id="controller"></a>

### `<Optional>` controller

**● controller**: *[ControllerBase](../classes/_core_src_controllerbase_.controllerbase.md)<`any`, `any`>*

*Defined in [core/src/types.ts:11](https://github.com/pushkar8723/sparkx/blob/54aa3d4/packages/core/src/types.ts#L11)*

Controller for the component

___
<a id="data"></a>

### `<Optional>` data

**● data**: *`D`*

*Defined in [core/src/types.ts:15](https://github.com/pushkar8723/sparkx/blob/54aa3d4/packages/core/src/types.ts#L15)*

Route data object

___
<a id="lazyload"></a>

### `<Optional>` lazyLoad

**● lazyLoad**: *`function`*

*Defined in [core/src/types.ts:31](https://github.com/pushkar8723/sparkx/blob/54aa3d4/packages/core/src/types.ts#L31)*

Lazy loaded function

#### Type declaration
▸(): `Promise`<`any`>

**Returns:** `Promise`<`any`>

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in [core/src/types.ts:7](https://github.com/pushkar8723/sparkx/blob/54aa3d4/packages/core/src/types.ts#L7)*

Name of the route

___
<a id="redirectto"></a>

### `<Optional>` redirectTo

**● redirectTo**: *`string`*

*Defined in [core/src/types.ts:27](https://github.com/pushkar8723/sparkx/blob/54aa3d4/packages/core/src/types.ts#L27)*

Redirection State.

___
<a id="url"></a>

### `<Optional>` url

**● url**: *`string`*

*Defined in [core/src/types.ts:23](https://github.com/pushkar8723/sparkx/blob/54aa3d4/packages/core/src/types.ts#L23)*

url for the route.

___

