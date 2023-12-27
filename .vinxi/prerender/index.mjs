globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/node-fetch-native@1.6.1/node_modules/node-fetch-native/dist/polyfill.cjs';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, removeResponseHeader, createError, getResponseHeader, getHeader, getRequestURL, readFormData, readBody, setHeader, toWebRequest, getRequestIP, appendResponseHeader, getCookie, setCookie, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/h3@1.9.0/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/destr@2.0.2/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/unenv@1.8.0/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/scule@1.1.1/node_modules/scule/dist/index.mjs';
import { klona } from 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/defu@6.1.3/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/ufo@1.3.2/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47fs_45lite from 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/radix3@1.1.0/node_modules/radix3/dist/index.mjs';
import _WK5ffsQsI1 from 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/vinxi@0.0.54_rollup@3.29.4_terser@5.26.0/node_modules/vinxi/lib/app-fetch.js';
import _IVyoBi1oPv from 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/vinxi@0.0.54_rollup@3.29.4_terser@5.26.0/node_modules/vinxi/lib/app-manifest.js';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/pathe@1.1.1/node_modules/pathe/dist/index.mjs';
import { provideRequestEvent } from 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/solid-js@1.8.7/node_modules/solid-js/web/dist/storage.js';
import { ssr, renderToStream, createComponent, ssrHydrationKey, NoHydration, escape, getRequestEvent, ssrAttribute, ssrElement, mergeProps } from 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/solid-js@1.8.7/node_modules/solid-js/web/dist/server.js';
import { lazy, createComponent as createComponent$1 } from 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/solid-js@1.8.7/node_modules/solid-js/dist/server.js';

const inlineAppConfig = {};



