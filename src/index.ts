declare var __DEV__: boolean;

/**
 * Construct a new Ok result value.
 */
export const ok = <T>(value: T): Result<T> => new Result(value);

/**
 * Construct a new Err result value.
 */
export const err = <T>(error: Error | string): Result<T> => {
  if (typeof error === 'string') {
    error = new Error(error)
  }

  // @ts-ignore
  return new Result(undefined, error);
};

export class Result<T, E = Error> {
  constructor(public readonly value: T, public readonly error?: E) { }

  isOk(): boolean {
    return this.error === undefined;
  }

  isErr(): boolean {
    return !this.isOk();
  }

  static ok = ok;
  static err = err;
}

export default Result
