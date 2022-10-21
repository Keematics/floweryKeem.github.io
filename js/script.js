let navbar = document.getElementById("navbar");
let menuBtn = document.getElementById("menu-btn");
let cartBtn = document.getElementById("cart-btn");
let cartContainer = document.getElementById('cartContainer');
let favContainer = document.getElementById('favContainer').onclick = () => {
    alert("Don't worry, your favourites flowers will be added soon")
}


document.onscroll = () => {
    navbar.classList.remove("active");
    cartContainer.classList.remove("active");

}


menuBtn.addEventListener("click", () => {
   navbar.classList.toggle("active");
   cartContainer.classList.remove("active");
});

cartBtn.addEventListener("click", () => {
   cartContainer.classList.toggle("active");
   navbar.classList.remove("active");
})
