<script>
import Container from "./Container.svelte"
import { writable, derived } from "svelte/store";
import {thisHead, fetchedContainers, fetchContainers_indentedThotsView, default_thot, default_container} from "./store.js"
import {setContext} from "svelte"
/* import {thisHead} from "./App.svelte" */
let seedThot = {
      id: 0,
      heading: "1st",
      content: "thot 1",
      children: [1, 4],
      metadata: {},
      customMetadata: {},
    }
$: containers_data = writable(fetchContainers_indentedThotsView(seedThot))
$: Containers = []

function fetch_containers_data() {
  return containers_data = writable(fetchContainers_indentedThotsView(seedThot))
}

/* const newContainer = () => {
  return {
    index ,
    thot: default_thot
  }
} */

function createBrotherContainer(data, i) {
  alert("triggered")
  let index = data.index
  let new_thot = JSON.parse(JSON.stringify(default_thot))
  //멍청아. 인덱스를 따로 부여해줄 필요가 없잖아. fetch하면서 알아서 생기는데.
    /*let new_container = default_container
    let index2 = [...index] //deep copy first
    let former_part = index2.slice(0, -1) //index last digit ++
    index2 = [...former_part, (index2[index2.length-1]+1)] 
    new_container.index = [...index2]
    console.log(new_container.index)
    new_container.thot = new_thot
    $containers_data = [...$containers_data, new_container]*/
    //containers.update(containers => containers.push(new_container))

  let parent_index = [...index].pop()
  let parent = $containers_data.find((data) => {return data.index === parent_index})
  parent.thot.children = [...parent.thot.children, new_thot.id]

  console.log($containers_data)

  //! need to update children data of the parent thot.
  //Why the hell can't I use "update"?
}

function createGhostContainer(index) {
  let ghost = JSON.parse(JSON.stringify(default_container))
  ghost.thot = JSON.parse(JSON.stringify(default_thot))
  ghost.root.classList.add('ghost')

  $containers_data = [...$containers_data, ghost]
  return ghost
}

function realizeGhost(ghost) {
  ghost.root.classList.remove('ghost')
}

/*
ctrl shift arrow 누르던 중에 esc 눌리면, 고스트를 삭제. 

지금 생각해보니, thots를 이 indentedThots 뷰에 맞게 컨테이너로 만들로 fetch해주는 함수는, 이 스벨트 컴포넌트에 넣거나 따로 thots_to_containers_functions.js 라이브러리에 넣어야겠다. 스토어 파일에는 thot들만 넣자. 

그래서 이 뷰 컴포넌트에서 자체적인 displayedContainers 변수를 갖고, 그 안에 ghost를 추가하고,
ctrl shift arrow 된 채에서 keyup되서 ghost가 realized되면 head 스토어의 thots 변수에도 추가되는 걸로 하자. 그리고 변수명을 thisHead로 하지말고, 그냥 thots로. (Head 이름).thots로 접근할 수 있게. 


*/

setContext('createBrotherContainer', createBrotherContainer)

let focusedContainer = null //초기값
let focusReadyContainer = null

function focusContainer(C) {
  console.log("F!")
  console.log(C)
  if (focusedContainer) {
    focusedContainer.unfocusSelf()
  }
  focusedContainer = C
  C.focusSelf()
  //중앙에 그 컨테이너 오도록 스크롤값 고치기(IndentedThots 뷰의 경우, 패닝 대신)
  console.log(C)
  C.contentTextarea.focus()
}

function focusContainerAt(i) {
  let C = Containers[i]
  focusContainer(C)
}
setContext('focusContainerAt', focusContainerAt)

$: if (focusReadyContainer) {
  focusContainer(focusReadyContainer)
}


