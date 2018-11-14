let addItems = document.querySelector('.add_some_one');
let itemsList = document.querySelector('.list_of_People');
let items = [];
function addItem(e) {
    e.preventDefault();
    const name = (this.querySelector('[name=firstname]')).value;
    const family = (this.querySelector('[name=lastname]')).value;
    const phone = (this.querySelector('[name=phone]')).value;
    const item = {
      name,
      family,
      phone
    };
    items.push(item);
    contactList(items, itemsList);
    this.reset();
}

function contactList(items =[], itemsList) {
    itemsList.innerHTML = items.map((a,i) => {
      console.log(a.name);
      return `
      <tr>
      <td>${a.name}</td>
      <td>${a.family}</td> 
      <td>${a.phone}</td>
      <td>
      <button class="btn"  data-index=${i}><i class="fa fa-trash"></i></button>
      </td>
      </tr>
    `;
    }).join('');
  }
  addItems.addEventListener('submit', addItem);
  contactList(items, itemsList);
  itemsList.addEventListener("click",omit);
   function omit(e){
     if (e.target.matches('button')){
     const el = e.target;
    const index = el.dataset.index;
    itemsList.deleteRow(index);
    items.splice(1,index);
    contactList(items, itemsList);
    console.log(index);
  }
    else
    {
   console.log("plese click again");
    } 
 
  }
 /* let but=itemsList.getElementsByTagName("button");
  console.log (but);
  itemsList.getElementsByTagName("button").addEventListener("click", function(){
    alert("hi");
});*/
  
