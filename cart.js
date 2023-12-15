// // cart.js

// document.addEventListener('DOMContentLoaded', function () {
//     const cartList = document.getElementById('cart-list');
//     const orderNowBtn = document.getElementById('order-now-btn');
//     const totalPriceElement = document.getElementById('total-price');
  
//     // Retrieve the cart from session storage
//     let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  
//     updateCartDisplay();
  
//     function updateCartDisplay() {
//       if (cart.length > 0) {
//         cartList.innerHTML = '';
  
//         let totalPrice = 0;
  
//         cart.forEach(item => {
//           const listItem = document.createElement('li');
//           listItem.innerHTML = `
//             <img src="${item.image}" alt="${item.name}" width="50" height="50">
//             ${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}
//             <button class="remove-item-btn" data-id="${item.id}">Remove</button>`;
//           cartList.appendChild(listItem);
  
//           totalPrice += item.price * item.quantity;
//         });
  
//         totalPriceElement.innerText = `Total: $${totalPrice.toFixed(2)}`;
  
//         // Enable "Order Now" button
//         orderNowBtn.disabled = false;
  
//         // Attach event listeners to remove buttons
//         const removeButtons = document.querySelectorAll('.remove-item-btn');
//         removeButtons.forEach(button => {
//           button.addEventListener('click', function () {
//             const itemId = button.getAttribute('data-id');
//             removeItemFromCart(itemId);
//           });
//         });
//       } else {
//         // Show a message indicating the cart is empty
//         cartList.innerHTML = '<li>Your cart is empty. Add items to your cart first.</li>';
//         totalPriceElement.innerText = 'Total: $0.00';
//         orderNowBtn.disabled = true;
//       }
//     }
  
//     function removeItemFromCart(itemId) {
//       const itemIndex = cart.findIndex(item => item.id === itemId);
  
//       if (itemIndex !== -1) {
//         if (cart[itemIndex].quantity > 1) {
//           // Decrease quantity by 1 if it's greater than 1
//           cart[itemIndex].quantity--;
//         } else {
//           // Remove the item if quantity is 1
//           cart.splice(itemIndex, 1);
//         }
  
//         // Update cart in session storage
//         sessionStorage.setItem('cart', JSON.stringify(cart));
//         updateCartDisplay();
//       }
//     }
  
//     orderNowBtn.addEventListener('click', function () {
//       if (cart.length > 0) {
//         // Here you can implement the logic to submit the order
//         console.log('Order Placed:', cart);
//         // You may want to send this data to your server for processing
//         // After processing, you might want to clear the cart
//         sessionStorage.removeItem('cart');
//         // You can also redirect the user to a confirmation page
//         alert('Order placed successfully!');
//         // Redirect to the homepage or a confirmation page
//         window.location.href = 'index.html';
//       } else {
//         alert('Your cart is empty. Add items to your cart first.');
//       }
//     });
//   });
  
// cart.js

// document.addEventListener('DOMContentLoaded', function () {
//     const cartList = document.getElementById('cart-list');
//     const orderNowBtn = document.getElementById('order-now-btn');
//     const totalPriceElement = document.getElementById('total-price');
  
//     // Retrieve the cart from session storage
//     let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  
//     // Call the function to initially update the cart display
//     updateCartDisplay();
  
//     function updateCartDisplay() {
//       if (cart.length > 0) {
//         // If the cart is not empty, update the display
  
//         cartList.innerHTML = '';
  
//         let totalPrice = 0;
  
//         cart.forEach(item => {

//           // const elwin=document.createElement('tr');
//           // listItem.setAttribute('id','elwinid')
//           // cartList.appendChild(elwin)
//           // const elwinid=document.getElementById('elwinid')


