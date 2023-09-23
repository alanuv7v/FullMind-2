<script>
  import {createEventDispatcher} from "svelte"
  export let targetExtreme, sourceExtreme, page_index
  const dispatch = createEventDispatcher()

</script>

<button class="dot-line-wrapper" on:click={() => {dispatch("expandRelationExtreme", targetExtreme)}}>
  <div class="target-extreme extreme">{targetExtreme}</div>
  <button class="dot-line"></button>
  <div class="source-extreme extreme">{sourceExtreme}</div>
</button>

<style lang="stylus">
@import "../../themes/green_cozy/global_variables"
.dot-line-wrapper {
  width: 40px;
  height: fit-content;
  padding: 17px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: none;
  background: none;
  box-shadow: none;
  &:hover {
    width: 200px;
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