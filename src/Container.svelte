<svelte:options accessors />


<!-- {@debug user} -->

<script>
  //import modules
    import {getContext} from 'svelte'
    import {createEventDispatcher} from 'svelte'
  //import children components
   import MultilineTextarea from './lib/MultilineTextarea.svelte'
  
  //data to be given by the parent component
    export let container;
    export let i;
  //data to expose
    export let root;

  //variables to be used inside this component
  function formatIndex(array) {
    if (array) {
      return array.join(".")
    }
  }
  export let index = container.index
  export let string_index = formatIndex(container.index) //이거 바꾸자. 이름을 string_index로. 

  //states of this container
  let foldContent = false
  let foldChildren = false

  //bind to variables: Children components of this container
  let foldButton;
  export let contentTextarea;

  //getContext
  const createBrotherContainer = getContext('createBrotherContainer')
  const moveContainerFocus = getContext('moveContainerFocus')
  const focusContainerAt = getContext('focusContainerAt')

  let createNewContainer = getContext('createNewContainer')
  let foldContainerChildren = getContext('foldContainerChildren')
 

  //Indent self
  let indentSize = 20
  let style = "margin-left:" + indentSize*container.index.length + "px;"
  

  //Event handlers
  
  //on keydown in textareas
  function onTextareaKeydown(e) {
    let keyevent = e.detail.keyevent
    if(keyevent.key === 'Enter' && keyevent.ctrlKey) { //ctrl + Enter
      //goto or create new Container, and focus on it 
      createBrotherContainer(index, i) 
    }
    if (keyevent.key.search("Arrow")>-1 && keyevent.ctrlKey) { //ctrl + arrow key
      //move focus
      moveContainerFocus(index, i, keyevent.key)
    }
  }

  function onTextareaFocus() {
    /* focusContainerAt(i) */
    ;
  }

  function onFoldButtonClick() {
    /* function foldContainerChildren(index) {
    }
    foldContainerChildren(index) */
    //이 컨테이너의 index(n.n.n 형식으로 된것) 스트링을 그대로, 이 컨테이너 아래 것들부터 검색해서 display:none으로 설정한 뒤, 이 컨테이너의 fold 버튼의 비주얼을 바꾸는 것(fold/unfold 글씨변경, 일단)이 제일 단순무식하나 최적일듯 하다. 
    //foldChildren = !foldChildren
    ;
  }

  function onDiveButtonClick() {
    ;
  }
    
</script>

<main bind:this={root}>
  <div id="container" style={style}>
    <div id="options">
      <button type="button" class="dive">Dive</button>
      <button type="button" class="fold"
      bind:this={foldButton}
      on:cilck={() => onFoldButtonClick()}>
      {foldChildren ? 'unfold' : 'fold'}</button>
    </div>
    <div id="content">
      <span id="index">{string_index}</span>
      <div style="display:flex; flex-direction:column; width:100%;">
        <div id="heading"></div>
        <MultilineTextarea placeholder={container.thot.heading} on:keydown={onTextareaKeydown}  on:focus={onTextareaFocus}/>
        <div id="contentTextarea">
          <MultilineTextarea placeholder={container.thot.content} on:keydown={onTextareaKeydown} on:focus={onTextareaFocus} bind:inputTextarea={contentTextarea}/>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  * {
    box-sizing: border-box;
  }
  
  #container {

    height: fit-content;
    display: flex;

    font-family: 'BookkMyungjo-Bd';
    font-weight: 100;
    font-style: normal;
    font-size: 16px;
    
  }
  #content {
    border: 1px solid #e0e0e0;
    
    width: 100%;
    height: fit-content;

    display: flex;
    align-items: stretch;
    align-content: flex-start;

    padding: 8px;

    /* background-color: #bdceff; */
  }
  #options {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 40px;
    margin-right: 4px;

    font-size: 12px;
  }
  #options > * {
    text-align: center;
    font-weight: 700;
  }
  #options button.dive {
    background-color: #215bfc;
    color: white;
  }
  #options button.fold {
    background-color: #fae7cd;
    color: #bfa21f;
  }

  button {
    border: 1px inset #e0e0e0;
    border-radius: 8px;

    /* width: fit-content; */
    height: 2em;
    
    font-size: inherit;
    background-color: white;

  }

  :global(*) {
    transition: all 0.2s ease;
  }
  :global(div#content:hover, button:hover, textarea:hover) {
    border-color: #646cff !important;
    background-color: #f5ead5;
  }
  
  :global(button:focus, button:focus-visible, textarea:focus, textarea:focus-visible) {
    outline: 2px solid #646cff;
  }

  button:active {
    background-color: blue;
    color: white;
  }

  #contentTextarea {
    position:relative; /* 중요 */
    width: 100%;
    height: fit-content;
    display: flex; /* 중요 */
  }

  #index {
    border: 1px outset #e0e0e0;
    height: fit-content;
    margin-right: 8px;
    padding-left: 2px;
    padding-right: 2px;
  }
  #heading {
    text-align: left;
    width: 100%;
    height: fit-content;
  }
  /* textarea {
    background-color: transparent;

    border: 1px solid transparent;
    font-size: inherit;
    
    width: 100%;
    height: fit-content;
    
    padding: 0px;
    overflow-y: hidden;
    resize: none;
  }
  #visibleTextarea {
    background-color: transparent;
  }
  #inputTextarea {
    position:absolute;
    
    border: none;
    color: transparent;
    background-color: transparent;
    z-index: 1;
    
  }
  #inputTextarea::selection {
    color: white;
    background: #be9eff;
  } */
</style>
