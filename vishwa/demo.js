function calculateTotal() {
    const prices = {
        item1: 10,
        item2: 7,
        item3: 8
    };

    let total = 0;

    // Get values from the form
    for (const item in prices) {
        const quantity = document.getElementById(item).value;
        total += prices[item] * quantity;
    }

    // Update the total amount
    document.getElementById('totalAmount').innerText = total.toFixed(2);
}
