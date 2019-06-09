[sparkx](../README.md) > ["core/model/scopeReducer"](../modules/_core_model_scopereducer_.md)

# External module: "core/model/scopeReducer"

## Index

### Enumerations

* [ScopeActions](../enums/_core_model_scopereducer_.scopeactions.md)

### Interfaces

* [IAction](../interfaces/_core_model_scopereducer_.iaction.md)

### Variables

* [defaultState](_core_model_scopereducer_.md#defaultstate)

### Functions

* [scopeReducer](_core_model_scopereducer_.md#scopereducer)

---

## Variables

<a id="defaultstate"></a>

### `<Const>` defaultState

**● defaultState**: *`any`* =  fromJS({})

*Defined in [core/model/scopeReducer.ts:3](https://github.com/pushkar8723/sparkx/blob/f8f96d7/src/core/model/scopeReducer.ts#L3)*

___

## Functions

<a id="scopereducer"></a>

###  scopeReducer

▸ **scopeReducer**(state?: *`any`*, action: *[IAction](../interfaces/_core_model_scopereducer_.iaction.md)*): `any`

*Defined in [core/model/scopeReducer.ts:32](https://github.com/pushkar8723/sparkx/blob/f8f96d7/src/core/model/scopeReducer.ts#L32)*

Reducer for global state. This state will be made available to all components.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` state | `any` |  defaultState |  \- |
| action | [IAction](../interfaces/_core_model_scopereducer_.iaction.md) | - |   |

**Returns:** `any`

___

