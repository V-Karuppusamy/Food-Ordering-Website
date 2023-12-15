// for listing the navigation bar when option font icon is clicked

//Get the menu and navbar elements
// let menu = document.querySelector('#menu-bars');
// let navbar = document.querySelector('.navbar');

// // Add a click event listener to the menu
// menu.addEventListener('click', () => {
//     // Toggle the 'fa-times' class on the menu icon
//     menu.classList.toggle('fa-times');
    
//     // Toggle the 'active' class on the navbar
//     navbar.classList.toggle('active');
// });

// main.js
document.addEventListener('DOMContentLoaded', function() {
    let menu = document.getElementById('menu-bars');
    let navbar = document.querySelector('.navbar');

    if (menu) {
        menu.addEventListener('click', function() {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        });
    }
});







// const section=document.querySelectorAll("section");
// const navLinks=document.querySelectorAll("header .navbar a");

// window.addEventListener('scroll', ()=> {

//     let current='';
//     section.forEach(section=> {
//         const sectionTop=section.offsetTop - 100;
//         const sectionHeight=section.cleintHeight;
//         if(pageYOffset>=sectionTop){
//             current=section.getAttribute('id')
//         }
//     })
//     navLinks.forEach(li=>{
//         li.classList.remove('active')
//         if(li.classList.contains(current)){
//             li.classList.add('active')

//         }
//     })
// })

// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll("header .navbar a");

// window.addEventListener('scroll', () => {

//     let current = '';
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop - 100;
//         const sectionHeight = section.clientHeight; // Corrected typo here
//         if (window.pageYOffset >= sectionTop && window.pageYOffset < (sectionTop + sectionHeight)) {
//             current = section.getAttribute('id');
//         }
//     });

//     navLinks.forEach(li => {
//         li.classList.remove('active');
//         if (li.classList.contains(current)) {
//             li.classList.add('active');
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header .navbar a");

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < (sectionTop + sectionHeight)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(li => {
            li.classList.remove('active');
            if (li.classList.contains(current)) {
                li.classList.add('active');
            }
        });
    });
});





// 7 nov 2023 project
document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector('.menu');
    var navbar = document.querySelector('.navbar');

    // Check if menu and navbar are found in the DOM
    if (menu && navbar) {
        // Define the onscroll event handler
        window.onscroll = function() {
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
        };
    }
});

//     section.forEach(sec =>{

        
//         let bottom = window.scrollY;
//         let offset=sec.offsetTop - 150;
//         // console.log(offset)
//         let height=sec.offsetHeight;
//         let id=sec.getAttribute('id');

//         if(bottom => offset && top < offset + height){
//             navLinks.forEach(links =>{
//                 links.classList.remove('active');
//                 document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
//             });
//         };
//     });
//};



document.addEventListener('DOMContentLoaded', function() {
    var closeButton = document.querySelector("#close");

  // Check if the closeButton element is found in the DOM
    if (closeButton) {
        // Define the onclick event handler
        closeButton.onclick = function() {
            document.querySelector("#search-form").classList.remove("active");
        };
    }
});

// var swiper = new Swiper(".home-slider", {
//     spaceBetween: 30,
//       centeredSlides: true,
//       autoplay: {
//       delay: 5000,
//       disableOnInteraction: false,
//    },
//      pagination: {
//      el: ".swiper-pagination",
//      clickable: true,
//    },
//   loop:true,
//  });

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
    });
});


//  var swiper = new Swiper(".team-slider", {
 //   spaceBetween: 20,
 //   centeredSlides: true,
 //   autoplay: {
  //    delay: 3000,
   //   disableOnInteraction: false,
 //   },
 //  loop:true,
//   breakpoints:{
//    0:{
//    slidesPerView: 1 ,
 //   },
 //   640:{
 //       slidesPerView: 2 ,
