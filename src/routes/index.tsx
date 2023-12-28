import {createEffect} from "solid-js";
// import {useRosetty} from "../test";
// import {useRosetty} from "rosetty-solid";

import bg from '../../public/test.jpeg';


import 'vidstack/player/styles/default/theme.css';
import 'vidstack/player/styles/default/layouts/video.css';


import 'vidstack/player';
import 'vidstack/player/layouts';
import 'vidstack/player/ui';




export default function Home() {
  // const i18n=useRosetty();

  // createEffect(() => {
  //   console.log(i18n);
  // })

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <img src="/cursor.svg" />
      <img src={bg} />

    YOUTUBE VIDEO: 
      <media-player title="Sprite Fight" src="youtube/_cMxraX_5RE">
        <media-provider></media-provider>
        <media-video-layout thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"></media-video-layout>
      </media-player>


      {/* <button class="border" onClick={() => i18n.changeLang('en')}>EN</button>
      <button class="border" onClick={() => i18n.changeLang('fr')}>fr</button>
      {i18n.t('test')} */}
    </main>
  );
}
