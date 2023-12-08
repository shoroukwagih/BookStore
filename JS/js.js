let cart = [];
let cartCount = 0;
let cartTotal = 0;

function addToCart(productId) {
  const product = document.querySelector(`[data-product-id="${productId}"]`);
  const productName = product.dataset.productName;
  const productPrice = parseFloat(product.dataset.productPrice);

  // Check if the product is already in the cart
  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    // If the product is already in the cart, increase the quantity
    existingItem.quantity++;
  } else {
    // If the product is not in the cart, add it with quantity 1
    cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
  }

  cartCount++;
  cartTotal += productPrice;

  updateCartCount();
  showCart();
}

function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cartCount;
}

function toggleCart() {
  const cartPopup = document.getElementById('cart-popup');
  cartPopup.style.display = (cartPopup.style.display === 'none' || cartPopup.style.display === '') ? 'block' : 'none';
}

function showCart() {
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');

  // Clear previous items
  cartItemsElement.innerHTML = '';

  // Populate cart items
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - Quantity: ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;

    // Add remove button
    const removeButton = document.createElement('span');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.onclick = () => removeItem(item.id);

    listItem.appendChild(removeButton);
    cartItemsElement.appendChild(listItem);
  });

  // Update total
  cartTotalElement.textContent = cartTotal.toFixed(2);
}

function removeItem(productId) {
  const removedItemIndex = cart.findIndex(item => item.id === productId);
  if (removedItemIndex !== -1) {
    const removedItem = cart[removedItemIndex];
    if (removedItem.quantity > 1) {
      // If quantity is greater than 1, decrease the quantity
      removedItem.quantity--;
    } else {
      // If quantity is 1, remove the entire item from the cart
      cart.splice(removedItemIndex, 1);
    }

    cartCount--;
    cartTotal -= removedItem.price;
    updateCartCount();
    showCart();
  }
}

// // ////////////////////////////////////////////
//////////////////////////////////////////////

let slideIndex = 1;

function showSlides(index) {
  const slides = document.querySelectorAll('.slide');
  // repeate the slides when reaching to the end
  if (index > slides.length) {
    slideIndex = 1;
  }
  // repeate the slides when reaching to the start العكس لورا
  if (index < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });



  // Display the current slide
  slides[slideIndex - 1].style.display = 'block';


}

function prevSlide() {
  showSlides(slideIndex -= 1);
}

function nextSlide() {
  showSlides(slideIndex += 1);
}

function currentSlide(index) {
  showSlides(slideIndex = index);
}

// Automatically advance to the next slide every 3 seconds
setInterval(nextSlide, 3000);

// Show the initial slide when the page loads
showSlides(slideIndex);


// ////////////////////////////////////////////
function Categories() {
  document.documentElement.scrollTop = 1150;

}
function Products() {
  document.documentElement.scrollTop = 1350;

}
function footer() {
  document.documentElement.scrollTop = 1000000000;
}

// ////////////////////////////////////////////
var additionalContent = document.getElementById('additional-content');
var readMoreBtn = document.getElementById('read-more');

function toggleContent() {

  if (additionalContent.style.display != 'none') {
    additionalContent.style.display = 'none';
    readMoreBtn.innerHTML = 'Read More';

  }
  else {
    additionalContent.style.display = 'inline';
    readMoreBtn.innerHTML = 'Read Less';
  }
}
/////////////////////////////////////////////

function showCategory(category) {
  // Hide all product categories
  document.querySelectorAll('.Fantasy, .Romance, .Horror, .Action, .Drama').forEach(function (element) {
    element.style.display = 'none';
    
  });

  // Show the selected category
  document.querySelector('.' + category).style.display = 'block';

}
// /////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("back-to-top-btn");

  window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          btn.style.display = "block";
      } else {
          btn.style.display = "none";
      }
  });

  btn.addEventListener("click", function () {
      document.documentElement.scrollTop = 0; 
  });
});