//    },
//    768:{
//      slidesPerView: 2 ,
 //   },
 //   1024:{
 //       slidesPerView: 3 ,
 //   },
 //  }
 // });


function moveTo(section, tag) {
    // Get the section element
    var sectionTo = document.getElementById(section);

    // Get the inner div element
    var divTag = sectionTo.querySelector('#' + tag);

    // Scroll to the inner div
    divTag.scrollIntoView({ behavior: 'smooth' });
  }



//   for wishlist


    document.addEventListener('DOMContentLoaded', function () {
        let addToWishlistBtn = document.getElementById('addToWishlistBtn1');

        // Event listener for the "Add to Wishlist" button
        addToWishlistBtn.addEventListener('click', function () {
            // Retrieve product details
            let productName = "tower burger"
            let productDescription = "This is a sample product description.";
            let productPrice = "&#8377;199"
            let productImage = "/static/Triple trouble burger.png";

            // Create a product object
            let product = {
                name: productName,
                description: productDescription,
                price: productPrice,
                image: productImage
            };
            


            // Check if the product is already in the wishlist
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            let isProductInWishlist = wishlist.some(item => item.name === productName);

            if (isProductInWishlist) {
                // If the product is in the wishlist, remove it
                removeFromWishlist(product);
            } else {
                // If the product is not in the wishlist, add it
                addToWishlist(product);
            }
        });

        // Function to add a product to the wishlist
        function addToWishlist(product) {
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            updateButtonState(true);
        }

        // Function to remove a product from the wishlist
        function removeFromWishlist(product) {
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            wishlist = wishlist.filter(item => item.name !== product.name);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            updateButtonState(false);
        }

        // Function to update the button state based on wishlist status
        function updateButtonState(isInWishlist) {
            addToWishlistBtn.textContent = isInWishlist ? ' remove' : ' add';
        }

        // Check if the product is in the wishlist when the page loads
        let productName = "tower burger";
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        let isProductInWishlist = wishlist.some(item => item.name === productName);
        updateButtonState(isProductInWishlist);
    });

// second product 

    document.addEventListener('DOMContentLoaded', function () {
        let addToWishlistBtn = document.getElementById('addToWishlistBtn2');

        // Event listener for the "Add to Wishlist" button
        addToWishlistBtn.addEventListener('click', function () {
            // Retrieve product details
            let productName = "popcorn chicken"
            let productDescription = "this is a  sample product description";
            let productPrice = "&#8377;99"
            let productImage = "/static/fried chicken.png";

            // Create a product object
            let product = {
                name: productName,
                description: productDescription,
                price: productPrice,
                image: productImage
            };
            


            // Check if the product is already in the wishlist
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            let isProductInWishlist = wishlist.some(item => item.name === productName);

            if (isProductInWishlist) {
                // If the product is in the wishlist, remove it
                removeFromWishlist(product);
            } else {
                // If the product is not in the wishlist, add it
                addToWishlist(product);
            }
        });

        // Function to add a product to the wishlist
        function addToWishlist(product) {
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            updateButtonState(true);
        }

        // Function to remove a product from the wishlist
        function removeFromWishlist(product) {
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            wishlist = wishlist.filter(item => item.name !== product.name);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            updateButtonState(false);
        }

        // Function to update the button state based on wishlist status
        function updateButtonState(isInWishlist) {
            addToWishlistBtn.textContent = isInWishlist ? ' remove' : ' add';
        }

        // Check if the product is in the wishlist when the page loads
        let productName = "popcorn chicken";
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        let isProductInWishlist = wishlist.some(item => item.name === productName);
        updateButtonState(isProductInWishlist);
    });


