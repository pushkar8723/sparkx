import { ServiceBase } from '../../packages/core/src';

/**
 * Dummy Service
 */
class TestService extends ServiceBase {
    /**
     * Dummy Method
     */
    public dummyMethod = () => {
        return 0;
    }
}

describe('Test Serivce Base', () => {

    it('Test Singleton Logic', () => {
        const service1 = new TestService();
        const service2 = new TestService();
        expect(service1).toStrictEqual(service2);
    });
});
