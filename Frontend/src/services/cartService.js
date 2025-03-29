const cart = [];

function addToCart(itemId, quantity = 1) {
    const existingItem = cart.find(item => item.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ id: itemId, quantity });
    }

    console.log(`Item ${itemId} added. Current Cart:`, cart);
}


addToCart(1, 2); 
addToCart(2, 1); 
addToCart(1, 3); 
