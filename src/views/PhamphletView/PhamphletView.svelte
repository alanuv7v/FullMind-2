<script>
  const pages = [1]
  const pageWidth = "400px"

  /* on keydown(event)
  if (event.key == ctrl+shift+arrow):
    create new ghostContainer, horizontalCursor under the focus-readyContainer */
    
</script>
PhamphletView
<main>
  {#each pages as page, i}
    <div class='.page' style={"width:"+pageWidth}>
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