//           const listItem = document.createElement('tr');
//           listItem.setAttribute('id','align')
//           listItem.innerHTML = `<td id=image >
//             <img src="${item.image}" alt="${item.name}" width="100" height="100">
//             ${item.name}</td> <td id='price'> &#8377;${item.price.toFixed(2)} </td><td id='qty'> Qty-${item.quantity} </td><td id='ttl'> &#8377;${(item.price * item.quantity).toFixed(2)}</td>
//             <td id='rmv'><button class="remove-item-btn" data-id="${item.id}">Remove</button></td>`;
//           cartList.appendChild(listItem);
  
//           totalPrice += item.price * item.quantity;
//         });
  
//         totalPriceElement.innerText = `Total: ₹${totalPrice.toFixed(2)}`;
  
//         // Enable "Order Now" button
//         orderNowBtn.disabled = false;
  
//         // Attach event listeners to remove buttons
//         const removeButtons = document.querySelectorAll('.remove-item-btn');
//         removeButtons.forEach(button => {
//           button.addEventListener('click', function () {
//             const itemId = button.getAttribute('data-id');
//             removeItemFromCart(itemId);
//           });
//         });
//       } else {
//         // If the cart is empty, display a message
  
//         cartList.innerHTML = "<p id='emty'>Your cart is empty, add item</p>";
//         totalPriceElement.innerText = 'Total: ₹0.00';
//         orderNowBtn.disabled = true;
//       }
//     }
  
//     function removeItemFromCart(itemId) {
//       // Function to remove an item from the cart
//       const itemIndex = cart.findIndex(item => item.id === itemId);
  
//       if (itemIndex !== -1) {
//         if (cart[itemIndex].quantity > 1) {
//           // Decrease quantity by 1 if it's greater than 1
//           cart[itemIndex].quantity--;
//         } else {
//           // Remove the item if quantity is 1
//           cart.splice(itemIndex, 1);
//         }
  
//         // Update cart in session storage
//         sessionStorage.setItem('cart', JSON.stringify(cart));
  
//         // Update the cart display
//         updateCartDisplay();
//       }
//     }
  
//     // Function to add dishes to the cart from the cart page
//     function addDishToCart(itemId, itemName, itemPrice, itemImage) {
//       const existingItem = cart.find(item => item.id === itemId);
  
//       if (existingItem) {
//         // Increment quantity if the item is already in the cart
//         existingItem.quantity++;
//       } else {
//         // Add the item to the cart with quantity 1 if it's not in the cart
//         cart.push({
//           id: itemId,
//           name: itemName,
//           price: itemPrice,
//           quantity: 1,
//           image: itemImage
//         });
//       }
  
//       // Update cart in session storage
//       sessionStorage.setItem('cart', JSON.stringify(cart));
  
//       // Update the cart display
//       updateCartDisplay();
  
//       // Optionally, you can display a message to indicate that the dish has been added
//       alert(`${itemName} added to the cart.`);
//     }
  
//     // Example: Add a dish to the cart when the page loads (you can remove this in your actual usage)
//     // addDishToCart('1', 'Tower Burger', 199.00, 'Images/Triple trouble burger.png');
//     // addDishToCart('2', 'Popcorn Chicken', 99.00, 'Images/fried chicken.png');
  
//     orderNowBtn.addEventListener('click', function () {
//       if (cart.length > 0) {
//         // Here you can implement the logic to submit the order
//         console.log('Order Placed:', cart);
//         // You may want to send this data to your server for processing
//         // After processing, you might want to clear the cart
//         sessionStorage.removeItem('cart');
//         // You can also redirect the user to a confirmation page
//         alert('Order placed successfully!');
//         // Redirect to the homepage or a confirmation page
//         window.location.href = '/Project/Daily Kozhi.html';
//       } else {
//         alert('Your cart is empty. Add items to your cart first.');
//       }
//     });
//   });



// document.addEventListener('DOMContentLoaded', function () {
//   const cartList = document.getElementById('cart-list');
//   const orderNowBtn = document.getElementById('order-now-btn');
//   const totalPriceElement = document.getElementById('total-price');

//   // Retrieve the cart from session storage
//   let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

