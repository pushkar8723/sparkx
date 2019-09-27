[Sparkx](../README.md) > ["services/src/HTTPService"](../modules/_services_src_httpservice_.md) > [HTTPService](../classes/_services_src_httpservice_.httpservice.md)

# Class: HTTPService

Service to manage all HTTP calls.

## Hierarchy

 `ServiceBase`

**↳ HTTPService**

## Index

### Constructors

* [constructor](_services_src_httpservice_.httpservice.md#constructor)

### Methods

* [appendHeader](_services_src_httpservice_.httpservice.md#appendheader)
* [delete](_services_src_httpservice_.httpservice.md#delete)
* [get](_services_src_httpservice_.httpservice.md#get)
* [getInterceptors](_services_src_httpservice_.httpservice.md#getinterceptors)
* [post](_services_src_httpservice_.httpservice.md#post)
* [put](_services_src_httpservice_.httpservice.md#put)
* [removeHeader](_services_src_httpservice_.httpservice.md#removeheader)
* [request](_services_src_httpservice_.httpservice.md#request)
* [setHeaders](_services_src_httpservice_.httpservice.md#setheaders)

### Object literals

* [headers](_services_src_httpservice_.httpservice.md#headers)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new HTTPService**(): [HTTPService](_services_src_httpservice_.httpservice.md)

*Inherited from ServiceBase.__constructor*

*Defined in core/lib/ServiceBase.d.ts:9*

**Returns:** [HTTPService](_services_src_httpservice_.httpservice.md)

___

## Methods

<a id="appendheader"></a>

###  appendHeader

▸ **appendHeader**(key: *`string`*, value: *`string`*): `void`

*Defined in [services/src/HTTPService.ts:33](https://github.com/pushkar8723/sparkx/blob/54aa3d4/packages/services/src/HTTPService.ts#L33)*

Adds a header to list of headers.

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | `string` |

**Returns:** `void`

___
<a id="delete"></a>

###  delete

▸ **delete**(url: *`string`*, data: *`any`*, params?: *[IQueryPrams](../interfaces/_services_src_httpservice_.iqueryprams.md)*, headers?: *[IHTTPHeaders](../interfaces/_services_src_httpservice_.ihttpheaders.md)*, customConfig?: *`any`*): `AxiosPromise`<`any`>

*Defined in [services/src/HTTPService.ts:117](https://github.com/pushkar8723/sparkx/blob/54aa3d4/packages/services/src/HTTPService.ts#L117)*

Delete request

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| data | `any` |
| `Optional` params | [IQueryPrams](../interfaces/_services_src_httpservice_.iqueryprams.md) |
| `Optional` headers | [IHTTPHeaders](../interfaces/_services_src_httpservice_.ihttpheaders.md) |
| `Optional` customConfig | `any` |

**Returns:** `AxiosPromise`<`any`>

___
<a id="get"></a>

###  get

▸ **get**(url: *`string`*, params?: *[IQueryPrams](../interfaces/_services_src_httpservice_.iqueryprams.md)*, headers?: *[IHTTPHeaders](../interfaces/_services_src_httpservice_.ihttpheaders.md)*, customConfig?: *`any`*): `AxiosPromise`<`any`>

*Defined in [services/src/HTTPService.ts:71](https://github.com/pushkar8723/sparkx/blob/54aa3d4/packages/services/src/HTTPService.ts#L71)*

Get request.

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| `Optional` params | [IQueryPrams](../interfaces/_services_src_httpservice_.iqueryprams.md) |
| `Optional` headers | [IHTTPHeaders](../interfaces/_services_src_httpservice_.ihttpheaders.md) |
| `Optional` customConfig | `any` |

**Returns:** `AxiosPromise`<`any`>

___
<a id="getinterceptors"></a>

###  getInterceptors

▸ **getInterceptors**(): `object`

*Defined in [services/src/HTTPService.ts:50](https://github.com/pushkar8723/sparkx/blob/54aa3d4/packages/services/src/HTTPService.ts#L50)*

Returns axios interceptors.

**Returns:** `object`

___
<a id="post"></a>

###  post

▸ **post**(url: *`string`*, data?: *`any`*, params?: *[IQueryPrams](../interfaces/_services_src_httpservice_.iqueryprams.md)*, headers?: *[IHTTPHeaders](../interfaces/_services_src_httpservice_.ihttpheaders.md)*, customConfig?: *`any`*): `AxiosPromise`<`any`>

*Defined in [services/src/HTTPService.ts:85](https://github.com/pushkar8723/sparkx/blob/54aa3d4/packages/services/src/HTTPService.ts#L85)*

Post request

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| `Optional` data | `any` |
| `Optional` params | [IQueryPrams](../interfaces/_services_src_httpservice_.iqueryprams.md) |
| `Optional` headers | [IHTTPHeaders](../interfaces/_services_src_httpservice_.ihttpheaders.md) |
| `Optional` customConfig | `any` |

**Returns:** `AxiosPromise`<`any`>

___
<a id="put"></a>

###  put

▸ **put**(url: *`string`*, data: *`any`*, params?: *[IQueryPrams](../interfaces/_services_src_httpservice_.iqueryprams.md)*, headers?: *[IHTTPHeaders](../interfaces/_services_src_httpservice_.ihttpheaders.md)*, customConfig?: *`any`*): `AxiosPromise`<`any`>

*Defined in [services/src/HTTPService.ts:101](https://github.com/pushkar8723/sparkx/blob/54aa3d4/packages/services/src/HTTPService.ts#L101)*

Put request

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| data | `any` |
| `Optional` params | [IQueryPrams](../interfaces/_services_src_httpservice_.iqueryprams.md) |
| `Optional` headers | [IHTTPHeaders](../interfaces/_services_src_httpservice_.ihttpheaders.md) |
| `Optional` customConfig | `any` |

**Returns:** `AxiosPromise`<`any`>

___
<a id="removeheader"></a>

###  removeHeader

▸ **removeHeader**(key: *`string`*): `void`

*Defined in [services/src/HTTPService.ts:43](https://github.com/pushkar8723/sparkx/blob/54aa3d4/packages/services/src/HTTPService.ts#L43)*

Removes the given header.

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `void`

___
<a id="request"></a>

###  request

▸ **request**(config: *`AxiosRequestConfig`*, customConfig?: *`any`*): `AxiosPromise`<`any`>

*Defined in [services/src/HTTPService.ts:60](https://github.com/pushkar8723/sparkx/blob/54aa3d4/packages/services/src/HTTPService.ts#L60)*

Generic HTTP request. This is done so that developer can use any functionality provided by axios. Here, only the set heards are spread over what was sent in config.

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | `AxiosRequestConfig` |
| `Optional` customConfig | `any` |

**Returns:** `AxiosPromise`<`any`>

___
<a id="setheaders"></a>

###  setHeaders

▸ **setHeaders**(headers: *[IHTTPHeaders](../interfaces/_services_src_httpservice_.ihttpheaders.md)*): `void`

*Defined in [services/src/HTTPService.ts:26](https://github.com/pushkar8723/sparkx/blob/54aa3d4/packages/services/src/HTTPService.ts#L26)*

Sets the headers to the given object.

**Parameters:**

| Name | Type |
| ------ | ------ |
| headers | [IHTTPHeaders](../interfaces/_services_src_httpservice_.ihttpheaders.md) |

**Returns:** `void`

___

## Object literals

<a id="headers"></a>

### `<Private>` headers

**headers**: *`object`*

*Defined in [services/src/HTTPService.ts:19](https://github.com/pushkar8723/sparkx/blob/54aa3d4/packages/services/src/HTTPService.ts#L19)*

header object to be appened to all api calls.

<a id="headers.content_type"></a>

####  content-type

**● content-type**: *`string`* = "application/json"

*Defined in [services/src/HTTPService.ts:20](https://github.com/pushkar8723/sparkx/blob/54aa3d4/packages/services/src/HTTPService.ts#L20)*

___

___