const appConfig$1 = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {}
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig$1));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/home/quentin/Documents/dev/test/test-cmp/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/home/quentin/Documents/dev/test/test-cmp/.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/quentin/Documents/dev/test/test-cmp","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/quentin/Documents/dev/test/test-cmp","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/quentin/Documents/dev/test/test-cmp/.vinxi","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/quentin/Documents/dev/test/test-cmp/.vinxi/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const appConfig = {"name":"vinxi","routers":[{"name":"public","mode":"static","dir":"./public","base":"/","root":"/home/quentin/Documents/dev/test/test-cmp","order":0,"outDir":"/home/quentin/Documents/dev/test/test-cmp/.vinxi/build/public"},{"name":"ssr","mode":"handler","handler":"src/entry-server.tsx","extensions":["js","jsx","ts","tsx"],"target":"server","root":"/home/quentin/Documents/dev/test/test-cmp","base":"/","outDir":"/home/quentin/Documents/dev/test/test-cmp/.vinxi/build/ssr","order":1},{"name":"client","mode":"build","handler":"src/entry-client.tsx","extensions":["js","jsx","ts","tsx"],"target":"browser","base":"/_build","root":"/home/quentin/Documents/dev/test/test-cmp","outDir":"/home/quentin/Documents/dev/test/test-cmp/.vinxi/build/client","order":2},{"name":"server-fns","mode":"handler","base":"/_server","handler":"node_modules/.pnpm/@solidjs+start@0.4.2_rollup@3.29.4_solid-js@1.8.7_vinxi@0.0.54_vite@4.5.0/node_modules/@solidjs/start/config/server-handler.js","target":"server","root":"/home/quentin/Documents/dev/test/test-cmp","outDir":"/home/quentin/Documents/dev/test/test-cmp/.vinxi/build/server-fns","order":3}],"server":{"compressPublicAssets":{"brotli":true},"prerender":{}},"root":"/home/quentin/Documents/dev/test/test-cmp"};
				const buildManifest = {"ssr":{"_components-c540a06b.js":{"file":"assets/components-c540a06b.js"},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"_...404_.js","imports":["_components-c540a06b.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/[...404].tsx?pick=default&pick=$css"},"src/routes/about.tsx?pick=default&pick=$css":{"file":"about.js","imports":["_components-c540a06b.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/about.tsx?pick=default&pick=$css"},"src/routes/index.tsx?pick=default&pick=$css":{"file":"index.js","isDynamicEntry":true,"isEntry":true,"src":"src/routes/index.tsx?pick=default&pick=$css"},"virtual:#vinxi/handler/ssr":{"dynamicImports":["src/routes/[...404].tsx?pick=default&pick=$css","src/routes/[...404].tsx?pick=default&pick=$css","src/routes/about.tsx?pick=default&pick=$css","src/routes/about.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css"],"file":"ssr.js","isEntry":true,"src":"virtual:#vinxi/handler/ssr"}},"client":{"\u0000virtual:#vinxi/handler/client.css":{"file":"assets/client-a9da7313.css","src":"\u0000virtual:#vinxi/handler/client.css"},"_components-4e49481b.js":{"file":"assets/components-4e49481b.js","imports":["_web-454e75c3.js","_routing-891e92e1.js"]},"_components-legacy-18cd6d22.js":{"file":"assets/components-legacy-18cd6d22.js","imports":["_web-legacy-6bb2d31f.js","_routing-legacy-3411600d.js"]},"_routing-891e92e1.js":{"file":"assets/routing-891e92e1.js","imports":["_web-454e75c3.js"]},"_routing-legacy-3411600d.js":{"file":"assets/routing-legacy-3411600d.js","imports":["_web-legacy-6bb2d31f.js"]},"_web-454e75c3.js":{"file":"assets/web-454e75c3.js"},"_web-legacy-6bb2d31f.js":{"file":"assets/web-legacy-6bb2d31f.js"},"src/routes/[...404]-legacy.tsx?pick=default&pick=$css":{"file":"assets/_...404_-legacy-ca63b2ec.js","imports":["_web-legacy-6bb2d31f.js","_components-legacy-18cd6d22.js","_routing-legacy-3411600d.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/[...404]-legacy.tsx?pick=default&pick=$css"},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"assets/_...404_-abd3bbe0.js","imports":["_web-454e75c3.js","_components-4e49481b.js","_routing-891e92e1.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/[...404].tsx?pick=default&pick=$css"},"src/routes/about-legacy.tsx?pick=default&pick=$css":{"file":"assets/about-legacy-6af61177.js","imports":["_web-legacy-6bb2d31f.js","_components-legacy-18cd6d22.js","_routing-legacy-3411600d.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/about-legacy.tsx?pick=default&pick=$css"},"src/routes/about.tsx?pick=default&pick=$css":{"file":"assets/about-443de06d.js","imports":["_web-454e75c3.js","_components-4e49481b.js","_routing-891e92e1.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/about.tsx?pick=default&pick=$css"},"src/routes/index-legacy.tsx?pick=default&pick=$css":{"file":"assets/index-legacy-ffe8f515.js","imports":["_web-legacy-6bb2d31f.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/index-legacy.tsx?pick=default&pick=$css"},"src/routes/index.tsx?pick=default&pick=$css":{"file":"assets/index-b57b2f1a.js","imports":["_web-454e75c3.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/index.tsx?pick=default&pick=$css"},"virtual:#vinxi/handler/client":{"css":["assets/client-a9da7313.css"],"dynamicImports":["src/routes/[...404].tsx?pick=default&pick=$css","src/routes/about.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css"],"file":"assets/client-33a5e2f0.js","imports":["_web-454e75c3.js","_routing-891e92e1.js"],"isEntry":true,"src":"virtual:#vinxi/handler/client"},"virtual:#vinxi/handler/client-legacy":{"dynamicImports":["src/routes/[...404]-legacy.tsx?pick=default&pick=$css","src/routes/about-legacy.tsx?pick=default&pick=$css","src/routes/index-legacy.tsx?pick=default&pick=$css"],"file":"assets/client-legacy-b776cea2.js","imports":["_web-legacy-6bb2d31f.js","_routing-legacy-3411600d.js"],"isEntry":true,"src":"virtual:#vinxi/handler/client-legacy"},"vite/legacy-polyfills-legacy":{"file":"assets/polyfills-legacy-917a17f9.js","isEntry":true,"src":"vite/legacy-polyfills-legacy"}},"server-fns":{"virtual:#vinxi/handler/server-fns":{"file":"entry.js","isEntry":true,"src":"virtual:#vinxi/handler/server-fns"}}};

				const routeManifest = {"ssr":{},"client":{}};

        function createProdApp(appConfig) {
          return {
            config: { ...appConfig, buildManifest, routeManifest },
            getRouter(name) {
              return appConfig.routers.find(router => router.name === name)
            }
          }
        }

        function plugin(app) {
          const prodApp = createProdApp(appConfig);
          globalThis.app = prodApp;
        }

const chunks = {};
			 



			 function app() {
				 globalThis.$$chunks = chunks;
			 }

const plugins = [
  plugin,
_WK5ffsQsI1,
_IVyoBi1oPv,
app
];

function defineNitroErrorHandler(handler) {
  return handler;
}
const errorHandler = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const { stack, statusCode, statusMessage, message } = normalizeError(error);
    const errorObject = {
      url: event.path || "",
      statusCode,
      statusMessage,
      message,
      stack: void 0
    };
    if (error.unhandled || error.fatal) {
      const tags = [
        "[nitro]",
        "[request error]",
        error.unhandled && "[unhandled]",
        error.fatal && "[fatal]"
      ].filter(Boolean).join(" ");
      console.error(
        tags,
        error.message + "\n" + stack.map((l) => "  " + l.text).join("  \n")
      );
    }
    setResponseStatus(event, statusCode, statusMessage);
    if (isJsonRequest(event)) {
      setResponseHeader(event, "Content-Type", "application/json");
      return send(event, JSON.stringify(errorObject));
    } else {
      setResponseHeader(event, "Content-Type", "text/html");
      return send(event, renderHTMLError(errorObject));
    }
  }
);
function renderHTMLError(error) {
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Request Error";
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${statusCode} ${statusMessage}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">
  </head>
  <body>
    <main class="container">
      <dialog open>
        <article>
          <header>
            <h2>${statusCode} ${statusMessage}</h2>
          </header>
          <code>
            ${error.message}<br><br>
            ${"\n" + (error.stack || []).map((i) => `&nbsp;&nbsp;${i}`).join("<br>")}
          </code>
          <footer>
            <a href="/" onclick="event.preventDefault();history.back();">Go Back</a>
          </footer>
        </article>
      </dialog>
    </main>
  </body>
</html>
`;
}

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"298-hdW7/pL89QptiszdYCHH67XxLxs\"",
    "mtime": "2023-12-27T12:43:10.727Z",
    "size": 664,
    "path": "../../.output/public/favicon.ico"
  },
  "/test.jpeg": {
    "type": "image/jpeg",
    "etag": "\"8b4-t6sLSrt2Zgcpqwyun1WFvcCmpMc\"",
    "mtime": "2023-12-27T12:43:10.731Z",
    "size": 2228,
    "path": "../../.output/public/test.jpeg"
  },
  "/assets/components-c540a06b.js": {
    "type": "application/javascript",
    "etag": "\"8d0-GrAz7oCe5MWaY1lBsGI0r55KUp8\"",
    "mtime": "2023-12-27T12:43:10.731Z",
    "size": 2256,
    "path": "../../.output/public/assets/components-c540a06b.js"
  },
  "/assets/components-c540a06b.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"31e-VGGElXOfLJyg83jgU61CYtA1b7U\"",
    "mtime": "2023-12-27T12:43:10.779Z",
    "size": 798,
    "path": "../../.output/public/assets/components-c540a06b.js.br"
  },
  "/assets/components-c540a06b.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"384-3GBZK4FDO0qZNxFVohJaYP24tys\"",
    "mtime": "2023-12-27T12:43:10.779Z",
    "size": 900,
    "path": "../../.output/public/assets/components-c540a06b.js.gz"
  },
  "/_build/cursor.svg": {
    "type": "image/svg+xml",
    "etag": "\"101-U11XXBPWgrEVQbUCFdZYdXEyGqc\"",
    "mtime": "2023-12-27T12:43:10.731Z",
    "size": 257,
    "path": "../../.output/public/_build/cursor.svg"
  },
  "/_build/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"298-hdW7/pL89QptiszdYCHH67XxLxs\"",
    "mtime": "2023-12-27T12:43:10.731Z",
    "size": 664,
    "path": "../../.output/public/_build/favicon.ico"
  },
  "/_build/manifest.json": {
    "type": "application/json",
    "etag": "\"f3a-IlgkqloEoNm60thOTZ2H6a9lWmA\"",
    "mtime": "2023-12-27T12:43:10.731Z",
    "size": 3898,
    "path": "../../.output/public/_build/manifest.json"
  },
  "/_build/manifest.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"20e-cNevqNV5NIaB2/Mb601f2/kpLP0\"",
    "mtime": "2023-12-27T12:43:10.779Z",
    "size": 526,
    "path": "../../.output/public/_build/manifest.json.br"
  },
  "/_build/manifest.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"24b-Pz9n/xeRNUhSWjQF48gYkZAV/8g\"",
    "mtime": "2023-12-27T12:43:10.779Z",
    "size": 587,
    "path": "../../.output/public/_build/manifest.json.gz"
  },
  "/_build/server-functions-manifest.json": {
    "type": "application/json",
    "etag": "\"19-U+evudgPW1yE9kGumdxd/vtvk2s\"",
    "mtime": "2023-12-27T12:43:10.731Z",
    "size": 25,
    "path": "../../.output/public/_build/server-functions-manifest.json"
  },
  "/_build/test.jpeg": {
    "type": "image/jpeg",
    "etag": "\"8b4-t6sLSrt2Zgcpqwyun1WFvcCmpMc\"",
    "mtime": "2023-12-27T12:43:10.731Z",
    "size": 2228,
    "path": "../../.output/public/_build/test.jpeg"
  },
  "/_build/assets/_...404_-abd3bbe0.js": {
    "type": "application/javascript",
    "etag": "\"355-lY1lgzS7Mxd15G3HUWD79Az4BlI\"",
    "mtime": "2023-12-27T12:43:10.731Z",
    "size": 853,
    "path": "../../.output/public/_build/assets/_...404_-abd3bbe0.js"
  },
  "/_build/assets/_...404_-legacy-ca63b2ec.js": {
    "type": "application/javascript",
    "etag": "\"341-qQGVHBJVMeVzgao8z+Rv35+nf9k\"",
    "mtime": "2023-12-27T12:43:10.731Z",
    "size": 833,
    "path": "../../.output/public/_build/assets/_...404_-legacy-ca63b2ec.js"
  },
  "/_build/assets/about-443de06d.js": {
    "type": "application/javascript",
    "etag": "\"44b-3TBOnBfJeZS9HG7p+0VeYoxr/2Y\"",
    "mtime": "2023-12-27T12:43:10.731Z",
    "size": 1099,
    "path": "../../.output/public/_build/assets/about-443de06d.js"
  },
  "/_build/assets/about-443de06d.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"226-43ivoybcmQ61u/Jlbzgv1ura5Bo\"",
    "mtime": "2023-12-27T12:43:10.779Z",
    "size": 550,
    "path": "../../.output/public/_build/assets/about-443de06d.js.br"
  },
  "/_build/assets/about-443de06d.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"28c-U/snk7hBWYByBk6Od9NXnlhpoB8\"",
    "mtime": "2023-12-27T12:43:10.779Z",
    "size": 652,
    "path": "../../.output/public/_build/assets/about-443de06d.js.gz"
  },
  "/_build/assets/about-legacy-6af61177.js": {
    "type": "application/javascript",
    "etag": "\"43d-oapD+CUNDnBw+xZRVNiH1OJ+xSk\"",
    "mtime": "2023-12-27T12:43:10.731Z",
    "size": 1085,
    "path": "../../.output/public/_build/assets/about-legacy-6af61177.js"
  },
  "/_build/assets/about-legacy-6af61177.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"221-sfdDRvt12keCJJkB0o10r/eMFOQ\"",
    "mtime": "2023-12-27T12:43:10.779Z",
    "size": 545,
    "path": "../../.output/public/_build/assets/about-legacy-6af61177.js.br"
  },
  "/_build/assets/about-legacy-6af61177.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"289-QRHvDAI0uVavhm6/oncGxt9+4X0\"",
    "mtime": "2023-12-27T12:43:10.779Z",
    "size": 649,
    "path": "../../.output/public/_build/assets/about-legacy-6af61177.js.gz"
  },
  "/_build/assets/client-33a5e2f0.js": {
    "type": "application/javascript",
    "etag": "\"9c18-BMvyskPodbcvA7JkyNQeZrWVZGE\"",
    "mtime": "2023-12-27T12:43:10.731Z",
    "size": 39960,
    "path": "../../.output/public/_build/assets/client-33a5e2f0.js"
  },
  "/_build/assets/client-33a5e2f0.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"2ed6-ukI6QCvkjI8lewyuSBqfTjk7WSk\"",
    "mtime": "2023-12-27T12:43:10.783Z",
    "size": 11990,
    "path": "../../.output/public/_build/assets/client-33a5e2f0.js.br"
  },
  "/_build/assets/client-33a5e2f0.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"3474-ldx3Jx3sDWvA45IXvN7xSo6JotQ\"",
    "mtime": "2023-12-27T12:43:10.779Z",
    "size": 13428,
    "path": "../../.output/public/_build/assets/client-33a5e2f0.js.gz"
  },
  "/_build/assets/client-a9da7313.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a3b-OHKy5TfK4WdbIPOPAYcplckwLKc\"",
    "mtime": "2023-12-27T12:43:10.731Z",
    "size": 6715,
    "path": "../../.output/public/_build/assets/client-a9da7313.css"
  },
  "/_build/assets/client-a9da7313.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"669-64ISkwL7X20+tcvopZ1q0uaVdgI\"",
    "mtime": "2023-12-27T12:43:10.779Z",
    "size": 1641,
    "path": "../../.output/public/_build/assets/client-a9da7313.css.br"
  },
  "/_build/assets/client-a9da7313.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"794-XxJtJXLfPOGT5WSsOV+bUGkMJJI\"",
    "mtime": "2023-12-27T12:43:10.779Z",
    "size": 1940,
    "path": "../../.output/public/_build/assets/client-a9da7313.css.gz"
  },
  "/_build/assets/client-legacy-b776cea2.js": {
    "type": "application/javascript",
    "etag": "\"a0ea-fbl9UhpY2DyR4oH8lrMLnz8iqVQ\"",
    "mtime": "2023-12-27T12:43:10.731Z",
    "size": 41194,
    "path": "../../.output/public/_build/assets/client-legacy-b776cea2.js"
  },
  "/_build/assets/client-legacy-b776cea2.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"2ece-dnYs+0L2sudqk706YvaDjdABke0\"",
    "mtime": "2023-12-27T12:43:10.783Z",
    "size": 11982,
    "path": "../../.output/public/_build/assets/client-legacy-b776cea2.js.br"
  },
  "/_build/assets/client-legacy-b776cea2.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"3461-fAxDrxkr5dfReue29SRWr/z+4SY\"",
    "mtime": "2023-12-27T12:43:10.783Z",
    "size": 13409,
    "path": "../../.output/public/_build/assets/client-legacy-b776cea2.js.gz"
  },
  "/_build/assets/components-4e49481b.js": {
    "type": "application/javascript",
    "etag": "\"313-1wFY/hlbyeq7mYT89PRfKFCN+Vw\"",
    "mtime": "2023-12-27T12:43:10.731Z",
    "size": 787,
    "path": "../../.output/public/_build/assets/components-4e49481b.js"
  },
  "/_build/assets/components-legacy-18cd6d22.js": {
    "type": "application/javascript",
    "etag": "\"376-mHIirhKzxtJ9xoCKbwtLfs/QUVY\"",
    "mtime": "2023-12-27T12:43:10.731Z",
    "size": 886,
    "path": "../../.output/public/_build/assets/components-legacy-18cd6d22.js"
  },
  "/_build/assets/index-b57b2f1a.js": {
    "type": "application/javascript",
    "etag": "\"d21-ETzqeiJjESUDd9lEj0+UMTWvswc\"",
    "mtime": "2023-12-27T12:43:10.731Z",
    "size": 3361,
    "path": "../../.output/public/_build/assets/index-b57b2f1a.js"
  },
  "/_build/assets/index-b57b2f1a.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"98f-U/gP/wSilnKzSTxmXBq3x6GeYuk\"",
    "mtime": "2023-12-27T12:43:10.779Z",
    "size": 2447,
    "path": "../../.output/public/_build/assets/index-b57b2f1a.js.br"
  },
  "/_build/assets/index-b57b2f1a.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"a09-ubIBFfXpm6c6NMTT5Kg7Dg1eMRg\"",
    "mtime": "2023-12-27T12:43:10.779Z",
    "size": 2569,
    "path": "../../.output/public/_build/assets/index-b57b2f1a.js.gz"
  },
  "/_build/assets/index-legacy-ffe8f515.js": {
    "type": "application/javascript",
    "etag": "\"d08-9mjO8bsljF89GVKzGPCXT3CUfh0\"",
    "mtime": "2023-12-27T12:43:10.731Z",
    "size": 3336,
    "path": "../../.output/public/_build/assets/index-legacy-ffe8f515.js"
  },
  "/_build/assets/index-legacy-ffe8f515.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"993-N8YZBpeXvpjKMWvzz/2TqhRPq28\"",
    "mtime": "2023-12-27T12:43:10.779Z",
    "size": 2451,
    "path": "../../.output/public/_build/assets/index-legacy-ffe8f515.js.br"
  },
  "/_build/assets/index-legacy-ffe8f515.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"9f6-MaqGcy48q+i/ZJ3IXfJtUpB7z/0\"",
    "mtime": "2023-12-27T12:43:10.779Z",
    "size": 2550,
    "path": "../../.output/public/_build/assets/index-legacy-ffe8f515.js.gz"
  },
  "/_build/assets/polyfills-legacy-917a17f9.js": {
    "type": "application/javascript",
    "etag": "\"8cc4-G4UD5t1v8Dsh4RHsXFJ7QG3hH84\"",
    "mtime": "2023-12-27T12:43:10.735Z",
    "size": 36036,
    "path": "../../.output/public/_build/assets/polyfills-legacy-917a17f9.js"
  },
  "/_build/assets/polyfills-legacy-917a17f9.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"31c2-QV/VQtyiliQ1z+5NbpOCZjwyOzg\"",
    "mtime": "2023-12-27T12:43:10.783Z",
    "size": 12738,
    "path": "../../.output/public/_build/assets/polyfills-legacy-917a17f9.js.br"
  },
  "/_build/assets/polyfills-legacy-917a17f9.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"371a-z7K/cLhBJ6IsLNSVPzd6a7Rcep8\"",
    "mtime": "2023-12-27T12:43:10.783Z",
    "size": 14106,
    "path": "../../.output/public/_build/assets/polyfills-legacy-917a17f9.js.gz"
  },
  "/_build/assets/routing-891e92e1.js": {
    "type": "application/javascript",
    "etag": "\"18e0-5OAcKLRzDIdPolL/jZHPnkrc7Tk\"",
    "mtime": "2023-12-27T12:43:10.735Z",
    "size": 6368,
    "path": "../../.output/public/_build/assets/routing-891e92e1.js"
  },
  "/_build/assets/routing-891e92e1.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"ad8-wlQRBgJ2d/3hAIRSPgp5zA/Imms\"",
    "mtime": "2023-12-27T12:43:10.779Z",
    "size": 2776,
    "path": "../../.output/public/_build/assets/routing-891e92e1.js.br"
  },
  "/_build/assets/routing-891e92e1.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"be6-lhVrYnvsEU/UhZ0YblJrAzVPnG0\"",
    "mtime": "2023-12-27T12:43:10.779Z",
    "size": 3046,
    "path": "../../.output/public/_build/assets/routing-891e92e1.js.gz"
  },
  "/_build/assets/routing-legacy-3411600d.js": {
    "type": "application/javascript",
    "etag": "\"18bf-HlVzDA3/x7QZ7KQIqe+RQQxiUvw\"",
    "mtime": "2023-12-27T12:43:10.735Z",
    "size": 6335,
    "path": "../../.output/public/_build/assets/routing-legacy-3411600d.js"
  },
  "/_build/assets/routing-legacy-3411600d.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"a91-KJGQV8WKV0Uccek+Yk3mT140B0o\"",
    "mtime": "2023-12-27T12:43:10.779Z",
    "size": 2705,
    "path": "../../.output/public/_build/assets/routing-legacy-3411600d.js.br"
  },
  "/_build/assets/routing-legacy-3411600d.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"bab-rNqOCe3+0jFe5+xXNJDtpyy7sy8\"",
    "mtime": "2023-12-27T12:43:10.779Z",
    "size": 2987,
    "path": "../../.output/public/_build/assets/routing-legacy-3411600d.js.gz"
  },
  "/_build/assets/web-454e75c3.js": {
    "type": "application/javascript",
    "etag": "\"5613-gk79d628QHOWCAOJcy28IlezaO8\"",
    "mtime": "2023-12-27T12:43:10.735Z",
    "size": 22035,
    "path": "../../.output/public/_build/assets/web-454e75c3.js"
  },
  "/_build/assets/web-454e75c3.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"1e30-tmFaQGuvxgm5V8YN/lg7NDbHZAg\"",
    "mtime": "2023-12-27T12:43:10.783Z",
    "size": 7728,
    "path": "../../.output/public/_build/assets/web-454e75c3.js.br"
  },
  "/_build/assets/web-454e75c3.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"2126-zfS1EnyRTShkGT5MHz00kp1nqW4\"",
    "mtime": "2023-12-27T12:43:10.783Z",
    "size": 8486,
    "path": "../../.output/public/_build/assets/web-454e75c3.js.gz"
  },
  "/_build/assets/web-legacy-6bb2d31f.js": {
    "type": "application/javascript",
    "etag": "\"5453-07uWcJtPSYx/OVl+cr/SDH+Dv3Q\"",
    "mtime": "2023-12-27T12:43:10.735Z",
    "size": 21587,
    "path": "../../.output/public/_build/assets/web-legacy-6bb2d31f.js"
  },
  "/_build/assets/web-legacy-6bb2d31f.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"1d4c-VSkxn3VHzMVAZaDs1c140s8STVk\"",
    "mtime": "2023-12-27T12:43:10.799Z",
    "size": 7500,
    "path": "../../.output/public/_build/assets/web-legacy-6bb2d31f.js.br"
  },
  "/_build/assets/web-legacy-6bb2d31f.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"204b-qaPdN3Aox9sl30KHQ/yuOcPY+bw\"",
    "mtime": "2023-12-27T12:43:10.783Z",
    "size": 8267,
    "path": "../../.output/public/_build/assets/web-legacy-6bb2d31f.js.gz"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/assets":{"maxAge":0},"/_build":{"maxAge":0},"/_server/assets":{"maxAge":0}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var C = ((i2) => (i2[i2.AggregateError = 1] = "AggregateError", i2[i2.ArrowFunction = 2] = "ArrowFunction", i2[i2.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", i2[i2.ObjectAssign = 8] = "ObjectAssign", i2[i2.BigIntTypedArray = 16] = "BigIntTypedArray", i2))(C || {});
function f$1(n2, e) {
  if (!n2)
    throw e;
}
function nr(n2) {
  switch (n2) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case `
`:
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return;
  }
}
function d$1(n2) {
  let e = "", r = 0, t;
  for (let s = 0, i2 = n2.length; s < i2; s++)
    t = nr(n2[s]), t && (e += n2.slice(r, s) + t, r = s + 1);
  return r === 0 ? e = n2 : e += n2.slice(r), e;
}
function sr(n2) {
  switch (n2) {
    case "\\\\":
      return "\\";
    case '\\"':
      return '"';
    case "\\n":
      return `
`;
    case "\\r":
      return "\r";
    case "\\b":
      return "\b";
    case "\\t":
      return "	";
    case "\\f":
      return "\f";
    case "\\x3C":
      return "<";
    case "\\u2028":
      return "\u2028";
    case "\\u2029":
      return "\u2029";
    default:
      return n2;
  }
}
function S$1(n2) {
  return n2.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, sr);
}
var x$1 = "__SEROVAL_REFS__", K$1 = "$R";
var Ie = /* @__PURE__ */ new Map(), A$1 = /* @__PURE__ */ new Map();
function Z$1(n2) {
  return Ie.has(n2);
}
function ar(n2) {
  return A$1.has(n2);
}
function Ce(n2) {
  return f$1(Z$1(n2), new Error("Missing reference id")), Ie.get(n2);
}
function Oe(n2) {
  return f$1(ar(n2), new Error("Missing reference for id:" + n2)), A$1.get(n2);
}
typeof globalThis != "undefined" ? Object.defineProperty(globalThis, x$1, { value: A$1, configurable: true, writable: false, enumerable: false }) : typeof self != "undefined" ? Object.defineProperty(self, x$1, { value: A$1, configurable: true, writable: false, enumerable: false }) : typeof global != "undefined" && Object.defineProperty(global, x$1, { value: A$1, configurable: true, writable: false, enumerable: false });
function wr(n2) {
  return n2;
}
function ze(n2, e) {
  for (let r = 0, t = e.length; r < t; r++) {
    let s = e[r];
    n2.has(s) || (n2.add(s), s.extends && ze(n2, s.extends));
  }
}
function c(n2) {
  if (n2) {
    let e = /* @__PURE__ */ new Set();
    return ze(e, n2), [...e];
  }
}
var { toString: lr } = Object.prototype, p$1 = class p extends Error {
  constructor(r) {
    super('Unsupported type "' + lr.call(r) + '"');
    this.value = r;
  }
};
var ke = { 0: "Symbol.asyncIterator", 1: "Symbol.hasInstance", 2: "Symbol.isConcatSpreadable", 3: "Symbol.iterator", 4: "Symbol.match", 5: "Symbol.matchAll", 6: "Symbol.replace", 7: "Symbol.search", 8: "Symbol.species", 9: "Symbol.split", 10: "Symbol.toPrimitive", 11: "Symbol.toStringTag", 12: "Symbol.unscopables" }, L$1 = { [Symbol.asyncIterator]: 0, [Symbol.hasInstance]: 1, [Symbol.isConcatSpreadable]: 2, [Symbol.iterator]: 3, [Symbol.match]: 4, [Symbol.matchAll]: 5, [Symbol.replace]: 6, [Symbol.search]: 7, [Symbol.species]: 8, [Symbol.split]: 9, [Symbol.toPrimitive]: 10, [Symbol.toStringTag]: 11, [Symbol.unscopables]: 12 }, Te = { 0: Symbol.asyncIterator, 1: Symbol.hasInstance, 2: Symbol.isConcatSpreadable, 3: Symbol.iterator, 4: Symbol.match, 5: Symbol.matchAll, 6: Symbol.replace, 7: Symbol.search, 8: Symbol.species, 9: Symbol.split, 10: Symbol.toPrimitive, 11: Symbol.toStringTag, 12: Symbol.unscopables }, Fe = { 2: "!0", 3: "!1", 1: "void 0", 0: "null", 4: "-0", 5: "1/0", 6: "-1/0", 7: "0/0" }, Ve = { 2: true, 3: false, 1: void 0, 0: null, 4: -0, 5: 1 / 0, 6: -1 / 0, 7: NaN };
var X$1 = { 0: "Error", 1: "EvalError", 2: "RangeError", 3: "ReferenceError", 4: "SyntaxError", 5: "TypeError", 6: "URIError" }, De = { 0: Error, 1: EvalError, 2: RangeError, 3: ReferenceError, 4: SyntaxError, 5: TypeError, 6: URIError };
function y(n2) {
  return { t: 2, i: void 0, s: n2, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
var v = y(2), N = y(3), Q$1 = y(1), ee$1 = y(0), Be = y(4), je = y(5), Me = y(6), _e = y(7);
function re(n2) {
  return n2 instanceof EvalError ? 1 : n2 instanceof RangeError ? 2 : n2 instanceof ReferenceError ? 3 : n2 instanceof SyntaxError ? 4 : n2 instanceof TypeError ? 5 : n2 instanceof URIError ? 6 : 0;
}
function ur(n2) {
  let e = X$1[re(n2)];
  return n2.name !== e ? { name: n2.name } : n2.constructor.name !== e ? { name: n2.constructor.name } : {};
}
function O$1(n2, e) {
  let r = ur(n2), t = Object.getOwnPropertyNames(n2);
  for (let s = 0, i2 = t.length, o2; s < i2; s++)
    o2 = t[s], o2 !== "name" && o2 !== "message" && (o2 === "stack" ? e & 4 && (r = r || {}, r[o2] = n2[o2]) : (r = r || {}, r[o2] = n2[o2]));
  return r;
}
function te$1(n2) {
  return Object.isFrozen(n2) ? 3 : Object.isSealed(n2) ? 2 : Object.isExtensible(n2) ? 0 : 1;
}
function ne(n2) {
  switch (n2) {
    case 1 / 0:
      return je;
    case -1 / 0:
      return Me;
  }
  return n2 !== n2 ? _e : Object.is(n2, -0) ? Be : { t: 0, i: void 0, s: n2, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function b(n2) {
  return { t: 1, i: void 0, s: d$1(n2), l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function se(n2) {
  return { t: 3, i: void 0, s: "" + n2, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function We(n2) {
  return { t: 4, i: n2, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function ie(n2, e) {
  return { t: 5, i: n2, s: e.toISOString(), l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, f: void 0, a: void 0, b: void 0, o: void 0 };
}
function oe(n2, e) {
  return { t: 6, i: n2, s: void 0, l: void 0, c: d$1(e.source), m: e.flags, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function ae$1(n2, e) {
  let r = new Uint8Array(e), t = r.length, s = new Array(t);
  for (let i2 = 0; i2 < t; i2++)
    s[i2] = r[i2];
  return { t: 19, i: n2, s, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function Ke(n2, e) {
  return f$1(e in L$1, new Error("Only well-known symbols are supported.")), { t: 17, i: n2, s: L$1[e], l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function Ee(n2, e) {
  return { t: 18, i: n2, s: d$1(Ce(e)), l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function z$1(n2, e, r) {
  return { t: 25, i: n2, s: r, l: void 0, c: d$1(e), m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function le(n2, e, r) {
  return { t: 9, i: n2, s: void 0, l: e.length, c: void 0, m: void 0, p: void 0, e: void 0, a: r, f: void 0, b: void 0, o: te$1(e) };
}
function ue(n2, e) {
  return { t: 21, i: n2, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: e, b: void 0, o: void 0 };
}
function de(n2, e, r) {
  return { t: 15, i: n2, s: void 0, l: e.length, c: e.constructor.name, m: void 0, p: void 0, e: void 0, a: void 0, f: r, b: e.byteOffset, o: void 0 };
}
function ce(n2, e, r) {
  return { t: 16, i: n2, s: void 0, l: e.length, c: e.constructor.name, m: void 0, p: void 0, e: void 0, a: void 0, f: r, b: e.byteOffset, o: void 0 };
}
function fe(n2, e, r) {
  return { t: 20, i: n2, s: void 0, l: e.byteLength, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: r, b: e.byteOffset, o: void 0 };
}
function pe(n2, e, r) {
  return { t: 13, i: n2, s: re(e), l: void 0, c: void 0, m: d$1(e.message), p: r, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function me(n2, e, r) {
  return { t: 14, i: n2, s: re(e), l: void 0, c: void 0, m: d$1(e.message), p: r, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function ge(n2, e, r) {
  return { t: 7, i: n2, s: void 0, l: e, c: void 0, m: void 0, p: void 0, e: void 0, a: r, f: void 0, b: void 0, o: void 0 };
}
function k(n2, e) {
  return { t: 28, i: void 0, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [n2, e], f: void 0, b: void 0, o: void 0 };
}
function T(n2, e) {
  return { t: 30, i: void 0, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [n2, e], f: void 0, b: void 0, o: void 0 };
}
function F$1(n2, e, r) {
  return { t: 31, i: n2, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: r, f: e, b: void 0, o: void 0 };
}
function Se(n2, e) {
  return { t: 32, i: n2, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: e, b: void 0, o: void 0 };
}
function he(n2, e) {
  return { t: 33, i: n2, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: e, b: void 0, o: void 0 };
}
function ye(n2, e) {
  return { t: 34, i: n2, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: e, b: void 0, o: void 0 };
}
function V$1(n2) {
  let e = [], r = -1, t = -1, s = n2[Symbol.iterator]();
  for (; ; )
    try {
      let i2 = s.next();
      if (e.push(i2.value), i2.done) {
        t = e.length - 1;
        break;
      }
    } catch (i2) {
      r = e.length, e.push(i2);
    }
  return { v: e, t: r, d: t };
}
function Le(n2) {
  return () => {
    let e = 0;
    return { [Symbol.iterator]() {
      return this;
    }, next() {
      if (e > n2.d)
        return { done: true, value: void 0 };
      let r = e++, t = n2.v[r];
      if (r === n2.t)
        throw t;
      return { done: r === n2.d, value: t };
    } };
  };
}
var Je = {}, Ye = {};
var Ge = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {} };
var D = class {
  constructor(e) {
    this.marked = /* @__PURE__ */ new Set();
    this.plugins = e.plugins, this.features = 31 ^ (e.disabledFeatures || 0), this.refs = e.refs || /* @__PURE__ */ new Map();
  }
  markRef(e) {
    this.marked.add(e);
  }
  isMarked(e) {
    return this.marked.has(e);
  }
  getIndexedValue(e) {
    let r = this.refs.get(e);
    if (r != null)
      return this.markRef(r), { type: 1, value: We(r) };
    let t = this.refs.size;
    return this.refs.set(e, t), { type: 0, value: t };
  }
  getReference(e) {
    let r = this.getIndexedValue(e);
    return r.type === 1 ? r : Z$1(e) ? { type: 2, value: Ee(r.value, e) } : r;
  }
  getStrictReference(e) {
    f$1(Z$1(e), new Error("Cannot serialize " + typeof e + " without reference ID."));
    let r = this.getIndexedValue(e);
    return r.type === 1 ? r.value : Ee(r.value, e);
  }
  parseFunction(e) {
    return this.getStrictReference(e);
  }
  parseWellKnownSymbol(e) {
    let r = this.getReference(e);
    return r.type !== 0 ? r.value : (f$1(e in L$1, new Error("Cannot serialized unsupported symbol.")), Ke(r.value, e));
  }
  parseSpecialReference(e) {
    let r = this.getIndexedValue(Ge[e]);
    return r.type === 1 ? r.value : { t: 26, i: r.value, s: e, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
  }
  parseIteratorFactory() {
    let e = this.getIndexedValue(Je);
    return e.type === 1 ? e.value : { t: 27, i: e.value, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: this.parseWellKnownSymbol(Symbol.iterator), b: void 0, o: void 0 };
  }
  parseAsyncIteratorFactory() {
    let e = this.getIndexedValue(Ye);
    return e.type === 1 ? e.value : { t: 29, i: e.value, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [this.parseSpecialReference(1), this.parseWellKnownSymbol(Symbol.asyncIterator)], f: void 0, b: void 0, o: void 0 };
  }
  createObjectNode(e, r, t, s) {
    return { t: t ? 11 : 10, i: e, s: void 0, l: void 0, c: void 0, m: void 0, p: s, e: void 0, a: void 0, f: void 0, b: void 0, o: te$1(r) };
  }
  createMapNode(e, r, t, s) {
    return { t: 8, i: e, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: { k: r, v: t, s }, a: void 0, f: this.parseSpecialReference(0), b: void 0, o: void 0 };
  }
};
function J() {
  let n2, e;
  return { promise: new Promise((r, t) => {
    n2 = r, e = t;
  }), resolve(r) {
    n2(r);
  }, reject(r) {
    e(r);
  } };
}
function Ne(n2) {
  return "__SEROVAL_STREAM__" in n2;
}
function B$1() {
  let n2 = /* @__PURE__ */ new Set(), e = [], r = true, t = false;
  function s(a) {
    for (let l2 of n2.keys())
      l2.next(a);
  }
  function i2(a) {
    for (let l2 of n2.keys())
      l2.throw(a);
  }
  function o2(a) {
    for (let l2 of n2.keys())
      l2.return(a);
  }
  return { __SEROVAL_STREAM__: true, on(a) {
    r && n2.add(a);
    for (let l2 = 0, u2 = e.length; l2 < u2; l2++) {
      let g2 = e[l2];
      l2 === u2 - 1 ? t ? a.return(g2) : a.throw(g2) : a.next(g2);
    }
    return () => {
      r && n2.delete(a);
    };
  }, next(a) {
    r && (e.push(a), s(a));
  }, throw(a) {
    r && (e.push(a), i2(a), r = false, t = false, n2.clear());
  }, return(a) {
    r && (e.push(a), o2(a), r = false, t = true, n2.clear());
  } };
}
function be(n2) {
  let e = B$1(), r = n2[Symbol.asyncIterator]();
  async function t() {
    try {
      let s = await r.next();
      s.done ? e.return(s.value) : (e.next(s.value), await t());
    } catch (s) {
      e.throw(s);
    }
  }
  return t().catch(() => {
  }), e;
}
function He(n2) {
  return () => {
    let e = [], r = [], t = 0, s = -1, i2 = false;
    function o2() {
      for (let l2 = 0, u2 = r.length; l2 < u2; l2++)
        r[l2].resolve({ done: true, value: void 0 });
    }
    n2.on({ next(l2) {
      let u2 = r.shift();
      u2 && u2.resolve({ done: false, value: l2 }), e.push(l2);
    }, throw(l2) {
      let u2 = r.shift();
      u2 && u2.reject(l2), o2(), s = e.length, e.push(l2), i2 = true;
    }, return(l2) {
      let u2 = r.shift();
      u2 && u2.resolve({ done: true, value: l2 }), o2(), s = e.length, e.push(l2);
    } });
    function a() {
      let l2 = t++, u2 = e[l2];
      if (l2 !== s)
        return { done: false, value: u2 };
      if (i2)
        throw u2;
      return { done: true, value: u2 };
    }
    return { [Symbol.asyncIterator]() {
      return this;
    }, async next() {
      if (s === -1) {
        let l2 = t++;
        if (l2 >= e.length) {
          let u2 = J();
          return r.push(u2), await u2.promise;
        }
        return { done: false, value: e[l2] };
      }
      return t > s ? { done: true, value: void 0 } : a();
    } };
  };
}
function $e(n2) {
  switch (n2) {
    case "Int8Array":
      return Int8Array;
    case "Int16Array":
      return Int16Array;
    case "Int32Array":
      return Int32Array;
    case "Uint8Array":
      return Uint8Array;
    case "Uint16Array":
      return Uint16Array;
    case "Uint32Array":
      return Uint32Array;
    case "Uint8ClampedArray":
      return Uint8ClampedArray;
    case "Float32Array":
      return Float32Array;
    case "Float64Array":
      return Float64Array;
    case "BigInt64Array":
      return BigInt64Array;
    case "BigUint64Array":
      return BigUint64Array;
    default:
      throw new Error(`Unknown TypedArray "${n2}"`);
  }
}
function qe(n2, e) {
  switch (e) {
    case 3:
      return Object.freeze(n2);
    case 1:
      return Object.preventExtensions(n2);
    case 2:
      return Object.seal(n2);
    default:
      return n2;
  }
}
var E$1 = class E {
  constructor(e) {
    this.plugins = e.plugins, this.refs = e.refs || /* @__PURE__ */ new Map();
  }
  deserializeReference(e) {
    return this.assignIndexedValue(e.i, Oe(S$1(e.s)));
  }
  deserializeArray(e) {
    let r = e.l, t = this.assignIndexedValue(e.i, new Array(r)), s;
    for (let i2 = 0; i2 < r; i2++)
      s = e.a[i2], s && (t[i2] = this.deserialize(s));
    return qe(t, e.o), t;
  }
  deserializeProperties(e, r) {
    let t = e.s;
    if (t) {
      let s = e.k, i2 = e.v;
      for (let o2 = 0, a; o2 < t; o2++)
        a = s[o2], typeof a == "string" ? r[S$1(a)] = this.deserialize(i2[o2]) : r[this.deserialize(a)] = this.deserialize(i2[o2]);
    }
    return r;
  }
  deserializeObject(e) {
    let r = this.assignIndexedValue(e.i, e.t === 10 ? {} : /* @__PURE__ */ Object.create(null));
    return this.deserializeProperties(e.p, r), qe(r, e.o), r;
  }
  deserializeDate(e) {
    return this.assignIndexedValue(e.i, new Date(e.s));
  }
  deserializeRegExp(e) {
    return this.assignIndexedValue(e.i, new RegExp(S$1(e.c), e.m));
  }
  deserializeSet(e) {
    let r = this.assignIndexedValue(e.i, /* @__PURE__ */ new Set()), t = e.a;
    for (let s = 0, i2 = e.l; s < i2; s++)
      r.add(this.deserialize(t[s]));
    return r;
  }
  deserializeMap(e) {
    let r = this.assignIndexedValue(e.i, /* @__PURE__ */ new Map()), t = e.e.k, s = e.e.v;
    for (let i2 = 0, o2 = e.e.s; i2 < o2; i2++)
      r.set(this.deserialize(t[i2]), this.deserialize(s[i2]));
    return r;
  }
  deserializeArrayBuffer(e) {
    let r = new Uint8Array(e.s);
    return this.assignIndexedValue(e.i, r.buffer);
  }
  deserializeTypedArray(e) {
    let r = $e(e.c), t = this.deserialize(e.f);
    return this.assignIndexedValue(e.i, new r(t, e.b, e.l));
  }
  deserializeDataView(e) {
    let r = this.deserialize(e.f);
    return this.assignIndexedValue(e.i, new DataView(r, e.b, e.l));
  }
  deserializeDictionary(e, r) {
    if (e.p) {
      let t = this.deserializeProperties(e.p, {});
      Object.assign(r, t);
    }
    return r;
  }
  deserializeAggregateError(e) {
    let r = this.assignIndexedValue(e.i, new AggregateError([], S$1(e.m)));
    return this.deserializeDictionary(e, r);
  }
  deserializeError(e) {
    let r = De[e.s], t = this.assignIndexedValue(e.i, new r(S$1(e.m)));
    return this.deserializeDictionary(e, t);
  }
  deserializePromise(e) {
    let r = J(), t = this.assignIndexedValue(e.i, r), s = this.deserialize(e.f);
    return e.s ? r.resolve(s) : r.reject(s), t.promise;
  }
  deserializeBoxed(e) {
    return this.assignIndexedValue(e.i, Object(this.deserialize(e.f)));
  }
  deserializePlugin(e) {
    let r = this.plugins;
    if (r) {
      let t = S$1(e.c);
      for (let s = 0, i2 = r.length; s < i2; s++) {
        let o2 = r[s];
        if (o2.tag === t)
          return this.assignIndexedValue(e.i, o2.deserialize(e.s, this, { id: e.i }));
      }
    }
    throw new Error('Missing plugin for tag "' + e.c + '".');
  }
  deserializePromiseConstructor(e) {
    return this.assignIndexedValue(e.i, J()).promise;
  }
  deserializePromiseResolve(e) {
    let r = this.refs.get(e.i);
    f$1(r, new Error("Missing Promise instance.")), r.resolve(this.deserialize(e.a[1]));
  }
  deserializePromiseReject(e) {
    let r = this.refs.get(e.i);
    f$1(r, new Error("Missing Promise instance.")), r.reject(this.deserialize(e.a[1]));
  }
  deserializeIteratorFactoryInstance(e) {
    this.deserialize(e.a[0]);
    let r = this.deserialize(e.a[1]);
    return Le(r);
  }
  deserializeAsyncIteratorFactoryInstance(e) {
    this.deserialize(e.a[0]);
    let r = this.deserialize(e.a[1]);
    return He(r);
  }
  deserializeStreamConstructor(e) {
    let r = this.assignIndexedValue(e.i, B$1()), t = e.a.length;
    if (t)
      for (let s = 0; s < t; s++)
        this.deserialize(e.a[s]);
    return r;
  }
  deserializeStreamNext(e) {
    let r = this.refs.get(e.i);
    f$1(r, new Error("Missing Stream instance.")), r.next(this.deserialize(e.f));
  }
  deserializeStreamThrow(e) {
    let r = this.refs.get(e.i);
    f$1(r, new Error("Missing Stream instance.")), r.throw(this.deserialize(e.f));
  }
  deserializeStreamReturn(e) {
    let r = this.refs.get(e.i);
    f$1(r, new Error("Missing Stream instance.")), r.return(this.deserialize(e.f));
  }
  deserializeIteratorFactory(e) {
    this.deserialize(e.f);
  }
  deserializeAsyncIteratorFactory(e) {
    this.deserialize(e.a[1]);
  }
  deserialize(e) {
    switch (e.t) {
      case 2:
        return Ve[e.s];
      case 0:
        return e.s;
      case 1:
        return S$1(e.s);
      case 3:
        return BigInt(e.s);
      case 4:
        return this.refs.get(e.i);
      case 18:
        return this.deserializeReference(e);
      case 9:
        return this.deserializeArray(e);
      case 10:
      case 11:
        return this.deserializeObject(e);
      case 5:
        return this.deserializeDate(e);
      case 6:
        return this.deserializeRegExp(e);
      case 7:
        return this.deserializeSet(e);
      case 8:
        return this.deserializeMap(e);
      case 19:
        return this.deserializeArrayBuffer(e);
      case 16:
      case 15:
        return this.deserializeTypedArray(e);
      case 20:
        return this.deserializeDataView(e);
      case 14:
        return this.deserializeAggregateError(e);
      case 13:
        return this.deserializeError(e);
      case 12:
        return this.deserializePromise(e);
      case 17:
        return Te[e.s];
      case 21:
        return this.deserializeBoxed(e);
      case 25:
        return this.deserializePlugin(e);
      case 22:
        return this.deserializePromiseConstructor(e);
      case 23:
        return this.deserializePromiseResolve(e);
      case 24:
        return this.deserializePromiseReject(e);
      case 28:
        return this.deserializeIteratorFactoryInstance(e);
      case 30:
        return this.deserializeAsyncIteratorFactoryInstance(e);
      case 31:
        return this.deserializeStreamConstructor(e);
      case 32:
        return this.deserializeStreamNext(e);
      case 33:
        return this.deserializeStreamThrow(e);
      case 34:
        return this.deserializeStreamReturn(e);
      case 27:
        return this.deserializeIteratorFactory(e);
      case 29:
        return this.deserializeAsyncIteratorFactory(e);
      default:
        throw new Error("invariant");
    }
  }
};
var Y = class extends E$1 {
  constructor(r) {
    super(r);
    this.mode = "vanilla";
    this.marked = new Set(r.markedRefs);
  }
  assignIndexedValue(r, t) {
    return this.marked.has(r) && this.refs.set(r, t), t;
  }
};
var cr = /^[$A-Z_][0-9A-Z_$]*$/i;
function we(n2) {
  let e = n2[0];
  return (e === "$" || e === "_" || e >= "A" && e <= "Z" || e >= "a" && e <= "z") && cr.test(n2);
}
function G$1(n2) {
  switch (n2.t) {
    case "index":
      return n2.s + "=" + n2.v;
    case "set":
      return n2.s + ".set(" + n2.k + "," + n2.v + ")";
    case "add":
      return n2.s + ".add(" + n2.v + ")";
    case "delete":
      return n2.s + ".delete(" + n2.k + ")";
    default:
      return "";
  }
}
function fr(n2) {
  let e = [], r = n2[0];
  for (let t = 1, s = n2.length, i2, o2 = r; t < s; t++)
    i2 = n2[t], i2.t === "index" && i2.v === o2.v ? r = { t: "index", s: i2.s, k: void 0, v: G$1(r) } : i2.t === "set" && i2.s === o2.s ? r = { t: "set", s: G$1(r), k: i2.k, v: i2.v } : i2.t === "add" && i2.s === o2.s ? r = { t: "add", s: G$1(r), k: void 0, v: i2.v } : i2.t === "delete" && i2.s === o2.s ? r = { t: "delete", s: G$1(r), k: i2.k, v: void 0 } : (e.push(r), r = i2), o2 = i2;
  return e.push(r), e;
}
function Ze(n2) {
  if (n2.length) {
    let e = "", r = fr(n2);
    for (let t = 0, s = r.length; t < s; t++)
      e += G$1(r[t]) + ",";
    return e;
  }
}
var pr = "Object.create(null)", mr = "new Set", gr = "new Map", Sr = "Promise.resolve", hr = "Promise.reject", yr = { 3: "Object.freeze", 2: "Object.seal", 1: "Object.preventExtensions", 0: void 0 }, R = class {
  constructor(e) {
    this.stack = [];
    this.flags = [];
    this.assignments = [];
    this.plugins = e.plugins, this.features = e.features, this.marked = new Set(e.markedRefs);
  }
  createFunction(e, r) {
    return this.features & 2 ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>" + r : "function(" + e.join(",") + "){return " + r + "}";
  }
  createEffectfulFunction(e, r) {
    return this.features & 2 ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>{" + r + "}" : "function(" + e.join(",") + "){" + r + "}";
  }
  markRef(e) {
    this.marked.add(e);
  }
  isMarked(e) {
    return this.marked.has(e);
  }
  pushObjectFlag(e, r) {
    e !== 0 && (this.markRef(r), this.flags.push({ type: e, value: this.getRefParam(r) }));
  }
  resolveFlags() {
    let e = "";
    for (let r = 0, t = this.flags, s = t.length; r < s; r++) {
      let i2 = t[r];
      e += yr[i2.type] + "(" + i2.value + "),";
    }
    return e;
  }
  resolvePatches() {
    let e = Ze(this.assignments), r = this.resolveFlags();
    return e ? r ? e + r : e : r;
  }
  createAssignment(e, r) {
    this.assignments.push({ t: "index", s: e, k: void 0, v: r });
  }
  createAddAssignment(e, r) {
    this.assignments.push({ t: "add", s: this.getRefParam(e), k: void 0, v: r });
  }
  createSetAssignment(e, r, t) {
    this.assignments.push({ t: "set", s: this.getRefParam(e), k: r, v: t });
  }
  createDeleteAssignment(e, r) {
    this.assignments.push({ t: "delete", s: this.getRefParam(e), k: r, v: void 0 });
  }
  createArrayAssign(e, r, t) {
    this.createAssignment(this.getRefParam(e) + "[" + r + "]", t);
  }
  createObjectAssign(e, r, t) {
    this.createAssignment(this.getRefParam(e) + "." + r, t);
  }
  isIndexedValueInStack(e) {
    return e.t === 4 && this.stack.includes(e.i);
  }
  serializeReference(e) {
    return this.assignIndexedValue(e.i, x$1 + '.get("' + e.s + '")');
  }
  serializeArrayItem(e, r, t) {
    return r ? this.isIndexedValueInStack(r) ? (this.markRef(e), this.createArrayAssign(e, t, this.getRefParam(r.i)), "") : this.serialize(r) : "";
  }
  serializeArray(e) {
    let r = e.i;
    if (e.l) {
      this.stack.push(r);
      let t = e.a, s = this.serializeArrayItem(r, t[0], 0), i2 = s === "";
      for (let o2 = 1, a = e.l, l2; o2 < a; o2++)
        l2 = this.serializeArrayItem(r, t[o2], o2), s += "," + l2, i2 = l2 === "";
      return this.stack.pop(), this.pushObjectFlag(e.o, e.i), this.assignIndexedValue(r, "[" + s + (i2 ? ",]" : "]"));
    }
    return this.assignIndexedValue(r, "[]");
  }
  serializeProperty(e, r, t) {
    if (typeof r == "string") {
      let s = Number(r), i2 = s >= 0 || we(r);
      if (this.isIndexedValueInStack(t)) {
        let o2 = this.getRefParam(t.i);
        return this.markRef(e.i), i2 && s !== s ? this.createObjectAssign(e.i, r, o2) : this.createArrayAssign(e.i, i2 ? r : '"' + r + '"', o2), "";
      }
      return (i2 ? r : '"' + r + '"') + ":" + this.serialize(t);
    }
    return "[" + this.serialize(r) + "]:" + this.serialize(t);
  }
  serializeProperties(e, r) {
    let t = r.s;
    if (t) {
      this.stack.push(e.i);
      let s = r.k, i2 = r.v, o2 = this.serializeProperty(e, s[0], i2[0]);
      for (let a = 1, l2 = o2; a < t; a++)
        l2 = this.serializeProperty(e, s[a], i2[a]), o2 += (l2 && o2 && ",") + l2;
      return this.stack.pop(), "{" + o2 + "}";
    }
    return "{}";
  }
  serializeObject(e) {
    return this.pushObjectFlag(e.o, e.i), this.assignIndexedValue(e.i, this.serializeProperties(e, e.p));
  }
  serializeWithObjectAssign(e, r, t) {
    let s = this.serializeProperties(e, r);
    return s !== "{}" ? "Object.assign(" + t + "," + s + ")" : t;
  }
  serializeStringKeyAssignment(e, r, t, s) {
    let i2 = this.serialize(s), o2 = Number(t), a = o2 >= 0 || we(t);
    if (this.isIndexedValueInStack(s))
      a && o2 !== o2 ? this.createObjectAssign(e.i, t, i2) : this.createArrayAssign(e.i, a ? t : '"' + t + '"', i2);
    else {
      let l2 = this.assignments;
      this.assignments = r, a ? this.createObjectAssign(e.i, t, i2) : this.createArrayAssign(e.i, a ? t : '"' + t + '"', i2), this.assignments = l2;
    }
  }
  serializeAssignment(e, r, t, s) {
    if (typeof t == "string")
      this.serializeStringKeyAssignment(e, r, t, s);
    else {
      let i2 = this.stack;
      this.stack = [];
      let o2 = this.serialize(s);
      this.stack = i2;
      let a = this.assignments;
      this.assignments = r, this.createArrayAssign(e.i, this.serialize(t), o2), this.assignments = a;
    }
  }
  serializeAssignments(e, r) {
    let t = r.s;
    if (t) {
      this.stack.push(e.i);
      let s = [], i2 = r.k, o2 = r.v;
      for (let a = 0; a < t; a++)
        this.serializeAssignment(e, s, i2[a], o2[a]);
      return this.stack.pop(), Ze(s);
    }
  }
  serializeDictionary(e, r) {
    if (e.p)
      if (this.features & 8)
        r = this.serializeWithObjectAssign(e, e.p, r);
      else {
        this.markRef(e.i);
        let t = this.serializeAssignments(e, e.p);
        if (t)
          return "(" + this.assignIndexedValue(e.i, r) + "," + t + this.getRefParam(e.i) + ")";
      }
    return this.assignIndexedValue(e.i, r);
  }
  serializeNullConstructor(e) {
    return this.pushObjectFlag(e.o, e.i), this.serializeDictionary(e, pr);
  }
  serializeDate(e) {
    return this.assignIndexedValue(e.i, 'new Date("' + e.s + '")');
  }
  serializeRegExp(e) {
    return this.assignIndexedValue(e.i, "/" + e.c + "/" + e.m);
  }
  serializeSetItem(e, r) {
    return this.isIndexedValueInStack(r) ? (this.markRef(e), this.createAddAssignment(e, this.getRefParam(r.i)), "") : this.serialize(r);
  }
  serializeSet(e) {
    let r = mr, t = e.l, s = e.i;
    if (t) {
      let i2 = e.a;
      this.stack.push(s);
      let o2 = this.serializeSetItem(s, i2[0]);
      for (let a = 1, l2 = o2; a < t; a++)
        l2 = this.serializeSetItem(s, i2[a]), o2 += (l2 && o2 && ",") + l2;
      this.stack.pop(), o2 && (r += "([" + o2 + "])");
    }
    return this.assignIndexedValue(s, r);
  }
  serializeMapEntry(e, r, t, s) {
    if (this.isIndexedValueInStack(r)) {
      let i2 = this.getRefParam(r.i);
      if (this.markRef(e), this.isIndexedValueInStack(t)) {
        let a = this.getRefParam(t.i);
        return this.createSetAssignment(e, i2, a), "";
      }
      if (t.t !== 4 && t.i != null && this.isMarked(t.i)) {
        let a = "(" + this.serialize(t) + ",[" + s + "," + s + "])";
        return this.createSetAssignment(e, i2, this.getRefParam(t.i)), this.createDeleteAssignment(e, s), a;
      }
      let o2 = this.stack;
      return this.stack = [], this.createSetAssignment(e, i2, this.serialize(t)), this.stack = o2, "";
    }
    if (this.isIndexedValueInStack(t)) {
      let i2 = this.getRefParam(t.i);
      if (this.markRef(e), r.t !== 4 && r.i != null && this.isMarked(r.i)) {
        let a = "(" + this.serialize(r) + ",[" + s + "," + s + "])";
        return this.createSetAssignment(e, this.getRefParam(r.i), i2), this.createDeleteAssignment(e, s), a;
      }
      let o2 = this.stack;
      return this.stack = [], this.createSetAssignment(e, this.serialize(r), i2), this.stack = o2, "";
    }
    return "[" + this.serialize(r) + "," + this.serialize(t) + "]";
  }
  serializeMap(e) {
    let r = gr, t = e.e.s, s = e.i, i2 = e.f, o2 = this.getRefParam(i2.i);
    if (t) {
      let a = e.e.k, l2 = e.e.v;
      this.stack.push(s);
      let u2 = this.serializeMapEntry(s, a[0], l2[0], o2);
      for (let g2 = 1, Ae = u2; g2 < t; g2++)
        Ae = this.serializeMapEntry(s, a[g2], l2[g2], o2), u2 += (Ae && u2 && ",") + Ae;
      this.stack.pop(), u2 && (r += "([" + u2 + "])");
    }
    return i2.t === 26 && (this.markRef(i2.i), r = "(" + this.serialize(i2) + "," + r + ")"), this.assignIndexedValue(s, r);
  }
  serializeArrayBuffer(e) {
    let r = "new Uint8Array(", t = e.s, s = t.length;
    if (s) {
      r += "[" + t[0];
      for (let i2 = 1; i2 < s; i2++)
        r += "," + t[i2];
      r += "]";
    }
    return this.assignIndexedValue(e.i, r + ").buffer");
  }
  serializeTypedArray(e) {
    return this.assignIndexedValue(e.i, "new " + e.c + "(" + this.serialize(e.f) + "," + e.b + "," + e.l + ")");
  }
  serializeDataView(e) {
    return this.assignIndexedValue(e.i, "new DataView(" + this.serialize(e.f) + "," + e.b + "," + e.l + ")");
  }
  serializeAggregateError(e) {
    let r = e.i;
    this.stack.push(r);
    let t = 'new AggregateError([],"' + e.m + '")';
    return this.stack.pop(), this.serializeDictionary(e, t);
  }
  serializeError(e) {
    return this.serializeDictionary(e, "new " + X$1[e.s] + '("' + e.m + '")');
  }
  serializePromise(e) {
    let r, t = e.f, s = e.i, i2 = e.s ? Sr : hr;
    if (this.isIndexedValueInStack(t)) {
      let o2 = this.getRefParam(t.i);
      r = i2 + (e.s ? "().then(" + this.createFunction([], o2) + ")" : "().catch(" + this.createEffectfulFunction([], "throw " + o2) + ")");
    } else {
      this.stack.push(s);
      let o2 = this.serialize(t);
      this.stack.pop(), r = i2 + "(" + o2 + ")";
    }
    return this.assignIndexedValue(s, r);
  }
  serializeWellKnownSymbol(e) {
    return this.assignIndexedValue(e.i, ke[e.s]);
  }
  serializeFormDataEntry(e, r, t) {
    return this.getRefParam(e) + '.append("' + r + '",' + this.serialize(t) + ")";
  }
  serializeBoxed(e) {
    return this.assignIndexedValue(e.i, "Object(" + this.serialize(e.f) + ")");
  }
  serializePlugin(e) {
    let r = this.plugins;
    if (r)
      for (let t = 0, s = r.length; t < s; t++) {
        let i2 = r[t];
        if (i2.tag === e.c)
          return this.assignIndexedValue(e.i, i2.serialize(e.s, this, { id: e.i }));
      }
    throw new Error('Missing plugin for tag "' + e.c + '".');
  }
  getConstructor(e) {
    let r = this.serialize(e);
    return r === this.getRefParam(e.i) ? r : "(" + r + ")";
  }
  serializePromiseConstructor(e) {
    return this.assignIndexedValue(e.i, this.getConstructor(e.f) + "()");
  }
  serializePromiseResolve(e) {
    return this.getConstructor(e.a[0]) + "(" + this.getRefParam(e.i) + "," + this.serialize(e.a[1]) + ")";
  }
  serializePromiseReject(e) {
    return this.getConstructor(e.a[0]) + "(" + this.getRefParam(e.i) + "," + this.serialize(e.a[1]) + ")";
  }
  serializeSpecialReferenceValue(e) {
    switch (e) {
      case 0:
        return "[]";
      case 1:
        return this.createFunction(["s", "f", "p"], "((p=new Promise(" + this.createEffectfulFunction(["a", "b"], "s=a,f=b") + ")).s=s,p.f=f,p)");
      case 2:
        return this.createEffectfulFunction(["p", "d"], 'p.s(d),p.status="success",p.value=d;delete p.s;delete p.f');
      case 3:
        return this.createEffectfulFunction(["p", "d"], 'p.f(d),p.status="failure",p.value=d;delete p.s;delete p.f');
      case 4:
        return this.createFunction(["b", "a", "s", "l", "p", "f", "e", "n"], "(b=[],a=!0,s=!1,l=[],s=0,f=" + this.createEffectfulFunction(["v", "m", "x"], "for(x=0;x<s;x++)l[x]&&l[x][m](v)") + ",n=" + this.createEffectfulFunction(["o", "x", "z", "c"], 'for(x=0,z=b.length;x<z;x++)(c=b[x],x===z-1?o[s?"return":"throw"](c):o.next(c))') + ",e=" + this.createFunction(["o", "t"], "(a&&(l[t=p++]=o),n(o)," + this.createEffectfulFunction([], "a&&(l[t]=void 0)") + ")") + ",{__SEROVAL_STREAM__:!0,on:" + this.createFunction(["o"], "e(o)") + ",next:" + this.createEffectfulFunction(["v"], 'a&&(b.push(v),f(v,"next"))') + ",throw:" + this.createEffectfulFunction(["v"], 'a&&(b.push(v),f(v,"throw"),a=s=!1,l.length=0)') + ",return:" + this.createEffectfulFunction(["v"], 'a&&(b.push(v),f(v,"return"),a=!1,s=!0,l.length=0)') + "})");
      default:
        return "";
    }
  }
  serializeSpecialReference(e) {
    return this.assignIndexedValue(e.i, this.serializeSpecialReferenceValue(e.s));
  }
  serializeIteratorFactory(e) {
    let r = "", t = false;
    return e.f.t !== 4 && (this.markRef(e.f.i), r = "(" + this.serialize(e.f) + ",", t = true), r += this.assignIndexedValue(e.i, this.createFunction(["s"], this.createFunction(["i", "c", "d", "t"], "(i=0,t={[" + this.getRefParam(e.f.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction([], "if(i>s.d)return{done:!0,value:void 0};if(d=s.v[c=i++],c===s.t)throw d;return{done:c===s.d,value:d}") + "})"))), t && (r += ")"), r;
  }
  serializeIteratorFactoryInstance(e) {
    return this.getConstructor(e.a[0]) + "(" + this.serialize(e.a[1]) + ")";
  }
  serializeAsyncIteratorFactory(e) {
    let r = e.a[0], t = e.a[1], s = "";
    r.t !== 4 && (this.markRef(r.i), s += "(" + this.serialize(r)), t.t !== 4 && (this.markRef(t.i), s += (s ? "," : "(") + this.serialize(t)), s && (s += ",");
    let i2 = this.assignIndexedValue(e.i, this.createFunction(["s"], this.createFunction(["b", "c", "p", "d", "e", "t", "f"], "(b=[],c=0,p=[],d=-1,e=!1,f=" + this.createEffectfulFunction(["i", "l"], "for(i=0,l=p.length;i<l;i++)p[i].s({done:!0,value:void 0})") + ",s.on({next:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!1,value:v});b.push(v)") + ",throw:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.f(v);f(),d=b.length,e=!0,b.push(v)") + ",return:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!0,value:v});f(),d=b.length,b.push(v)") + "}),t={[" + this.getRefParam(t.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction(["i", "t", "v"], "if(d===-1){return((i=c++)>=b.length)?(p.push(t=" + this.getRefParam(r.i) + "()),t):{done:!0,value:b[i]}}if(c>d)return{done:!0,value:void 0};if(v=b[i=c++],i!==d)return{done:!1,value:v};if(e)throw v;return{done:!0,value:v}") + "})")));
    return s ? s + i2 + ")" : i2;
  }
  serializeAsyncIteratorFactoryInstance(e) {
    return this.getConstructor(e.a[0]) + "(" + this.serialize(e.a[1]) + ")";
  }
  serializeStreamConstructor(e) {
    let r = this.assignIndexedValue(e.i, this.getConstructor(e.f) + "()"), t = e.a.length;
    if (t) {
      let s = this.serialize(e.a[0]);
      for (let i2 = 1; i2 < t; i2++)
        s += "," + this.serialize(e.a[i2]);
      return "(" + r + "," + s + "," + this.getRefParam(e.i) + ")";
    }
    return r;
  }
  serializeStreamNext(e) {
    return this.getRefParam(e.i) + ".next(" + this.serialize(e.f) + ")";
  }
  serializeStreamThrow(e) {
    return this.getRefParam(e.i) + ".throw(" + this.serialize(e.f) + ")";
  }
  serializeStreamReturn(e) {
    return this.getRefParam(e.i) + ".return(" + this.serialize(e.f) + ")";
  }
  serialize(e) {
    switch (e.t) {
      case 2:
        return Fe[e.s];
      case 0:
        return "" + e.s;
      case 1:
        return '"' + e.s + '"';
      case 3:
        return e.s + "n";
      case 4:
        return this.getRefParam(e.i);
      case 18:
        return this.serializeReference(e);
      case 9:
        return this.serializeArray(e);
      case 10:
        return this.serializeObject(e);
      case 11:
        return this.serializeNullConstructor(e);
      case 5:
        return this.serializeDate(e);
      case 6:
        return this.serializeRegExp(e);
      case 7:
        return this.serializeSet(e);
      case 8:
        return this.serializeMap(e);
      case 19:
        return this.serializeArrayBuffer(e);
      case 16:
      case 15:
        return this.serializeTypedArray(e);
      case 20:
        return this.serializeDataView(e);
      case 14:
        return this.serializeAggregateError(e);
      case 13:
        return this.serializeError(e);
      case 12:
        return this.serializePromise(e);
      case 17:
        return this.serializeWellKnownSymbol(e);
      case 21:
        return this.serializeBoxed(e);
      case 22:
        return this.serializePromiseConstructor(e);
      case 23:
        return this.serializePromiseResolve(e);
      case 24:
        return this.serializePromiseReject(e);
      case 25:
        return this.serializePlugin(e);
      case 26:
        return this.serializeSpecialReference(e);
      case 27:
        return this.serializeIteratorFactory(e);
      case 28:
        return this.serializeIteratorFactoryInstance(e);
      case 29:
        return this.serializeAsyncIteratorFactory(e);
      case 30:
        return this.serializeAsyncIteratorFactoryInstance(e);
      case 31:
        return this.serializeStreamConstructor(e);
      case 32:
        return this.serializeStreamNext(e);
      case 33:
        return this.serializeStreamThrow(e);
      case 34:
        return this.serializeStreamReturn(e);
      default:
        throw new Error("invariant");
    }
  }
};
var m$1 = class m extends D {
  parseItems(e) {
    let r = [];
    for (let t = 0, s = e.length; t < s; t++)
      t in e && (r[t] = this.parse(e[t]));
    return r;
  }
  parseArray(e, r) {
    return le(e, r, this.parseItems(r));
  }
  parseProperties(e) {
    let r = Object.entries(e), t = [], s = [];
    for (let o2 = 0, a = r.length; o2 < a; o2++)
      t.push(d$1(r[o2][0])), s.push(this.parse(r[o2][1]));
    let i2 = Symbol.iterator;
    return i2 in e && (t.push(this.parseWellKnownSymbol(i2)), s.push(k(this.parseIteratorFactory(), this.parse(V$1(e))))), i2 = Symbol.asyncIterator, i2 in e && (t.push(this.parseWellKnownSymbol(i2)), s.push(T(this.parseAsyncIteratorFactory(), this.parse(B$1())))), i2 = Symbol.toStringTag, i2 in e && (t.push(this.parseWellKnownSymbol(i2)), s.push(b(e[i2]))), i2 = Symbol.isConcatSpreadable, i2 in e && (t.push(this.parseWellKnownSymbol(i2)), s.push(e[i2] ? v : N)), { k: t, v: s, s: t.length };
  }
  parsePlainObject(e, r, t) {
    return this.createObjectNode(e, r, t, this.parseProperties(r));
  }
  parseBoxed(e, r) {
    return ue(e, this.parse(r.valueOf()));
  }
  parseTypedArray(e, r) {
    return de(e, r, this.parse(r.buffer));
  }
  parseBigIntTypedArray(e, r) {
    return ce(e, r, this.parse(r.buffer));
  }
  parseDataView(e, r) {
    return fe(e, r, this.parse(r.buffer));
  }
  parseError(e, r) {
    let t = O$1(r, this.features);
    return pe(e, r, t ? this.parseProperties(t) : void 0);
  }
  parseAggregateError(e, r) {
    let t = O$1(r, this.features);
    return me(e, r, t ? this.parseProperties(t) : void 0);
  }
  parseMap(e, r) {
    let t = [], s = [];
    for (let [i2, o2] of r.entries())
      t.push(this.parse(i2)), s.push(this.parse(o2));
    return this.createMapNode(e, t, s, r.size);
  }
  parseSet(e, r) {
    let t = [];
    for (let s of r.keys())
      t.push(this.parse(s));
    return ge(e, r.size, t);
  }
  parsePlugin(e, r) {
    let t = this.plugins;
    if (t)
      for (let s = 0, i2 = t.length; s < i2; s++) {
        let o2 = t[s];
        if (o2.parse.sync && o2.test(r))
          return z$1(e, o2.tag, o2.parse.sync(r, this, { id: e }));
      }
  }
  parseStream(e, r) {
    return F$1(e, this.parseSpecialReference(4), []);
  }
  parsePromise(e, r) {
    return { t: 22, i: e, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: this.parseSpecialReference(1), b: void 0, o: void 0 };
  }
  parseObject(e, r) {
    if (Array.isArray(r))
      return this.parseArray(e, r);
    if (Ne(r))
      return this.parseStream(e, r);
    let t = this.parsePlugin(e, r);
    if (t)
      return t;
    let s = r.constructor;
    switch (s) {
      case Object:
        return this.parsePlainObject(e, r, false);
      case void 0:
        return this.parsePlainObject(e, r, true);
      case Date:
        return ie(e, r);
      case RegExp:
        return oe(e, r);
      case Error:
      case EvalError:
      case RangeError:
      case ReferenceError:
      case SyntaxError:
      case TypeError:
      case URIError:
        return this.parseError(e, r);
      case Number:
      case Boolean:
      case String:
      case BigInt:
        return this.parseBoxed(e, r);
      case ArrayBuffer:
        return ae$1(e, r);
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case Uint8Array:
      case Uint16Array:
      case Uint32Array:
      case Uint8ClampedArray:
      case Float32Array:
      case Float64Array:
        return this.parseTypedArray(e, r);
      case DataView:
        return this.parseDataView(e, r);
      case Map:
        return this.parseMap(e, r);
      case Set:
        return this.parseSet(e, r);
    }
    if (s === Promise || r instanceof Promise)
      return this.parsePromise(e, r);
    let i2 = this.features;
    if (i2 & 16)
      switch (s) {
        case BigInt64Array:
        case BigUint64Array:
          return this.parseBigIntTypedArray(e, r);
      }
    if (i2 & 1 && typeof AggregateError != "undefined" && (s === AggregateError || r instanceof AggregateError))
      return this.parseAggregateError(e, r);
    if (r instanceof Error)
      return this.parseError(e, r);
    if (Symbol.iterator in r || Symbol.asyncIterator in r)
      return this.parsePlainObject(e, r, !!s);
    throw new p$1(r);
  }
  parse(e) {
    switch (typeof e) {
      case "boolean":
        return e ? v : N;
      case "undefined":
        return Q$1;
      case "string":
        return b(e);
      case "number":
        return ne(e);
      case "bigint":
        return se(e);
      case "object": {
        if (e) {
          let r = this.getReference(e);
          return r.type === 0 ? this.parseObject(r.value, e) : r.value;
        }
        return ee$1;
      }
      case "symbol":
        return this.parseWellKnownSymbol(e);
      case "function":
        return this.parseFunction(e);
      default:
        throw new p$1(e);
    }
  }
};
function vn(n2, e = {}) {
  let r = c(e.plugins);
  return new Y({ plugins: r, markedRefs: n2.m }).deserialize(n2.t);
}
var P = class extends R {
  constructor(r) {
    super(r);
    this.mode = "cross";
    this.scopeId = r.scopeId;
  }
  getRefParam(r) {
    return K$1 + "[" + r + "]";
  }
  assignIndexedValue(r, t) {
    return this.getRefParam(r) + "=" + t;
  }
  serializeTop(r) {
    let t = this.serialize(r), s = r.i;
    if (s == null)
      return t;
    let i2 = this.resolvePatches(), o2 = this.getRefParam(s), a = this.scopeId == null ? "" : K$1, l2 = i2 ? t + "," + i2 + o2 : t;
    if (a === "")
      return i2 ? "(" + l2 + ")" : l2;
    let u2 = this.scopeId == null ? "()" : "(" + K$1 + '["' + d$1(this.scopeId) + '"])';
    return "(" + this.createFunction([a], l2) + ")" + u2;
  }
};
var $ = class extends m$1 {
  constructor(r) {
    super(r);
    this.alive = true;
    this.pending = 0;
    this.initial = true;
    this.buffer = [];
    this.onParseCallback = r.onParse, this.onErrorCallback = r.onError, this.onDoneCallback = r.onDone;
  }
  onParseInternal(r, t) {
    try {
      this.onParseCallback(r, t);
    } catch (s) {
      this.onError(s);
    }
  }
  flush() {
    for (let r = 0, t = this.buffer.length; r < t; r++)
      this.onParseInternal(this.buffer[r], false);
  }
  onParse(r) {
    this.initial ? this.buffer.push(r) : this.onParseInternal(r, false);
  }
  onError(r) {
    if (this.onErrorCallback)
      this.onErrorCallback(r);
    else
      throw r;
  }
  onDone() {
    this.onDoneCallback && this.onDoneCallback();
  }
  pushPendingState() {
    this.pending++;
  }
  popPendingState() {
    --this.pending <= 0 && this.onDone();
  }
  parseProperties(r) {
    let t = Object.entries(r), s = [], i2 = [];
    for (let a = 0, l2 = t.length; a < l2; a++)
      s.push(d$1(t[a][0])), i2.push(this.parse(t[a][1]));
    let o2 = Symbol.iterator;
    return o2 in r && (s.push(this.parseWellKnownSymbol(o2)), i2.push(k(this.parseIteratorFactory(), this.parse(V$1(r))))), o2 = Symbol.asyncIterator, o2 in r && (s.push(this.parseWellKnownSymbol(o2)), i2.push(T(this.parseAsyncIteratorFactory(), this.parse(be(r))))), o2 = Symbol.toStringTag, o2 in r && (s.push(this.parseWellKnownSymbol(o2)), i2.push(b(r[o2]))), o2 = Symbol.isConcatSpreadable, o2 in r && (s.push(this.parseWellKnownSymbol(o2)), i2.push(r[o2] ? v : N)), { k: s, v: i2, s: s.length };
  }
  parsePromise(r, t) {
    return t.then((s) => {
      let i2 = this.parseWithError(s);
      i2 && this.onParse({ t: 23, i: r, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [this.parseSpecialReference(2), i2], f: void 0, b: void 0, o: void 0 }), this.popPendingState();
    }, (s) => {
      if (this.alive) {
        let i2 = this.parseWithError(s);
        i2 && this.onParse({ t: 24, i: r, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [this.parseSpecialReference(3), i2], f: void 0, b: void 0, o: void 0 });
      }
      this.popPendingState();
    }), this.pushPendingState(), { t: 22, i: r, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: this.parseSpecialReference(1), b: void 0, o: void 0 };
  }
  parsePlugin(r, t) {
    let s = this.plugins;
    if (s)
      for (let i2 = 0, o2 = s.length; i2 < o2; i2++) {
        let a = s[i2];
        if (a.parse.stream && a.test(t))
          return z$1(r, a.tag, a.parse.stream(t, this, { id: r }));
      }
  }
  parseStream(r, t) {
    let s = F$1(r, this.parseSpecialReference(4), []);
    return this.pushPendingState(), t.on({ next: (i2) => {
      if (this.alive) {
        let o2 = this.parseWithError(i2);
        o2 && this.onParse(Se(r, o2));
      }
    }, throw: (i2) => {
      if (this.alive) {
        let o2 = this.parseWithError(i2);
        o2 && this.onParse(he(r, o2));
      }
      this.popPendingState();
    }, return: (i2) => {
      if (this.alive) {
        let o2 = this.parseWithError(i2);
        o2 && this.onParse(ye(r, o2));
      }
      this.popPendingState();
    } }), s;
  }
  parseWithError(r) {
    try {
      return this.parse(r);
    } catch (t) {
      this.onError(t);
      return;
    }
  }
  start(r) {
    let t = this.parseWithError(r);
    t && (this.onParseInternal(t, true), this.initial = false, this.flush(), this.pending <= 0 && this.destroy());
  }
  destroy() {
    this.alive && (this.onDone(), this.alive = false);
  }
  isAlive() {
    return this.alive;
  }
};
var U = class extends $ {
  constructor() {
    super(...arguments);
    this.mode = "cross";
  }
};
function tr(n2, e) {
  let r = c(e.plugins), t = new U({ plugins: r, refs: e.refs, disabledFeatures: e.disabledFeatures, onParse(s, i2) {
    let o2 = new P({ plugins: r, features: t.features, scopeId: e.scopeId, markedRefs: t.marked }), a;
    try {
      a = o2.serializeTop(s);
    } catch (l2) {
      e.onError && e.onError(l2);
      return;
    }
    e.onSerialize(a, i2);
  }, onError: e.onError, onDone: e.onDone });
  return t.start(n2), () => {
    t.destroy();
  };
}
function p2(e) {
  return { detail: e.detail, bubbles: e.bubbles, cancelable: e.cancelable, composed: e.composed };
}
var E2 = wr({ tag: "seroval-plugins/web/CustomEvent", test(e) {
  return typeof CustomEvent == "undefined" ? false : e instanceof CustomEvent;
}, parse: { sync(e, r) {
  return { type: r.parse(e.type), options: r.parse(p2(e)) };
}, async async(e, r) {
  return { type: await r.parse(e.type), options: await r.parse(p2(e)) };
}, stream(e, r) {
  return { type: r.parse(e.type), options: r.parse(p2(e)) };
} }, serialize(e, r) {
  return "new CustomEvent(" + r.serialize(e.type) + "," + r.serialize(e.options) + ")";
}, deserialize(e, r) {
  return new CustomEvent(r.deserialize(e.type), r.deserialize(e.options));
} }), F = E2;
var I = wr({ tag: "seroval-plugins/web/DOMException", test(e) {
  return typeof DOMException == "undefined" ? false : e instanceof DOMException;
}, parse: { sync(e, r) {
  return { name: r.parse(e.name), message: r.parse(e.message) };
}, async async(e, r) {
  return { name: await r.parse(e.name), message: await r.parse(e.message) };
}, stream(e, r) {
  return { name: r.parse(e.name), message: r.parse(e.message) };
} }, serialize(e, r) {
  return "new DOMException(" + r.serialize(e.message) + "," + r.serialize(e.name) + ")";
}, deserialize(e, r) {
  return new DOMException(r.deserialize(e.message), r.deserialize(e.name));
} }), B = I;
function u(e) {
  return { bubbles: e.bubbles, cancelable: e.cancelable, composed: e.composed };
}
var L = wr({ tag: "seroval-plugins/web/Event", test(e) {
  return typeof Event == "undefined" ? false : e instanceof Event;
}, parse: { sync(e, r) {
  return { type: r.parse(e.type), options: r.parse(u(e)) };
}, async async(e, r) {
  return { type: await r.parse(e.type), options: await r.parse(u(e)) };
}, stream(e, r) {
  return { type: r.parse(e.type), options: r.parse(u(e)) };
} }, serialize(e, r) {
  return "new Event(" + r.serialize(e.type) + "," + r.serialize(e.options) + ")";
}, deserialize(e, r) {
  return new Event(r.deserialize(e.type), r.deserialize(e.options));
} }), O = L;
var q = wr({ tag: "seroval-plugins/web/File", test(e) {
  return typeof File == "undefined" ? false : e instanceof File;
}, parse: { async async(e, r) {
  return { name: await r.parse(e.name), options: await r.parse({ type: e.type, lastModified: e.lastModified }), buffer: await r.parse(await e.arrayBuffer()) };
} }, serialize(e, r) {
  return "new File([" + r.serialize(e.buffer) + "]," + r.serialize(e.name) + "," + r.serialize(e.options) + ")";
}, deserialize(e, r) {
  return new File([r.deserialize(e.buffer)], r.deserialize(e.name), r.deserialize(e.options));
} }), d = q;
function f(e) {
  let r = [];
  return e.forEach((s, a) => {
    r.push([a, s]);
  }), r;
}
var n = {}, H = wr({ tag: "seroval-plugins/web/FormDataFactory", test(e) {
  return e === n;
}, parse: { sync() {
}, async async() {
  return await Promise.resolve(void 0);
}, stream() {
} }, serialize(e, r) {
  return r.createEffectfulFunction(["e", "f", "i", "s", "t"], "f=new FormData;for(i=0,s=e.length;i<s;i++)f.append((t=e[i])[0],t[1]);return f");
}, deserialize() {
  return n;
} }), M = wr({ tag: "seroval-plugins/web/FormData", extends: [d, H], test(e) {
  return typeof FormData == "undefined" ? false : e instanceof FormData;
}, parse: { sync(e, r) {
  return { factory: r.parse(n), entries: r.parse(f(e)) };
}, async async(e, r) {
  return { factory: await r.parse(n), entries: await r.parse(f(e)) };
}, stream(e, r) {
  return { factory: r.parse(n), entries: r.parse(f(e)) };
} }, serialize(e, r) {
  return "(" + r.serialize(e.factory) + ")(" + r.serialize(e.entries) + ")";
}, deserialize(e, r) {
  let s = new FormData(), a = r.deserialize(e.entries);
  for (let t = 0, b2 = a.length; t < b2; t++) {
    let c2 = a[t];
    s.append(c2[0], c2[1]);
  }
  return s;
} }), A = M;
function m2(e) {
  let r = [];
  return e.forEach((s, a) => {
    r.push([a, s]);
  }), r;
}
var _ = wr({ tag: "seroval-plugins/web/Headers", test(e) {
  return typeof Headers == "undefined" ? false : e instanceof Headers;
}, parse: { sync(e, r) {
  return r.parse(m2(e));
}, async async(e, r) {
  return await r.parse(m2(e));
}, stream(e, r) {
  return r.parse(m2(e));
} }, serialize(e, r) {
  return "new Headers(" + r.serialize(e) + ")";
}, deserialize(e, r) {
  return new Headers(r.deserialize(e));
} }), i = _;
var o = {}, V = wr({ tag: "seroval-plugins/web/ReadableStreamFactory", test(e) {
  return e === o;
}, parse: { sync() {
}, async async() {
  return await Promise.resolve(void 0);
}, stream() {
} }, serialize(e, r) {
  return r.createFunction(["d"], "new ReadableStream({start:" + r.createEffectfulFunction(["c"], "d.on({next:" + r.createEffectfulFunction(["v"], "c.enqueue(v)") + ",throw:" + r.createEffectfulFunction(["v"], "c.error(v)") + ",return:" + r.createEffectfulFunction([], "c.close()") + "})") + "})");
}, deserialize() {
  return o;
} });
function g(e) {
  let r = B$1(), s = e.getReader();
  async function a() {
    try {
      let t = await s.read();
      t.done ? r.return(t.value) : (r.next(t.value), await a());
    } catch (t) {
      r.throw(t);
    }
  }
  return a().catch(() => {
  }), r;
}
var G = wr({ tag: "seroval/plugins/web/ReadableStream", extends: [V], test(e) {
  return typeof ReadableStream == "undefined" ? false : e instanceof ReadableStream;
}, parse: { sync(e, r) {
  return { factory: r.parse(o), stream: r.parse(B$1()) };
}, async async(e, r) {
  return { factory: await r.parse(o), stream: await r.parse(g(e)) };
}, stream(e, r) {
  return { factory: r.parse(o), stream: r.parse(g(e)) };
} }, serialize(e, r) {
  return "(" + r.serialize(e.factory) + ")(" + r.serialize(e.stream) + ")";
}, deserialize(e, r) {
  let s = r.deserialize(e.stream);
  return new ReadableStream({ start(a) {
    s.on({ next(t) {
      a.enqueue(t);
    }, throw(t) {
      a.error(t);
    }, return() {
      a.close();
    } });
  } });
} }), l = G;
function z(e, r) {
  return { body: r, cache: e.cache, credentials: e.credentials, headers: e.headers, integrity: e.integrity, keepalive: e.keepalive, method: e.method, mode: e.mode, redirect: e.redirect, referrer: e.referrer, referrerPolicy: e.referrerPolicy };
}
var K = wr({ tag: "seroval-plugins/web/Request", extends: [l, i], test(e) {
  return typeof Request == "undefined" ? false : e instanceof Request;
}, parse: { async async(e, r) {
  return { url: await r.parse(e.url), options: await r.parse(z(e, e.body ? await e.clone().arrayBuffer() : null)) };
}, stream(e, r) {
  return { url: r.parse(e.url), options: r.parse(z(e, e.clone().body)) };
} }, serialize(e, r) {
  return "new Request(" + r.serialize(e.url) + "," + r.serialize(e.options) + ")";
}, deserialize(e, r) {
  return new Request(r.deserialize(e.url), r.deserialize(e.options));
} }), Q = K;
function S(e) {
  return { headers: e.headers, status: e.status, statusText: e.statusText };
}
var X = wr({ tag: "seroval-plugins/web/Response", extends: [l, i], test(e) {
  return typeof Response == "undefined" ? false : e instanceof Response;
}, parse: { async async(e, r) {
  return { body: await r.parse(e.body ? await e.clone().arrayBuffer() : null), options: await r.parse(S(e)) };
}, stream(e, r) {
  return { body: r.parse(e.clone().body), options: r.parse(S(e)) };
} }, serialize(e, r) {
  return "new Response(" + r.serialize(e.body) + "," + r.serialize(e.options) + ")";
}, deserialize(e, r) {
  return new Response(r.deserialize(e.body), r.deserialize(e.options));
} }), Z = X;
var x = wr({ tag: "seroval-plugins/web/URLSearchParams", test(e) {
  return typeof URLSearchParams == "undefined" ? false : e instanceof URLSearchParams;
}, parse: { sync(e, r) {
  return r.parse(e.toString());
}, async async(e, r) {
  return await r.parse(e.toString());
}, stream(e, r) {
  return r.parse(e.toString());
} }, serialize(e, r) {
  return "new URLSearchParams(" + r.serialize(e) + ")";
}, deserialize(e, r) {
  return new URLSearchParams(r.deserialize(e));
} }), ee = x;
var ae = wr({ tag: "seroval-plugins/web/URL", test(e) {
  return typeof URL == "undefined" ? false : e instanceof URL;
}, parse: { sync(e, r) {
  return r.parse(e.href);
}, async async(e, r) {
  return await r.parse(e.href);
}, stream(e, r) {
  return r.parse(e.href);
} }, serialize(e, r) {
  return "new URL(" + r.serialize(e) + ")";
}, deserialize(e, r) {
  return new URL(r.deserialize(e));
} }), te = ae;
const genericMessage = "Invariant Violation";
const {
  setPrototypeOf = function(obj, proto) {
    obj.__proto__ = proto;
    return obj;
  }
} = Object;
class InvariantError extends Error {
  constructor(message = genericMessage) {
    super(typeof message === "number" ? `${genericMessage}: ${message} (see https://github.com/apollographql/invariant-packages)` : message);
    __publicField(this, "framesToPop", 1);
    __publicField(this, "name", genericMessage);
    setPrototypeOf(this, InvariantError.prototype);
  }
}
function invariant(condition, message) {
  if (!condition) {
    throw new InvariantError(message);
  }
}
const h3EventSymbol$1 = Symbol("h3Event");
const fetchEventSymbol$1 = Symbol("fetchEvent");
const eventTraps$1 = {
  get(target, prop) {
    var _a;
    if (prop === fetchEventSymbol$1)
      return target;
    return (_a = target[prop]) != null ? _a : target[h3EventSymbol$1][prop];
  }
};
function createFetchEvent$1(event) {
  return new Proxy({
    request: toWebRequest(event),
    clientAddress: getRequestIP(event),
    locals: {},
    // @ts-ignore
    [h3EventSymbol$1]: event
  }, eventTraps$1);
}
function getFetchEvent$1(h3Event) {
  if (!h3Event[fetchEventSymbol$1]) {
    const fetchEvent = createFetchEvent$1(h3Event);
    h3Event[fetchEventSymbol$1] = fetchEvent;
  }
  return h3Event[fetchEventSymbol$1];
}
function serializeToStream(id, value) {
  return new ReadableStream({
    start(controller) {
      tr(value, {
        scopeId: id,
        plugins: [F, B, O, A, i, l, Q, Z, ee, te],
        onSerialize(data, initial) {
          const result = initial ? `($R["${id}"]=[],${data})` : data;
          controller.enqueue(new TextEncoder().encode(`${result};
`));
        },
        onDone() {
          controller.close();
        },
        onError(error) {
          controller.error(error);
        }
      });
    }
  });
}
async function handleServerFunction(event) {
  invariant(event.method === "POST", `Invalid method ${event.method}. Expected POST.`);
  const serverReference = getHeader(event, "x-server-id");
  const instance = getHeader(event, "x-server-instance");
  const url = getRequestURL(event);
  let filepath, name;
  if (serverReference) {
    invariant(typeof serverReference === "string", "Invalid server function");
    [filepath, name] = serverReference.split("#");
  } else {
    filepath = url.searchParams.get("id");
    name = url.searchParams.get("name");
    if (!filepath || !name)
      throw new Error("Invalid request");
  }
  const action = (await globalThis.MANIFEST["server-fns"].chunks[filepath].import())[name];
  let parsed = [];
  if (!instance) {
    const args = url.searchParams.get("args");
    if (args)
      JSON.parse(args).forEach((arg) => parsed.push(arg));
  }
  const contentType = getHeader(event, "content-type");
  if (contentType.startsWith("multipart/form-data") || contentType.startsWith("application/x-www-form-urlencoded")) {
    parsed.push(await readFormData(event));
  } else {
    parsed = vn(await readBody(event), {
      plugins: [F, B, O, A, i, l, Q, Z, ee, te]
    });
  }
  try {
    const result = await provideRequestEvent(getFetchEvent$1(event), () => action(...parsed));
    if (!instance) {
      const isError = result instanceof Error;
      const refererUrl = new URL(getHeader(event, "referer"));
      return new Response(null, {
        status: 302,
        headers: {
          Location: refererUrl.toString(),
          ...result ? {
            "Set-Cookie": `flash=${JSON.stringify({
              url: url.pathname + encodeURIComponent(url.search),
              result: isError ? result.message : result,
              error: isError,
              input: [...parsed.slice(0, -1), [...parsed[parsed.length - 1].entries()]]
            })}; Secure; HttpOnly;`
          } : {}
        }
      });
    }
    setHeader(event, "content-type", "text/javascript");
    return serializeToStream(instance, result);
  } catch (x2) {
    if (x2 instanceof Response && x2.status === 302) {
      return new Response(null, {
        status: instance ? 204 : 302,
        headers: {
          Location: x2.headers.get("Location")
        }
      });
    }
    return new Response(serializeToStream(instance, x2), {
      status: 500,
      headers: {
        "Content-Type": "text/javascript"
      }
    });
  }
}
const handler$1 = eventHandler(handleServerFunction);

const fileRoutes = [{
  "type": "page",
  "$component": {
    "src": "src/routes/[...404].tsx?pick=default&pick=$css",
    "build": () => import(
      /* @vite-ignore */
      './chunks/build/_...404_.mjs'
    ),
    "import": () => import(
      /* @vite-ignore */
      './chunks/build/_...404_.mjs'
    )
  },
  "path": "/*404",
  "filePath": "/home/quentin/Documents/dev/test/test-cmp/src/routes/[...404].tsx"
}, {
  "type": "page",
  "$component": {
    "src": "src/routes/about.tsx?pick=default&pick=$css",
    "build": () => import(
      /* @vite-ignore */
      './chunks/build/about.mjs'
    ),
    "import": () => import(
      /* @vite-ignore */
      './chunks/build/about.mjs'
    )
  },
  "path": "/about",
  "filePath": "/home/quentin/Documents/dev/test/test-cmp/src/routes/about.tsx"
}, {
  "type": "page",
  "$component": {
    "src": "src/routes/index.tsx?pick=default&pick=$css",
    "build": () => import(
      /* @vite-ignore */
      './chunks/build/index.mjs'
    ),
    "import": () => import(
      /* @vite-ignore */
      './chunks/build/index.mjs'
    )
  },
  "path": "/",
  "filePath": "/home/quentin/Documents/dev/test/test-cmp/src/routes/index.tsx"
}];
const pageRoutes = defineRoutes(fileRoutes.filter((o) => o.type === "page"));
const apiRoutes = defineAPIRoutes(fileRoutes.filter((o) => o.type === "api"));
function matchAPIRoute(path, method) {
  const segments = path.split("/").filter(Boolean);
  routeLoop:
    for (const route of apiRoutes) {
      const matchSegments = route.matchSegments;
      if (segments.length < matchSegments.length || !route.wildcard && segments.length > matchSegments.length) {
        continue;
      }
      for (let index = 0; index < matchSegments.length; index++) {
        const match = matchSegments[index];
        if (!match) {
          continue;
        }
        if (segments[index] !== match) {
          continue routeLoop;
        }
      }
      const handler2 = route[`$${method}`];
      if (handler2 === "skip" || handler2 === void 0) {
        return;
      }
      const params = {};
      for (const {
        type,
        name,
        index
      } of route.params) {
        if (type === ":") {
          params[name] = segments[index];
        } else {
          params[name] = segments.slice(index).join("/");
        }
      }
      return {
        handler: handler2,
        params
      };
    }
}
function defineRoutes(fileRoutes2) {
  function processRoute(routes, route, id, full) {
    const parentRoute = Object.values(routes).find((o) => {
      return id.startsWith(o.id + "/");
    });
    if (!parentRoute) {
      routes.push({
        ...route,
        id,
        path: id.replace(/\/\([^)/]+\)/g, "")
      });
      return routes;
    }
    processRoute(parentRoute.children || (parentRoute.children = []), route, id.slice(parentRoute.id.length));
    return routes;
  }
  return fileRoutes2.sort((a, b) => a.path.length - b.path.length).reduce((prevRoutes, route) => {
    return processRoute(prevRoutes, route, route.path, route.path);
  }, []);
}
function defineAPIRoutes(routes) {
  return routes.flatMap((route) => {
    const paths = expandOptionals(route.path);
    return paths.map((path) => ({
      ...route,
      path
    }));
  }).map(routeToMatchRoute).sort((a, b) => b.score - a.score);
}
function expandOptionals(pattern) {
  let match = /(\/?\:[^\/]+)\?/.exec(pattern);
  if (!match)
    return [pattern];
  let prefix = pattern.slice(0, match.index);
  let suffix = pattern.slice(match.index + match[0].length);
  const prefixes = [prefix, prefix += match[1]];
  while (match = /^(\/\:[^\/]+)\?/.exec(suffix)) {
    prefixes.push(prefix += match[1]);
    suffix = suffix.slice(match[0].length);
  }
  return expandOptionals(suffix).reduce((results, expansion) => [...results, ...prefixes.map((p) => p + expansion)], []);
}
function routeToMatchRoute(route) {
  const segments = route.path.split("/").filter(Boolean);
  const params = [];
  const matchSegments = [];
  let score = 0;
  let wildcard = false;
  for (const [index, segment] of segments.entries()) {
    if (segment[0] === ":") {
      const name = segment.slice(1);
      score += 3;
      params.push({
        type: ":",
        name,
        index
      });
      matchSegments.push(null);
    } else if (segment[0] === "*") {
      score -= 1;
      params.push({
        type: "*",
        name: segment.slice(1),
        index
      });
      wildcard = true;
    } else {
      score += 4;
      matchSegments.push(segment);
    }
  }
  return {
    ...route,
    score,
    params,
    matchSegments,
    wildcard
  };
}
const h3EventSymbol = Symbol("h3Event");
const fetchEventSymbol = Symbol("fetchEvent");
const eventTraps = {
  get(target, prop) {
    var _a;
    if (prop === fetchEventSymbol)
      return target;
    return (_a = target[prop]) != null ? _a : target[h3EventSymbol][prop];
  }
};
function createFetchEvent(event) {
  return new Proxy({
    request: toWebRequest(event),
    clientAddress: getRequestIP(event),
    locals: {},
    // @ts-ignore
    [h3EventSymbol]: event
  }, eventTraps);
}
function getFetchEvent(h3Event) {
  if (!h3Event[fetchEventSymbol]) {
    const fetchEvent = createFetchEvent(h3Event);
    h3Event[fetchEventSymbol] = fetchEvent;
  }
  return h3Event[fetchEventSymbol];
}
const _tmpl$$2 = " ";
const assetMap = {
  style: (props) => ssrElement("style", props.attrs, () => escape(props.children), true),
  link: (props) => ssrElement("link", props.attrs, void 0, true),
  script: (props) => {
    return props.attrs.src ? ssrElement("script", mergeProps(() => props.attrs, {
      get id() {
        return props.key;
      }
    }), () => ssr(_tmpl$$2), true) : null;
  }
};
function renderAsset(asset) {
  let {
    tag,
    attrs: {
      key,
      ...attrs
    } = {
      key: void 0
    },
    children
  } = asset;
  return assetMap[tag]({
    attrs,
    key,
    children
  });
}
function lazyRoute(component, clientManifest, serverManifest, exported = "default") {
  return lazy(async () => {
    var _a;
    {
      const mod = await component.import();
      const Component = mod[exported];
      let assets = await ((_a = clientManifest.inputs) == null ? void 0 : _a[component.src].assets());
      const styles = assets.filter((asset) => asset.tag === "style" || asset.attrs.rel === "stylesheet");
      const Comp = (props) => {
        return [...styles.map((asset) => renderAsset(asset)), createComponent$1(Component, props)];
      };
      return {
        default: Comp
      };
    }
  });
}
function createRoutes() {
  function createRoute(route) {
    return {
      ...route,
      ...route.$$route ? route.$$route.require().route : void 0,
      metadata: {
        ...route.$$route ? route.$$route.require().route.metadata : {},
        filesystem: true
      },
      component: lazyRoute(route.$component, globalThis.MANIFEST["client"], globalThis.MANIFEST["ssr"]),
      children: route.children ? route.children.map(createRoute) : void 0
    };
  }
  const routes = pageRoutes.map(createRoute);
  return routes;
}
function initFromFlash(ctx) {
  const flash = getCookie(ctx, "flash");
  if (!flash)
    return;
  let param = JSON.parse(flash);
  if (!param || !param.result)
    return [];
  const input = [...param.input.slice(0, -1), new Map(param.input[param.input.length - 1])];
  setCookie(ctx, "flash", "", {
    maxAge: 0
  });
  return {
    url: param.url,
    result: param.error ? new Error(param.result) : param.result,
    input
  };
}
async function createPageEvent(ctx) {
  const clientManifest = globalThis.MANIFEST["client"];
  globalThis.MANIFEST["ssr"];
  setResponseHeader(ctx, "Content-Type", "text/html");
  const pageEvent = Object.assign(ctx, {
    manifest: await clientManifest.json(),
    assets: [...await clientManifest.inputs[clientManifest.handler].assets(), ...[]],
    initialSubmission: initFromFlash(ctx),
    routes: createRoutes(),
    components: {
      status: (props) => {
        setResponseStatus(ctx, props.code, props.text);
        return () => setResponseStatus(ctx, 200);
      },
      header: (props) => {
        if (props.append) {
          appendResponseHeader(ctx, props.name, props.value);
        } else {
          setResponseHeader(ctx, props.name, props.value);
        }
        return () => {
          const value = getResponseHeader(ctx, props.name);
          if (value && typeof value === "string") {
            const values = value.split(", ");
            const index = values.indexOf(props.value);
            index !== -1 && values.splice(index, 1);
            if (values.length)
              setResponseHeader(ctx, props.name, values.join(", "));
            else
              removeResponseHeader(ctx, props.name);
          }
        };
      }
    },
    // prevUrl: prevPath || "",
    // mutation: mutation,
    // $type: FETCH_EVENT,
    $islands: /* @__PURE__ */ new Set()
  });
  return pageEvent;
}
function createHandler(fn, options = {}) {
  return eventHandler({
    onRequest: options.onRequest,
    onBeforeResponse: options.onBeforeResponse,
    handler: (e) => {
      const event = getFetchEvent(e);
      return provideRequestEvent(event, async () => {
        const match = matchAPIRoute(new URL(event.request.url).pathname, event.request.method);
        if (match) {
          const mod = await match.handler.import();
          const fn2 = mod[event.request.method];
          event.params = match.params;
          return await fn2(event);
        }
        const context = await createPageEvent(event);
        let cloned = {
          ...options
        };
        if (cloned.onCompleteAll) {
          const og = cloned.onCompleteAll;
          cloned.onCompleteAll = (options2) => {
            handleStreamCompleteRedirect(context)(options2);
            og(options2);
          };
        } else
          cloned.onCompleteAll = handleStreamCompleteRedirect(context);
        if (cloned.onCompleteShell) {
          const og = cloned.onCompleteShell;
          cloned.onCompleteShell = (options2) => {
            handleShellCompleteRedirect(context, e)();
            og(options2);
          };
        } else
          cloned.onCompleteShell = handleShellCompleteRedirect(context, e);
        const stream = renderToStream(() => fn(context), cloned);
        if (context.response && context.response.headers.get("Location")) {
          return sendRedirect(event, context.response.headers.get("Location"));
        }
        const {
          writable,
          readable
        } = new TransformStream();
        stream.pipeTo(writable);
        return readable;
      });
    }
  });
}
function handleShellCompleteRedirect(context, e) {
  return () => {
    if (context.response && context.response.headers.get("Location")) {
      setResponseStatus(e, 302);
      setHeader(e, "Location", context.response.headers.get("Location"));
    }
  };
}
function handleStreamCompleteRedirect(context) {
  return ({
    write
  }) => {
    const to = context.response && context.response.headers.get("Location");
    to && write(`<script>window.location="${to}"<\/script>`);
  };
}
const _tmpl$$1 = ["<script", ">$R = [];<\/script>"], _tmpl$2$1 = ["<script", ">", "<\/script>"], _tmpl$3 = ["<script", ' type="module"', "><\/script>"];
const docType = ssr("<!DOCTYPE html>");
function StartServer(props) {
  const context = getRequestEvent();
  return createComponent(NoHydration, {
    get children() {
      return [docType, createComponent(props.document, {
        get assets() {
          return [ssr(_tmpl$$1, ssrHydrationKey()), context.assets.map((m) => renderAsset(m))];
        },
        get scripts() {
          return [ssr(_tmpl$2$1, ssrHydrationKey(), `window.manifest = ${JSON.stringify(context.manifest)}`), ssr(_tmpl$3, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST["client"].inputs[globalThis.MANIFEST["client"].handler].output.path, true), false))];
        }
      })];
    }
  });
}
const _tmpl$ = ['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico">', "</head>"], _tmpl$2 = ["<html", ' lang="en">', '<body><div id="app">', "</div><!--$-->", "<!--/--></body></html>"];
const handler = createHandler(() => createComponent(StartServer, {
  document: ({
    assets,
    children,
    scripts
  }) => ssr(_tmpl$2, ssrHydrationKey(), createComponent(NoHydration, {
    get children() {
      return ssr(_tmpl$, escape(assets));
    }
  }), escape(children), escape(scripts))
}));

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: handler$1, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: handler, lazy: false, middleware: true, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
trapUnhandledNodeErrors();

export { localFetch };
//# sourceMappingURL=index.mjs.map