// third product


    document.addEventListener('DOMContentLoaded', function () {
        let addToWishlistBtn = document.getElementById('addToWishlistBtn3');

        // Event listener for the "Add to Wishlist" button
        addToWishlistBtn.addEventListener('click', function () {
            // Retrieve product details
            let productName = "aambur biryani"
            let productDescription = "this is a sample  product description";
            let productPrice = "&#8377;149"
            let productImage = "/static/arabic kuthu.png";

            // Create a product object
            let product = {
                name: productName,
                description: productDescription,
                price: productPrice,
                image: productImage
            };
            


            // Check if the product is already in the wishlist
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            let isProductInWishlist = wishlist.some(item => item.name === productName);

            if (isProductInWishlist) {
                // If the product is in the wishlist, remove it
                removeFromWishlist(product);
            } else {
                // If the product is not in the wishlist, add it
                addToWishlist(product);
            }
        });

        // Function to add a product to the wishlist
        function addToWishlist(product) {
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            updateButtonState(true);
        }

        // Function to remove a product from the wishlist
        function removeFromWishlist(product) {
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            wishlist = wishlist.filter(item => item.name !== product.name);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            updateButtonState(false);
        }

        // Function to update the button state based on wishlist status
        function updateButtonState(isInWishlist) {
            addToWishlistBtn.textContent = isInWishlist ? ' remove' : ' add';
        }

        // Check if the product is in the wishlist when the page loads
        let productName = "aambur biryani";
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        let isProductInWishlist = wishlist.some(item => item.name === productName);
        updateButtonState(isProductInWishlist);
    });

// fourth prodouct


    document.addEventListener('DOMContentLoaded', function () {
        let addToWishlistBtn = document.getElementById('addToWishlistBtn4');

        // Event listener for the "Add to Wishlist" button
        addToWishlistBtn.addEventListener('click', function () {
            // Retrieve product details
            let productName = "crab kulambu"
            let productDescription = "This is a sample product description.";
            let productPrice = "&#8377;249"
            let productImage = "/static/crab fry .jpg";

            // Create a product object
            let product = {
                name: productName,
                description: productDescription,
                price: productPrice,
                image: productImage
            };
            


            // Check if the product is already in the wishlist
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            let isProductInWishlist = wishlist.some(item => item.name === productName);

            if (isProductInWishlist) {
                // If the product is in the wishlist, remove it
                removeFromWishlist(product);
            } else {
                // If the product is not in the wishlist, add it
                addToWishlist(product);
            }
        });

        // Function to add a product to the wishlist
        function addToWishlist(product) {
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            updateButtonState(true);
        }

        // Function to remove a product from the wishlist
        function removeFromWishlist(product) {
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            wishlist = wishlist.filter(item => item.name !== product.name);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            updateButtonState(false);
        }

        // Function to update the button state based on wishlist status
        function updateButtonState(isInWishlist) {
            addToWishlistBtn.textContent = isInWishlist ? ' remove' : ' add';
        }

        // Check if the product is in the wishlist when the page loads
        let productName = "crab kulambu";
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        let isProductInWishlist = wishlist.some(item => item.name === productName);
        updateButtonState(isProductInWishlist);
    });


// fifth product


    document.addEventListener('DOMContentLoaded', function () {
        let addToWishlistBtn = document.getElementById('addToWishlistBtn5');

        // Event listener for the "Add to Wishlist" button
        addToWishlistBtn.addEventListener('click', function () {
            // Retrieve product details
            let productName = "cuddalore fish fry";
            let productDescription = "This is a sample product description.";
            let productPrice = "&#8377;99";
            let productImage = "/static/fish fry.png";

            // Create a product object
            let product = {
                name: productName,
                description: productDescription,
                price: productPrice,
                image: productImage
            };
            


            // Check if the product is already in the wishlist
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            let isProductInWishlist = wishlist.some(item => item.name === productName);

            if (isProductInWishlist) {
                // If the product is in the wishlist, remove it
                removeFromWishlist(product);
            } else {
                // If the product is not in the wishlist, add it
                addToWishlist(product);
            }
        });

        // Function to add a product to the wishlist
        function addToWishlist(product) {
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            updateButtonState(true);
        }

        // Function to remove a product from the wishlist
        function removeFromWishlist(product) {
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            wishlist = wishlist.filter(item => item.name !== product.name);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            updateButtonState(false);
        }

        // Function to update the button state based on wishlist status
        function updateButtonState(isInWishlist) {
            addToWishlistBtn.textContent = isInWishlist ? ' remove' : ' add';
        }

        // Check if the product is in the wishlist when the page loads
        let productName = "cuddalore fish fry";
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        let isProductInWishlist = wishlist.some(item => item.name === productName);
        updateButtonState(isProductInWishlist);
    });
