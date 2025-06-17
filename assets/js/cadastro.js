const inputPhone = document.getElementById("phone"); 

inputPhone.addEventListener("input",(e)=>{
    e.target.value = e.target.value.replace(/\D/g,"")
})
