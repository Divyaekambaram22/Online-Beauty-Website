document.querySelectorAll('.add-btn').forEach((button, index) => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.product-card');
    const title = productCard.querySelector('h3').innerText;
    const price = productCard.querySelector('p').innerText;
    const imageSrc = productCard.querySelector('img').getAttribute('src');

    const product = { title, price, imageSrc };

    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItems));

    alert('Product added to cart!');
  });
});