0

// sixth product


    document.addEventListener('DOMContentLoaded', function () {
        let addToWishlistBtn = document.getElementById('addToWishlistBtn6');

        // Event listener for the "Add to Wishlist" button
        addToWishlistBtn.addEventListener('click', function () {
            // Retrieve product details
            let productName = "ecr prawn fry";
            let productDescription = "This is a sample product description.";
            let productPrice = "&#8377;199";
            let productImage = "/static/fried prawn.png";

            // Create a product object
            let product = {
                name: productName,
                description: productDescription,
                price: productPrice,
                image: productImage
            };
            


            // Check if the product is already in the wishlist
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            let isProductInWishlist = wishlist.some(item => item.name === productName);

            if (isProductInWishlist) {
                // If the product is in the wishlist, remove it
                removeFromWishlist(product);
            } else {
                // If the product is not in the wishlist, add it
                addToWishlist(product);
            }
        });

        // Function to add a product to the wishlist
        function addToWishlist(product) {
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            updateButtonState(true);
        }

        // Function to remove a product from the wishlist
        function removeFromWishlist(product) {
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            wishlist = wishlist.filter(item => item.name !== product.name);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            updateButtonState(false);
        }

        // Function to update the button state based on wishlist status
        function updateButtonState(isInWishlist) {
            addToWishlistBtn.textContent = isInWishlist ? ' remove' : ' add';
        }

        // Check if the product is in the wishlist when the page loads
        let productName = "ecr prawn fry";
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        let isProductInWishlist = wishlist.some(item => item.name === productName);
        updateButtonState(isProductInWishlist);
    });


// seventh product



    document.addEventListener('DOMContentLoaded', function () {
        let addToWishlistBtn = document.getElementById('addToWishlistBtn7');

        // Event listener for the "Add to Wishlist" button
        addToWishlistBtn.addEventListener('click', function () {
            // Retrieve product details
            let productName = "nattu kozhi biryani";
            let productDescription = "This is a sample product description.";
            let productPrice = "&#8377;299";
            let productImage = "/static/Biryani.png";

            // Create a product object
            let product = {
                name: productName,
                description: productDescription,
                price: productPrice,
                image: productImage
            };
            


            // Check if the product is already in the wishlist
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            let isProductInWishlist = wishlist.some(item => item.name === productName);

            if (isProductInWishlist) {
                // If the product is in the wishlist, remove it
                removeFromWishlist(product);
            } else {
                // If the product is not in the wishlist, add it
                addToWishlist(product);
            }
        });

        // Function to add a product to the wishlist
        function addToWishlist(product) {
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            updateButtonState(true);
        }

        // Function to remove a product from the wishlist
        function removeFromWishlist(product) {
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            wishlist = wishlist.filter(item => item.name !== product.name);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            updateButtonState(false);
        }

        // Function to update the button state based on wishlist status
        function updateButtonState(isInWishlist) {
            addToWishlistBtn.textContent = isInWishlist ? ' remove' : ' add';
        }

        // Check if the product is in the wishlist when the page loads
        let productName = "nattu kozhi biryani";
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        let isProductInWishlist = wishlist.some(item => item.name === productName);
        updateButtonState(isProductInWishlist);
    });
    

// eigth product



