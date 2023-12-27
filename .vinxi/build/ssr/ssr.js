import { ssrElement, escape, mergeProps, ssr, renderToStream, getRequestEvent, createComponent as createComponent$1, NoHydration, ssrHydrationKey, ssrAttribute } from "solid-js/web";
import { toWebRequest, getRequestIP, setResponseHeader, setResponseStatus, appendResponseHeader, getResponseHeader, removeResponseHeader, getCookie, setCookie, eventHandler, sendRedirect, setHeader } from "h3";
import { provideRequestEvent } from "solid-js/web/storage";
import { lazy, createComponent } from "solid-js";
const fileRoutes = [{
  "type": "page",
  "$component": {
    "src": "src/routes/[...404].tsx?pick=default&pick=$css",
    "build": () => import(
      /* @vite-ignore */
      "./_...404_.js"
    ),
    "import": () => import(
      /* @vite-ignore */
      "./_...404_.js"
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
      "./about.js"
    ),
    "import": () => import(
      /* @vite-ignore */
      "./about.js"
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
      "./index.js"
    ),
    "import": () => import(
      /* @vite-ignore */
      "./index.js"
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
    if (prop === fetchEventSymbol)
      return target;
    return target[prop] ?? target[h3EventSymbol][prop];
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
    {
      const mod = await component.import();
      const Component = mod[exported];
      let assets = await clientManifest.inputs?.[component.src].assets();
      const styles = assets.filter((asset) => asset.tag === "style" || asset.attrs.rel === "stylesheet");
      const Comp = (props) => {
        return [...styles.map((asset) => renderAsset(asset)), createComponent(Component, props)];
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
  return createComponent$1(NoHydration, {
    get children() {
      return [docType, createComponent$1(props.document, {
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
const handler = createHandler(() => createComponent$1(StartServer, {
  document: ({
    assets,
    children,
    scripts
  }) => ssr(_tmpl$2, ssrHydrationKey(), createComponent$1(NoHydration, {
    get children() {
      return ssr(_tmpl$, escape(assets));
    }
  }), escape(children), escape(scripts))
}));
export {
  handler as default
};
