// Add your custom JavaScript for storefront pages here.
const nameIf = window.ecomPassport.customer.display_name ? window.ecomPassport.customer.display_name : 'Minha Conta'
document.getElementById('nameIf').innerText = nameIf
const slider = document.querySelector('.banner-slider')
const categories = document.getElementById('categories-row')
const home = document.getElementById('page-home')

if (window.innerWidth < 768 && home) {
    slider.after(categories)
}
