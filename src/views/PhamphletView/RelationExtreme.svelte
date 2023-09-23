<button class="dot-line-wrapper" on:click={expandRelationExtreme(
    Object.values(data.thot.relations[relation][
      Object.keys(data.thot.relations[relation])[1]]
    ), page_index
  )}>
  <div class="target-extreme extreme">{Object.keys(data.thot.relations[relation])[1]}</div>
  <button class="dot-line"></button>
  <div class="source-extreme extreme">{Object.keys(data.thot.relations[relation])[0]}</div>
</button>





<style>
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