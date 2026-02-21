// machine id->input value
function getValueFromInput(id){
    const input=document.getElementById(id)
    const value=input.value
    console.log(id,value)
    return value
}
// machine >balance
function getBalance(){
const balanceElement=document.getElementById('balance')
const balance=balanceElement.innerText;
console.log('current balance',Number (balance))
return Number(balance)

}
// machine set balance
function setBalance(value){
const balanceElement=document.getElementById('balance')
balanceElement.innerText=value;

}
// machine>hidden & show
function showOnly(id){
   
    const addMoney=document.getElementById('add-money')
    const cashOut=document.getElementById('cash-out')
    const history=document.getElementById('history')
    //  console.log(`add money-${add-money}, cash-out- ${cash-out}`)
    addMoney.classList.add('hidden')
    cashOut.classList.add('hidden')
    history.classList.add('hidden')

    // show
    const selected=document.getElementById(id)
    selected.classList.remove('hidden')
}