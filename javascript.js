var totalPrice = 0;
var shoppingCart = [];
// add items to the cart
function addToCart() {
  shoppingCart.push("100% Solid Wood Box&nbsp;&nbsp;&nbsp;&nbsp;$79.99")
  totalPrice += 79.99;

  if(shoppingCart.length > 0) {
    document.getElementById("summary").innerHTML= shoppingCart[0] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + shoppingCart.length;
  }

  document.getElementById("total").innerHTML="Total: $" + Math.abs(totalPrice.toFixed(2));
  document.getElementById("notif").innerHTML=shoppingCart.length;
}

// remove item from cart
function removeFromCart() {
  shoppingCart.pop("100% Solid Wood Box&nbsp;&nbsp;&nbsp;&nbsp;$79.99")
  if(totalPrice > 0) {
    totalPrice -= 79.99; //prevent a negative total price
  }
  
  if (shoppingCart.length > 0) { // showed all the items in the cart and the quantity
    document.getElementById("summary").innerHTML= shoppingCart[0] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + shoppingCart.length;
  } else {
    document.getElementById("summary").innerHTML="No items in your cart."
  }

  document.getElementById("total").innerHTML="Total: $" + Math.abs(totalPrice.toFixed(2));
  document.getElementById("notif").innerHTML=shoppingCart.length;
}
// display all items
function displayCart() {
  if(shoppingCart.length > 0) {
    document.getElementById("summary").innerHTML= shoppingCart[0] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + shoppingCart.length;
  }

  document.getElementById("total").innerHTML="Total: $" + Math.abs(totalPrice.toFixed(2));
  document.getElementById("notif").innerHTML=shoppingCart.length;
}


// function showCart() {
//     for (var item = 0; item < shoppingCart.length; item++) {
//         console.log("Item " + (item+1) + " - " + shoppingCart[item]);
//     }
//     console.log("Total Price: $" + totalPrice.toFixed(2));
// }

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  displayCart();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}