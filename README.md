Sparkx :sparkles:
=================
[![Build Status](https://travis-ci.org/pushkar8723/sparkx.svg?branch=master)](https://travis-ci.org/pushkar8723/sparkx)
[![Coverage Status](https://coveralls.io/repos/github/pushkar8723/sparkx/badge.svg?branch=master)](https://coveralls.io/github/pushkar8723/sparkx?branch=master)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)
[![npm version](https://badge.fury.io/js/%40sparkx%2Freact.svg)](https://badge.fury.io/js/%40sparkx%2Freact)
![Minifized Size](https://badgen.net/bundlephobia/min/@sparkx/react)
![Gzipped Size](https://badgen.net/bundlephobia/minzip/@sparkx/react)

MVC framework with flux implementation for state management.

Today a frontend developer has to make a very difficult choice before starting any project, i.e., to have an MVC framework or go with flux pattern. MVC brings a very well defined separation of concerns to the table whereas flux brings predictability which might help when the application grows to be a monolith, but adds the amount of boilerplate code that needs to be written for implementing a feature. Making application development slow. This only deteriorates with time.

This tradeoff between predictability and time for development is what sparkx tries to solve. By combining flux design pattern for state management with MVC structure, we get a framework with well-defined separation of concerns with all the features of flux like traceability and time travel for easy debug.

### Features
- [x] Application State management
- [x] Immutable state
- [x] Hierarchical state
- [x] Routing with nested routes, transition hooks and lazy load
- [x] Support for hash and browser history api routing
- [x] Typed
- [x] Sigleton services
- [x] Support for React
- [ ] Support for Preact
- [ ] Support for Vue
- [ ] Support for lit-element

### Gettting Started

All you need to keep in mind while writing an application using sparkx is that there are two scopes.
- Global: This state is available to every view and controller and can be used to save information required throughout the application like user context and metadata.
- Scope: This part of the state is specific to the view and controller. It is automatically cleared when the user moves to another state.

##### Initializing App

To initialize an app, `initApp` function needs to be called. It takes a callback function as an argument. It exposes a setGlobal function as an argument to the given callback function. `setGlobal` can be used to initialize (if required) global scope with some initial value.

```TypeScript
import routes from 'config/routes';
import * as ReactDOM from 'react-dom';
import { initApp, pushStateLocationPlugin, RoutingService } from '@sparkx/react';

ReactDOM.render(
    initApp<IGlobal>(
        (setGlobal) => {
            // Register plugin
            routingService.registerPlugin(pushStateLocationPlugin);

            // Register routes.
            routingService.registerRoutes(routes);

            // Setting starting route.
            routingService.setInitialState('welcome');

            // Setting fallback route.
            routingService.set404State('404');
        }),
    document.getElementById('root'),
);
```

##### Routes Configuration

As evident by the code snippet above, we also need to configure application routes while initializing the application. For this, we use `RoutingService` (Detailed docs available [here](./docs/classes/_react_routingservice_.routingservice.md)). To create each route we need to call `createRoute` function as shown below. The `createRoute` method and `RoutingService` internally uses [UI-Router-React](https://github.com/ui-router/react) for creating and managing routes of the application.

```TypeScript
import { createRoute } from '@sparkx/react';
import { Error404 } from 'views/Error';
import { Welcome, WelcomeCtrl } from 'views/Welcome';

/**
 * This is the 'welcome' state.  It is the default state (as defined by app.js) if no other state
 * can be matched to the URL.
 */
const welcomeState = createRoute({
    component: Welcome,
    controller: WelcomeCtrl,
    name: 'welcome',
    url: '/welcome',
});

/**
 * Error state. If the user is routed to an unregister route,
 * then the usere is redirected to this page.
 */
const errorState = createRoute({
    component: Error404,
    name: '404',
    url: '/notFound',
});

/**
 * This is just a place holder for posts route.
 * It will be lazy loaded when user navigates to any posts route.
 */
const booksFutureState = createRoute({
    lazyLoad: () => import('views/Books'),
    name: 'books.**',
    url: '/books',
});

export default [welcomeState, booksFutureState, errorState];
```

##### Creating a Controller

Creating a controller for a view is optional. To create a controller, the class must extend `ControllerBase` class (Detailed docs available [here](./docs/classes/_core_controllerbase_.controllerbase.md)). Each controller will be injected with 4 private members as described below:
- `this._scope`: Local scope of the view and controller.
- `this._setScope`: Method to update the local scope. This works similar to `setState` function in react. The object provided as an argument to this method will be spread over the previous state. The initial state is an empty object `{}`.
- `this._global`: The global scope of the application.
- `this._setGlobal`: Method to update the global scope.
All public methods in controllers are exposed as props in react component (view of the application). Like in example below, `login` method is exposed in react component as prop.

```TypeScript
import { ControllerBase } from '@sparkx/core';
import { RoutingService } from '@sparkx/react';

/**
 * Welcome Controller
 */
class WelcomeCtrl extends ControllerBase<any, any> {
    /**
     * Routing Service
     */
    private _routingService: RoutingService = new RoutingService();

    /**
     * Logs in the user.
     */
    public login = (response: any) => {
        this._routingService.goTo('books');
        this._setGlobal({
            auth: response.profileObj,
        });
    }
}

export default WelcomeCtrl;
```

##### Creating a Service

A service can be created for any application logic which spreads across views. A service can be created simply by extending `ServiceBase` class (Detailed docs available [here](./docs/classes/_core_servicebase_.servicebase.md)). `HTTPService` is available in sparkx which helps in managing api calls (Detailed docs available [here](./docs/classes/_services_httpservice_.httpservice.md)). `HTTPService` internally uses [axios](https://github.com/axios/axios) to make requests. Extending `ServiceBase` class ensures that the service is a singleton.

```TypeScript
import { ServiceBase } from '@sparkx/core';
import { HTTPService, AxiosPromise } from '@sparkx/services';

/**
 * Service for Google Books apis.
 */
class GoogleBooksService extends ServiceBase {
    /**
     * Google Books Endpoint for apis.
     */
    private endpoint = 'https://www.googleapis.com/books/v1';

    /**
     * Reference for HTTP service.
     */
    private httpService = new HTTPService();

    /**
     * API to search for book by name.
     */
    public searchBooks(bookName: string, start: number = 0, items: number = 20)
    : AxiosPromise<IBookList> {
        return this.httpService.get(`${this.endpoint}/volumes`, {
            maxResults: items.toString(),
            q: bookName,
            startIndex: start.toString(),
        });
    }

    /**
     * API to get book by ID
     */
    public getBook(id: string, errorHandled?: boolean): AxiosPromise<IBookDetail> {
        return this.httpService.get(`${this.endpoint}/volumes/${id}`, null, null, { errorHandled });
    }
}

export default GoogleBooksService;
```

### Demo Application
React: [https://github.com/pushkar8723/react-boilerplate](https://github.com/pushkar8723/react-boilerplate)

##### [MIT License](./LICENSE)