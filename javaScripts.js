let addItems = document.querySelector('.add_some_one');
let itemsList = document.querySelector('.list_of_People');
let searchValue=document.querySelector('#search_some_one');
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
function contactList(items=[], itemsList) {
    itemsList.innerHTML = items.map((a,i) => {
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
     items.splice(index,1);
     console.log(index);
     contactList(items, itemsList);
  }
    else
    {
   console.log("plese click again");
    } 
  }
searchValue.addEventListener('submit',search);
function search(e) {
    e.preventDefault();
    var input = (this.querySelector('[name=search]').value.toUpperCase());
    let i=-1;
    items.filter(function(elm) {
        let found = elm.name.toUpperCase().indexOf(input.toUpperCase()) > -1;
        i++;
        if (found){  
            tr = itemsList.getElementsByTagName("tr");
            tr[i].style.display = "";
            }else {
            tr[i].style.display = "none";
            }  
    });
       }
      /*  function search(e){
    e.preventDefault();
    var input, filter, found, table, tr, td, i, j;
      input = (this.querySelector('[name=search]').value.toUpperCase());
      console.log(input);
      table =itemsList;
      tr = itemsList.getElementsByTagName("tr");
      console.log(tr);
      for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td");
          console.log(td);
          for (j = 0; j < td.length-1; j++) {
              if (td[j].innerHTML.toUpperCase().indexOf(input) > -1) {
                console.log(td[j].innerHTML.toUpperCase().indexOf(input) > -1);
                  found = true;
              }
          }
          if (found) {
              tr[i].style.display = "";
              found = false;
          } else {
              tr[i].style.display = "none";
          }
      }*/
  
