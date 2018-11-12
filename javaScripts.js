let addItems = document.querySelector('.add_some_one');
let itemsList = document.querySelector('.list_of_People');
console.log(itemsList);
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
    console.log(items);
}

function contactList(items =[], itemsList) {
    itemsList.innerHTML = items.map((a) => {
      console.log(a.name);
      return `
      <li> 
        <label for="">${a.name}</label>
        <label for="">${a.family}</label>
         <label for="">${a.phone}</label>
      </li>
    `;
    }).join('');
  }
  addItems.addEventListener('submit', addItem);
  contactList(items, itemsList);
