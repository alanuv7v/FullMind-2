<script>
  const pages = []
  const pageWidth = "400px"
  setContext

  on keydown(event)
  if (event.key == ctrl+shift+arrow):
    create new ghostContainer, horizontalCursor under the focus-readyContainer
    


 



</script>

<main>
  {#each pages as page, i}
    <div class='.page' style="width:"+{pageWidth}>
    </div> 
  {/each}
</main>


<style>
  .main {
    display: flex;
    flex-direction: row;
  }
  .page {
  }
</style>