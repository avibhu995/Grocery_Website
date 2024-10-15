let searchForm = document.querySelector(".search-form");
 document.querySelector("#search-btn").onclick = ()=>{
 
     searchForm.classList.toggle('active');
     shoppingCart.classList.remove('active');
     loginForm.classList.remove('active');
     navbar.classList.remove('active');
 };

 let shoppingCart = document.querySelector(".shopping-cart");
 document.querySelector("#cart-btn").onclick = ()=>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
 };


 document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".login-form");
    const loginBtn = document.querySelector("#login-btn");

    console.log("Login Button:", loginBtn);
    console.log("Login Form:", loginForm);

    if (loginBtn) {
        loginBtn.onclick = () => {
            if (loginForm) {
                loginForm.classList.toggle('active');
                shoppingCart.classList.remove('active');
                searchForm.classList.remove('active');
                navbar.classList.remove('active');
            } else {
                console.error("Login form not found");
            }
        };
    } else {
        console.error("Login button not found");
    }
});
let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = ()=>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');

}

window.onscroll = ()=>{
    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
   




