
class ElementAttribute {
    constructor(attrValue, attrName) {
        this.name = attrName;
        this.value = attrValue;
    }
}


class Component {
    constructor(renderHookId) {
        this.hookId = renderHookId;
    }


    createRootElement(tag, cssClasses, attributes) {
        const rootEl = document.createElement(tag);
        if (cssClasses) {
            rootEl.className = cssClasses;
        }
        if (attributes && attributes.length > 0) {
            for (const att of attributes) {
                rootEl.setAttribute(att.name, att.value);
            }
        }
        document.getElementById(this.hookId).append(rootEl);
        return rootEl;
    }


}


class Product {
    constructor(title, description, price) {
        this.title = title;
        this.description = description;
        this.price = price;

    }

};


class ProductItem extends Component {
    constructor(Product,renderHookId) {
        super(renderHookId)
        this.Product = Product;
    }

    addToCart() {
        App.addProductToCart(this.product);
    }


    render() {
  //      const product = document.createElement('li'); // no longer needed
        const product=this.createRootElement('li','product-item')
        product.innerHTML = `
            <div class="product-item__content ">
            <h2>${this.Product.title}</h2>
            <p>${this.Product.description}</p>
            <p>\$ ${this.Product.price}</p>
            <button>Add to cart</button>
            </div>
            `;
        const addToCartBtn = product.querySelector('button');
        addToCartBtn.addEventListener('click', this.addToCart.bind(this));
    };
}


class ProductList extends Component {

    constructor(renderHookId){
        super(renderHookId)
    }
    product = [
        new Product('Pilow', 'a soft pilow', '19.99'),
        new Product('carpet', 'a new carpet', '89.99')
    ];

    render() {

     this.createRootElement('ul','product-list',new ElementAttribute('id','prod-list'))
    //    const productListEl = document.createElement('ul');
        // productListEl.id='prod-list'
        // productListEl.className = 'product-list';


        for (const p of this.product) {
            const productItem = new ProductItem(p,'prod-list');
             productItem.render();
         
        };

    }

}




//we can extend to only one class
class ShopingCart extends Component {

    constructor(renderHookId){
        super(renderHookId)
    }
    items = [];

    set cartItem(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2> Total : \$ ${this.TotalAmount}</h2>`;
    }

    get TotalAmount() {
        const sum = this.items.reduce((preVal, currentItem) => {
            return preVal + currentItem.price
        }, 0);
        return sum;
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItem = updatedItems;

    }

    render() {
        // const cartEl = document.createElement('section'); // we can remove this code 
        const cartEl=this.createRootElement('section','cart');   // here we can use this because this class inherite property from the parent class
        // so this will refer to create class method
    //    cartEl.className = 'cart'    // remove this as well 
        cartEl.innerHTML = `
        <h2> Total : \$ ${0}</h2>;
        <button>Order Now !!!</button>
        `;
        this.totalOutput = cartEl.querySelector('h2')
        // return cartEl;
    }
};


class Shop {

    render() {
        this.cart = new ShopingCart('app');
        this.cart.render();
        const productList = new ProductList('app');
        productList.render();
    };
};

class App {

    static cart;
    static init() {
        const shop = new Shop();

        shop.render();
        this.cart = shop.cart;

    };

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();

