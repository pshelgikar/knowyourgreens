// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1j6wU":[function(require,module,exports) {

var Refresh = require('react-refresh/runtime');

Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
  return function(type) {
    return type;
  };
};
},{"react-refresh/runtime":"7KW5U"}],"7KW5U":[function(require,module,exports) {
"use strict";
if ("development" === 'production') {
  module.exports = require('./cjs/react-refresh-runtime.production.min.js');
} else {
  module.exports = require('./cjs/react-refresh-runtime.development.js');
}

},{"./cjs/react-refresh-runtime.development.js":"2Soh3"}],"2Soh3":[function(require,module,exports) {
/** @license React v0.9.0
* react-refresh-runtime.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
"use strict";
if ("development" !== "production") {
  (function () {
    "use strict";
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 0xeac7;
    var REACT_PORTAL_TYPE = 0xeaca;
    var REACT_FRAGMENT_TYPE = 0xeacb;
    var REACT_STRICT_MODE_TYPE = 0xeacc;
    var REACT_PROFILER_TYPE = 0xead2;
    var REACT_PROVIDER_TYPE = 0xeacd;
    var REACT_CONTEXT_TYPE = 0xeace;
    var REACT_FORWARD_REF_TYPE = 0xead0;
    var REACT_SUSPENSE_TYPE = 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = 0xead8;
    var REACT_MEMO_TYPE = 0xead3;
    var REACT_LAZY_TYPE = 0xead4;
    var REACT_BLOCK_TYPE = 0xead9;
    var REACT_SERVER_BLOCK_TYPE = 0xeada;
    var REACT_FUNDAMENTAL_TYPE = 0xead5;
    var REACT_SCOPE_TYPE = 0xead7;
    var REACT_OPAQUE_ID_TYPE = 0xeae0;
    var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
    var REACT_OFFSCREEN_TYPE = 0xeae2;
    var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
    if (typeof Symbol === 'function' && Symbol.for) {
      var symbolFor = Symbol.for;
      REACT_ELEMENT_TYPE = symbolFor('react.element');
      REACT_PORTAL_TYPE = symbolFor('react.portal');
      REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
      REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
      REACT_PROFILER_TYPE = symbolFor('react.profiler');
      REACT_PROVIDER_TYPE = symbolFor('react.provider');
      REACT_CONTEXT_TYPE = symbolFor('react.context');
      REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
      REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
      REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
      REACT_MEMO_TYPE = symbolFor('react.memo');
      REACT_LAZY_TYPE = symbolFor('react.lazy');
      REACT_BLOCK_TYPE = symbolFor('react.block');
      REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
      REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
      REACT_SCOPE_TYPE = symbolFor('react.scope');
      REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
      REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
      REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
      REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
    // We never remove these associations.
    // It's OK to reference families, but use WeakMap/Set for types.
    var allFamiliesByID = new Map();
    var allFamiliesByType = new PossiblyWeakMap();
    var allSignaturesByType = new PossiblyWeakMap();
    // This WeakMap is read by React, so we only put families
    // that have actually been edited here. This keeps checks fast.
    // $FlowIssue
    var updatedFamiliesByType = new PossiblyWeakMap();
    // This is cleared on every performReactRefresh() call.
    // It is an array of [Family, NextType] tuples.
    var pendingUpdates = [];
    // This is injected by the renderer via DevTools global hook.
    var helpersByRendererID = new Map();
    var helpersByRoot = new Map();
    // We keep track of mounted roots so we can schedule updates.
    var mountedRoots = new Set();
    // If a root captures an error, we remember it so we can retry on edit.
    var failedRoots = new Set();
    // In environments that support WeakMap, we also remember the last element for every root.
    // It needs to be weak because we do this even for roots that failed to mount.
    // If there is no WeakMap, we won't attempt to do retrying.
    // $FlowIssue
    var rootElements = // $FlowIssue
    typeof WeakMap === 'function' ? new WeakMap() : null;
    var isPerformingRefresh = false;
    function computeFullKey(signature) {
      if (signature.fullKey !== null) {
        return signature.fullKey;
      }
      var fullKey = signature.ownKey;
      var hooks;
      try {
        hooks = signature.getCustomHooks();
      } catch (err) {
        // This can happen in an edge case, e.g. if expression like Foo.useSomething
        // depends on Foo which is lazily initialized during rendering.
        // In that case just assume we'll have to remount.
        signature.forceReset = true;
        signature.fullKey = fullKey;
        return fullKey;
      }
      for (var i = 0; i < hooks.length; i++) {
        var hook = hooks[i];
        if (typeof hook !== 'function') {
          // Something's wrong. Assume we need to remount.
          signature.forceReset = true;
          signature.fullKey = fullKey;
          return fullKey;
        }
        var nestedHookSignature = allSignaturesByType.get(hook);
        if (nestedHookSignature === undefined) {
          // No signature means Hook wasn't in the source code, e.g. in a library.
          // We'll skip it because we can assume it won't change during this session.
          continue;
        }
        var nestedHookKey = computeFullKey(nestedHookSignature);
        if (nestedHookSignature.forceReset) {
          signature.forceReset = true;
        }
        fullKey += '\n---\n' + nestedHookKey;
      }
      signature.fullKey = fullKey;
      return fullKey;
    }
    function haveEqualSignatures(prevType, nextType) {
      var prevSignature = allSignaturesByType.get(prevType);
      var nextSignature = allSignaturesByType.get(nextType);
      if (prevSignature === undefined && nextSignature === undefined) {
        return true;
      }
      if (prevSignature === undefined || nextSignature === undefined) {
        return false;
      }
      if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) {
        return false;
      }
      if (nextSignature.forceReset) {
        return false;
      }
      return true;
    }
    function isReactClass(type) {
      return type.prototype && type.prototype.isReactComponent;
    }
    function canPreserveStateBetween(prevType, nextType) {
      if (isReactClass(prevType) || isReactClass(nextType)) {
        return false;
      }
      if (haveEqualSignatures(prevType, nextType)) {
        return true;
      }
      return false;
    }
    function resolveFamily(type) {
      // Only check updated types to keep lookups fast.
      return updatedFamiliesByType.get(type);
    }
    // If we didn't care about IE11, we could use new Map/Set(iterable).
    function cloneMap(map) {
      var clone = new Map();
      map.forEach(function (value, key) {
        clone.set(key, value);
      });
      return clone;
    }
    function cloneSet(set) {
      var clone = new Set();
      set.forEach(function (value) {
        clone.add(value);
      });
      return clone;
    }
    function performReactRefresh() {
      if (pendingUpdates.length === 0) {
        return null;
      }
      if (isPerformingRefresh) {
        return null;
      }
      isPerformingRefresh = true;
      try {
        var staleFamilies = new Set();
        var updatedFamilies = new Set();
        var updates = pendingUpdates;
        pendingUpdates = [];
        updates.forEach(function (_ref) {
          var family = _ref[0], nextType = _ref[1];
          // Now that we got a real edit, we can create associations
          // that will be read by the React reconciler.
          var prevType = family.current;
          updatedFamiliesByType.set(prevType, family);
          updatedFamiliesByType.set(nextType, family);
          family.current = nextType;
          // Determine whether this should be a re-render or a re-mount.
          if (canPreserveStateBetween(prevType, nextType)) {
            updatedFamilies.add(family);
          } else {
            staleFamilies.add(family);
          }
        });
        // TODO: rename these fields to something more meaningful.
        var update = {
          updatedFamilies: updatedFamilies,
          // Families that will re-render preserving state
          staleFamilies: staleFamilies
        };
        helpersByRendererID.forEach(function (helpers) {
          // Even if there are no roots, set the handler on first update.
          // This ensures that if *new* roots are mounted, they'll use the resolve handler.
          helpers.setRefreshHandler(resolveFamily);
        });
        var didError = false;
        var firstError = null;
        // We snapshot maps and sets that are mutated during commits.
        // If we don't do this, there is a risk they will be mutated while
        // we iterate over them. For example, trying to recover a failed root
        // may cause another root to be added to the failed list -- an infinite loop.
        var failedRootsSnapshot = cloneSet(failedRoots);
        var mountedRootsSnapshot = cloneSet(mountedRoots);
        var helpersByRootSnapshot = cloneMap(helpersByRoot);
        failedRootsSnapshot.forEach(function (root) {
          var helpers = helpersByRootSnapshot.get(root);
          if (helpers === undefined) {
            throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
          }
          if (!failedRoots.has(root)) {}
          if (rootElements === null) {
            return;
          }
          if (!rootElements.has(root)) {
            return;
          }
          var element = rootElements.get(root);
          try {
            helpers.scheduleRoot(root, element);
          } catch (err) {
            if (!didError) {
              didError = true;
              firstError = err;
            }
          }
        });
        mountedRootsSnapshot.forEach(function (root) {
          var helpers = helpersByRootSnapshot.get(root);
          if (helpers === undefined) {
            throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
          }
          if (!mountedRoots.has(root)) {}
          try {
            helpers.scheduleRefresh(root, update);
          } catch (err) {
            if (!didError) {
              didError = true;
              firstError = err;
            }
          }
        });
        if (didError) {
          throw firstError;
        }
        return update;
      } finally {
        isPerformingRefresh = false;
      }
    }
    function register(type, id) {
      {
        if (type === null) {
          return;
        }
        if (typeof type !== 'function' && typeof type !== 'object') {
          return;
        }
        // This can happen in an edge case, e.g. if we register
        // return value of a HOC but it returns a cached component.
        // Ignore anything but the first registration for each type.
        if (allFamiliesByType.has(type)) {
          return;
        }
        // Create family or remember to update it.
        // None of this bookkeeping affects reconciliation
        // until the first performReactRefresh() call above.
        var family = allFamiliesByID.get(id);
        if (family === undefined) {
          family = {
            current: type
          };
          allFamiliesByID.set(id, family);
        } else {
          pendingUpdates.push([family, type]);
        }
        allFamiliesByType.set(type, family);
        // Visit inner types because we might not have registered them.
        if (typeof type === 'object' && type !== null) {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              register(type.render, id + '$render');
              break;
            case REACT_MEMO_TYPE:
              register(type.type, id + '$type');
              break;
          }
        }
      }
    }
    function setSignature(type, key) {
      var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;
      {
        allSignaturesByType.set(type, {
          forceReset: forceReset,
          ownKey: key,
          fullKey: null,
          getCustomHooks: getCustomHooks || (function () {
            return [];
          })
        });
      }
    }
    // This is lazily called during first render for a type.
    // It captures Hook list at that time so inline requires don't break comparisons.
    function collectCustomHooksForSignature(type) {
      {
        var signature = allSignaturesByType.get(type);
        if (signature !== undefined) {
          computeFullKey(signature);
        }
      }
    }
    function getFamilyByID(id) {
      {
        return allFamiliesByID.get(id);
      }
    }
    function getFamilyByType(type) {
      {
        return allFamiliesByType.get(type);
      }
    }
    function findAffectedHostInstances(families) {
      {
        var affectedInstances = new Set();
        mountedRoots.forEach(function (root) {
          var helpers = helpersByRoot.get(root);
          if (helpers === undefined) {
            throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
          }
          var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
          instancesForRoot.forEach(function (inst) {
            affectedInstances.add(inst);
          });
        });
        return affectedInstances;
      }
    }
    function injectIntoGlobalHook(globalObject) {
      {
        // For React Native, the global hook will be set up by require('react-devtools-core').
        // That code will run before us. So we need to monkeypatch functions on existing hook.
        // For React Web, the global hook will be set up by the extension.
        // This will also run before us.
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook === undefined) {
          // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
          // Note that in this case it's important that renderer code runs *after* this method call.
          // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
          var nextID = 0;
          globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
            renderers: new Map(),
            supportsFiber: true,
            inject: function (injected) {
              return nextID++;
            },
            onScheduleFiberRoot: function (id, root, children) {},
            onCommitFiberRoot: function (id, root, maybePriorityLevel, didError) {},
            onCommitFiberUnmount: function () {}
          };
        }
        // Here, we just want to get a reference to scheduleRefresh.
        var oldInject = hook.inject;
        hook.inject = function (injected) {
          var id = oldInject.apply(this, arguments);
          if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {
            // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
          }
          return id;
        };
        // Do the same for any already injected roots.
        // This is useful if ReactDOM has already been initialized.
        // https://github.com/facebook/react/issues/17626
        hook.renderers.forEach(function (injected, id) {
          if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {
            // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
          }
        });
        // We also want to track currently mounted roots.
        var oldOnCommitFiberRoot = hook.onCommitFiberRoot;
        var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || (function () {});
        hook.onScheduleFiberRoot = function (id, root, children) {
          if (!isPerformingRefresh) {
            // If it was intentionally scheduled, don't attempt to restore.
            // This includes intentionally scheduled unmounts.
            failedRoots.delete(root);
            if (rootElements !== null) {
              rootElements.set(root, children);
            }
          }
          return oldOnScheduleFiberRoot.apply(this, arguments);
        };
        hook.onCommitFiberRoot = function (id, root, maybePriorityLevel, didError) {
          var helpers = helpersByRendererID.get(id);
          if (helpers === undefined) {
            return;
          }
          helpersByRoot.set(root, helpers);
          var current = root.current;
          var alternate = current.alternate;
          // We need to determine whether this root has just (un)mounted.
          // This logic is copy-pasted from similar logic in the DevTools backend.
          // If this breaks with some refactoring, you'll want to update DevTools too.
          if (alternate !== null) {
            var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
            var isMounted = current.memoizedState != null && current.memoizedState.element != null;
            if (!wasMounted && isMounted) {
              // Mount a new root.
              mountedRoots.add(root);
              failedRoots.delete(root);
            } else if (wasMounted && isMounted) ; else if (wasMounted && !isMounted) {
              // Unmount an existing root.
              mountedRoots.delete(root);
              if (didError) {
                // We'll remount it on future edits.
                failedRoots.add(root);
              } else {
                helpersByRoot.delete(root);
              }
            } else if (!wasMounted && !isMounted) {
              if (didError) {
                // We'll remount it on future edits.
                failedRoots.add(root);
              }
            }
          } else {
            // Mount a new root.
            mountedRoots.add(root);
          }
          return oldOnCommitFiberRoot.apply(this, arguments);
        };
      }
    }
    function hasUnrecoverableErrors() {
      // TODO: delete this after removing dependency in RN.
      return false;
    }
    // Exposed for testing.
    function _getMountedRootCount() {
      {
        return mountedRoots.size;
      }
    }
    // This is a wrapper over more primitive functions for setting signature.
    // Signatures let us decide whether the Hook order has changed on refresh.
    // 
    // This function is intended to be used as a transform target, e.g.:
    // var _s = createSignatureFunctionForTransform()
    // 
    // function Hello() {
    // const [foo, setFoo] = useState(0);
    // const value = useCustomHook();
    // _s(); /* Second call triggers collecting the custom Hook list.
    // * This doesn't happen during the module evaluation because we
    // * don't want to change the module order with inline requires.
    // * Next calls are noops. */
    // return <h1>Hi</h1>;
    // }
    // 
    // /* First call specifies the signature: */
    // _s(
    // Hello,
    // 'useState{[foo, setFoo]}(0)',
    // () => [useCustomHook], /* Lazy to avoid triggering inline requires */
    // );
    function createSignatureFunctionForTransform() {
      {
        // We'll fill in the signature in two steps.
        // First, we'll know the signature itself. This happens outside the component.
        // Then, we'll know the references to custom Hooks. This happens inside the component.
        // After that, the returned function will be a fast path no-op.
        var status = 'needsSignature';
        var savedType;
        var hasCustomHooks;
        return function (type, key, forceReset, getCustomHooks) {
          switch (status) {
            case 'needsSignature':
              if (type !== undefined) {
                // If we received an argument, this is the initial registration call.
                savedType = type;
                hasCustomHooks = typeof getCustomHooks === 'function';
                setSignature(type, key, forceReset, getCustomHooks);
                // The next call we expect is from inside a function, to fill in the custom Hooks.
                status = 'needsCustomHooks';
              }
              break;
            case 'needsCustomHooks':
              if (hasCustomHooks) {
                collectCustomHooksForSignature(savedType);
              }
              status = 'resolved';
              break;
          }
          return type;
        };
      }
    }
    function isLikelyComponentType(type) {
      {
        switch (typeof type) {
          case 'function':
            {
              // First, deal with classes.
              if (type.prototype != null) {
                if (type.prototype.isReactComponent) {
                  // React class.
                  return true;
                }
                var ownNames = Object.getOwnPropertyNames(type.prototype);
                if (ownNames.length > 1 || ownNames[0] !== 'constructor') {
                  // This looks like a class.
                  return false;
                }
                // eslint-disable-next-line no-proto
                if (type.prototype.__proto__ !== Object.prototype) {
                  // It has a superclass.
                  return false;
                }
              }
              // For plain functions and arrows, use name as a heuristic.
              var name = type.name || type.displayName;
              return typeof name === 'string' && (/^[A-Z]/).test(name);
            }
          case 'object':
            {
              if (type != null) {
                switch (type.$$typeof) {
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_MEMO_TYPE:
                    // Definitely React components.
                    return true;
                  default:
                    return false;
                }
              }
              return false;
            }
          default:
            {
              return false;
            }
        }
      }
    }
    exports._getMountedRootCount = _getMountedRootCount;
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
    exports.findAffectedHostInstances = findAffectedHostInstances;
    exports.getFamilyByID = getFamilyByID;
    exports.getFamilyByType = getFamilyByType;
    exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
    exports.injectIntoGlobalHook = injectIntoGlobalHook;
    exports.isLikelyComponentType = isLikelyComponentType;
    exports.performReactRefresh = performReactRefresh;
    exports.register = register;
    exports.setSignature = setSignature;
  })();
}

},{}],"3zJWr":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "c1720d587a2d1aeb2dacfe3e87defcd7";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"38wmO":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _componentsHomepage = require('./components/Homepage');
var _componentsHomepageDefault = _parcelHelpers.interopDefault(_componentsHomepage);
var _componentsSearchBar = require('./components/SearchBar');
var _componentsSearchBarDefault = _parcelHelpers.interopDefault(_componentsSearchBar);
var _componentsLogin = require('./components/Login');
var _componentsLoginDefault = _parcelHelpers.interopDefault(_componentsLogin);
var _componentsSignUp = require('./components/SignUp');
var _componentsSignUpDefault = _parcelHelpers.interopDefault(_componentsSignUp);
var _componentsFavorites = require('./components/Favorites');
var _componentsFavoritesDefault = _parcelHelpers.interopDefault(_componentsFavorites);
var _componentsNav = require('./components/Nav');
var _componentsNavDefault = _parcelHelpers.interopDefault(_componentsNav);
var _componentsAllPlants = require('./components/AllPlants');
var _componentsAllPlantsDefault = _parcelHelpers.interopDefault(_componentsAllPlants);
var _componentsAllVarietals = require('./components/AllVarietals');
var _componentsAllVarietalsDefault = _parcelHelpers.interopDefault(_componentsAllVarietals);
var _s2 = $RefreshSig$();
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function App() {
  _s2();
  // const [searchTerm, setSearchTerm] = React.useState({});
  var _React$useState = React.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), user = _React$useState2[0], setUser = _React$useState2[1];
  var _React$useState3 = React.useState([]), _React$useState4 = _slicedToArray(_React$useState3, 2), isValid = _React$useState4[0], setValid = _React$useState4[1];
  var _React$useState5 = React.useState([]), _React$useState6 = _slicedToArray(_React$useState5, 2), isNewUser = _React$useState6[0], setNewUser = _React$useState6[1];
  var history = ReactRouterDOM.useHistory();
  var _React$useState7 = React.useState([]), _React$useState8 = _slicedToArray(_React$useState7, 2), favorites = _React$useState8[0], setFavorites = _React$useState8[1];
  var _ReactRouterDOM$useLo = ReactRouterDOM.useLocation(), pathname = _ReactRouterDOM$useLo.pathname;
  var onLogin = function onLogin(username, password) {
    fetch('/api/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': username,
        'password': password
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data.isLoggedIn == false) {
        setValid(false);
        setUser(false);
      } else {
        setValid(true);
        setUser(true);
        setFavorites(favorites);
        history.push('/');
      }
    });
  };
  var onLogout = function onLogout() {
    fetch('/api/logout', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function () {
      console.log('Logout successful!');
      setUser(false);
      setValid([]);
      history.push('/');
    });
  };
  var onCreateUser = function onCreateUser(username, password, name) {
    fetch('/api/signup', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'username': username,
        'password': password
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data.isUser == true) {
        setNewUser(false);
      } else {
        setNewUser(true);
        setUser(true);
        history.push('/');
      }
    });
  };
  var onAddToFavorites = function onAddToFavorites(name) {
    fetch('/api/add-favorites', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'plant': name
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      setFavorites(function (favs) {
        return [].concat(_toConsumableArray(favs), [data]);
      });
    });
  };
  var onRemoveFromFavorites = function onRemoveFromFavorites(name) {
    var updatedFavorites = favorites.filter(function (fav) {
      return fav.name != name;
    });
    // select only where the condition is true
    setFavorites(updatedFavorites);
    fetch('/api/remove-favorite', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'plant': name
      })
    });
  };
  React.useEffect(function () {
    if (user) {
      fetch('/api/show-favorites', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        setFavorites(data);
      });
    }
  }, [user]);
  return (
    /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "App"
    }, /*#__PURE__*/React.createElement(_componentsNavDefault.default, {
      isLoggedIn: user,
      logUserOut: onLogout
    }), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
      exact: true,
      path: "/"
    }, /*#__PURE__*/React.createElement(_componentsHomepageDefault.default, {
      isLoggedIn: user
    }), /*#__PURE__*/React.createElement(_componentsSearchBarDefault.default, null)), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
      exact: true,
      path: "/all-plants"
    }, /*#__PURE__*/React.createElement(_componentsAllPlantsDefault.default, {
      isLoggedIn: user,
      favorites: favorites,
      onAddToFavorites: onAddToFavorites,
      onRemoveFromFavorites: onRemoveFromFavorites
    })), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
      exact: true,
      path: "/plants/:plantName"
    }, /*#__PURE__*/React.createElement(_componentsAllVarietalsDefault.default, null)), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
      exact: true,
      path: "/sign-up"
    }, /*#__PURE__*/React.createElement(_componentsSignUpDefault.default, {
      setUser: onCreateUser,
      isNewUser: isNewUser
    })), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
      exact: true,
      path: "/login"
    }, /*#__PURE__*/React.createElement(_componentsLoginDefault.default, {
      setUser: onLogin,
      isValid: isValid
    })), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
      exact: true,
      path: "/favorites"
    }, user ? /*#__PURE__*/React.createElement(_componentsFavoritesDefault.default, {
      isLoggedIn: user,
      favorites: favorites,
      onAddToFavorites: onAddToFavorites,
      onRemoveFromFavorites: onRemoveFromFavorites
    }) : /*#__PURE__*/React.createElement(ReactRouterDOM.Redirect, {
      to: "/login"
    })), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
      exact: true,
      path: "/logout"
    }, /*#__PURE__*/React.createElement(_componentsHomepageDefault.default, {
      isLoggedIn: user
    }))))
  );
}
exports.default = App;
_s2(App, "kPj+Z/uAx6w517LD62IicjpKZIw=", true);
_c = App;
ReactDOM.render(/*#__PURE__*/React.createElement(ReactRouterDOM.BrowserRouter, null, /*#__PURE__*/React.createElement(App, null)), document.querySelector('#root'));
var _c;
$RefreshReg$(_c, "App");

},{"./components/Homepage":"51tjO","./components/SearchBar":"7voIQ","./components/Login":"6Fq5q","./components/SignUp":"2JOZu","./components/Favorites":"1DrOW","./components/Nav":"aeZf1","./components/AllPlants":"6WFQY","./components/AllVarietals":"4La7Z","@parcel/transformer-js/lib/esmodule-helpers.js":"3tkE2"}],"51tjO":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
function Homepage(props) {
  var isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return (
      /*#__PURE__*/React.createElement("div", {
        className: "pageContents"
      }, /*#__PURE__*/React.createElement("h1", null, "Welcome!"), /*#__PURE__*/React.createElement("h1", null, "Know Your Greens"), /*#__PURE__*/React.createElement("div", null, "Care instructions for your green housemates."))
    );
  }
  return (
    /*#__PURE__*/React.createElement("div", {
      className: "pageContents"
    }, /*#__PURE__*/React.createElement("h1", null, "Know Your Greens"), /*#__PURE__*/React.createElement("div", null, "Care instructions for your green housemates."))
  );
}
exports.default = Homepage;
_c = Homepage;
var _c;
$RefreshReg$(_c, "Homepage");

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"3tkE2"}],"3tkE2":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"7voIQ":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _s2 = $RefreshSig$();
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function SearchBar() {
  _s2();
  var _React$useState = React.useState(''), _React$useState2 = _slicedToArray(_React$useState, 2), plant = _React$useState2[0], searchPlant = _React$useState2[1];
  var _React$useState3 = React.useState(true), _React$useState4 = _slicedToArray(_React$useState3, 2), isPlant = _React$useState4[0], setPlant = _React$useState4[1];
  var history = ReactRouterDOM.useHistory();
  var handleInput = function handleInput(evt) {
    searchPlant(evt.target.value);
  };
  React.useEffect(function () {});
  var handleSubmit = function handleSubmit(evt) {
    evt.preventDefault();
    fetch('/api/plant/<plantname>', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'plantname': plant
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data == null) {
        console.log(data);
        setPlant(false);
      } else {
        setPlant(true);
        history.push(("/plants/").concat(plant));
      }
    });
  };
  return (
    /*#__PURE__*/React.createElement("div", {
      className: "pageContents"
    }, !isPlant && /*#__PURE__*/React.createElement("div", null, "Hmmm this doesn't exist in our database. Please try with another plant name."), /*#__PURE__*/React.createElement("div", null, "Worried about your plants? Not sure how to care for your new green housemates?"), /*#__PURE__*/React.createElement("div", null, "Enter a name to find out how to take care of your plants!"), /*#__PURE__*/React.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/React.createElement("input", {
      placeholder: "Plant Name",
      type: "text",
      value: plant,
      name: "plant_name",
      onChange: handleInput,
      required: true
    }), /*#__PURE__*/React.createElement("button", {
      type: "submit"
    }, "Search")))
  );
}
exports.default = SearchBar;
_s2(SearchBar, "4dET48JonHBxbvZ4C7aJXPjS73Y=", true);
_c = SearchBar;
var _c;
$RefreshReg$(_c, "SearchBar");

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"3tkE2"}],"6Fq5q":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _s2 = $RefreshSig$();
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function Login(props) {
  _s2();
  // change setUser to something else -> convention for useState
  var setUser = props.setUser, isValid = props.isValid;
  var _React$useState = React.useState(''), _React$useState2 = _slicedToArray(_React$useState, 2), username = _React$useState2[0], setUsername = _React$useState2[1];
  var _React$useState3 = React.useState(''), _React$useState4 = _slicedToArray(_React$useState3, 2), password = _React$useState4[0], setPassword = _React$useState4[1];
  var handleUsername = function handleUsername(evt) {
    setUsername(evt.target.value);
  };
  var handlePassword = function handlePassword(evt) {
    setPassword(evt.target.value);
  };
  var handleSubmit = function handleSubmit(evt) {
    evt.preventDefault();
    setUser(username, password);
  };
  return (
    /*#__PURE__*/React.createElement("div", {
      className: "pageContents"
    }, !isValid && /*#__PURE__*/React.createElement("div", null, "Uh oh, login credentials don't look right.."), /*#__PURE__*/React.createElement("h1", null, "Log In"), /*#__PURE__*/React.createElement("form", {
      onSubmit: handleSubmit
    }, "Enter Username", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "username",
      required: true,
      onChange: handleUsername
    }), "Password", /*#__PURE__*/React.createElement("input", {
      type: "password",
      name: "password",
      required: true,
      onChange: handlePassword
    }), /*#__PURE__*/React.createElement("input", {
      type: "submit"
    })))
  );
}
exports.default = Login;
_s2(Login, "wuQOK7xaXdVz4RMrZQhWbI751Oc=");
_c = Login;
var _c;
$RefreshReg$(_c, "Login");

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"3tkE2"}],"2JOZu":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _s2 = $RefreshSig$();
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if ((key in obj)) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function SignUp(props) {
  _s2();
  var setUser = props.setUser, isNewUser = props.isNewUser;
  console.log(isNewUser);
  var history = ReactRouterDOM.useHistory();
  var _React$useState = React.useState({
    username: "",
    password: "",
    name: ""
  }), _React$useState2 = _slicedToArray(_React$useState, 2), state = _React$useState2[0], setState = _React$useState2[1];
  var handleChange = function handleChange(evt) {
    var _evt$target = evt.target, id = _evt$target.id, value = _evt$target.value;
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, id, value));
    });
  };
  var handleSubmit = function handleSubmit(evt) {
    evt.preventDefault();
    setUser(state.username, state.password, state.name);
  };
  return (
    /*#__PURE__*/React.createElement("div", {
      className: "pageContents"
    }, !isNewUser && /*#__PURE__*/React.createElement("div", null, "User exists, please pick another username!"), /*#__PURE__*/React.createElement("h1", null, "Sign Up"), /*#__PURE__*/React.createElement("form", {
      onSubmit: handleSubmit
    }, "First Name", /*#__PURE__*/React.createElement("input", {
      type: "name",
      id: "name",
      value: state.name,
      required: true,
      onChange: handleChange
    }), "Enter Username", /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "username",
      value: state.username,
      required: true,
      onChange: handleChange
    }), "Password", /*#__PURE__*/React.createElement("input", {
      type: "password",
      id: "password",
      value: state.password,
      required: true,
      onChange: handleChange
    }), /*#__PURE__*/React.createElement("button", {
      type: "submit"
    }, "Sign up!")))
  );
}
exports.default = SignUp;
_s2(SignUp, "D9031lA875R1Z+VOU3aMtfLM/4s=", true);
_c = SignUp;
var _c;
$RefreshReg$(_c, "SignUp");

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"3tkE2"}],"1DrOW":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _PlantCard = require('./PlantCard');
var _PlantCardDefault = _parcelHelpers.interopDefault(_PlantCard);
var _NavigateToPlant = require('./NavigateToPlant');
var _NavigateToPlantDefault = _parcelHelpers.interopDefault(_NavigateToPlant);
function Favorites(props) {
  var isLoggedIn = props.isLoggedIn, favorites = props.favorites, onAddToFavorites = props.onAddToFavorites, onRemoveFromFavorites = props.onRemoveFromFavorites;
  var favoritePlants = [];
  var isFav = false;
  var favCard = null;
  for (var fav in favorites) {
    if (!favorites) {
      isFav = false;
    } else {
      isFav = true;
      for (var _i = 0, _Object$entries = Object.entries(favorites[fav]); _i < _Object$entries.length; _i++) {
        var item = _Object$entries[_i];
        favCard = /*#__PURE__*/React.createElement("div", {
          className: "plant-card",
          key: favorites[fav]['plant_id']
        }, /*#__PURE__*/React.createElement(_PlantCardDefault.default, {
          name: favorites[fav]['name'],
          img: favorites[fav]['img'],
          favorites: favorites,
          isLoggedIn: isLoggedIn,
          onAddToFavorites: onAddToFavorites,
          onRemoveFromFavorites: onRemoveFromFavorites
        }), /*#__PURE__*/React.createElement(_NavigateToPlantDefault.default, {
          plant: favorites[fav]
        }));
      }
      favoritePlants.push(favCard);
    }
  }
  return (
    /*#__PURE__*/React.createElement("div", {
      className: "pageContents"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Favorites")), !isFav && /*#__PURE__*/React.createElement("div", null, "This looks a little empty right now, add some plants to your list of favorites!"), /*#__PURE__*/React.createElement("div", null, favoritePlants))
  );
}
exports.default = Favorites;
_c = Favorites;
var _c;
$RefreshReg$(_c, "Favorites");

},{"./PlantCard":"1XlGv","./NavigateToPlant":"37bBx","@parcel/transformer-js/lib/esmodule-helpers.js":"3tkE2"}],"1XlGv":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _AddToFavorites = require('./AddToFavorites');
var _AddToFavoritesDefault = _parcelHelpers.interopDefault(_AddToFavorites);
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function PlantCard(props) {
  var plant_id = props.plant_id, name = props.name, img = props.img, isLoggedIn = props.isLoggedIn, favorites = props.favorites, onAddToFavorites = props.onAddToFavorites, onRemoveFromFavorites = props.onRemoveFromFavorites;
  var fav = false;
  var _iterator = _createForOfIteratorHelper(favorites), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var plant = _step.value;
      if (plant['name'] == name) {
        fav = true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  /*look into "includes"/verify keys*/
  return (
    /*#__PURE__*/React.createElement("div", {
      key: plant_id,
      className: "plant-card"
    }, /*#__PURE__*/React.createElement("h2", null, name), /*#__PURE__*/React.createElement("img", {
      src: img
    }), /*#__PURE__*/React.createElement(_AddToFavoritesDefault.default, {
      isLoggedIn: isLoggedIn,
      fav: fav,
      name: name,
      onAddToFavorites: onAddToFavorites,
      onRemoveFromFavorites: onRemoveFromFavorites
    }))
  );
}
exports.default = PlantCard;
_c = PlantCard;
var _c;
$RefreshReg$(_c, "PlantCard");

},{"./AddToFavorites":"6rylu","@parcel/transformer-js/lib/esmodule-helpers.js":"3tkE2"}],"6rylu":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
function AddToFavorites(props) {
  var isLoggedIn = props.isLoggedIn, fav = props.fav, onAddToFavorites = props.onAddToFavorites, onRemoveFromFavorites = props.onRemoveFromFavorites, name = props.name;
  var onAddFavs = function onAddFavs(evt) {
    evt.preventDefault();
    onAddToFavorites(name);
  };
  var onRemoveFavs = function onRemoveFavs(evt) {
    evt.preventDefault();
    onRemoveFromFavorites(name);
  };
  return (
    /*#__PURE__*/React.createElement("div", {
      className: "pageContents"
    }, isLoggedIn && (fav ? /*#__PURE__*/React.createElement("button", {
      onClick: onRemoveFavs
    }, "Remove from Favorites") : /*#__PURE__*/React.createElement("button", {
      onClick: onAddFavs
    }, "Add to Favorites")))
  );
}
exports.default = AddToFavorites;
_c = AddToFavorites;
var _c;
$RefreshReg$(_c, "AddToFavorites");

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"3tkE2"}],"37bBx":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _s = $RefreshSig$();
function NavigateToPlant(props) {
  _s();
  var plant = props.plant;
  var history = ReactRouterDOM.useHistory();
  var onShowDetails = function onShowDetails() {
    history.push(("/plants/").concat(plant.name));
  };
  return (
    /*#__PURE__*/React.createElement("div", {
      className: "pageContents"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onShowDetails
    }, "View Details"))
  );
}
exports.default = NavigateToPlant;
_s(NavigateToPlant, "9cZfZ04734qoCGIctmKX7+sX6eU=", true);
_c = NavigateToPlant;
var _c;
$RefreshReg$(_c, "NavigateToPlant");

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"3tkE2"}],"aeZf1":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
function Nav(props) {
  var isLoggedIn = props.isLoggedIn, logUserOut = props.logUserOut;
  function onLogout(evt) {
    evt.preventDefault();
    window.localStorage.removeItem('favPlants');
    logUserOut();
  }
  return (
    /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", {
      className: "nav-links"
    }, /*#__PURE__*/React.createElement(ReactRouterDOM.NavLink, {
      to: "/"
    }, /*#__PURE__*/React.createElement("li", null, "know your greens")), /*#__PURE__*/React.createElement(ReactRouterDOM.NavLink, {
      to: "/all-plants"
    }, /*#__PURE__*/React.createElement("li", null, "All Plants")), /*#__PURE__*/React.createElement(ReactRouterDOM.NavLink, {
      to: "/favorites"
    }, isLoggedIn && /*#__PURE__*/React.createElement("li", null, "My Favorites")), /*#__PURE__*/React.createElement(ReactRouterDOM.NavLink, {
      to: "/logout",
      onClick: onLogout
    }, isLoggedIn && /*#__PURE__*/React.createElement("li", null, "Logout")), /*#__PURE__*/React.createElement(ReactRouterDOM.NavLink, {
      to: "/login"
    }, !isLoggedIn && /*#__PURE__*/React.createElement("li", null, "Login")), /*#__PURE__*/React.createElement(ReactRouterDOM.NavLink, {
      to: "/sign-up"
    }, !isLoggedIn && /*#__PURE__*/React.createElement("li", null, "Sign Up"))))
  );
}
exports.default = Nav;
_c = Nav;
var _c;
$RefreshReg$(_c, "Nav");

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"3tkE2"}],"6WFQY":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _PlantCard = require('./PlantCard');
var _PlantCardDefault = _parcelHelpers.interopDefault(_PlantCard);
var _NavigateToPlant = require('./NavigateToPlant');
var _NavigateToPlantDefault = _parcelHelpers.interopDefault(_NavigateToPlant);
var _s2 = $RefreshSig$();
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function AllPlants(props) {
  _s2();
  var isLoggedIn = props.isLoggedIn, favorites = props.favorites, onAddToFavorites = props.onAddToFavorites, onRemoveFromFavorites = props.onRemoveFromFavorites;
  var _React$useState = React.useState({}), _React$useState2 = _slicedToArray(_React$useState, 2), plants = _React$useState2[0], getPlants = _React$useState2[1];
  React.useEffect(function () {
    fetch('/api/all-plants').then(function (response) {
      return response.json();
    }).then(function (data) {
      getPlants(data);
    });
  }, []);
  var plantCards = [];
  for (var _i2 = 0, _Object$values = Object.values(plants); _i2 < _Object$values.length; _i2++) {
    var plant = _Object$values[_i2];
    var plantCard = /*#__PURE__*/React.createElement("div", {
      className: "plant-card",
      key: plant.id
    }, /*#__PURE__*/React.createElement(_PlantCardDefault.default, {
      name: plant.name,
      img: plant.img,
      isLoggedIn: isLoggedIn,
      favorites: favorites,
      onAddToFavorites: onAddToFavorites,
      onRemoveFromFavorites: onRemoveFromFavorites
    }), /*#__PURE__*/React.createElement(_NavigateToPlantDefault.default, {
      plant: plant
    }));
    plantCards.push(plantCard);
  }
  return (
    /*#__PURE__*/React.createElement("div", {
      className: "pageContents"
    }, /*#__PURE__*/React.createElement("h1", null, "All Plants"), /*#__PURE__*/React.createElement("div", null, plantCards))
  );
}
exports.default = AllPlants;
_s2(AllPlants, "GQUABPPh5h2CF4kRNPnPrGXR1sU=");
_c = AllPlants;
var _c;
$RefreshReg$(_c, "AllPlants");

},{"./PlantCard":"1XlGv","./NavigateToPlant":"37bBx","@parcel/transformer-js/lib/esmodule-helpers.js":"3tkE2"}],"4La7Z":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _VarietalCard = require('./VarietalCard');
var _VarietalCardDefault = _parcelHelpers.interopDefault(_VarietalCard);
var _s2 = $RefreshSig$();
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function AllVarietals() {
  _s2();
  var _React$useState = React.useState({}), _React$useState2 = _slicedToArray(_React$useState, 2), parentPlant = _React$useState2[0], setParentPlant = _React$useState2[1];
  var _React$useState3 = React.useState({}), _React$useState4 = _slicedToArray(_React$useState3, 2), plants = _React$useState4[0], setPlants = _React$useState4[1];
  var _ReactRouterDOM$usePa = ReactRouterDOM.useParams(), plantName = _ReactRouterDOM$usePa.plantName;
  var img = '';
  React.useEffect(function () {
    fetch('/api/results', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'plant_name': plantName
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      setPlants(data);
    });
  }, [plantName]);
  React.useEffect(function () {
    fetch(("/api/plant/").concat(plantName), {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'plantname': plantName
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      setParentPlant(data);
    });
  }, [parentPlant]);
  // if empty return loading state
  var varietalCards = [];
  var varietalCard = null;
  for (var _i2 = 0, _Object$entries = Object.entries(plants); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2), varietal = _Object$entries$_i[0], care = _Object$entries$_i[1];
    varietalCard = /*#__PURE__*/React.createElement("div", {
      key: varietal
    }, /*#__PURE__*/React.createElement(_VarietalCardDefault.default, {
      name: varietal,
      sunlight: care.Sunlight,
      water: care.Water,
      humidity: care.Humidity,
      toxicity: care.Toxicity,
      temperature: care.Temperature
    }));
    varietalCards.push(varietalCard);
  }
  return (
    /*#__PURE__*/React.createElement("div", {
      className: "pageContents"
    }, /*#__PURE__*/React.createElement("h1", null, plantName), /*#__PURE__*/React.createElement("img", {
      src: parentPlant
    }), /*#__PURE__*/React.createElement("div", null, varietalCards))
  );
}
exports.default = AllVarietals;
_s2(AllVarietals, "m5iX7/yJUg7x8DwcK6JZosbarOc=", true);
_c = AllVarietals;
var _c;
$RefreshReg$(_c, "AllVarietals");

},{"./VarietalCard":"3wKiT","@parcel/transformer-js/lib/esmodule-helpers.js":"3tkE2"}],"3wKiT":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
function VarietalCard(props) {
  var name = props.name, sunlight = props.sunlight, water = props.water, humidity = props.humidity, toxicity = props.toxicity, temperature = props.temperature;
  return (
    /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, name), /*#__PURE__*/React.createElement("h2", null, "Sunlight"), /*#__PURE__*/React.createElement("div", null, sunlight), /*#__PURE__*/React.createElement("h2", null, "Water"), /*#__PURE__*/React.createElement("div", null, water), /*#__PURE__*/React.createElement("h2", null, "Humidity"), /*#__PURE__*/React.createElement("div", null, humidity), /*#__PURE__*/React.createElement("h2", null, "Toxicity"), /*#__PURE__*/React.createElement("div", null, toxicity), /*#__PURE__*/React.createElement("h2", null, "Temperature"), /*#__PURE__*/React.createElement("div", null, temperature))
  );
}
exports.default = VarietalCard;
_c = VarietalCard;
var _c;
$RefreshReg$(_c, "VarietalCard");

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"3tkE2"}]},["1j6wU","3zJWr","38wmO"], "38wmO", "parcelRequire63c5")

//# sourceMappingURL=index.87defcd7.js.map
