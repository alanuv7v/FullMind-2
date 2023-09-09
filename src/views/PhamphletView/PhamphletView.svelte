<script>
  import Container from './Container.svelte'
  import { default_container_data } from '../../default';
  import {setContext} from "svelte"
  import {thisHead} from "../../heads/head_1"

  let data = structuredClone(default_container_data)
  let test_target_data = structuredClone(default_container_data)

  test_target_data.thot.id = 1
  test_target_data.thot.heading = "test_reason"

  data.thot.relations['conclusions-reasons'].reasons = [test_target_data.thot.id]

  let page_data = []
  const pages_data = [
    [data]
  ]

  //states
    const pageWidth = "400px"

  
  /* on keydown(event)
  if (event.key == ctrl+shift+arrow):
    create new ghostContainer, horizontalCursor under the focus-readyContainer */
  

  function expandRelationExtreme(extreme_value, source_page_index) {
    //fetch related thots that are close to the extreme
    //get left or right section
    //if needed, add one more page in pages var
    //>>>
    alert(source_page_index)
    let related_thots = []
    for (let id of extreme_value) {
      //related_thots.push(thisHead.thots[id]) 사실 이게 맞지만 지금은:
      related_thots.push(test_target_data)
    }
    
    let target_page_data = related_thots
    if (!pages_data[source_page_index+1]) { //if the target page does not exist yet:
      pages_data.push(target_page_data) //pages_data가 변함에 따라 ui 자동 업데이트.
    } else {
      target_page_data = pages_data[source_page_index+1]
    }
    console.log(pages_data)
    
  }
  setContext('expandRelationExtreme', expandRelationExtreme)


</script>
PhamphletView
<main>
  {#each pages_data as page_data, i}
    <div class='page'>
    {#each page_data as data, i}
      <Container {data}/>
    {/each}
    </div> 
  {/each}
</main>


<style>
  main {
    display: flex;
    flex-direction: row;
  }
  .page {
    width: fit-content;
  }
</style>