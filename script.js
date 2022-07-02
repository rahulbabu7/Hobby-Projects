let count=0;

function increment(){
    if(count<12)
    {
      count+=1;
      let value=document.getElementById("count")
   value.innerHTML=count;
    }
     else

     {
        alert("maximum number of passengers should be 12")
     }
}

 /*function decrement(){
   
    count -=1;
    let counter=document.getElementById("left")
    counter.innerHTML=count;
    console.log(count);
}*/

function save(){

    var saveData=count+"-"  
    count=0;
    let saves=document.getElementById("entry")
 //   console.log(saveData);
     saves.innerHTML+=saveData;    
}