//   // Call the function to initially update the cart display
//   updateCartDisplay();

//   function updateCartDisplay() {
//     if (cart.length > 0) {
//       // If the cart is not empty, update the display

//       cartList.innerHTML = '';

//       let totalPrice = 0;

//       cart.forEach(item => {
//         const listItem = document.createElement('tr');
//         listItem.innerHTML = `<td>
//           <img src="${item.image}" alt="${item.name}" width="100" height="100">
//           ${item.name}</td> <td id='price'> ₹${item.price.toFixed(2)} </td><td id='qty'> Qty-${item.quantity} </td><td id='ttl'> ₹${(item.price * item.quantity).toFixed(2)}</td>
//           <td><button class="remove-item-btn" data-id="${item.id}">Remove</button></td>`;
//         cartList.appendChild(listItem);

//         totalPrice += item.price * item.quantity;
//       });

//       totalPriceElement.innerText = `Total: ₹${totalPrice.toFixed(2)}`;

//       // Enable "Order Now" button
//       orderNowBtn.disabled = false;

//       // Attach event listeners to remove buttons
//       const removeButtons = document.querySelectorAll('.remove-item-btn');
//       removeButtons.forEach(button => {
//         button.addEventListener('click', function () {
//           const itemId = button.getAttribute('data-id');
//           removeItemFromCart(itemId);
//         });
//       });
//     } else {
//       // If the cart is empty, display a message

//       cartList.innerHTML = "<p id='emty'>Your cart is empty, add items</p>";
//       totalPriceElement.innerText = 'Total: ₹0.00';
//       orderNowBtn.disabled = true;
//     }
//   }

//   function removeItemFromCart(itemId) {
//     // Function to remove an item from the cart
//     const itemIndex = cart.findIndex(item => item.id === itemId);

//     if (itemIndex !== -1) {
//       if (cart[itemIndex].quantity > 1) {
//         // Decrease quantity by 1 if it's greater than 1
//         cart[itemIndex].quantity--;
//       } else {
//         // Remove the item if quantity is 1
//         cart.splice(itemIndex, 1);
//       }

//       // Update cart in session storage
//       sessionStorage.setItem('cart', JSON.stringify(cart));

//       // Update the cart display
//       updateCartDisplay();
//     }
//   }

//   // Function to add dishes to the cart from the cart page
//   function addDishToCart(itemId, itemName, itemPrice, itemImage) {
//     const existingItem = cart.find(item => item.id === itemId);

//     if (existingItem) {
//       // Increment quantity if the item is already in the cart
//       existingItem.quantity++;
//     } else {
//       // Add the item to the cart with quantity 1 if it's not in the cart
//       cart.push({
//         id: itemId,
//         name: itemName,
//         price: itemPrice,
//         quantity: 1,
//         image: itemImage
//       });
//     }

//     // Update cart in session storage
//     sessionStorage.setItem('cart', JSON.stringify(cart));

//     // Update the cart display
//     updateCartDisplay();

//     // Optionally, you can display a message to indicate that the dish has been added
//     alert(`${itemName} added to the cart.`);
//   }

//   // Example: Add a dish to the cart when the page loads (you can remove this in your actual usage)
//   // addDishToCart('1', 'Tower Burger', 199.00, 'Images/Triple trouble burger.png');
//   // addDishToCart('2', 'Popcorn Chicken', 99.00, 'Images/fried chicken.png');

//   orderNowBtn.addEventListener('click', function () {
//     if (cart.length > 0) {
//       // Here you can implement the logic to submit the order
//       console.log('Order Placed:', cart);
//       // You may want to send this data to your server for processing
//       // After processing, you might want to clear the cart
//       sessionStorage.removeItem('cart');
//       // You can also redirect the user to a confirmation page
//       alert('Order placed successfully!');
//       // Redirect to the homepage or a confirmation page
//       window.location.href = '/Project/Daily Kozhi.html';
//     } else {
//       alert('Your cart is empty. Add items to your cart first.');
//     }
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const cartList = document.getElementById('cart-list');
//   const orderNowBtn = document.getElementById('order-now-btn');
//   const totalPriceElement = document.getElementById('total-price');

