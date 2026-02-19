document.getElementById('cashout-btn')
.addEventListener('click', function(){
    // 1.get agent number and validate
   const cashOutNumberInput= document.getElementById('cashout-number')
   const casOutNumber=cashOutNumberInput.value;
   if(casOutNumber.length !=11){
    alert('Invalid Agent Number');
    return
   }
    // 2. get the amount validate and convert to number
   const cashOutInputAmount= document.getElementById('cashout-amount');
   const cashOutAmount=cashOutInputAmount.value;
   
    // 3. get current balance validate and convert to number
   const CurrentBalanceAmount= document.getElementById('balance');
   const CurrentBalance= CurrentBalanceAmount.innerText
 
    // 4. calculate new balance
    const NewBalance= Number(CurrentBalance)- Number(cashOutAmount);
  
    if(NewBalance<0){
        alert('Invalid Amount')
        return;
    }
    console.log('new balance', NewBalance)
    //5 get the pin and verify
    const cashOutPinInput= document.getElementById('cashout-pin');
    const pin=cashOutPinInput.value;
if(pin==='7070'){

alert('CashOut Successful')
CurrentBalanceAmount.innerText=NewBalance;


}
    // 5.1 true:: show an alert> Set balance
    // 5.2 false:: show an error alert> return
else{
    alert('Invalid Pin')
    return;
}
})