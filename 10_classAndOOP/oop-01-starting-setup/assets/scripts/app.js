
class Product {
    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }

}

class Attribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }
}

class Component {
    constructor(renderHookId) {
        this.hookId = renderHookId;
    }
    createRootElement(tag, cssClass, attribute) {
        const rootElement = document.createElement(tag);
        if (cssClass) {
            rootElement.className = cssClass
        }
        if (attribute && attribute.length > 0) {
            for (const att of attribute) {
                rootElement.setAttribute(att.name, att.value);
            }
        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
}

class ShopingCart extends Component {
    item = [];
    constructor(renderHookId) {
        super(renderHookId)
    }
    get totalAmount() {
        const sum = this.item.reduce((preValue, currentItem) => {
            return preValue + currentItem.price;
        }, 0)
        return sum;
    }
    set cartItems(value) {
        this.item = value;
        this.totalOutPut.innerHTML = `<h2>total: \$${this.totalAmount}</h2>`;
    }


    addProduct(product) {

        const updateItem = [... this.item];
        updateItem.push(product);
        this.cartItem = updateItem;

    }
    render() {
        const cartEl = this.createRootElement("Section", "cart")
        cartEl.innerHTML = `
        <h2>total: \$${0}</h2>;
        <button> order now !</button>
        `;
        this.totalOutPut = cartEl.querySelector('h2');

    }
}

class ProductItem extends Component {
    constructor(product, renderHookId) {
        super(renderHookId);
        this.product = product;
    }

    addToCart() {
        App.addProductToCart(this.product);
    }
    render() {
        const proEl = this.createRootElement('li', 'product-item')

        proEl.innerHTML = `
        <div>
        <img src="${this.product.imageUrl}">
        <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>\$${this.product.price}</h3>
        <p>${this.product.description}</p>
        <button>Add to cart </button>
        </div>
        </div>
        `;
        const addToCartButton = proEl.querySelector("button");
        addToCartButton.addEventListener("click", this.addToCart.bind(this));

    }

}

class ProductList extends Component {
    products = [
        new Product("a  pillow", " https://i5.walmartimages.com/asr/c5c22a65-8be4-4769-84e9-ca1e11767a24_1.ffc0b6825300d82d090804863c993948.jpeg", 19.99, "a soft pillow"),
        new Product("a carpte", " https://images-na.ssl-images-amazon.com/images/I/810haLLZAaS._SL1500_.jpg", 99.99, "a carpet whicy you like !")
    ];

    constructor(renderHookId) {
        super(renderHookId)
    }
    render() {

        //create product list element
        this.createRootElement('ul', 'product-list', [new Attribute('id', 'product-list')]);

        for (const prod of this.products) {
            const productItem = new ProductItem(prod, 'product-list');
            productItem.render();
            prodList.append(proEl);
        }
    }
}

class Shop {
    render() {
        this.cart = new ShopingCart('app');
        this.cart.render()
        const productList = new ProductList('app');
        productList.render();

    }
}

class App {
    static cart;
    static init() {
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;

    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}
App.init()




