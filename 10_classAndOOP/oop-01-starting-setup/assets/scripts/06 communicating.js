// when we want to group data at a singe time in code then go for object literal
// but when we want to use same objet to created multiple time then classed is best approch 

// seperating in class make code more readable
class Product {

    // we can omit this because in contructor we are defining this property 
    // title = 'Default';
    // description;
    // price;
    // to create constuctor in javascript we have special keyword

    constructor(title, description, price) {
        this.title = title;
        this.description = description;
        this.price = price;

    }

};

class ShopingCart {
    items = [];

    addProduct(product) {
        // we have push the element to the card
        this.items.push(product);
        // if we call this.render() it again render new card that not we want we want to update existing content
        this.totalOutput.innerHTML = `<h2> Total : \$ ${1}</h2>`;
    }

    render() {
        const cartEl = document.createElement('section');
        cartEl.className = 'cart'
        cartEl.innerHTML = `
        <h2> Total : \$ ${0}</h2>;
        <button>Order Now !!!</button>
        `;
        // here we selected h2 value and add to the shoping cart property
        this.totalOutput = cartEl.querySelector('h2')
        return cartEl;
    }
};


// created class for indivisual product item
// in producitem class we want to call add product method shopingcart.addProduct
// we can not call this way we need to create instance of the shoping cart
class ProductItem {
    constructor(Product) {
        this.Product = Product;
    }

    addToCart() {
        App.addProductToCart(this.product);
        // console.log('adding product to the card');

        // here this keyword is bind to the source of the event
        // in our case it it bind to th eaddTocArd so it wil print undefined
        // console.log(this.Product)
    }

    // we return the created item 
    render() {
        const product = document.createElement('li');
        product.className = 'product-item';
        product.innerHTML = `
            <div class="product-item__content ">
            <h2>${this.Product.title}</h2>
            <p>${this.Product.description}</p>
            <p>\$ ${this.Product.price}</p>
            <button>Add to cart</button>
            </div>
            `;
        const addToCartBtn = product.querySelector('button');

        // here to bind this to the productItem, we use bind(this) so here this is refering the the whoevern 
        // calling to the object in our case we are calling at line number 70
        addToCartBtn.addEventListener('click', this.addToCart.bind(this));
        return product;
    };
}


class ProductList {
    product = [
        new Product('Pilow', 'a soft pilow', '19.99'),
        new Product('carpet', 'a new carpet', '89.99')
    ];

    render() {

        const productListEl = document.createElement('ul');
        productListEl.className = 'product-list';


        for (const p of this.product) {
            const productItem = new ProductItem(p);
            const indivisualItem = productItem.render();
            productListEl.append(indivisualItem);
        };
        return productListEl;
    }

}




class Shop {

    render() {
        const appEl = document.getElementById('app');
        // ON shoping card we have add product method
        // instead on const we created property of the shop class by using this
        // because on 132 we create instance on shop their we will have add to cart propery
        this.cart = new ShopingCart();
        const cartEl = this.cart.render();
        const productList = new ProductList();
        const producEl = productList.render(cartEl);

        appEl.append(cartEl);
        appEl.append(producEl);

    };
};

class App {

    static cart;
    static init() {
        const shop = new Shop();
    // first need to call render
        shop.render();
                // now this shop class we have access to the cart property that basic object reference to the shop class
        this.cart = shop.cart;    

        
    };
// this method is being called at line 54
    static addProductToCart(product) {
        // now we can pass the product to the method which was not accessible earlier
        this.cart.addProduct(product);
    }
}

App.init();

