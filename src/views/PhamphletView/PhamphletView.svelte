<script>
  import Container from './Container.svelte'
  import { default_container_data } from '../../default';

  const pages = [1,2, 3]
  const pageWidth = "400px"

  /* on keydown(event)
  if (event.key == ctrl+shift+arrow):
    create new ghostContainer, horizontalCursor under the focus-readyContainer */
  
  let data = default_container_data

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