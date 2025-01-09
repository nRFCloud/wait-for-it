import { exponential } from "backoff";

/**
 * @module
 *
 * This module contains the function that retries a given function.
 */

/**
 * Retries the given function using a backoff algorithm.
 * It times out after 27.75 sec by default (9 attempts)
 *
 * @example Wait for a tenant to be available
 * ```ts
 * import * as wait_for_it from "@nrfcloud/wait-for-it";
 *
 * const tenant = await wait_for_it<Tenant>(() =>
 *   repo.getByUUID(
 *     e.aggregateUUID,
 *   )
 * );
 * ```
 */
export const waitForIt = <A>(
  fn: () => Promise<A>,
  retryNumber: number = 9
): Promise<A> =>
  new Promise((resolve, reject) => {
    const b = exponential({
      randomisationFactor: 0,
      initialDelay: 250,
      maxDelay: 5000,
    });
    let lastErr: Error;
    b.failAfter(retryNumber);
    b.on("ready", async () => {
      try {
        const res = await fn();
        return resolve(res);
      } catch (e) {
        lastErr = e as Error;
      }
      b.backoff();
    });
    b.on("fail", () => {
      reject(lastErr);
    });
    b.backoff();
  });
