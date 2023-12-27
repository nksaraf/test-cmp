import { ssr, ssrHydrationKey, escape, createComponent } from 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/solid-js@1.8.7/node_modules/solid-js/web/dist/server.js';
import { A } from './components-c540a06b.mjs';
import 'file:///home/quentin/Documents/dev/test/test-cmp/node_modules/.pnpm/solid-js@1.8.7/node_modules/solid-js/dist/server.js';

const _tmpl$ = ["<main", ' class="text-center mx-auto text-gray-700 p-4"><h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Not Found</h1><p class="mt-8">Visit <a href="https://solidjs.com" target="_blank" class="text-sky-600 hover:underline">solidjs.com</a> to learn how to build Solid apps.</p><p class="my-4"><!--$-->', "<!--/--> - <!--$-->", "<!--/--></p></main>"];
function NotFound() {
  return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(A, {
    href: "/",
    "class": "text-sky-600 hover:underline",
    children: "Home"
  })), escape(createComponent(A, {
    href: "/about",
    "class": "text-sky-600 hover:underline",
    children: "About Page"
  })));
}

export { NotFound as default };
//# sourceMappingURL=_...404_.mjs.map
