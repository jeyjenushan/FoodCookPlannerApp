const Btn=document.getElementById("btn");
const inputType=document.getElementById("foods")
const food=document.getElementById("input-container")
const duplicateEl=document.getElementById("duplicate")
const btn=document.getElementById("async")
const imgShow=document.getElementById("no-list")
const stat=document.getElementById("food-statistice")

/*btn.addEventListener("click",()=>{
     duplicateEl.innerHTML=""
     const clonedData=food.cloneNode(true)
duplicateEl.append(clonedData)

})*/

document.addEventListener("DOMContentLoaded",()=>{
     const fetchItems=[...JSON.parse(localStorage.getItem("food-items"))]
     fetchItems.forEach(item=>{
          let newFoodEl=document.createElement("li")
     const divItem=document.createElement("div")
     const divdeleteBtn=document.createElement("div")
     //const divReplaceBtn=document.createElement("div")
     newFoodEl.append(divItem,divdeleteBtn)
     //console.log(divdeleteBtn.parentElement.parentElement)
     divdeleteBtn.parentElement.setAttribute("onclick","removeItem(event)")
     divdeleteBtn.innerHTML=`<i class="fa fa-xmark"></i>`
     /*console.log(divReplaceBtn.parentElement)
     divReplaceBtn.parentElement.setAttribute("onclick","replaceItem(event)")
     divReplaceBtn.innerHTML=`<i class="fa fa-fireplace">U</i>`*/

     divItem.textContent=item.Fooditem
     newFoodEl.className="food-item"
     food.append(newFoodEl)
     newFoodEl.append(divItem)
     newFoodEl.append(divdeleteBtn)
          
     })
     refereshUI()
})


function createAlertViaDom(message){
const maindivel=document.getElementById("maindiv")
const Div=document.createElement("div")
const textNode=document.createTextNode(message)
Div.className="alert"
Div.append(textNode)
maindivel.prepend(Div)
}
//const qu=document.querySelector(".alert>.alertMessage")
/*
const liEl=document.createElement("li")
const textNodeEl=document.createTextNode("Maggi")
liEl.className="food-item"
liEl.append(textNodeEl)
food.append(liEl)
*/
function removeItem(event){
     let deletItem=event.target.parentNode.parentNode
     deletItem.remove()
 let fetchFoods=[...JSON.parse(localStorage.getItem("food-items"))]
 fetchFoods.forEach(item=>{
     if(item.Fooditem==event.target.parentNode.parentNode.innerText){
            fetchFoods.splice(fetchFoods.indexOf[item],1)
     }
 })
 localStorage.setItem("food-items",JSON.stringify(fetchFoods))





     refereshUI()

}
function replaceItem(event){
     let deletItem=event.target.parentNode.parentNode.children[0];
     const li=document.createElement("li")
     food=prompt("Enter your food and change : ")
     li.textContent=food
     li.className="food-item"
     deletItem.replaceWith(li)

}
const handlefood=()=>{
     let newFoodEl=document.createElement("li")
     const divItem=document.createElement("div")
     const divdeleteBtn=document.createElement("div")
     //const divReplaceBtn=document.createElement("div")
     newFoodEl.append(divItem,divdeleteBtn)
     //console.log(divdeleteBtn.parentElement.parentElement)
     divdeleteBtn.parentElement.setAttribute("onclick","removeItem(event)")
     divdeleteBtn.innerHTML=`<i class="fa fa-xmark"></i>`
     /*console.log(divReplaceBtn.parentElement)
     divReplaceBtn.parentElement.setAttribute("onclick","replaceItem(event)")
     divReplaceBtn.innerHTML=`<i class="fa fa-fireplace">U</i>`*/

     divItem.textContent=inputType.value
     newFoodEl.className="food-item"
     food.append(newFoodEl)
     newFoodEl.append(divItem)
     newFoodEl.append(divdeleteBtn)
     //newFoodEl.append(divReplaceBtn)

//set loaclStorage
localStorage.setItem("food-items",JSON.stringify(
     [...JSON.parse(localStorage.getItem("food-items") || "[]"),
     {Fooditem:inputType.value},]))




     inputType.value=""
    
     refereshUI()

     }
Btn.addEventListener("click",handlefood)

inputType.addEventListener("keyup",(event)=>{
  
     if(event.key==="Enter"){
       
          handlefood();
     }
     else if(event.key==="KeyZ"){
          inputType.value=""
     }
})
     /*
             <div>Sambar</div>
     <div onclick=removeItem(event)>
                
                    </div>
                    <div onclick=replaceItem(event)>
                      
                    </div>*/

//food.insertAdjacentHTML("beforeend",`<li>FoodItems</li>`)


function refereshUI(){
     
     if(food.children.length>0){
       imgShow.hidden=true;
       stat.innerText=`You have ${food.children.length} items`
       stat.hidden=false
     }
     else{
  imgShow.hidden=false;
  stat.hidden=true;
     }
}


