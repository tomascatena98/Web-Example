const myform = document.querySelector("#info")
const email = document.querySelector("#email")
const emailHelp = document.querySelector("#emailHelp")
const password = document.querySelector("#password")
const passwordHelp = document.querySelector("#passwordHelp")

myform.addEventListener("submit", (event) => {
	event.preventDefault()
	if (email.value === "" & password.value === "") {
		if (email.value === "") {
			emailHelp.innerText = "Complete this infomation!"
		}
		if (password.value === "") {
			passwordHelp.innerText = "Write your password!"
		}
	} else {
		myform.submit();
	}
})