function moveContainerFocus(index, i, key) {

  //Containers[0].root.style.border = "1px solid red"

  let max_find_repetition = 50;
  let parentIndex = "0";
  if ("1".search(/\./)<0) {
    parentIndex = index.slice(0, index.search(/.\d$/)) //index에서 마지막 .과 숫자 지워서 parentIndex 찾기
  }
  let childIndex = index + ".1"
  let c = null;
  let found = null;
  switch (key) { //이걸 Content.svelte로 옮기자
      case 'ArrowUp':
        //find and focus a brother who is above the current focused container
        //자기보다 위에 있는 컨테이너들 중, index에서 마지막 숫자만 -1한 컨테이너 찾기. findLast() 메소드로 역방향으로 찾기.
        if (parentIndex != "0") {
          for (let find = i-1; (-1 < find)&&(max_find_repetition-find >= 0)&&(Containers.length-1>=find); find--) {
            c = Containers[find]
            if (index.match(/\./g)&&c.string_index.match(/\./g)) {
              if (index.match(/\./g).length === c.string_index.match(/\./g).length 
              && c.string_index.search(parentIndex)===0 
              && c.string_index!=parentIndex) { //형제라면:
                found = c
                break;
              }
            }
          }
        }
        if (found === null) {//부모를 못찾는다면:
          if (-1<i-1) {
            found = Containers[i-1]
          }
          //대신 바로 아래 컨테이너를 focus
        }
        break;
      case 'ArrowDown':
        if (parentIndex != "0") { //이게 최상위라 부모가 없고 따라서 형제도 못찾는 경우가 아니라면:
          for (let find = i+1; (-1 < find)&&(find < find+max_find_repetition)&&(Containers.length-1>=find); find++) {
            c = Containers[find]
            /* if (parentindex === "1") {
              console.log(index)
              console.log(index.search(/.\d$/))
              console.log(index.slice(0, index.search(/.\d$/)))
            } */
            if (index.match(/\./g)&&c.string_index.match(/\./g)) {
              if (index.match(/\./g).length === c.string_index.match(/\./g).length &&
              c.string_index.search(parentIndex)===0 
              && c.string_index!=parentIndex) { //형제라면:
                found = c
                break;
              }
           }
          }
        }
        if (found === null) {//아래 형제를 못찾았다면:
          console.log("!!")
          if (i+1<=Containers.length-1) {
            found = Containers[i+1]
          }
          //대신 바로 아래 컨테이너를 focus
        }
        break;
      case 'ArrowLeft':
       //부모 찾기
       //자기보다 위에 있는 컨테이너들 중, index에서 마지막 숫자 제거한 스트링으로 컨테이너 찾기. 역방향으로.
        for (let find = i; (-1 < find)&&(max_find_repetition-find >= 0)&&(Containers.length-1>=find); find--) {
          c = Containers[find]
          if (c.string_index === parentIndex) { //부모 인덱스를 그대로 갖고있다면:
            found = c
            break;
          }
        }
        break;
      case 'ArrowRight':
        //자기 인덱스 +'.1', 즉 첫번째 자식을 정방향으로 찾기. 
        for (let find = i; (-1 < find)&&(find < find+max_find_repetition)&&(Containers.length-1>=find); find++) {
          c = Containers[find]
          if (c.string_index === childIndex) { //첫번째 자식이라면:
            found = c
            break;
          }
        }
        break;
    }
  if (found) {
    console.log(found)
    focusContainer(found)
  }
}
setContext('moveContainerFocus', moveContainerFocus)



/* function foldContainerChildren(children_indexes) {
  let children = Containers.filter(c => {return c.index.search(index)>0})
  
  let children = Containers.filter(c => {return children_indexes.includes(c.index)})
  
  if (children) {
    children.style.display = "none" //토글도 해야되는데...
  }
  //잠깐만. 이러지 말자. 바로 직속 자식들 visibility만 바꿔야 해. 일부러 닫아둔 손자까지 열리면 곤란하다. 손자들도 다 여는 옵션은 따로 추가해야 해. 메뉴를 통해서든, 버튼을 통해서든 다른 ui로 행하도록 하자. 
}
//이거를 Containers 뒤로 옮기기. 아니 솔직히 container랑 Container랑 너무 헷갈리잖아. store에서 가져오는 데이터 변수는 이름 바꾸자. "data"같은 걸로.

setContext('foldContainerChildren', foldContainerChildren) */


</script>

<main id="Content">
  {#each $containers_data as data, i}
    <Container bind:this={Containers[i]} on:focus={focusContainer} {data} {i}/>
    <!-- <Container bind:root={Containers[i]} {container}{i}/> -->
  {/each}
</main>


<style>
  main {
    border: 4px solid lightgray;
    height: 100%;
    /* background-color: #1242c7; */
    padding: 10px;

  }
  :global(.focused) {
    /* outline: 4px solid blue; */
    border-color: rgba(0, 20, 255, 0.4) !important;
    background-color: rgba(132, 176, 160, 0.38) !important;
  }
  :global(.ghost) {
    outline: 4px solid skyblue;
  }
</style>
