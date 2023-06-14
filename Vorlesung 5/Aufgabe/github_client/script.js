//submit = document.getElementsByTagName("button")[0]
//submit.onclick = getAPI()
let reposList = document.querySelector("#repos-list")
function getAPI(){
let input = document.querySelector("#password").value
fetch('https://api.github.com/user/repos', {
    method: 'GET',
    headers:{
        'Authorization' : 'Bearer ' + input}
})
.then(res =>
{
    return res.json();

    
}
)
.then((data)=>{
    document.querySelector("#repos-list").innerHTML=""
    console.log(data)
    for(let i of data) {
    let element = document.createElement('li')
    element.innerHTML = i.name
    reposList.appendChild(element)
}
}
)
.catch((Error)=>{
console.log(Error)
document.querySelector("#message").innerHTML="Error"
})
}