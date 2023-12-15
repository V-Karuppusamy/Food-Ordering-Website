// document.addEventListener('DOMContentLoaded', function () {
//     let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

//     // Function to render items in the wishlist
//     function renderWishlist() {
//       const wishlistItemsContainer = document.getElementById('wishlistItemsContainer');

//       if (wishlist.length === 0) {
//         wishlistItemsContainer.innerHTML = '<p>Your wishlist is empty.</p>';
//       } else {
//         wishlistItemsContainer.innerHTML = ''; // Clear the container before rendering

//         wishlist.forEach((item, index) => {
//           const listItem = document.createElement('li');
//           listItem.innerHTML = `<div class="box food-item" data-name="${item.name}" data-id="${item.id}" data-price="${item.price}">
//               <h3>${item.name}</h3>
//               <p>Price: ${item.price}</p>
//               <button class="removeBtn" data-index="${index}">Remove</button>
//               <button class="addToCartBtn" data-id="${item.id}">Add to Cart</button></div>`;

//           wishlistItemsContainer.appendChild(listItem);
//         });
//       }
//     }

//     // Function to remove an item from the wishlist
//     function removeFromWishlist(index) {
//       wishlist.splice(index, 1); // Remove the item from the wishlist array

//       // Save the updated wishlist to localStorage
//       localStorage.setItem('wishlist', JSON.stringify(wishlist));

//       // Render the updated wishlist
//       renderWishlist();
//     }

//     // Function to add an item to the cart
//     function addToCart(itemId) {
//       // Add your logic to handle adding to the cart
//       console.log(`Item with ID ${itemId} added to the cart`);
//     }

//     // Function to navigate to the Home page
//     function goToHome() {
//       window.location.href = 'index.html';
//     }

//     // Function to navigate to the Cart page
//     function goToCart() {
//       // Replace this with your actual cart page URL or logic
//       console.log('Redirecting to Cart page');
//     }

//     // Example: Add event listeners for the "Remove" and "Add to Cart" buttons
//     document.getElementById('wishlistItemsContainer').addEventListener('click', function (event) {
//       if (event.target.classList.contains('removeBtn')) {
//         const indexToRemove = event.target.dataset.index;
//         removeFromWishlist(indexToRemove);
//       } else if (event.target.classList.contains('addToCartBtn')) {
//         const itemId = event.target.dataset.id;
//         addToCart(itemId);
//       }
//     });

//     // Call this function to render the initial wishlist
//     renderWishlist();
//   });


document.addEventListener('DOMContentLoaded', function () {
  const wishlistItemsContainer = document.getElementById('wishlistItems');
  const clearWishlistBtn = document.getElementById('clearWishlistBtn');

  // Function to render wishlist items on the page
  function renderWishlist() {
    const storedWishlist = localStorage.getItem('wishlist');

    if (!storedWishlist) {
      wishlistItemsContainer.innerHTML = '<p>Your wishlist is empty.</p>';
      return;
    }

    let wishlist;
    try {
      wishlist = JSON.parse(storedWishlist);
    } catch (error) {
      console.error('Error parsing wishlist data:', error);
      wishlistItemsContainer.innerHTML = '<p>An error occurred while loading your wishlist.</p>';
      return;
    }

    wishlistItemsContainer.innerHTML = ''; // Clear existing items

    if (wishlist.length === 0) {
      wishlistItemsContainer.innerHTML = '<p>Your wishlist is empty.</p>';
    } else {
      wishlist.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.innerHTML = `<div class="box food-item" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}">
          <h3>${item.name || 'Product Name Not Available'}</h3>
          <p>${item.description || 'Product Description Not Available'}</p>
          <p>Price: ${item.price || 'Price Not Available'}</p>
          <img src="${item.image || 'image-not-available.jpg'}" alt="${item.name || 'Product'} Image"><div><a href="/#dishes" id='goto'>go to items</a></div>
          <button class="removeBtn" data-index="${index}">X</button></div><hr></hr>`;
        wishlistItemsContainer.appendChild(listItem);
      });

      // Add event listeners to remove buttons
      const removeButtons = document.querySelectorAll('.removeBtn');
      removeButtons.forEach(button => {
        button.addEventListener('click', function () {
          const indexToRemove = parseInt(button.getAttribute('data-index'));
          removeFromWishlist(indexToRemove);
        });
      });
    }
  }

  // Event listener for the "Clear Wishlist" button
  clearWishlistBtn.addEventListener('click', function () {
    // Clear the wishlist in localStorage
    localStorage.removeItem('wishlist');

    // Render the updated wishlist (empty)
    renderWishlist();
  });

  // Function to remove a product from the wishlist
  function removeFromWishlist(index) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    renderWishlist();
  }

  // Event listener for the "Add to Cart" buttons in the wishlist
  wishlistItemsContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('add-to-cart-btn')) {
      const itemId = event.target.getAttribute('data-id');
      const itemName = event.target.getAttribute('data-name');
      const itemPrice = parseFloat(event.target.getAttribute('data-price'));
      const itemImage = event.target.getAttribute('data-image');

      // Retrieve the cart from session storage
      const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

      // Check if the item is already in the cart
      const existingItemIndex = cart.findIndex(item => item.id === itemId);

      if (existingItemIndex !== -1) {
        // Merge with existing item if it's already in the cart
        cart[existingItemIndex].quantity++;
        alert(`Quantity of ${itemName} increased to ${cart[existingItemIndex].quantity}`);
      } else {
        // Add the item to the cart with quantity 1 if it's not in the cart
        cart.push({
          id: itemId,
          name: itemName,
          price: itemPrice,
          quantity: 1,
          image: itemImage
        });
        alert(`${itemName} added to the cart.`);
      }

      // Store the updated cart in session storage
      sessionStorage.setItem('cart', JSON.stringify(cart));
    }
  });

  // Call the function to render wishlist when the page loads
  renderWishlist();
});

  

// // add to cart 
//  // main.js

// document.addEventListener('DOMContentLoaded', function () {
//   const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

//   // Retrieve the cart from session storage
//   const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

//   addToCartButtons.forEach(button => {
//       button.addEventListener('click', function () {
//       const foodItem = button.closest('.food-item');
//       const itemId = foodItem.getAttribute('data-id');
//       const itemName = foodItem.getAttribute('data-name');
//       const itemPrice = parseFloat(foodItem.getAttribute('data-price'));
//       const itemImage = foodItem.querySelector('img').src;

//       // Check if the item is already in the cart
//       const existingItem = cart.find(item => item.id === itemId);

//       if (existingItem) {
//         // Increment quantity if the item is already in the cart
//         existingItem.quantity++;
//         alert(`Quantity of ${itemName} increased to ${existingItem.quantity}`);
//       } else {
//         // Add the item to the cart with quantity 1 if it's not in the cart
//         cart.push({
//           id: itemId,
//           name: itemName,
//           price: itemPrice,
//           quantity: 1,
//           image: itemImage
//         });
//         alert(`${itemName} added to the cart.`);
//       }

//       // Store the updated cart in session storage
//       sessionStorage.setItem('cart', JSON.stringify(cart));

//       // Redirect to the cart page after adding to the cart
//       window.location.href = 'cart.html';
//     });
//   });
// });



