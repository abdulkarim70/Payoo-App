document.getElementById('add-money-btn').addEventListener('click',function (){
    console.log('btn connected');
    // 1. get bank account
    const bankAccount=getValueFromInput('add-money-bank');
    if(bankAccount=='Select Bank'){
        alert('Please Select a Bank First');
        return;
    }
// Get Account number
const bankAcNo=getValueFromInput('add-money-number');
if(bankAcNo.length!=11){
    alert('Invalid Account No');
    return;
}
// get amount
const amount=getValueFromInput('add-amount');
const newBalance= getBalance()+Number(amount);
console.log(newBalance)


const pin =getValueFromInput('pin-number');
if(pin=='7070'){
    alert(`Add Money Successful from ${bankAccount} at ${new Date()}`)
    setBalance(newBalance)
    // history container dhore niye asbo
    const history=document.getElementById('history-container')
    // new div create korbo
    const newHistory=document.createElement('div')
    // new div inner html add korbo
    newHistory.innerHTML=`<div class="transaction-card py-5 bg-base-100">
Add Money Successful from ${bankAccount} ,acc-no${ bankAcNo} at ${new Date()}
  </div>`
    // history container e new div ta ke append child korbo
history.append(newHistory)
}else{ 
    alert('Invalid Pin')
    return
}



})

