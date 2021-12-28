// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1, // propiedad-"id" del producto-numero entero (integer)
        name: 'cooking oil', // propiedad-nombre del producto-string
        price: 10.5, //propiedad-precio del producto-numero decimal(float)
        type: 'grocery' //propiedad-tipo de producto-string
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;


// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array 
    products.forEach (product => {
        if(id===product.id) {
            cartList.push (product);
            console.log('El producto ' + product.name + ' ha sido añadido al carrito');
        }
    });
    calculateSubtotals();
    calculateTotal();
}

// Exercise 2
function cleanCart() {
    cartList = [];
    console.log('La cesta se ha vaciado correctamente. Productos en la cesta: ' + cartList.length); 
}

// Exercise X (este ejercicio no aparece en el sprint 1)
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    subtotal.grocery.value = 0;
    subtotal.beauty.value = 0;
    subtotal.clothes.value = 0;
    cartList.forEach (product => {
        switch (product.type) {
            case 'grocery':
                subtotal.grocery.value = product.price + subtotal.grocery.value;
                break;
            case 'beauty':
                subtotal.beauty.value = product.price + subtotal.beauty.value;
                break;
            case 'clothes':
                subtotal.clothes.value = product.price + subtotal.clothes.value;
                break;        
        }
    });
     console.log ('El subtotal de grocery es: ' + subtotal.grocery.value);
     console.log ('El subtotal de beauty es: ' + subtotal.beauty.value);
     console.log ('El subtotal de clothes es: ' + subtotal.clothes.value);
    } 

   
// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
    total = 0; //Le damos el valor "0" a total para que no se acumule al total anterior
    cartList.forEach (product => {
        total = product.price + total;
    });
    console.log ('El total es:' + total);
}

// Exercise 4
//No hace falta que la función reciba CartList porque es una variable global.
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    var cart = [];
    
    var productFound; //definimos un flag para saber si hemos encontrado o no el producto en Cart.
    cartList.forEach (productCartList => {
        productFound = false;
        // Buscamos si el producto esta en el cart
        cart.forEach (productCart => {
            if(productCartList.id === productCart.id) {
                productFound = true;
                productCart.quantity ++;
                productCart.subtotal = productCart.quantity * productCart.price;
            }
        }); 

        if (productFound === false) { //si el producto no existe en el cart, lo añadimos...
            var product = Object.assign({}, productCartList); //Hago una copia del productCartList sin la referencia para poder modificar "quantity"
            product.quantity = 1;
            product.subtotal = product.price;
            cart.push (product); 
        }  
    });
    console.log('Carrito generado:');
    console.log(cart);
    
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
