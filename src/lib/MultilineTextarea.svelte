<svelte:options accessors />

<script>
  import {createEventDispatcher} from 'svelte'
  
  export let inputTextarea;
  let visibleTextarea;
  export let placeholder;

  function onTextareaChange() {
    function resizeTextarea() {
      inputTextarea.style.height = "0px"
      inputTextarea.style.height = (inputTextarea.scrollHeight-8/* padding*2만큼 빼줘야 함 */) + "px"
      visibleTextarea.style.height = inputTextarea.style.height
      visibleTextarea.value = inputTextarea.value //높이 먼저 변한 후 value 변경됨
    }
    resizeTextarea() 
  }

  const dispatch = createEventDispatcher()
  
  function onTextareaKeydown(e) {
    console.log('KEY DOWN: '+e.key)
    dispatch('keydown', {keyevent: e})
  }
  function onTextareaKeyUp(e) {
    console.log('KEY UP: '+e.key)
    dispatch('keyup', {keyevent: e})
  }
  function onTextareaFocus(e) {
    dispatch('focus')
  }

</script>

<div id="textareas">
  <textarea
    bind:this={inputTextarea}
    on:keydown={(e) => {onTextareaKeydown(e)}}
    on:keyup={(e) => {onTextareaKeyUp(e)}}
    on:input={() => onTextareaChange()}
    on:focus={() => onTextareaFocus()}
    id="inputTextarea" rows="1" spellcheck="false"
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
    
    padding: 4px;
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
    /* transition: none !important; */ /* 진짜 중요 */
    transition: border 0.5s ease;
  }
  #inputTextarea::selection {
    color: white;
    background: #be9eff;
  }
</style>
