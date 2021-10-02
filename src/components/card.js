import axios from 'axios'



const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  console.log(article)

  
  for (let i=0; i < article.length; i++){
    
  let div = document.createElement('div');
  div.classList = "card";

  let div2 = document.createElement('div');
  div2.classList = "headline";
  div2.textContent = `${article[i].headline}`
  div.appendChild(div2);


  let div3 = document.createElement('div');
  div3.classList = "author";
  div.appendChild(div3);

  let div4 = document.createElement('div');
  div4.classList = "img-container";
  div3.appendChild(div4);

  let img = document.createElement('img');
  img.setAttribute("src", article[i].authorPhoto)
  div4.appendChild(img);

  let span = document.createElement('span')
  span.textContent = `By ${article[i].authorName}`

  div3.appendChild(span);

    document.addEventListener('click', e =>{
      let element = e.target
      console.log(element.textContent)
    })
    return div
  }
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`http://localhost:5000/api/articles`).then( res => {
    let data = res.data.articles
    let select = document.querySelector(selector)
    Object.values(data).map((art) => {
      console.log(art)
      select.appendChild(Card(art))
    })
  })
}

export { Card, cardAppender }
