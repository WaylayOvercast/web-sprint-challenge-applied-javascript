const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  

    let div =  document.createElement('div');
    div.classList = 'header';

    let span1 = document.createElement('span');
    span1.classList = 'date'; span1.textContent = date;
    div.appendChild(span1);

    let h1 = document.createElement('h1');
    h1.textContent = title; div.appendChild(h1);

    let span2 = document.createElement('span');
    span2.classList = 'temp', span2.textContent = temp;
    div.appendChild(span2);

  return div
}


const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  let obj = document.querySelector(selector)
  return obj.appendChild(Header("Lambda Times", "January 6, 2021", "26"))



}

export { Header, headerAppender }
