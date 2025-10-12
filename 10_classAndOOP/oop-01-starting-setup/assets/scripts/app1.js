

// here we create productList item which has render method 
// which is responsible to render the element from the productlist
const productList = {
    product: [{
        title: 'Pilow',
        description: 'a soft pilow',
        price: '19.99'
    },
    {
        title: 'carpet',
        description: 'a new carpet',
        price: '89.99'

    }],

    render() {
        const appEl = document.getElementById('app');
        const productListEl= document.createElement('ul');
        productListEl.className = 'product-list';


        for (const p of this.product) {
            const product = document.createElement('li');
            product.className = 'product-item';
            product.innerHTML=`
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