
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

}


const productList = {
    product: [
        // here we just pass the value which return the object for us
        new Product('Pilow', 'a soft pilow', '19.99'),
        new Product('carpet', 'a new carpet', '89.99')
    ],

    render() {
        const appEl = document.getElementById('app');
        const productListEl = document.createElement('ul');
        productListEl.className = 'product-list';


        for (const p of this.product) {
            const product = document.createElement('li');
            product.className = 'product-item';
            product.innerHTML = `
            <div class="product-item__content ">
            <h2>${p.title}</h2>
            <p>${p.description}</p>
            <p>\$ ${p.price}</p>


            </div>
            `
            productListEl.append(product);
        };
        appEl.append(productListEl);
    }

};


productList.render();