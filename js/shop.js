// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1, // propiedad-"id" del producto-numero entero (integer)
        name: 'cooking oil', // propiedad-nombre del producto (string)
        price: 10.5, //propiedad-precio del producto-numero decimal (float)
        type: 'grocery' //propiedad-tipo de producto (string)
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
function buy(id) { //la función recibe el id del producto que se va a añadir al carrito.
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array 
    products.forEach (product => { // con el forEach, recorremos el array de products para buscar el producto que quiere añadir el usuario al carrito.
        if(id===product.id) { //creamos un condicional if, si id es igual a la propiedad id del producto.
            cartList.push (product); // con el metodo "push" lo añadimos al carrito.
            console.log('El producto ' + product.name + ' ha sido añadido al carrito');
        }
    });
    calculateSubtotals();
    calculateTotal();
    document.getElementById("cartQuantity").innerHTML = cartList.length;
}

// Exercise 2
function cleanCart() { //reiniciar la variable carList
    cartList = [];
    console.log('La cesta se ha vaciado correctamente. Productos en la cesta: ' + cartList.length); 
}

// Exercise X (este ejercicio no aparece en el nivel 1)
function calculateSubtotals(productsToCalculate) { //la funcion recibe una array con la que se calculan los subtotales
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    console.log("calculateSubtotals");
    console.log(productsToCalculate);
    subtotal.grocery.value = 0; // igualamos a 0 la propiedades "value" de cada subtotal para que no se acumule al total anterior
    subtotal.beauty.value = 0;
    subtotal.clothes.value = 0;
    productsToCalculate.forEach (product => {// con el forEach recorremos Cart
        switch (product.type) {// mediante la declaración switch, creamos 3 casos para sumar las cantidades de cada tipo de producto y obtener los subtotales
            case 'grocery':
                subtotal.grocery.value = product.subtotal + subtotal.grocery.value;
                break;
            case 'beauty':
                subtotal.beauty.value = product.subtotal + subtotal.beauty.value;
                break;
            case 'clothes':
                subtotal.clothes.value = product.subtotal + subtotal.clothes.value;
                break;        
        }
    });
     console.log ('El subtotal de grocery es: ' + subtotal.grocery.value);
     console.log ('El subtotal de beauty es: ' + subtotal.beauty.value);
     console.log ('El subtotal de clothes es: ' + subtotal.clothes.value);
} 

   
// Exercise 3
function calculateTotal(productsToCalculate) {//la funcion recibe una array con la que se calculan los totales
    // Calculate total price of the cart either using the "cartList" array
    total = 0; // Le damos el valor "0" a total para que no se acumule al total anterior
    productsToCalculate.forEach (product => { // recorremos la array de cart (productsToCalculate)
        total = product.subtotal + total;
    });
    console.log ('El total es:' + total);
}

// Exercise 4
//No hace falta que la función reciba CartList porque es una variable global ¿¿¿¿????
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    var cart = [];
    
    var productFound; // definimos un flag (bandera) para saber si hemos encontrado o no el producto en Cart.
    cartList.forEach (productCartList => {
        productFound = false;
        // Buscamos si el producto esta en el Cart.
        cart.forEach (productCart => {
            if(productCartList.id === productCart.id) {
                productFound = true; // si el producto SI existe en el Cart:
                productCart.quantity ++; // incrementamos 1 al campo cantidad
                productCart.subtotal = productCart.quantity * productCart.price;
                productCart.subtotalWithDiscount = productCart.subtotal;
            }
        }); 

        if (productFound === false) { // si el producto NO existe en el cart: lo añadimos con el metodo "push"
            var product = Object.assign({}, productCartList); /* Hago una copia del productCartList sin la referencia para poder modificar "quantity". 
            El metodo Object.assign copia sólo las propiedades enumerables y propias del objeto origen a un objeto destino*/
            product.quantity = 1;
            product.subtotal = product.price;
            product.subtotalWithDiscount = product.subtotal;
            cart.push (product); 
        }  
    });
    console.log('Carrito generado:');
    console.log(cart);  
    applyPromotionsCart(cart);
    //Llamar a la funcion applyPromotionsCart
}

// Exercise 5
function applyPromotionsCart(cartWithPromos) {
    // Apply promotions to each item in the array "cart"
    cartWithPromos.forEach (productCart => { //recorremos la array de cartWithPromos
        if(productCart.name === 'cooking oil' && productCart.quantity >= 3) { // si se añaden mas de 3 uds de "Cooking Oil" al carrito
            productCart.subtotalWithDiscount = productCart.quantity * 10; // su precio será de 10€
        }else if(productCart.name === 'Instant cupcake mixture' &&  productCart.quantity >= 10) { // si se añaden mas de 10 uds de "Instant Cupcake" al carrito
            productCart.subtotalWithDiscount = (productCart.subtotal * 2) / 3; // su precio bajará 2/3
        }
    });
    console.log('Promociones aplicadas:');
    console.log(cartWithPromos);   
}

// Exercise 7
function addToCart(id) { //la función recibe el id del producto que se va a añadir al carrito.
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    // Para generar addToCart hacemos un mix de las funciones "buy" y "generateCart", ademas de refactorizar calculateSubtotals
    
    var productToAdd;
    // 1. Obtenemos de products[] el producto (objeto) que se quiere añadir
    products.forEach (product => { 
        if(id===product.id) { 
            productToAdd = product;
        }
    });
    var productFound = false;
    // 2. Validamos si el producto ya existe en Cart (buy)
    cart.forEach (productCart => {
        // 2.1 Si el producto SI existe en el Cart, incrementamos 1 al campo cantidad (generateCart)
        if(productCart.id === productToAdd.id) {
            productFound = true;
            productCart.quantity ++; // incrementamos 1 al campo cantidad
            productCart.subtotal = productCart.quantity * productCart.price;
            productCart.subtotalWithDiscount = productCart.subtotal;
        }   
    });    

    // 2.2 Si el producto NO existe en el Cart, lo añadimos con el metodo push (generateCart)    
    
    if (productFound === false) {
        var product = Object.assign({}, productToAdd); /* Hago una copia del productCart sin la referencia para poder modificar "quantity". 
            El metodo Object.assign copia sólo las propiedades enumerables y propias del objeto origen a un objeto destino*/
            product.quantity = 1;
            product.subtotal = product.price;
            product.subtotalWithDiscount = product.subtotal;
            cart.push (product); 
    }
    console.log(cart);
    calculateSubtotals(cart);
    calculateTotal(cart);
    applyPromotionsCart(cart);
}

// Exercise 8
function removeFromCart(id) { //la función recibe el id del producto que se va a eliminar del carrito o restar 1 ud.
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

   
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
