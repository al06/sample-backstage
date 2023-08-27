import { customPlugin } from './plugin';

describe('custom', () => {
  it('should export plugin', () => {
    expect(customPlugin).toBeDefined();
  });
});
