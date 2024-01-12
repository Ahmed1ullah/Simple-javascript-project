var isstatus = document.querySelector("#status")

var addfriend = document.querySelector("#add")

addfriend.addEventListener("click",function(){
    isstatus.innerHTML = "Friends Now"
    isstatus.style.color="green"
})

var removefriend = document.querySelector("#Remove")

removefriend.addEventListener("click",function(){
    isstatus.innerHTML = "Stranger"
    isstatus.style.color = "Red"

})