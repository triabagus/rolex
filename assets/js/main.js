/*=============== SHOW MENU ===============*/


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
        cartShop  = document.getElementById('cart-shop'),
        cartClose = document.getElementById('cart-close')

// CART SHOW
// validate if constant exists
if(cartShop){
    cartShop.addEventListener('click', () =>{
        cart.classList.add('show-cart')
    })
}

// CART HIDDEN
// validate if constant exists
if(cartClose){
    cartClose.addEventListener('click', () =>{
        cart.classList.remove('show-cart')
    })
}

/*=============== DARK LIGHT THEME ===============*/ 
