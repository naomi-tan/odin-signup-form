// Get password and confirm password inputs
psswd1 = document.querySelector('#password');
psswd2 = document.querySelector('#password-confirm');

console.log(psswd1);
console.log(psswd2);

// Get submit button
submit = document.querySelector('#submit');

console.log(submit);

// Event listener on Submit Button
submit.addEventListener("click", ()=>{
    // Check if passwords match
    console.log(psswd1.value);
    console.log(psswd2.value);
    if (psswd1.value !== psswd2.value) {
        // If not display message
        console.log("passwords don't match")
        psswd2.setCustomValidity("passwords don't match")
    }
    else {
        console.log("passwords match!")
    }
})
