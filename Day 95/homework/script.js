fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(value => console.log(value))