document.addEventListener('DOMContentLoaded', function () {
    let addToWishlistBtn = document.getElementById('addToWishlistBtn8');

    // Event listener for the "Add to Wishlist" button
    addToWishlistBtn.addEventListener('click', function () {
        // Retrieve product details
        let productName = "barbeque chicken";
        let productDescription = "This is a sample product description.";
        let productPrice = "&#8377;399";
        let productImage = "/static/turkey1.png";

        // Create a product object
        let product = {
            name: productName,
            description: productDescription,
            price: productPrice,
            image: productImage
        };
        


        // Check if the product is already in the wishlist
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        let isProductInWishlist = wishlist.some(item => item.name === productName);

        if (isProductInWishlist) {
            // If the product is in the wishlist, remove it
            removeFromWishlist(product);
        } else {
            // If the product is not in the wishlist, add it
            addToWishlist(product);
        }
    });

    // Function to add a product to the wishlist
    function addToWishlist(product) {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateButtonState(true);
    }

    // Function to remove a product from the wishlist
    function removeFromWishlist(product) {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        wishlist = wishlist.filter(item => item.name !== product.name);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateButtonState(false);
    }

    // Function to update the button state based on wishlist status
    function updateButtonState(isInWishlist) {
        addToWishlistBtn.textContent = isInWishlist ? ' remove' : ' add';
    }

    // Check if the product is in the wishlist when the page loads
    let productName = "barbeque chicken";
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let isProductInWishlist = wishlist.some(item => item.name === productName);
    updateButtonState(isProductInWishlist);
});


// ninth product



document.addEventListener('DOMContentLoaded', function () {
    let addToWishlistBtn = document.getElementById('addToWishlistBtn9');

    // Event listener for the "Add to Wishlist" button
    addToWishlistBtn.addEventListener('click', function () {
        // Retrieve product details
        let productName = "chicken combo mania";
        let productDescription = "This is a sample product description.";
        let productPrice = "&#8377;299";
        let productImage = "/static/Tandoori-Platter-scaled-1-768x644.jpg";

        // Create a product object
        let product = {
            name: productName,
            description: productDescription,
            price: productPrice,
            image: productImage
        };
        


        // Check if the product is already in the wishlist
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        let isProductInWishlist = wishlist.some(item => item.name === productName);

        if (isProductInWishlist) {
            // If the product is in the wishlist, remove it
            removeFromWishlist(product);
        } else {
            // If the product is not in the wishlist, add it
            addToWishlist(product);
        }
    });

    // Function to add a product to the wishlist
    function addToWishlist(product) {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateButtonState(true);
    }

    // Function to remove a product from the wishlist
    function removeFromWishlist(product) {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        wishlist = wishlist.filter(item => item.name !== product.name);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateButtonState(false);
    }

    // Function to update the button state based on wishlist status
    function updateButtonState(isInWishlist) {
        addToWishlistBtn.textContent = isInWishlist ? ' remove' : ' add';
    }

    // Check if the product is in the wishlist when the page loads
    let productName = "chicken combo mania";
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let isProductInWishlist = wishlist.some(item => item.name === productName);
    updateButtonState(isProductInWishlist);
});





// add to cart 
 // main.js

document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  
    // Retrieve the cart from session storage
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
        const foodItem = button.closest('.food-item');
        const itemId = foodItem.getAttribute('data-id');
        const itemName = foodItem.getAttribute('data-name');
        const itemPrice = parseFloat(foodItem.getAttribute('data-price'));
        const itemImage = foodItem.querySelector('img').src;
  
        // Check if the item is already in the cart
        const existingItem = cart.find(item => item.id === itemId);
  
        if (existingItem) {
          // Increment quantity if the item is already in the cart
          existingItem.quantity++;
          alert(`Quantity of ${itemName} increased to ${existingItem.quantity}`);
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
  
        // Redirect to the cart page after adding to the cart
        window.location.href = 'cart.html';
      });
    });
  });
  
  

