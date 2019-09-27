React
=====

**Sparkx facade for React**. This helps in abstracting out state management
methods of `@sparkx/core` and routing methods of `@uirouter`. It exposes `initApp`
and `createRoute` methods along with `RoutingService` class.

It helps in defining the structure of the application and have well defined sepration
of concerns between various part of application.

## Usage

```typescript
import { initApp, createRoute, hashLocationPlugin, RoutingService } from '@sparkx/react';
import * as ReactDOM from 'react-dom';

const routingService = new RoutingService();

ReactDOM.render(
    initApp(
        () => {
            // Register plugin
            routingService.registerPlugin(hashLocationPlugin);

            // Register routes.
            routingService.registerRoutes([
                createRoute({
                    component: () => <div>Hello World</div>,
                    name: 'welcome',
                    url: '/welcome',
                }),
                createRoute({
                    component: () => <div>404 Page not Found!</div>,
                    name: '404',
                    url: '/notFound',
                })
            ]);

            // Setting starting route.
            routingService.setInitialState('welcome');

            // Setting fallback route.
            routingService.set404State('404');
        }
    ),
    document.getElementById('root')
);
```
