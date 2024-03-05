const products = document.querySelectorAll('.product');

// apply-btn -------
const applyBtn = document.getElementById('apply-btn');


for (const product of products) {

    product.classList.add('cursor-pointer')

    // event Listener ------------
    product.addEventListener('click', function () {
        document.getElementById('toast-p').innerText = 'Product Added in the Cart.';
        showToast();

        const totalPrice = document.getElementById('total-price');
        const totalPriceNum = parseFloat(totalPrice.innerText);

        const productTitle = (product.childNodes[3].childNodes[3].innerText);

        const cartTitle = document.getElementById('cart-title');
        const countTitles = cartTitle.children.length + 1;

        const h4 = document.createElement('h4');
        h4.innerText = countTitles + '. ' + productTitle;

        cartTitle.appendChild(h4);

        h4.classList.add('font-medium')
        h4.classList.add('text-2xl')
        h4.classList.add('leading-[48px]')
        h4.classList.add('text-[#111]')

        // get Price ----------

        const productPrice = product.childNodes[3].childNodes[5].innerText;
        const productPriceNum = parseFloat(productPrice);

        const totalPriceSum = totalPriceNum + productPriceNum;

        // console.log(parseFloat(totalPrice.innerText) + productPriceNum)

        totalPrice.innerText = totalPriceSum

        if (totalPrice.innerText >= 200) {
            applyBtn.removeAttribute('disabled');
        }
    })
}

applyBtn.addEventListener('click', function () {
    const couponInput = document.getElementById('coupon-input');

    const totalPrice = document.getElementById('total-price');
    const totalPriceNum = parseFloat(totalPrice.innerText);

    const discount = document.getElementById('discount');

    const total = document.getElementById('total');

    if (couponInput.value == 'SELL200') {
        console.log('valid Input')

        const discountCalc = (totalPriceNum * 20) / 100;

        discount.innerText = discountCalc;

        total.innerText = totalPriceNum - discountCalc;
        couponInput.value = '';

        document.getElementById('toast-p').innerText = 'Coupon Applied';
        showToast()


    } else {
        console.log('Invalid Coupon Code')
        alert('Invalid Coupon Code')

        couponInput.value = '';
    }
})


const goHome = document.getElementById('go-home');

goHome.addEventListener('click', function () {
    const couponInput = document.getElementById('coupon-input');

    const cartTitle = document.getElementById('cart-title');

    const totalPrice = document.getElementById('total-price');

    const discount = document.getElementById('discount');

    const total = document.getElementById('total');


    couponInput.value = '';
    cartTitle.innerText = '';
    totalPrice.innerText = 0;
    discount.innerText = 0;
    total.innerText = 0;
})


function showToast() {
    // Show the toast
    document.getElementById("myToast").classList.remove("hidden");
    // Hide the toast after 5 seconds (5000ms)
    // you can set a shorter/longer time by replacing "5000" with another number
    setTimeout(function () {
        document.getElementById("myToast").classList.add("hidden");
    }, 2000);
}