//   // Retrieve the cart from session storage
//   let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

//   // Call the function to initially update the cart display
//   updateCartDisplay();

//   function updateCartDisplay() {
//     if (cart.length > 0) {
//       // If the cart is not empty, update the display

//       cartList.innerHTML = '';

//       let totalPrice = 0;

//       cart.forEach(item => {
//         const listItem = document.createElement('tr');
//         listItem.innerHTML = `<td>
//           <img src="${item.image}" alt="${item.name}" width="100" height="100">
//           ${item.name}</td> <td id='price'> &#8377;${item.price.toFixed(2)} </td><td id='qty'> Qty-${item.quantity} </td><td id='ttl'> &#8377;${(item.price * item.quantity).toFixed(2)}</td>
//           <td><button class="remove-item-btn" data-id="${item.id}">Remove</button></td>`;
//         cartList.appendChild(listItem);

//         totalPrice += item.price * item.quantity;
//       });

//       totalPriceElement.innerText = `Total: ₹${totalPrice.toFixed(2)}`;

//       // Enable "Order Now" button
//       orderNowBtn.disabled = false;

//       // Attach event listeners to remove buttons
//       const removeButtons = document.querySelectorAll('.remove-item-btn');
//       removeButtons.forEach(button => {
//         button.addEventListener('click', function () {
//           const itemId = button.getAttribute('data-id');
//           removeItemFromCart(itemId);
//         });
//       });
//     } else {
//       // If the cart is empty, display a message

//       cartList.innerHTML = "<p id='emty'>Your cart is empty, add item</p>";
//       totalPriceElement.innerText = 'Total: ₹0.00';
//       orderNowBtn.disabled = true;
//     }
//   }

//   function removeItemFromCart(itemId) {
//     // Function to remove an item from the cart
//     const itemIndex = cart.findIndex(item => item.id === itemId);

//     if (itemIndex !== -1) {
//       if (cart[itemIndex].quantity > 1) {
//         // Decrease quantity by 1 if it's greater than 1
//         cart[itemIndex].quantity--;
//       } else {
//         // Remove the item if quantity is 1
//         cart.splice(itemIndex, 1);
//       }

//       // Update cart in session storage
//       sessionStorage.setItem('cart', JSON.stringify(cart));

//       // Update the cart display
//       updateCartDisplay();
//     }
//   }

//   // Function to add dishes to the cart from the cart page
//   function addDishToCart(itemId, itemName, itemPrice, itemImage) {
//     const existingItem = cart.find(item => item.id === itemId);

//     if (existingItem) {
//       // Increment quantity if the item is already in the cart
//       existingItem.quantity++;
//     } else {
//       // Add the item to the cart with quantity 1 if it's not in the cart
//       cart.push({
//         id: itemId,
//         name: itemName,
//         price: itemPrice,
//         quantity: 1,
//         image: itemImage
//       });
//     }

//     // Update cart in session storage
//     sessionStorage.setItem('cart', JSON.stringify(cart));

//     // Update the cart display
//     updateCartDisplay();

//     // Optionally, you can display a message to indicate that the dish has been added
//     alert(`${itemName} added to the cart.`);
//   }

//   // Example: Add a dish to the cart when the page loads (you can remove this in your actual usage)
//   // addDishToCart('1', 'Tower Burger', 199.00, 'Images/Triple trouble burger.png');
//   // addDishToCart('2', 'Popcorn Chicken', 99.00, 'Images/fried chicken.png');

