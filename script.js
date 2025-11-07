    // script.js
    const tennaPopup = document.querySelector('#tennaPopup')
    const tennaTextbox = document.querySelector('#tennaTextbox')
    const btn1 = document.querySelector('#btn1')

    btn1.addEventListener('click',()=>{
        btn1.style.display = "none";
        setTimeout(() => {
        tennaPopup.src = "images/tennaStandWobble.gif"
        tennaTextbox.src = "images/tennaTextbox1.gif"
        }, 1500);
    })