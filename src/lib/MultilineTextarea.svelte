<svelte:options accessors />

<script>
  import {createEventDispatcher} from 'svelte'
  
  export let inputTextarea;
  let visibleTextarea;
  export let placeholder;

  function onTextareaChange() {
    function resizeTextarea() {
      inputTextarea.style.height = "0px"
      inputTextarea.style.height = (inputTextarea.scrollHeight) + "px"
      visibleTextarea.style.height = inputTextarea.style.height
      visibleTextarea.value = inputTextarea.value //높이 먼저 변한 후 value 변경됨
    }
    resizeTextarea() 
  }

  const dispatch = createEventDispatcher()
  
  function onTextareaKeydown(e) {
    dispatch('keydown', {keyevent: e})
  }
  function onTextareaFocus(e) {
    dispatch('focus')
  }

</script>

<div id="textareas">
  <textarea
    bind:this={inputTextarea}
    on:keydown={(e) => {onTextareaKeydown(e)}}
    on:input={() => onTextareaChange()}
    on:focus={() => onTextareaFocus()}
    id="inputTextarea" rows="1"
    placeholder={placeholder}></textarea>
  <textarea
    bind:this={visibleTextarea}
    on:focus={() => inputTextarea.focus()}
    id="visibleTextarea" spellcheck="false" rows="1"></textarea>
</div>

<style>
  #textareas {
    position:relative; /* 중요 */
    width: 100%;
    height: fit-content;
    display: flex; /* 중요 */
  }
  textarea {
    background-color: transparent;

    font-size: inherit;
    
    width: 100%;
    
    padding: 0px;
    overflow-y: hidden;
    resize: none;
  }
  #visibleTextarea {
    background-color: transparent;
    border:none;
  }
  #inputTextarea {
    position:absolute;
    border: 1px solid transparent;
    color: transparent;
    background-color: transparent;
    z-index: 1;
    transition: none !important; /* 진짜 중요 */
  }
  #inputTextarea::selection {
    color: white;
    background: #be9eff;
  }
</style>
