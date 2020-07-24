
function populateUFs(){

   const ufSelect = document.querySelector("select[name=uf]")

   fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
   .then ( res => res.json() )
   .then ( states => {

      for(const state of states){
         ufSelect.innerHTML = ufSelect.innerHTML + `<option value="${state.id}">${state.nome}</option>`   
      }
   })
}

populateUFs()

function getCities(event){
   const citySelect = document.querySelector("select[name=city]")
   const stateInput = document.querySelector("input[name=state]")

   // get uf id
   const ufValue = event.target.value
   const indexOfSelectedState = event.target.selectedIndex;
   stateInput.value = event.target.options[indexOfSelectedState].text;

   //debug state
   console.log(stateInput.value);

   const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
   
   
   citySelect.innerHTML = "<option value> Selecione a Cidade</option"
   citySelect.disabled = true;

   fetch(url)
   .then ( res => res.json() )
   .then ( cities => {
      for(const city of cities){
         citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`   
      }
      citySelect.disabled = false;
   })

}

// getCities sem parênteses para não executar diretamente, apenas quando ativar o evento
document
.querySelector("select[name=uf]")
.addEventListener("change", getCities) 

//items de coleta
// get all li's
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (let item of itemsToCollect) {
   item.addEventListener('click', handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]");

let selectedItems = [];

function handleSelectedItem(event){
   const itemLi = event.target
   
   // add or remove class with js
   itemLi.classList.toggle("selected")

   const itemId = itemLi.dataset.id

   // get selected 
   const alreadySelected = selectedItems.findIndex( item =>{
      const itemFound = item == itemId // true or false
      return itemFound
   })



   // if already selected, remove
if(alreadySelected >=0) {
   //remove from selectedItems array
   const filteredItems = selectedItems.filter(item => {
      const itemIsDifferent = item != itemId;
      return itemIsDifferent
   })

   selectedItems = filteredItems


} else {
   //if not selected
   //add to selectedItems array
   selectedItems.push(itemId);
}

console.log(selectedItems)
   
   // update input hidden with selected items

   collectedItems.value = selectedItems;

}