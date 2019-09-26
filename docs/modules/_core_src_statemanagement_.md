[@sparkx/core](../README.md) > ["core/src/stateManagement"](../modules/_core_src_statemanagement_.md)

# External module: "core/src/stateManagement"

## Index

### Enumerations

* [storeType](../enums/_core_src_statemanagement_.storetype.md)

### Interfaces

* [IDispatchObj](../interfaces/_core_src_statemanagement_.idispatchobj.md)
* [IPayloadType](../interfaces/_core_src_statemanagement_.ipayloadtype.md)

### Functions

* [getScope](_core_src_statemanagement_.md#getscope)
* [mapCtrl](_core_src_statemanagement_.md#mapctrl)
* [mapPayloadToAction](_core_src_statemanagement_.md#mappayloadtoaction)
* [setGlobal](_core_src_statemanagement_.md#setglobal)
* [setScope](_core_src_statemanagement_.md#setscope)
* [updateGlobalStore](_core_src_statemanagement_.md#updateglobalstore)
* [updateScopeStore](_core_src_statemanagement_.md#updatescopestore)

---

## Functions

<a id="getscope"></a>

###  getScope

▸ **getScope**(state: *`any`*, scopeName: *`string`*): `any`

*Defined in [core/src/stateManagement.ts:127](https://github.com/pushkar8723/sparkx/blob/980f391/packages/core/src/stateManagement.ts#L127)*

Returns a scope with parent scopes attached in prototype of scope object.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| state | `any` |  \- |
| scopeName | `string` |   |

**Returns:** `any`

___
<a id="mapctrl"></a>

###  mapCtrl

▸ **mapCtrl**(controller: *`any`*): `object`

*Defined in [core/src/stateManagement.ts:108](https://github.com/pushkar8723/sparkx/blob/980f391/packages/core/src/stateManagement.ts#L108)*

Wraps all exported functions by controller to dispatch.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| controller | `any` |  \- |

**Returns:** `object`

___
<a id="mappayloadtoaction"></a>

###  mapPayloadToAction

▸ **mapPayloadToAction**(scopeName: *`string`*, payloadType: *[IPayloadType](../interfaces/_core_src_statemanagement_.ipayloadtype.md)*): `object` \| `object` \| `object`

*Defined in [core/src/stateManagement.ts:84](https://github.com/pushkar8723/sparkx/blob/980f391/packages/core/src/stateManagement.ts#L84)*

Maps payload type to action.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| scopeName | `string` |  \- |
| payloadType | [IPayloadType](../interfaces/_core_src_statemanagement_.ipayloadtype.md) |   |

**Returns:** `object` \| `object` \| `object`

___
<a id="setglobal"></a>

###  setGlobal

▸ **setGlobal**(payload: *`any`*): [IPayloadType](../interfaces/_core_src_statemanagement_.ipayloadtype.md)

*Defined in [core/src/stateManagement.ts:59](https://github.com/pushkar8723/sparkx/blob/980f391/packages/core/src/stateManagement.ts#L59)*

Function to be invoked by controllers if they want to update global store.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| payload | `any` |   |

**Returns:** [IPayloadType](../interfaces/_core_src_statemanagement_.ipayloadtype.md)

___
<a id="setscope"></a>

###  setScope

▸ **setScope**(payload: *`any`*): [IPayloadType](../interfaces/_core_src_statemanagement_.ipayloadtype.md)

*Defined in [core/src/stateManagement.ts:71](https://github.com/pushkar8723/sparkx/blob/980f391/packages/core/src/stateManagement.ts#L71)*

Function to be invoked by controllers if they want to update local scope.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| payload | `any` |   |

**Returns:** [IPayloadType](../interfaces/_core_src_statemanagement_.ipayloadtype.md)

___
<a id="updateglobalstore"></a>

###  updateGlobalStore

▸ **updateGlobalStore**(scopeName: *`string`*, payload: *`any`*): `object`

*Defined in [core/src/stateManagement.ts:14](https://github.com/pushkar8723/sparkx/blob/980f391/packages/core/src/stateManagement.ts#L14)*

Takes in payload to genrate global actions. When dispatched, this action will update the global state. It also takes in scope name which is not stored in state, however it may help in debugging which component updated the global scope in case of any conflict.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| scopeName | `string` |  \- |
| payload | `any` |   |

**Returns:** `object`

___
<a id="updatescopestore"></a>

###  updateScopeStore

▸ **updateScopeStore**(scopeName: *`string`*, payload: *`any`*): `object`

*Defined in [core/src/stateManagement.ts:29](https://github.com/pushkar8723/sparkx/blob/980f391/packages/core/src/stateManagement.ts#L29)*

Takes in scope name and payload to update the scope with given name.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| scopeName | `string` |  \- |
| payload | `any` |   |

**Returns:** `object`

___

