core
====
**Sparkx state management module**. This module abstracts out state management part
of the application. It is a facade over immutable js and redux to provide a flux
architecture with an immutable state. It exposes `createStore` and `compose` from
redux library to initialize store and add middlewares (if required).

The `@sparkx/core/lib/stateManagement` module exposes various methods to fire actions
that updates the global and local scope of the application. The reducers are combined
and exposed from `@sparkx/core/lib/model`. All these are supposed to be abstracted out
from the application developer by individual view facade module like `@sparkx/react`
(for react).

It also exposes abstract implementation for controllers and services as `ControllerBase`
and `ServiceBase` respectively. These are the only two entities application developer
needs to know about.

## Usage
```typescript
import { compose, createStore } from '@sparkx/core';
import model from '@sparkx/core/lib/model';

// Creating store.
const store = createStore(
    model,
    compose.apply(this, middlewares),
);
```
