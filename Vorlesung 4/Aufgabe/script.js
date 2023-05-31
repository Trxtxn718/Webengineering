function getOne() {
    let input = document.querySelector("#input").value
    fetch('https://dummyjson.com/products/'+ input)
        .then(res => res.json())
        .then(json => console.log(json))
}
function getAll() {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(console.log);
}
function addProduct(){
    let input = document.querySelector("#input").value
    fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: input,
          /* other product data */
        })
      })
      .then(res => res.json())
      .then(console.log);
}
function changeProduct(){
    let input = document.querySelector("#input").value
    let ID = document.querySelector("#id").value
    fetch('https://dummyjson.com/products/' + ID, {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: input
        })
      })
      .then(res => res.json())
      .then(console.log);
}
function deleteProduct(){
    let input = document.querySelector("#input").value
    fetch('https://dummyjson.com/products/' + input, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(console.log);
}