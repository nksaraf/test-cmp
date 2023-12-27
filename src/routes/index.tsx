import {createEffect} from "solid-js";
// import {useRosetty} from "../test";
// import {useRosetty} from "rosetty-solid";

import bg from '../../public/test.jpeg';

export default function Home() {
  // const i18n=useRosetty();

  // createEffect(() => {
  //   console.log(i18n);
  // })

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <img src="/cursor.svg" />
      <img src={bg} />
      {/* <button class="border" onClick={() => i18n.changeLang('en')}>EN</button>
      <button class="border" onClick={() => i18n.changeLang('fr')}>fr</button>
      {i18n.t('test')} */}
    </main>
  );
}
