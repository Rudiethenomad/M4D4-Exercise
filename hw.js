
/*
fetch('https://striveschool-api.herokuapp.com/books')
.then( response => response.json())
.then(data => console.log(data));
*/
/*
fetch('https://striveschool-api.herokuapp.com/books')
.then(function(response){
    return response.json()
})
.then(function(books){
    console.log(books)
})

*/

/*
    fetch("https://striveschool-api.herokuapp.com/books") 


      .then((response) => {
        return response.json();
      })
      .then((body) => {
        let cards = document.getElementsByClassName("card");
  
       // for (let i = 0; i < cards.length; i++) {
          //cards[i].firstElementChild.remove(); //removes svg
          let img = document.createElement("img");
          img.src = body.photos[i].src.large;
          img.className = "bd-placeholder-img card-img-top";
          img.style = "height: 200px; object-fit: cover";
  
          cards[i].insertBefore(img, cards[i].firstChild); //adds the new image before other content
  
          
        }
    */

    fetch('https://striveschool-api.herokuapp.com/books')
     .then(response => response.json())
     .then(books => {renderBooks(books.results)
     });

  const cardsContainer = document.querySelector("#cards-container");

  function renderBooks(books) {
    books.forEach(books => {
      const div = document.createElement('div');
      const image = document.createElement('img');
      const title = document.createElement('h3');
      const price = document.createElement('h3');
      const category = document.createElement('h3');
      const like = document.createElement('button');
      const skip = document.createElementNS('button');
      div.classList = 'card'
      image.classList = 'card-img'
      like.classList = 'empty'
      image.src = books.image
      asin.innerText = ` asin: ${books.asin}`
      title.innerText = `title: ${books.title}`
      price.innerText = `price: ${books.price}`
      category.innerText = `category: ${books.category}` 
     
      div.appendChild(asin)
      div.appendChild(title)
      div.appendChild(image)
      div.appendChild(price)
      div.appendChild(category)
      div.appendChild(like)
      div.appendChild(skip)
      cardsContainer.appendChild(div)
      like.textContent = 'like'
      skip.textContent = 'Skip'

    });
};
    

    

