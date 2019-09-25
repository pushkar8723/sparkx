import { fromJS } from '../../../packages/core/node_modules/immutable';
import model from '../../../packages/core/src/model';

describe('Test Model Index', () => {

    it('Test combine reducer', () => {
        expect(model(undefined, { type: '@@INIT' })).toStrictEqual({
            global: fromJS({}),
            scopes: fromJS({}),
        });
    });
});
