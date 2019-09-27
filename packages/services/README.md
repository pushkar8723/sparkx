Services
========

**Sparkx services module**. A module to contain various services to help in
application development. Each service is meant to be independent of each other
but can also be used together.

## Usage

```typescript
import { HTTPService } from '@sparkx/services';

const httpService = new HTTPService();
httpService.get('/my/api/endpoint').then(resp => console.log(resp.data));
```
