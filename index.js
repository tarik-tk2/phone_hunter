// Import stylesheets
import './style.css';


const loadPhones = async (name) => {
  const URL = `https://openapi.programming-hero.com/api/phones?search=${name}`;
  const response = await fetch(URL);
  const result = await response.json();
  displayPhone(result.data)
  
};
const displayPhone = (phones) => {
  const phoneDisplayId = document.getElementById('display-phone');
  phoneDisplayId.textContent='';
  if(phones.length===0){
    document.getElementById("not-found").classList.remove('d-none')
  }else{
    document.getElementById("not-found").classList.add('d-none')

  }
  phones=phones.slice(0,5)
  for (const phone of phones) {
    const createDiv = document.createElement('div');
    createDiv.classList.add('col');
    createDiv.innerHTML = `
  <div class="card h-100 p-2">
      <img src=${phone.image} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#details">
  Details
</button>
    </div>
  `;
    phoneDisplayId.appendChild(createDiv);
  }
  spinner(false)
};

document.getElementById("search-button").addEventListener("click",()=>{
   const getPhonename= document.getElementById("search-input").value;
  loadPhones(getPhonename)
  spinner(true)
});
document.getElementById("search-input").addEventListener("keydown",(e)=>{
  const getPhonename= document.getElementById("search-input").value;

   if(e.key==="Enter"){
    loadPhones(getPhonename)
    spinner(true)
   }
   

});
const spinner=bool=>{
  if(bool){
    document.getElementById("spinner").classList.remove("d-none");
  }else{
    document.getElementById("spinner").classList.add("d-none");
  }
}



