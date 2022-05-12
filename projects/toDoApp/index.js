let allTasks=[];
let task=document.getElementById("task");
let lcontainer=document.getElementById("left-container");
let taskid=0;
//let len=localStorage.length;
//let keys = Object.keys(localStorage);
fetchToLocalStorage();

task.addEventListener('keyup',function(event){
  if(event.keyCode===13){
    if(task.value=='')
      return;
    addinTaskList();
  }
});

function addinTaskList(){
  let tasks=new Object;
  tasks={
    name:task.value,
    id:taskid,
    status:"incomplete"
  };
  allTasks.push(tasks);
  addtoDOM(tasks);
  addToLocalStorage();
}

function addtoDOM(tasks){
  let div=document.createElement('div');
  taskid=tasks.id+1;
  div.style.marginBottom="2%";
  let check=document.createElement("input");
  check.type="checkbox";
  check.style.cursor="hand";
  let img=document.createElement("img");
  img.src="cancel.png";
  img.style.cursor="hand";
  img.style.width="10px";
  img.style.height="10px";
  let hr=document.createElement('hr');
  hr.style.marginTop="5px";
  
  if(tasks.status==="completed"){
    div.style.textDecoration="line-through";
    check.checked=true;
  }
  div.innerHTML=tasks.name;
  div.appendChild(img);
  div.appendChild(check);
  div.appendChild(hr);
  lcontainer.appendChild(div);
  task.value='';
  console.log(allTasks);

  img.addEventListener('click',function(){
    deleteTask(tasks.id);
    lcontainer.removeChild(div);
  });

  check.addEventListener('click', function(){
    if(check.checked){
      div.style.textDecoration="line-through";
      tasks.status="completed";
      console.log(allTasks);
      //updateInLocalStorage(tasks);
      addToLocalStorage();
    }
    else{
      div.style.textDecoration="initial";
      tasks.status="incomplete";
      console.log(allTasks);
      //updateInLocalStorage(tasks);
      addToLocalStorage();
    }
  });
}

function deleteTask(id){
  let i;
  for(i=0;i<allTasks.length;i++){
    let item=allTasks[i];
    if(item.id===id)
      break;
  }
  allTasks.splice(i,1);
  console.log(allTasks);
  //deleteFromLocalStorage(id);
  addToLocalStorage();
}

/**************** LOCAL STORAGE ***************/

function addToLocalStorage(){
  /*allTasks.forEach(function(task){
    localStorage.setItem(task.id,JSON.stringify(task));
  });*/
  localStorage.tasks=JSON.stringify(allTasks);
}

function fetchToLocalStorage(){
  /*if(len!==0){
    for(let key of keys){
      allTasks.push(JSON.parse(localStorage.getItem(key)));
      addtoDOM(JSON.parse(localStorage.getItem(key)));
    }
    taskid+=1;
  }*/
  if(localStorage.tasks){
    allTasks=JSON.parse(localStorage.tasks);
  }
  allTasks.forEach(function(task){
    addtoDOM(task);
  });
}
/*
function deleteFromLocalStorage(id){
  localStorage.removeItem(id);
}

function updateInLocalStorage(taskupdate){
  localStorage.setItem(taskupdate.id,JSON.stringify(taskupdate));
}
*/