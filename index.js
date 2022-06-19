const locationInput = document.getElementById('location-input')
const dateInput = document.getElementById('date-input')
const amountInput = document.getElementById('amount-input')
const addExpenseBtn = document.getElementById('add-expense-btn')
const expenseTable = document.querySelector('.expense-table')
let expenseCount = 0

addExpenseBtn.addEventListener('click', function(){
  if(locationInput.value && dateInput.value && amountInput.value ){
    let randomId = Math.random()
    if (expenseCount == 0){
      expenseTable.innerHTML = `
      <tr class="table-headers">
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th></th>
          </tr>
      <tbody class="$expense ${randomId} ">
      <tr>
      <td>${locationInput.value}</td>
      <td>${dateInput.value}</td>
      <td>$${amountInput.value}</td>
      <td><button onclick="deleteItem(${randomId})">delete</button></td>
            </tr>
            </tbody>`
            locationInput.value = ''
            dateInput.value = ''
            amountInput.value = ''
          }else if (expenseCount >= 1){
            expenseTable.innerHTML += 
            `
            <tbody class="$expense ${randomId} ">
      <tr>
      <td>${locationInput.value}</td>
      <td>${dateInput.value}</td>
      <td>$${amountInput.value}</td>
      <td><button onclick="deleteItem(${randomId})">delete</button></td>
            </tr>
            </tbody>`
            locationInput.value = ''
            dateInput.value = ''
            amountInput.value = ''
            
          }
          expenseCount += 1
  }
})

function deleteItem(randomId){
  expenseCount -= 1
  for (i=0; i<expenseTable.children.length; i++){
    if (expenseTable.children[i].classList.contains(randomId)){
      expenseTable.children[i].remove()
    }
  }

  if (expenseCount < 1){
    expenseTable.innerHTML = `
    <tr class="table-headers">
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th></th>
          </tr>
          <tr>
            <td>No expenses added yet</td>
            <td></td>
            <td></td>
            <td></td>
            
          </tr>
    `
  }
  
}