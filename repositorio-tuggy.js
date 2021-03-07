class ShoppingCart {

    constructor() {

        this.cart = [];

    }



    getAdd = function(prod) {

        this.cart.push(prod);

    }



    getFullCart = function() {

        console.log('Tenés ' + this.cart.length + ' productos en el carrito');

        for (var i = 0; i < this.cart.length; i++) {

            console.log(this.cart[i]);

        }

    }

}



class miProducto {

    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;

    }

}

var producto1 = new miProducto('Prod 1', $450);
var producto2 = new miProducto('Prod 2', $800);

var carrito = new ShoppingCart();

carrito.getAdd(producto1);

carrito.getAdd(producto2);



carrito.getFullCart();