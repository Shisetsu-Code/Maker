/**
 * classic-lobby / demo-services.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
let refreshDemo, createDemoRouter;
function createUnavailableComponent() {
  return function () {
    return null;
  };
}
function createDemoDatabase() {
  let e = {
    select() {
      return e;
    },
    eq() {
      return e;
    },
    async maybeSingle() {
      return {
        data: {
          balance_cents: 1105200,
        },
        error: null,
      };
    },
  };
  return {
    from() {
      return e;
    },
    auth: {
      signOut: async () => ({
        error: null,
      }),
      getSession: async () => ({
        data: {
          session: null,
        },
      }),
      signInWithPassword: async () => ({
        error: {
          message: `demo`,
        },
      }),
      signUp: async () => ({
        data: null,
        error: {
          message: `demo`,
        },
      }),
      resetPasswordForEmail: async () => ({
        error: {
          message: `demo`,
        },
      }),
      signInWithOAuth: async () => ({
        error: {
          message: `demo`,
        },
      }),
    },
  };
}
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function initializeDemoServices() {
  refreshDemo = () => {
    let e = globalThis.__demoRefresh;
    typeof e == `function` && e();
  };
  createDemoRouter = () => ({
    refresh: refreshDemo,
    push() {},
    replace() {},
    back() {},
    prefetch() {},
  });
}
export {
  createDemoRouter,
  createUnavailableComponent,
  createDemoDatabase,
  initializeDemoServices,
};
