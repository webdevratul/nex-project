let addProduct = () => {
    let productField = document.getElementById("product-name");
    let productQuantity = document.getElementById("product-quantity");
    let product = productField.value;
    let quantity = productQuantity.value;

    productField.value = "";
    productQuantity.value = "";

    displayProduct(product, quantity);
    saveProductLocalStorage(product, quantity);
}

let displayProduct = (product, quantity) => {
    let ul = document.getElementById("product-container");
    let li = document.createElement("li");
    li.innerText = `${product}: ${quantity}`
    ul.appendChild(li);
}

let getStoredShoppingCart = () => {
    let cart = {};
    let storedCart = localStorage.getItem("cart");
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}

let saveProductLocalStorage = (product, quantity) => {
    let cart = getStoredShoppingCart();
    cart[product] = quantity;
    let cartStringFied = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringFied);
}

let displayProductsFromLocalStorage = () => {
    let saveCart = getStoredShoppingCart();
    for (let product in saveCart) {
        let quantity = saveCart[product];
        console.log(product, quantity);
        displayProduct(product, quantity);
    }
}

displayProductsFromLocalStorage();