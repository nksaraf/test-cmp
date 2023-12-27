import { ssrElement, mergeProps as mergeProps$1 } from "solid-js/web";
import { createContext, createMemo, useContext, mergeProps, splitProps } from "solid-js";
const trimPathRegex = /^\/+|(\/)\/+$/g;
function normalizePath(path, omitSlash = false) {
  const s = path.replace(trimPathRegex, "$1");
  return s ? omitSlash || /^[?#]/.test(s) ? s : "/" + s : "";
}
function invariant(value, message) {
  if (value == null) {
    throw new Error(message);
  }
  return value;
}
const RouterContextObj = createContext();
const RouteContextObj = createContext();
const useRouter = () => invariant(useContext(RouterContextObj), "Make sure your app is wrapped in a <Router />");
const useRoute = () => useContext(RouteContextObj) || useRouter().base;
const useResolvedPath = (path) => {
  const route = useRoute();
  return createMemo(() => route.resolvePath(path()));
};
const useHref = (to) => {
  const router = useRouter();
  return createMemo(() => {
    const to_ = to();
    return to_ !== void 0 ? router.renderPath(to_) : to_;
  });
};
const useLocation = () => useRouter().location;
function A(props) {
  props = mergeProps({
    inactiveClass: "inactive",
    activeClass: "active"
  }, props);
  const [, rest] = splitProps(props, ["href", "state", "class", "activeClass", "inactiveClass", "end"]);
  const to = useResolvedPath(() => props.href);
  const href = useHref(to);
  const location = useLocation();
  const isActive = createMemo(() => {
    const to_ = to();
    if (to_ === void 0)
      return false;
    const path = normalizePath(to_.split(/[?#]/, 1)[0]).toLowerCase();
    const loc = normalizePath(location.pathname).toLowerCase();
    return props.end ? path === loc : loc.startsWith(path);
  });
  return ssrElement("a", mergeProps$1(rest, {
    get href() {
      return href() || props.href;
    },
    get state() {
      return JSON.stringify(props.state);
    },
    get classList() {
      return {
        ...props.class && {
          [props.class]: true
        },
        [props.inactiveClass]: !isActive(),
        [props.activeClass]: isActive(),
        ...rest.classList
      };
    },
    link: true,
    get ["aria-current"]() {
      return isActive() ? "page" : void 0;
    }
  }), void 0, true);
}
export {
  A
};
