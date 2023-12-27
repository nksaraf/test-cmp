
import "./app.css";

import {Link,Meta,MetaProvider} from '@solidjs/meta';
import {Router} from '@solidjs/router';
import {FileRoutes} from '@solidjs/start';
import {QueryClient,QueryClientProvider} from '@tanstack/solid-query';
//@ts-ignore
import fr from 'dayjs/locale/fr';
import {RosettyProvider} from 'rosetty-solid';
import {createEffect,Suspense} from 'solid-js';
// import {RosettyProvider} from "./test";


const queryClient=new QueryClient();

const EmbeddedApp=() => {
  // const i18n=useI18n();

  // createEffect(() => {
  //   document.documentElement.setAttribute('lang',i18n.actualLang()!);
  // });

  return (
    <>
      <Link rel="icon" href="favicon.ico" />
      <Router
        root={(props) => (<>
            {/* <Nav /> */}
          <Suspense>{props.children}</Suspense></>
        )}
      >
        <FileRoutes />
      </Router>
    </>
  );
};

export default function Root() {
  return (
    <>
      <MetaProvider>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <QueryClientProvider client={queryClient}> */}

        {/* <RosettyProvider languages={{fr: {dict: {test: 'toto'}},en: {dict: {test: 'EN'}}}} defaultLanguage={"fr"}> */}
            Under rosetty
            <Suspense>
              <EmbeddedApp />
            </Suspense>
          {/* </RosettyProvider> */}
        {/* </QueryClientProvider> */}
      </MetaProvider>
    </>
  );
}
