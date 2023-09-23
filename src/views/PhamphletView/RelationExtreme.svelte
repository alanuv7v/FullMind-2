<script>
  import {createEventDispatcher} from "svelte"
  export let targetExtreme, sourceExtreme, page_index
  const dispatch = createEventDispatcher()

  export let linePos
  let wrapper
  let dotLine

  let OnHoverLength = '0px'

  $: if (linePos && dotLine) {
    OnHoverLength = ((2*(linePos.left - wrapper.getBoundingClientRect().left)) + 'px')
    console.log(OnHoverLength)
  }
  
</script>

<button class="dot-line-wrapper" 
bind:this={wrapper}
on:click={() => {dispatch("expandRelationExtreme", targetExtreme)}}
on:mouseenter={()=>{wrapper.style.width=OnHoverLength}}
on:mouseleave={()=>{wrapper.style.width='100%'}}>
  <div class="target-extreme extreme">{targetExtreme}</div>
  <button class="dot-line" bind:this={dotLine}></button>
  <div class="source-extreme extreme">{sourceExtreme}</div>
</button>

<style lang="stylus">
@import "../../themes/green_cozy/global_variables"
  * {
    transition: all 0.5s ease;
  }
.dot-line-wrapper {
  width: 100%;
  
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  border: none;
  background: none;
  box-shadow: none;

  &:hover {
    /*width: 200px;*/
    .dot-line {
      background-color: vivid_green;
    }
  }
  &:not(:hover) {
    border-color: transparent !important;
    outline-color: transparent !important;
    .extreme {
      color: transparent;
    }
    .dot-line {
      background-color: gray;
    }
  }
}
&:hover {
  border-color: gray;
  .dot-line {
    background-color: gray;
  }
}
.target-extreme {
  margin-left: auto;
}
.source-extreme {
  margin-right: auto;
}
.dot-line {
  background-color: transparent;
  width: 100%;
  height: 6px;
  border-radius: 100px;
  border: none;
  background: none;
  box-shadow: none;
  
}
</style>