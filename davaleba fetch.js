/* make a fetch request to the following url: https://jsonplaceholder.typicode.com/posts a. 
in your own words explain what is happening in background. b. console.log the response and
 observe the properties carefully. c. console.log the response status and explain what it means. */
 
 fetch('https://jsonplaceholder.typicode.com/posts') 
     console.log(response);
 console.log(response.status);


 /*make a fetch request to following url: https://jsonplaceholder.typicode.com/posts/1 a.
  transform the response into json format. b. print out the data in console. */

fetch('https://jsonplaceholder.typicode.com/posts') 
.then(response => response.json())
.then(data => console.log(data));

/*make a fetch request to following url: https://jsonplaceholder.typicode.com/posts/1/comments 
a. transform the response into json format. b. print out the data in console. c. how are these 
comments related to the post with id 1? */

fetch('https://jsonplaceholder.typicode.com/posts') 
.then(response => response.json())
.then(data => console.log(data));


/* make a fetch request to the following url: https://jsonplaceholder.typicode.com/posts a.
 render the data in the DOM. b. each post should be displayed in a card. c. each card
  should have a title, body. */
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(response){
     return response.json();
  })
  .then(function(products){
     let placeholder = document.querySelector("#data-output");
     let out = "";
     for(let product of products){
        out += `
           <tr>
                       <td>${product.userId}</td>
  
              <td>${product.id}</td>
              <td>${product.title}</td>
              <td>${product.body}</td>
           
           </tr>
        `;
     }
   
     placeholder.innerHTML = out;
  });
  
  

  

