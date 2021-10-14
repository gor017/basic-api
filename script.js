
const container = document.querySelector("#container");
const loader = document.querySelector("#loader");
const url = "http://www.boredapi.com/api/activity/";

function showLoader() {
	loader.style.display = "block";
}
function hideLoader() {
	loader.style.display = "none";
}

let text = document.createElement("div")
text.className = "txt"
text.innerText = "Are you bored? Click to get an action for you"
container.prepend(text)
let btn = document.createElement("button")
btn.className = "button"
btn.innerHTML = "Click"
container.append(btn)

function printAction(activity) {
    hideLoader()
    const act = document.createElement("div")
    act.className = "actName"
    act.id = "act"
    act.append(activity)
    container.append(act)
}

async function getAction () {
    showLoader()
    const response = await fetch(url)
    const data = await response.json()
    const activity = data.activity
    printAction(activity)
}


btn.onclick = getAction
