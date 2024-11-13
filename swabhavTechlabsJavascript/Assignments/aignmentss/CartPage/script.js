function updatePrice() {
    const productSelect = document.getElementById('product');
    const selectedOption = productSelect.selectedOptions[0];
    document.getElementById('price').value = selectedOption.getAttribute('data-price');
}

let cartItems = [];

function addToCart() {
    const productSelect = document.getElementById('product');
    const productName = productSelect.value;
    const price = parseFloat(productSelect.selectedOptions[0].getAttribute('data-price'));
    const quantity = parseInt(document.getElementById('quantity').value);

    if (quantity <= 0) {
        alert("Quantity should be at least 1");
        return;
    }

   
    let existingItem = cartItems.find(item => item.product === productName);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cartItems.push({ product: productName, price: price, quantity: quantity });
    }

    updateCartDisplay();
}


function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; 

    let totalValue = 0;

    cartItems.forEach((item, index) => {
        const subTotal = item.price * item.quantity;
        totalValue += subTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.product}</td>
            <td>
                <button onclick="changeQuantity(${index}, -1)">-</button>
                ${item.quantity}
                <button onclick="changeQuantity(${index}, 1)">+</button>
            </td>
            <td>Rs.${item.price}</td>
            <td>Rs.${subTotal}</td>
            <td><button onclick="removeItem(${index})">🗑️</button></td>
        `;
        cartItemsContainer.appendChild(row);
    });

    document.getElementById('total-value').textContent = totalValue;
}


function changeQuantity(index, change) {
    if (cartItems[index].quantity + change > 0) {
        cartItems[index].quantity += change;
    } else {
        removeItem(index);
    }
    updateCartDisplay();
}


function removeItem(index) {
    cartItems.splice(index, 1);
    updateCartDisplay();
}