//   orderNowBtn.addEventListener('click', function () {
//     if (cart.length > 0) {
//       // Here you can implement the logic to submit the order
//       console.log('Order Placed:', cart);
//       // You may want to send this data to your server for processing
//       // After processing, you might want to clear the cart
//       sessionStorage.removeItem('cart');
//       // You can also redirect the user to a confirmation page
//       alert('Order placed successfully!');
//       // Redirect to the homepage or a confirmation page
//       window.location.href = '/Project/Daily Kozhi.html';
//     } else {
//       alert('Your cart is empty. Add items to your cart first.');
//     }
//   });
// });


  document.addEventListener('DOMContentLoaded', function () {
  const cartList = document.getElementById('cart-list');
  const orderNowBtn = document.getElementById('order-now-btn');
  const totalPriceElement = document.getElementById('total-price');

  // Retrieve the cart from session storage
  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

  // Call the function to initially update the cart display
  updateCartDisplay();

  function updateCartDisplay() {
    if (cart.length > 0) {
      // If the cart is not empty, update the display

      cartList.innerHTML = '';

      let totalPrice = 0;

      cart.forEach(item => {
        const listItem = document.createElement('tr');
        listItem.setAttribute('id','align')
        listItem.innerHTML = `<td id=image >
             <img src="${item.image}" alt="${item.name}" width="100" height="100">
             ${item.name}</td> <td id='price'> &#8377;${item.price.toFixed(2)} </td><td id='qty'> Qty-${item.quantity} </td><td id='ttl'> &#8377;${(item.price * item.quantity).toFixed(2)}</td>
             <td id='rmv'><button class="remove-item-btn" data-id="${item.id}">Remove</button></td>`;
          cartList.appendChild(listItem);

        totalPrice += item.price * item.quantity;
      });

      totalPriceElement.innerText = `Total: ₹${totalPrice.toFixed(2)}`;

      // Enable "Order Now" button
      orderNowBtn.disabled = false;

      // Attach event listeners to remove buttons
      const removeButtons = document.querySelectorAll('.remove-item-btn');
      removeButtons.forEach(button => {
        button.addEventListener('click', function () {
          const itemId = button.getAttribute('data-id');
          removeItemFromCart(itemId);
        });
      });
    } else {
      // If the cart is empty, display a message

      cartList.innerHTML = "<p id='empty'>Your cart is empty, add items</p>";
      totalPriceElement.innerText = 'Total: ₹0.00';
      orderNowBtn.disabled = true;
    }

    orderNowBtn.addEventListener('click', function () {
      if (cart.length > 0) {
        // Collect user input
        const userName = 'a';//prompt('Please enter your name:');
        const userAddress = prompt('Please enter your address:');
        const userRate = 5;//prompt('Please rate your satisfaction (out of 5):');

        // Validate user input
        if (userAddress) {
          const orderData = {
            userName ,
            userAddress,
            userRate,
            items: cart.map(item => ({ id: item.id, name: item.name, quantity: item.quantity,price:item.price })),
          };

          // Send a POST request to the server
          fetch('/placeOrder', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
          })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              sessionStorage.removeItem('cart');
              alert('Order placed successfully!');
              window.location.href = '/';
            })
            .catch(error => {
              console.error('Error placing order:', error);
              alert('Error placing order. Please login and try again.');
              window.location.href = '/order';
            });
        } else {
          alert('Invalid input. Please enter valid information.');
        }
      } else {
        alert('Your cart is empty. Add items to your cart first.');
        window.location.href = '/'
      }
    });
  }

  function removeItemFromCart(itemId) {
    // Function to remove an item from the cart
    const itemIndex = cart.findIndex(item => item.id === itemId);

    if (itemIndex !== -1) {
      if (cart[itemIndex].quantity > 1) {
        // Decrease quantity by 1 if it's greater than 1
        cart[itemIndex].quantity--;
      } else {
        // Remove the item if quantity is 1
        cart.splice(itemIndex, 1);
      }

      // Update cart in session storage
      sessionStorage.setItem('cart', JSON.stringify(cart));

      // Update the cart display
      updateCartDisplay();
    }
  }
});