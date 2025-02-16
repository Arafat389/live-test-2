let subtotal = 80;
let discount = 0;
let appliedPromo = null;

function applyPromoCode() {
    let promoCode = document.getElementById('promo-code').value.trim();
    let message = document.getElementById('message');
    
    if (appliedPromo) {
        message.innerHTML = '<span class="error">Promo code already applied!</span>';
        return;
    }

    if (promoCode === "ostad10") {
        discount = subtotal * 0.10;
        appliedPromo = "ostad10";
        message.innerHTML = '<span class="success">10% discount applied!</span>';
    } else if (promoCode === "ostad5") {
        discount = subtotal * 0.05;
        appliedPromo = "ostad5";
        message.innerHTML = '<span class="success">5% discount applied!</span>';
    } else {
        message.innerHTML = '<span class="error">Invalid promo code!</span>';
        return;
    }

    updateTotal();
}

function updateTotal() {
    document.getElementById('discount').innerText = discount.toFixed(2);
    document.getElementById('total').innerText = (subtotal - discount).toFixed(2);
}