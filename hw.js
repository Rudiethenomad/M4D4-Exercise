fetch('https://striveschool-api.herokuapp.com/books')
.then( response => response.json())
.then(data => console.log(data));