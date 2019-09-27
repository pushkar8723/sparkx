[Sparkx](../README.md) > ["core/src/model/globalReducer"](../modules/_core_src_model_globalreducer_.md)

# External module: "core/src/model/globalReducer"

## Index

### Enumerations

* [GlobalActions](../enums/_core_src_model_globalreducer_.globalactions.md)

### Interfaces

* [IAction](../interfaces/_core_src_model_globalreducer_.iaction.md)

### Variables

* [defaultState](_core_src_model_globalreducer_.md#defaultstate)

### Functions

* [globalReducer](_core_src_model_globalreducer_.md#globalreducer)

---

## Variables

<a id="defaultstate"></a>

### `<Const>` defaultState

**● defaultState**: *`any`* =  fromJS({})

*Defined in [core/src/model/globalReducer.ts:3](https://github.com/pushkar8723/sparkx/blob/54aa3d4/packages/core/src/model/globalReducer.ts#L3)*

___

## Functions

<a id="globalreducer"></a>

###  globalReducer

▸ **globalReducer**(state?: *`any`*, action: *[IAction](../interfaces/_core_src_model_globalreducer_.iaction.md)*): `any`

*Defined in [core/src/model/globalReducer.ts:31](https://github.com/pushkar8723/sparkx/blob/54aa3d4/packages/core/src/model/globalReducer.ts#L31)*

Reducer for global state. This state will be made available to all components.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` state | `any` |  defaultState |  \- |
| action | [IAction](../interfaces/_core_src_model_globalreducer_.iaction.md) | - |   |

**Returns:** `any`

___

