function registerpage(){
    window.open("Regpage.html", "_blank");
}

function SignIn(){
    window.open("signinpage.html", "_blank");
    const disappear =document.getElementById('i1');
    disappear.classList.remove('s1')
    disappear.style.display="none";
    const appear =document.getElementById('i2');
    appear.style.display="inline";
}