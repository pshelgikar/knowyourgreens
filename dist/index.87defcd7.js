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
var _jsxFileName = "/Users/praachi/src/KnowYourGreens_v3/knowyourgreens/src/knowYourGreens.jsx", _s = $RefreshSig$();
function App() {
  _s();
  // const [searchTerm, setSearchTerm] = React.useState({});
  const [user, setUser] = React.useState(false);
  const [isValid, setValid] = React.useState([]);
  const [isNewUser, setNewUser] = React.useState([]);
  const history = ReactRouterDOM.useHistory();
  const [favorites, setFavorites] = React.useState([]);
  const {pathname} = ReactRouterDOM.useLocation();
  const onLogin = (username, password) => {
    fetch('/api/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': username,
        'password': password
      })
    }).then(response => response.json()).then(data => {
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
  const onLogout = () => {
    fetch('/api/logout', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(() => {
      console.log('Logout successful!');
      setUser(false);
      setValid([]);
      history.push('/');
    });
  };
  const onCreateUser = (username, password, name) => {
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
    }).then(response => response.json()).then(data => {
      if (data.isUser == true) {
        setNewUser(false);
      } else {
        setNewUser(true);
        setUser(true);
        history.push('/');
      }
    });
  };
  const onAddToFavorites = name => {
    fetch('/api/add-favorites', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'plant': name
      })
    }).then(response => response.json()).then(data => {
      setFavorites(favs => [...favs, data]);
    });
  };
  const onRemoveFromFavorites = name => {
    const updatedFavorites = favorites.filter(fav => fav.name != name);
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
  React.useEffect(() => {
    if (user) {
      fetch('/api/show-favorites', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json()).then(data => {
        setFavorites(data);
      });
    }
  }, [user]);
  return (
    /*#__PURE__*/React.createElement(React.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "App",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }
    }, /*#__PURE__*/React.createElement(_componentsNavDefault.default, {
      isLoggedIn: user,
      logUserOut: onLogout,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }
    }), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
      exact: true,
      path: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement(_componentsHomepageDefault.default, {
      isLoggedIn: user,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 21
      }
    }), /*#__PURE__*/React.createElement(_componentsSearchBarDefault.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 21
      }
    })), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
      exact: true,
      path: "/all-plants",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement(_componentsAllPlantsDefault.default, {
      isLoggedIn: user,
      favorites: favorites,
      onAddToFavorites: onAddToFavorites,
      onRemoveFromFavorites: onRemoveFromFavorites,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 21
      }
    })), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
      exact: true,
      path: "/plants/:plantName",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement(_componentsAllVarietalsDefault.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 21
      }
    })), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
      exact: true,
      path: "/sign-up",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement(_componentsSignUpDefault.default, {
      setUser: onCreateUser,
      isNewUser: isNewUser,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 21
      }
    })), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
      exact: true,
      path: "/login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement(_componentsLoginDefault.default, {
      setUser: onLogin,
      isValid: isValid,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 21
      }
    })), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
      exact: true,
      path: "/favorites",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 17
      }
    }, user ? /*#__PURE__*/React.createElement(_componentsFavoritesDefault.default, {
      isLoggedIn: user,
      favorites: favorites,
      onAddToFavorites: onAddToFavorites,
      onRemoveFromFavorites: onRemoveFromFavorites,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 29
      }
    }) : /*#__PURE__*/React.createElement(ReactRouterDOM.Redirect, {
      to: "/login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 29
      }
    })), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
      exact: true,
      path: "/logout",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement(_componentsHomepageDefault.default, {
      isLoggedIn: user,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 21
      }
    }))))
  );
}
exports.default = App;
_s(App, "kPj+Z/uAx6w517LD62IicjpKZIw=", true);
_c = App;
ReactDOM.render(/*#__PURE__*/React.createElement(ReactRouterDOM.BrowserRouter, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 181,
    columnNumber: 17
  }
}, /*#__PURE__*/React.createElement(App, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 182,
    columnNumber: 5
  }
})), document.querySelector('#root'));
var _c;
$RefreshReg$(_c, "App");

},{"./components/Homepage":"51tjO","./components/SearchBar":"7voIQ","./components/Login":"6Fq5q","./components/SignUp":"2JOZu","./components/Favorites":"1DrOW","./components/Nav":"aeZf1","./components/AllPlants":"6WFQY","./components/AllVarietals":"4La7Z","@parcel/transformer-js/lib/esmodule-helpers.js":"3tkE2"}],"51tjO":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _jsxFileName = "/Users/praachi/src/KnowYourGreens_v3/knowyourgreens/src/components/Homepage.jsx";
function Homepage(props) {
  const {isLoggedIn} = props;
  if (isLoggedIn) {
    return (
      /*#__PURE__*/React.createElement("div", {
        className: "pageContents",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5,
          columnNumber: 13
        }
      }, /*#__PURE__*/React.createElement("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6,
          columnNumber: 17
        }
      }, "Welcome!"), /*#__PURE__*/React.createElement("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 17
        }
      }, "Know Your Greens"), /*#__PURE__*/React.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 17
        }
      }, "Care instructions for your green housemates."))
    );
  }
  return (
    /*#__PURE__*/React.createElement("div", {
      className: "pageContents",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, /*#__PURE__*/React.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }, "Know Your Greens"), /*#__PURE__*/React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, "Care instructions for your green housemates."))
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
var _jsxFileName = "/Users/praachi/src/KnowYourGreens_v3/knowyourgreens/src/components/SearchBar.jsx", _s = $RefreshSig$();
function SearchBar() {
  _s();
  const [plant, searchPlant] = React.useState('');
  const [isPlant, setPlant] = React.useState(true);
  const history = ReactRouterDOM.useHistory();
  const handleInput = evt => {
    searchPlant(evt.target.value);
  };
  React.useEffect(() => {});
  const handleSubmit = evt => {
    evt.preventDefault();
    fetch('/api/plant/<plantname>', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'plantname': plant
      })
    }).then(response => response.json()).then(data => {
      if (data == null) {
        console.log(data);
        setPlant(false);
      } else {
        setPlant(true);
        history.push(`/plants/${plant}`);
      }
    });
  };
  return (
    /*#__PURE__*/React.createElement("div", {
      className: "pageContents",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, !isPlant && /*#__PURE__*/React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }, "Hmmm this doesn't exist in our database. Please try with another plant name."), /*#__PURE__*/React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }, "Worried about your plants? Not sure how to care for your new green housemates?"), /*#__PURE__*/React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, "Enter a name to find out how to take care of your plants!"), /*#__PURE__*/React.createElement("form", {
      onSubmit: handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, /*#__PURE__*/React.createElement("input", {
      placeholder: "Plant Name",
      type: "text",
      value: plant,
      name: "plant_name",
      onChange: handleInput,
      required: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, "Search")))
  );
}
exports.default = SearchBar;
_s(SearchBar, "4dET48JonHBxbvZ4C7aJXPjS73Y=", true);
_c = SearchBar;
var _c;
$RefreshReg$(_c, "SearchBar");

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"3tkE2"}],"6Fq5q":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _jsxFileName = "/Users/praachi/src/KnowYourGreens_v3/knowyourgreens/src/components/Login.jsx", _s = $RefreshSig$();
function Login(props) {
  _s();
  // change setUser to something else -> convention for useState
  const {setUser, isValid} = props;
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleUsername = evt => {
    setUsername(evt.target.value);
  };
  const handlePassword = evt => {
    setPassword(evt.target.value);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    setUser(username, password);
  };
  return (
    /*#__PURE__*/React.createElement("div", {
      className: "pageContents",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, !isValid && /*#__PURE__*/React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }, "Uh oh, login credentials don't look right.."), /*#__PURE__*/React.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, "Log In"), /*#__PURE__*/React.createElement("form", {
      onSubmit: handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, "Enter Username", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "username",
      required: true,
      onChange: handleUsername,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 31
      }
    }), "Password", /*#__PURE__*/React.createElement("input", {
      type: "password",
      name: "password",
      required: true,
      onChange: handlePassword,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 25
      }
    }), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    })))
  );
}
exports.default = Login;
_s(Login, "wuQOK7xaXdVz4RMrZQhWbI751Oc=");
_c = Login;
var _c;
$RefreshReg$(_c, "Login");

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"3tkE2"}],"2JOZu":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _jsxFileName = "/Users/praachi/src/KnowYourGreens_v3/knowyourgreens/src/components/SignUp.jsx", _s = $RefreshSig$();
function SignUp(props) {
  _s();
  const {setUser, isNewUser} = props;
  console.log(isNewUser);
  const history = ReactRouterDOM.useHistory();
  const [state, setState] = React.useState({
    username: "",
    password: "",
    name: ""
  });
  const handleChange = evt => {
    const {id, value} = evt.target;
    setState(prevState => ({
      ...prevState,
      [id]: value
    }));
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    setUser(state.username, state.password, state.name);
  };
  return (
    /*#__PURE__*/React.createElement("div", {
      className: "pageContents",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, !isNewUser && /*#__PURE__*/React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, "User exists, please pick another username!"), /*#__PURE__*/React.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, "Sign Up"), /*#__PURE__*/React.createElement("form", {
      onSubmit: handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, "First Name", /*#__PURE__*/React.createElement("input", {
      type: "name",
      id: "name",
      value: state.name,
      required: true,
      onChange: handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 27
      }
    }), "Enter Username", /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "username",
      value: state.username,
      required: true,
      onChange: handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 31
      }
    }), "Password", /*#__PURE__*/React.createElement("input", {
      type: "password",
      id: "password",
      value: state.password,
      required: true,
      onChange: handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 25
      }
    }), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    }, "Sign up!")))
  );
}
exports.default = SignUp;
_s(SignUp, "D9031lA875R1Z+VOU3aMtfLM/4s=", true);
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
var _jsxFileName = "/Users/praachi/src/KnowYourGreens_v3/knowyourgreens/src/components/Favorites.jsx";
function Favorites(props) {
  const {isLoggedIn, favorites, onAddToFavorites, onRemoveFromFavorites} = props;
  const favoritePlants = [];
  let isFav = false;
  let favCard = null;
  for (let fav in favorites) {
    if (!favorites) {
      isFav = false;
    } else {
      isFav = true;
      for (const item of Object.entries(favorites[fav])) {
        favCard = /*#__PURE__*/React.createElement("div", {
          className: "plant-card",
          key: favorites[fav]['plant_id'],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 21
          }
        }, /*#__PURE__*/React.createElement(_PlantCardDefault.default, {
          name: favorites[fav]['name'],
          img: favorites[fav]['img'],
          favorites: favorites,
          isLoggedIn: isLoggedIn,
          onAddToFavorites: onAddToFavorites,
          onRemoveFromFavorites: onRemoveFromFavorites,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 26
          }
        }), /*#__PURE__*/React.createElement(_NavigateToPlantDefault.default, {
          plant: favorites[fav],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 27
          }
        }));
      }
      favoritePlants.push(favCard);
    }
  }
  return (
    /*#__PURE__*/React.createElement("div", {
      className: "pageContents",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, /*#__PURE__*/React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, /*#__PURE__*/React.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 18
      }
    }, "Favorites")), !isFav && /*#__PURE__*/React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, "This looks a little empty right now, add some plants to your list of favorites!"), /*#__PURE__*/React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, favoritePlants))
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
var _jsxFileName = "/Users/praachi/src/KnowYourGreens_v3/knowyourgreens/src/components/PlantCard.jsx";
function PlantCard(props) {
  const {plant_id, name, img, isLoggedIn, favorites, onAddToFavorites, onRemoveFromFavorites} = props;
  let fav = false;
  for (let plant of favorites) {
    if (plant['name'] == name) {
      fav = true;
    }
  }
  // look into "includes"/verify keys
  return (
    /*#__PURE__*/React.createElement("div", {
      key: plant_id,
      className: "plant-card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    }, /*#__PURE__*/React.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, name), /*#__PURE__*/React.createElement("img", {
      src: img,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }), /*#__PURE__*/React.createElement(_AddToFavoritesDefault.default, {
      isLoggedIn: isLoggedIn,
      fav: fav,
      name: name,
      onAddToFavorites: onAddToFavorites,
      onRemoveFromFavorites: onRemoveFromFavorites,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
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
var _jsxFileName = "/Users/praachi/src/KnowYourGreens_v3/knowyourgreens/src/components/AddToFavorites.jsx";
function AddToFavorites(props) {
  const {isLoggedIn, fav, onAddToFavorites, onRemoveFromFavorites, name} = props;
  const onAddFavs = evt => {
    evt.preventDefault();
    onAddToFavorites(name);
  };
  const onRemoveFavs = evt => {
    evt.preventDefault();
    onRemoveFromFavorites(name);
  };
  return (
    /*#__PURE__*/React.createElement("div", {
      className: "pageContents",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    }, isLoggedIn && (fav ? /*#__PURE__*/React.createElement("button", {
      onClick: onRemoveFavs,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, "Remove from Favorites") : /*#__PURE__*/React.createElement("button", {
      onClick: onAddFavs,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }
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
var _jsxFileName = "/Users/praachi/src/KnowYourGreens_v3/knowyourgreens/src/components/NavigateToPlant.jsx", _s = $RefreshSig$();
function NavigateToPlant(props) {
  _s();
  const {plant} = props;
  const history = ReactRouterDOM.useHistory();
  const onShowDetails = () => {
    history.push(`/plants/${plant.name}`);
  };
  return (
    /*#__PURE__*/React.createElement("div", {
      className: "pageContents",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onShowDetails,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
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
var _jsxFileName = "/Users/praachi/src/KnowYourGreens_v3/knowyourgreens/src/components/Nav.jsx";
function Nav(props) {
  const {isLoggedIn, logUserOut} = props;
  function onLogout(evt) {
    evt.preventDefault();
    window.localStorage.removeItem('favPlants');
    logUserOut();
  }
  return (
    /*#__PURE__*/React.createElement("nav", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, /*#__PURE__*/React.createElement("ul", {
      className: "nav-links",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, /*#__PURE__*/React.createElement(ReactRouterDOM.NavLink, {
      to: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }, "know your greens")), /*#__PURE__*/React.createElement(ReactRouterDOM.NavLink, {
      to: "/all-plants",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    }, "All Plants")), /*#__PURE__*/React.createElement(ReactRouterDOM.NavLink, {
      to: "/favorites",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, isLoggedIn && /*#__PURE__*/React.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 26
      }
    }, "My Favorites")), /*#__PURE__*/React.createElement(ReactRouterDOM.NavLink, {
      to: "/logout",
      onClick: onLogout,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }, isLoggedIn && /*#__PURE__*/React.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 26
      }
    }, "Logout")), /*#__PURE__*/React.createElement(ReactRouterDOM.NavLink, {
      to: "/login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }, !isLoggedIn && /*#__PURE__*/React.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 26
      }
    }, "Login")), /*#__PURE__*/React.createElement(ReactRouterDOM.NavLink, {
      to: "/sign-up",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, !isLoggedIn && /*#__PURE__*/React.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 26
      }
    }, "Sign Up"))))
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
var _jsxFileName = "/Users/praachi/src/KnowYourGreens_v3/knowyourgreens/src/components/AllPlants.jsx", _s = $RefreshSig$();
function AllPlants(props) {
  _s();
  const {isLoggedIn, favorites, onAddToFavorites, onRemoveFromFavorites} = props;
  const [plants, getPlants] = React.useState({});
  React.useEffect(() => {
    fetch('/api/all-plants').then(response => response.json()).then(data => {
      getPlants(data);
    });
  }, []);
  const plantCards = [];
  for (const plant of Object.values(plants)) {
    const plantCard = /*#__PURE__*/React.createElement("div", {
      className: "plant-card",
      key: plant.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, /*#__PURE__*/React.createElement(_PlantCardDefault.default, {
      name: plant.name,
      img: plant.img,
      isLoggedIn: isLoggedIn,
      favorites: favorites,
      onAddToFavorites: onAddToFavorites,
      onRemoveFromFavorites: onRemoveFromFavorites,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }), /*#__PURE__*/React.createElement(_NavigateToPlantDefault.default, {
      plant: plant,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }));
    plantCards.push(plantCard);
  }
  return (
    /*#__PURE__*/React.createElement("div", {
      className: "pageContents",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }, /*#__PURE__*/React.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, "All Plants"), /*#__PURE__*/React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, plantCards))
  );
}
exports.default = AllPlants;
_s(AllPlants, "GQUABPPh5h2CF4kRNPnPrGXR1sU=");
_c = AllPlants;
var _c;
$RefreshReg$(_c, "AllPlants");

},{"./PlantCard":"1XlGv","./NavigateToPlant":"37bBx","@parcel/transformer-js/lib/esmodule-helpers.js":"3tkE2"}],"4La7Z":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _VarietalCard = require('./VarietalCard');
var _VarietalCardDefault = _parcelHelpers.interopDefault(_VarietalCard);
var _jsxFileName = "/Users/praachi/src/KnowYourGreens_v3/knowyourgreens/src/components/AllVarietals.jsx", _s = $RefreshSig$();
function AllVarietals() {
  _s();
  const [parentPlant, setParentPlant] = React.useState({});
  const [plants, setPlants] = React.useState({});
  const {plantName} = ReactRouterDOM.useParams();
  let img = '';
  React.useEffect(() => {
    fetch('/api/results', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'plant_name': plantName
      })
    }).then(response => response.json()).then(data => {
      setPlants(data);
    });
  }, [plantName]);
  React.useEffect(() => {
    fetch(`/api/plant/${plantName}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'plantname': plantName
      })
    }).then(response => response.json()).then(data => {
      setParentPlant(data);
    });
  }, [parentPlant]);
  // if empty return loading state
  const varietalCards = [];
  let varietalCard = null;
  for (const [varietal, care] of Object.entries(plants)) {
    varietalCard = /*#__PURE__*/React.createElement("div", {
      key: varietal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement(_VarietalCardDefault.default, {
      name: varietal,
      sunlight: care.Sunlight,
      water: care.Water,
      humidity: care.Humidity,
      toxicity: care.Toxicity,
      temperature: care.Temperature,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    }));
    varietalCards.push(varietalCard);
  }
  return (
    /*#__PURE__*/React.createElement("div", {
      className: "pageContents",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 10
      }
    }, /*#__PURE__*/React.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 14
      }
    }, plantName), /*#__PURE__*/React.createElement("img", {
      src: parentPlant,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 14
      }
    }), /*#__PURE__*/React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 14
      }
    }, varietalCards))
  );
}
exports.default = AllVarietals;
_s(AllVarietals, "m5iX7/yJUg7x8DwcK6JZosbarOc=", true);
_c = AllVarietals;
var _c;
$RefreshReg$(_c, "AllVarietals");

},{"./VarietalCard":"3wKiT","@parcel/transformer-js/lib/esmodule-helpers.js":"3tkE2"}],"3wKiT":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _jsxFileName = "/Users/praachi/src/KnowYourGreens_v3/knowyourgreens/src/components/VarietalCard.jsx";
function VarietalCard(props) {
  const {name, sunlight, water, humidity, toxicity, temperature} = props;
  return (
    /*#__PURE__*/React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }
    }, /*#__PURE__*/React.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }
    }, name), /*#__PURE__*/React.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, "Sunlight"), /*#__PURE__*/React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }, sunlight), /*#__PURE__*/React.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, "Water"), /*#__PURE__*/React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, water), /*#__PURE__*/React.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, "Humidity"), /*#__PURE__*/React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, humidity), /*#__PURE__*/React.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, "Toxicity"), /*#__PURE__*/React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, toxicity), /*#__PURE__*/React.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, "Temperature"), /*#__PURE__*/React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, temperature))
  );
}
exports.default = VarietalCard;
_c = VarietalCard;
var _c;
$RefreshReg$(_c, "VarietalCard");

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"3tkE2"}]},["1j6wU","3zJWr","38wmO"], "38wmO", "parcelRequire63c5")

//# sourceMappingURL=index.87defcd7.js.map
