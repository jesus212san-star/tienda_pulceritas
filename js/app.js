function scrollToProducts() {
  document.getElementById('products').scrollIntoView({
    behavior: 'smooth'
  });
}

function buy(product) {
  alert('Has seleccionado: ' + product);
}
