document.getElementById('btn-login')
.addEventListener('click',function(){
    // // 1.get the mobile number input
   const numberInput= document.getElementById('input-number');
   const contactNumber=numberInput.value;
   console.log(contactNumber)
    // 2.get the pin
    const passwordInput= document.getElementById('input-password');
    const pin=passwordInput.value;
    console.log(pin)

    // 3.Match pin and mobile number
if(contactNumber=="01711707070" && pin=="7070"){
    alert('login successful');
    // window.location.assign('/home.html')
    window.location.assign('/home.html')
}
else{
    alert('Invalid Mobile Number Or Password');
    return
}
    // 3.1 true>>alert>homepage
    // 3.2 false>>alert>return

})