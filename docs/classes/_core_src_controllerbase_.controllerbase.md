[@sparkx/core](../README.md) > ["core/src/ControllerBase"](../modules/_core_src_controllerbase_.md) > [ControllerBase](../classes/_core_src_controllerbase_.controllerbase.md)

# Class: ControllerBase

Base for all controller class

## Type parameters
#### S 
#### G 
## Hierarchy

**ControllerBase**

## Index

### Constructors

* [constructor](_core_src_controllerbase_.controllerbase.md#constructor)

### Properties

* [_global](_core_src_controllerbase_.controllerbase.md#_global)
* [_scope](_core_src_controllerbase_.controllerbase.md#_scope)
* [_setGlobal](_core_src_controllerbase_.controllerbase.md#_setglobal)
* [_setScope](_core_src_controllerbase_.controllerbase.md#_setscope)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ControllerBase**(scope: *`S`*, setScope: *`function`*, global: *`G`*, setGlobal: *`function`*): [ControllerBase](_core_src_controllerbase_.controllerbase.md)

*Defined in [core/src/ControllerBase.ts:23](https://github.com/pushkar8723/sparkx/blob/980f391/packages/core/src/ControllerBase.ts#L23)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| scope | `S` |
| setScope | `function` |
| global | `G` |
| setGlobal | `function` |

**Returns:** [ControllerBase](_core_src_controllerbase_.controllerbase.md)

___

## Properties

<a id="_global"></a>

### `<Protected>` _global

**● _global**: *`G`*

*Defined in [core/src/ControllerBase.ts:8](https://github.com/pushkar8723/sparkx/blob/980f391/packages/core/src/ControllerBase.ts#L8)*

Global state.

___
<a id="_scope"></a>

### `<Protected>` _scope

**● _scope**: *`S`*

*Defined in [core/src/ControllerBase.ts:13](https://github.com/pushkar8723/sparkx/blob/980f391/packages/core/src/ControllerBase.ts#L13)*

Local state

___
<a id="_setglobal"></a>

### `<Protected>` _setGlobal

**● _setGlobal**: *`function`*

*Defined in [core/src/ControllerBase.ts:23](https://github.com/pushkar8723/sparkx/blob/980f391/packages/core/src/ControllerBase.ts#L23)*

Function to set global scope.

#### Type declaration
▸<`K`>(global: *`Pick`<`G`, `K`>*): `void`

**Type parameters:**

#### K :  `keyof G`
**Parameters:**

| Name | Type |
| ------ | ------ |
| global | `Pick`<`G`, `K`> |

**Returns:** `void`

___
<a id="_setscope"></a>

### `<Protected>` _setScope

**● _setScope**: *`function`*

*Defined in [core/src/ControllerBase.ts:18](https://github.com/pushkar8723/sparkx/blob/980f391/packages/core/src/ControllerBase.ts#L18)*

Function to set local scope.

#### Type declaration
▸<`K`>(scope: *`Pick`<`S`, `K`>*): `void`

**Type parameters:**

#### K :  `keyof S`
**Parameters:**

| Name | Type |
| ------ | ------ |
| scope | `Pick`<`S`, `K`> |

**Returns:** `void`

___

