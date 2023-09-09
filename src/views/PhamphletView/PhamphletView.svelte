<script>
  import Container from './Container.svelte'
  import { default_container_data } from '../../default';
  import {setContext} from "svelte"

  const pages = [1,2, 3]
  const pageWidth = "400px"

  /* on keydown(event)
  if (event.key == ctrl+shift+arrow):
    create new ghostContainer, horizontalCursor under the focus-readyContainer */
  
  let data = default_container_data
  let test_target_data = default_container_data

  test_target_data.thot.id = 1
  test_target_data.thot.heading = "test conclusion"

  data.thot.relations['conclusions-reasons'].conclusions = [test_target_data.thot.id]

  function expandRelationExtreme(extreme) {
    //fetch related thots that are close to the extreme
    //get left or right section
    //if needed, add one more page in pages var
    //>>>
    alert(`let's expand`)
    console.log(extreme)
    
  }
  setContext('expandRelationExtreme', expandRelationExtreme)


</script>
PhamphletView
<main>
  {#each pages as page, i}
    <div class='page'>
      <Container {data}/>
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