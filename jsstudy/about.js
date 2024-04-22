const Tableel=document.querySelector("table")

let selectedId;
Tableel.addEventListener("click",(event)=>{
    const Tr=event.target.closest("tr")
if(event.target.tagName==="TH")return;
alert(`Hello ${Tr.children[0].innerText}`)

if(selectedId!=undefined){
    selectedId.classList.remove("active")
}
selectedId=Tr
Tr.classList.add("active")



})

const dontaion_div=document.querySelector("#donate")
const inputcontainer_div=document.querySelector("#input-container")
const submitbtn=document.querySelector("#moneySubmit")
const inputtype=document.querySelector("#numb")
dontaion_div.addEventListener("click",()=>{
     console.log("click")
     if(inputcontainer_div.classList.contains("hide")){
      inputcontainer_div.classList.remove("hide")
         
     }
     else{
        inputcontainer_div.classList.add("hide")
     }
})
console.log(inputtype)
submitbtn.addEventListener("click",(event)=>{
  
    alert(`Thank you your money is ${inputtype.value}`)
})