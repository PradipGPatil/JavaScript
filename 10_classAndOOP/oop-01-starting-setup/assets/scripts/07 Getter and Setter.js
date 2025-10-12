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

// created class for indivisual product item
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


class ShopingCart {
    items = [];

    set cartItem(value){
        this.items=value;

        // we can call TotalAmount which will call getter of this function
        this.totalOutput.innerHTML = `<h2> Total : \$ ${this.TotalAmount}</h2>`;
    }

    // get method should always have return 
    // becasue when user call get method he is expecting to get something from this function
    get TotalAmount(){
        // now we want to calculate the sum
        const sum=this.items.reduce((preVal,currentItem)=>{
            return preVal+currentItem.price
                },0);
        return sum;
    }

    addProduct(product) {
        const updatedItems=[...this.items];
        updatedItems.push(product);
        this.cartItem=updatedItems;
        
    }

    render() {
        const cartEl = document.createElement('section');
        cartEl.className = 'cart'
        cartEl.innerHTML = `
        <h2> Total : \$ ${0}</h2>;
        <button>Order Now !!!</button>
        `;
        this.totalOutput = cartEl.querySelector('h2')
        return cartEl;
    }
};


class Shop {

    render() {
        const appEl = document.getElementById('app');
        // ON shoping card we have add product method
        // instead on const we created property of the shop class by using this
        this.cart = new ShopingCart();
        const cartEl = this.cart.render();
        const productList = new ProductList();
        const producEl = productList.render();

        appEl.append(cartEl);
        appEl.append(producEl);

    };
};

class App {

    static cart;
    static init() {
        const shop = new Shop();
        
        shop.render();
        // now this shop class we have access to the cart property that basic object reference to the shop class
        this.cart = shop.cart;
        
    };

    static addProductToCart(product) {
        // now we can pass the product to the method which was not accessible earlier
        this.cart.addProduct(product);
    }
}

App.init();

