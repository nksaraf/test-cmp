import {serverFunctions} from '@vinxi/server-functions/plugin';
import {createApp} from 'vinxi';
import solid from 'vite-plugin-solid';

export function defineConfig() {
  return createApp({
    routers: [
      {
        name: 'public',
        mode: 'static',
        dir: './public',
        base: '/',
      },
      {
        name: 'client',
        mode: 'build',
        handler: './src/entry-client.tsx',
        target: 'browser',
        plugins: () => [serverFunctions.client(),solid({ssr: true})],
        base: '/_build',
      },
      {
        name: 'ssr',
        mode: 'handler',
        handler: './src/entry-server.tsx',
        target: 'server',
        plugins: () => [solid({ssr: true})],
      },
      serverFunctions.router(),
    ],
  });
}

const config=defineConfig();

config.addRouter({
  mode: 'static',
  name: 'solid-start-cmp',
  dir: 'node_modules/solid-start-cmp/public',
  base: '/',
});

export default config;
