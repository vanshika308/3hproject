function addExpense(event){
    event.preventDefault();
    var amount= document.getElementById("amount").value;
    var description= document.getElementById("myList").value;
    var expense={
        amount: amount,
        description: description
    };
    localStorage.setItem("expense",JSON.stringify(expense));
    displayExpense(expense);
}
function displayExpense(expense){

  var expenseList=document.getElementById("expenses");
  const item = document.createElement("li");
  item.setAttribute('class','element');
 
  const deleteButton =document.createElement('button');
  deleteButton.setAttribute('class','delete');
  deleteButton.textContent="Delete expense";

  deleteButton.addEventListener("click",function(){
    expenseList.removeChild(item);
    localStorage.removeItem("expense");
  });

  const editButton= document.createElement('button');
  editButton.type='button';
  editButton.textContent="Edit expense";
  editButton.onclick=()=>{
    localStorage.removeItem("expense");
    parentItem.removeChild(item);
    document.getElementById('amount').value=expense.amount;
    document.getElementById('myList').value=expense.description;
  }

  item.textContent=expense.amount+" "+expense.description+" ";
  item.appendChild(deleteButton);
  item.appendChild(editButton);
  const parentItem=document.getElementById("expenses");
  parentItem.appendChild(item);
}