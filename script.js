let products = [];

function addProduct() {
  const productName = prompt("Masukkan nama produk:");
  const productPrice = parseFloat(prompt("Masukkan harga produk:"));

if (!isNaN(productPrice)) {
    const product = { name: productName, price: productPrice, quantity: 1 };
    products.push(product);
    displayProducts();
} else {
    alert("Harga produk tidak valid. Silakan masukkan angka.");
}
}

function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach((product, index) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");

        const inputName = document.createElement("input");
        inputName.type = "text";
        inputName.value = product.name;
        inputName.addEventListener("input", (event) => updateProductName(index, event.target.value));

        const inputPrice = document.createElement("input");
        inputPrice.type = "number";
        inputPrice.value = product.price;
        inputPrice.addEventListener("input", (event) => updateProductPrice(index, event.target.value));

        const inputQuantity = document.createElement("input");
        inputQuantity.type = "number";
        inputQuantity.value = product.quantity;
        inputQuantity.min = 1;
        inputQuantity.addEventListener("input", (event) => updateProductQuantity(index, event.target.value));

        const removeButton = document.createElement("button");
        removeButton.textContent = "Hapus";
        removeButton.addEventListener("click", () => removeProduct(index));

        productItem.appendChild(inputName);
        productItem.appendChild(inputPrice);
        productItem.appendChild(inputQuantity);
        productItem.appendChild(removeButton);

        productList.appendChild(productItem);
    });
}

function updateProductName(index, newName) {
    products[index].name = newName;
}

function updateProductPrice(index, newPrice) {
    const parsedPrice = parseFloat(newPrice);
    if (!isNaN(parsedPrice)) {
        products[index].price = parsedPrice;
    }
}

function updateProductQuantity(index, newQuantity) {
    const parsedQuantity = parseInt(newQuantity);
    if (!isNaN(parsedQuantity) && parsedQuantity >= 1) {
        products[index].quantity = parsedQuantity;
    }
}

function removeProduct(index) {
    products.splice(index, 1);
    displayProducts();
}

function calculateTotal() {
    const totalElement = document.getElementById("total");
    const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
    totalElement.textContent = total.toFixed(2);
}

// Menampilkan produk awal
addProduct();
addProduct();
