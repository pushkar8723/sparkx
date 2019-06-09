[sparkx](../README.md) > ["core/model/globalReducer"](../modules/_core_model_globalreducer_.md)

# External module: "core/model/globalReducer"

## Index

### Enumerations

* [GlobalActions](../enums/_core_model_globalreducer_.globalactions.md)

### Interfaces

* [IAction](../interfaces/_core_model_globalreducer_.iaction.md)

### Variables

* [defaultState](_core_model_globalreducer_.md#defaultstate)

### Functions

* [globalReducer](_core_model_globalreducer_.md#globalreducer)

---

## Variables

<a id="defaultstate"></a>

### `<Const>` defaultState

**● defaultState**: *`any`* =  fromJS({})

*Defined in [core/model/globalReducer.ts:3](https://github.com/pushkar8723/sparkx/blob/f8f96d7/src/core/model/globalReducer.ts#L3)*

___

## Functions

<a id="globalreducer"></a>

###  globalReducer

▸ **globalReducer**(state?: *`any`*, action: *[IAction](../interfaces/_core_model_globalreducer_.iaction.md)*): `any`

*Defined in [core/model/globalReducer.ts:31](https://github.com/pushkar8723/sparkx/blob/f8f96d7/src/core/model/globalReducer.ts#L31)*

Reducer for global state. This state will be made available to all components.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` state | `any` |  defaultState |  \- |
| action | [IAction](../interfaces/_core_model_globalreducer_.iaction.md) | - |   |

**Returns:** `any`

___

