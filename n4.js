const dawera = document.getElementById("dawera");

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
            <td>${dawera}</td>


         
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});


dawera.addEventListener("click", event => 
    {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(response){
           return response.json();
        })
        .then(function(products){
           let placeholder = document.querySelector("#data-input");
           let out = "";
           for(let product of products){
              out += `

                    <td>${product.userId}</td>
        
                
              `;
           }
         
           placeholder.innerHTML = out;
        });
        

    });