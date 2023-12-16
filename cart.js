// // cart.js

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
