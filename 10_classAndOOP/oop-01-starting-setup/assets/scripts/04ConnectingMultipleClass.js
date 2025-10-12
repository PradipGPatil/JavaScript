

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

// created class for indivisual product item so if someone 
// new see my code he can understand the logic to render sinlge product is 
// availabe in this class
class ProductItem {
    constructor(Product) {
        this.Product = Product;
    }

    addToCart(){
        console.log('adding product to the card');

        // here this keyword is bind to the source of the event
        // in our case it it bind to th eaddTocArd so it wil print undefined
        console.log(this.Product)
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

        // taken teh button and added event for the 'click'
        const addToCartBtn=product.querySelector('button');

        // here to bind this to the productItem, we use bind(this) so here this is refering the the whoevern 
        // calling to the object in our case we are calling at line number 70
        addToCartBtn.addEventListener('click',this.addToCart.bind(this));
        return product;
    };
}


class ProductList {
    product = [
        new Product('Pilow', 'a soft pilow', '19.99'),
        new Product('carpet', 'a new carpet', '89.99')
    ];

    render() {
        const appEl = document.getElementById('app');
        const productListEl = document.createElement('ul');
        productListEl.className = 'product-list';


        for (const p of this.product) {
            const productItem = new ProductItem(p);
            const indivisualItem = productItem.render();
            productListEl.append(indivisualItem);
        };
        appEl.append(productListEl);
    }

}

const productList = new ProductList();
productList.render();