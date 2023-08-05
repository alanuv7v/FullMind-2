<!-- UI 라이브러리 참고: https://joyofcode.xyz/svelte-ui-libraries
특히 요거 맘에듬 https://carbon-components-svelte.onrender.com/components/Tooltip
그 외
https://illright.github.io/attractions//docs/components/text-field
https://daisyui.com/components/

라이브러리의 장점은 잘 알겠다. 그러나 단점이 있다면?:
https://armadillo-dev.github.io/ui/ux/benefit-and-cost-of-ui-component-framework/

...결국 CSS가 중요한 상황이 오기 전까진 일단 쓰지 말자.
로직부터 짜고, 나중에 생각하자. UI 라이브러리는 미관을 고려할 때 사용하자. 지금은 미관은 제껴두자.

-->


<script>
import Fontfetcher from "./Fontfetcher.svelte"
import Header from "./Header.svelte"
import Content from "./Content.svelte"
import MultilineTextarea from './lib/MultilineTextarea.svelte'
import Container from "./Container.svelte"

let container = {
  index: [1,1,1],
  thot: {id: 5, heading: '3th', content: 'thot 1.1.1', children: []}
}

let i = 1

</script>

<main>
  <Header />
  폰트 테스트
  가나다라마바사 ABCDEFG
  The quick brown fox jumps over the lazy dog
  다람쥐 헌 쳇바퀴에 타고파
  !@#$%^&*
  asdfsaf
  <MultilineTextarea placeholder={"hi"}/>
  <Container {container} {i}/>
  <Content />
</main>


<style>
  main {
    height: 800px;
  }

</style>