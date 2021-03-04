class ShoppingCart {
    constructor(cart) {
        this.cart = [];
    }

    getAdd = function() {
        return this.cart.add;
    }​
    getRemove = function(id) {
        return this.cart.remove;
        // método para remover productos del carrito
    }​
    getCount = function() {
        return this.cart.count;
        // método para sacar la cantidad de elementos en el carrito
    }​

    getLength = function() {
        return this.cart.lenght;
    }
}

var carrito = new ShoppingCart();