import { Result, ok, err } from '../src/index';

describe('result check', () => {
  it('returns result', async () => {
    const func = (): Result<string> => {
      return ok('result');
    }

    const result = func();

    expect(result.isOk()).toBe(true);
    expect(result.isErr()).toBe(false);

    // @ts-ignore
    expect(result.value).toBe('result');
    // @ts-ignore
    expect(result.error).not.toBeDefined();
  });

  it('returns error', async () => {
    const func = (): Result<string> => {
      return err('failed message');
    }

    const result = func();

    expect(result.isOk()).toBe(false);
    expect(result.isErr()).toBe(true);

    // @ts-ignore
    expect(result.value).not.toBeDefined();
    // @ts-ignore
    expect(result.error).toBeDefined();
    // @ts-ignore
    expect(result.error.message).toBe('failed message');
  });
});
