// Add your custom JavaScript for storefront pages here.
const nameIf = window.ecomPassport.customer.display_name ? window.ecomPassport.customer.display_name : 'Entre ou Cadastre-se'
document.getElementById('nameIf').innerText = nameIf