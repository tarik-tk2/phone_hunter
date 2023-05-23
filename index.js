// Import stylesheets
import './style.css';

 const phoneDisplayId= document.getElementById("display-phone");

const loadPhones= async()=>{
     const URL='https://openapi.programming-hero.com/api/phones?search=iphone';
     const response=await fetch(URL);
     const result =await response.json();
     displayPhone(result.data)
     
}
const displayPhone=phones=>{

for( const phone of phones){
  const createDiv= document.createElement("div");
  createDiv.classList.add("col")
  createDiv.innerHTML=`
  <div class="card h-100 p-2">
      <img src=${phone.image} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  `
  phoneDisplayId.appendChild(createDiv)
}

  
   
}
loadPhones()