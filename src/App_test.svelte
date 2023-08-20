<script>
import Fontfetcher from "./Fontfetcher.svelte"
import Header from "./Header.svelte"
/* import IndentedThotsView from "./IndentedThotsView.svelte" */
/* import Container from "./Container.svelte"  */
import MultilineTextarea from './lib/MultilineTextarea.svelte'
import {getContext, onMount} from 'svelte'

import * as glob from './themes/green_cozy/global_variables.json';

let i = 1
let hi = window.innerHeight
let hi2 = window.outerHeight
let hi3 = document.documentElement.clientHeight
let hi4 = window.visualViewport.height

let keyboard_toolbar;
function locate_keyboard_toolbar() {
  keyboard_toolbar.style.top = (window.visualViewport.height - Number(getComputedStyle(keyboard_toolbar).height.match(/(\d+)/)[0])) +"px"
}
visualViewport.onresize = () => {
  locate_keyboard_toolbar()
};

onMount(() => {
  locate_keyboard_toolbar()
})

//setInterval(() => alert(hi + "/" + hi2 + "/" + hi4), 10000);

let IndentedThotsView_elem;
//const onCtrlShiftArrowKeydown = getContext('onCtrlShiftArrowKeydown')
//const onCtrlShiftArrowKeydown = () => {onCtrlShiftArrowKeydown/*alert('ctrl shift arrow keydown')*/}

</script>


<main id="App">
  <Fontfetcher />
  <div id="keyboard_toolbar" bind:this={keyboard_toolbar}>
    <button>⮝</button>
    <button on:click={() => {IndentedThotsView_elem.onCtrlShiftArrowKeydown('ArrowDown')}}>⮟</button>
    <button>⮜</button>
    <button>⮞</button>
  </div>
  <div id="command_palette">
    <MultilineTextarea
    placeholder={
    `command pallete...
(search a thot by typing its heading / specific prop value / directory, modify settings, ect.)`
    }
    color={glob.light_green}
    />
  </div>
  <Header />
  <!--<IndentedThotsView bind:this={IndentedThotsView_elem}/>-->
  <div id='background'></div>
  <div id='test'>
    폰트 테스트
    가나다라마바사 ABCDEFG
    The quick brown fox jumps over the lazy dog
    다람쥐 헌 쳇바퀴에 타고파
    !@#$%^&*
    asdfsaf
    <div>{hi} / {hi2} / {hi3} / {hi4}</div>
  </div>
  
  <!-- <div id="noise"></div> -->
  
</main>


<style lang="stylus">
  @import "/themes/green_cozy/App"
</style>