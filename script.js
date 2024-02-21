let inpt1=document.querySelector("#fname")
let inpt2=document.querySelector("#lname")
let btn=document.querySelector(".submit")

btn.addEventListener("click" , getFormvalue )

function getFormvalue(eventDetails) {
eventDetails.preventDefault()

console.log(inpt1.value)
console.log(inpt2.value)

alert(`${inpt1.value} ${inpt2.value}`)
	
}
