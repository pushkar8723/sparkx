
[

core
====

](#core)

**Sparkx state management module**. This module abstracts out state management part of the application. It is a facade over immutable js and redux to provide a flux architecture with an immutable state. It exposes `createStore` and `compose` from redux library to initialize store and add middlewares (if required).

The `@sparkx/core/lib/stateManagement` module exposes various methods to fire actions that updates the global and local scope of the application. The reducers are combined and exposed from `@sparkx/core/lib/model`. All these are supposed to be abstracted out from the application developer by individual view facade module like `@sparkx/react` (for react).

It also exposes abstract implementation for controllers and services as `ControllerBase` and `ServiceBase` respectively. These are the only two entities application developer needs to know about.

[

Usage
-----

](#usage)

```typescript
import { compose, createStore } from '@sparkx/core';
import model from '@sparkx/core/lib/model';

// Creating store.
const store = createStore(
    model,
    compose.apply(this, middlewares),
);
```

## Index

### External modules

* ["core/src/ControllerBase"](modules/_core_src_controllerbase_.md)
* ["core/src/ServiceBase"](modules/_core_src_servicebase_.md)
* ["core/src/index"](modules/_core_src_index_.md)
* ["core/src/model/globalReducer"](modules/_core_src_model_globalreducer_.md)
* ["core/src/model/index"](modules/_core_src_model_index_.md)
* ["core/src/model/scopeReducer"](modules/_core_src_model_scopereducer_.md)
* ["core/src/stateManagement"](modules/_core_src_statemanagement_.md)
* ["core/src/types"](modules/_core_src_types_.md)
* ["react/src/App"](modules/_react_src_app_.md)
* ["react/src/RoutingService"](modules/_react_src_routingservice_.md)
* ["react/src/index"](modules/_react_src_index_.md)
* ["react/src/route"](modules/_react_src_route_.md)
* ["services/src/HTTPService"](modules/_services_src_httpservice_.md)
* ["services/src/index"](modules/_services_src_index_.md)

---

