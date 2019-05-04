var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 101)
 cart.push( { itemName:`${item}`, itemPrice: price })
 return `${item}` + " has been added to your cart."
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return "In your cart, you have " + `${cart[0].itemName}` + " at $" + `${cart[0].itemPrice}` + "."
  } else if (cart.length === 2) {
    return "In your cart, you have " + `${cart[0].itemName}` + " at $" + `${cart[0].itemPrice}` + ", and " + `${cart[1].itemName}` + " at $" + `${cart[1].itemPrice}` + "."
  } else {
    var array = []
    for(var i = 0; i < cart.length; i++) {
      array.push(" " + `${cart[i].itemName}` + " at $" + `${cart[i].itemPrice}`)
    }
    return "In your cart, you have" + array.slice(0,array.length-1) + ", and" + array.slice(array.length-1) + "."
  }
  
}

function total() {
  var sum = 0
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1)
      return cart
    } else {
      
    }
  }
}

function placeOrder(cardNumber) {
  
}
