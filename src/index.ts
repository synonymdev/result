declare var __DEV__: boolean;

export class Result<T, E> {
  constructor(public readonly value: T, public readonly error: E) { }

  isOk(): boolean {
    return this.error === undefined;
  }

  isErr(): boolean {
    return !this.isOk();
  }
}

export class Ok<T> extends Result<T, undefined>{
  constructor(value: T) {
    super(value, undefined)
  }
}

export class Err<E> extends Result<undefined, E>{
  constructor(error: E) {
    super(undefined, error)
  }
}

/**
 * Construct a new Ok result value.
 */
export const ok = <T>(value: T): Result<T, undefined> => new Ok(value);

/**
 * Construct a new Err result value.
 */
export const err = <E>(error: Error | string): Err<E> => {
  if (typeof error === 'string') {
    error = new Error(error)
  }

  // @ts-ignore
  return new Err(error);
};
