const applyButton = document.getElementById('apply-button')
const couponInput = document.getElementById('coupon-code')
const buttonPurchase = document.getElementById('btn-purchase')
const buttonGoHome = document.getElementById('btn-go-home')
const selectedItemsContainer = document.getElementById('selected-items');
const firstTotal = document.getElementById('total-price');
const discountAmountTag = document.getElementById('discount');
const findTotalField = document.getElementById('total');
const buttonSell = document.getElementById('btn-sell')

let total = 0

function handelClick(target){
    const selectedItemsContainer = document.getElementById('selected-items')
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li')
    li.innerText = itemName;
    selectedItemsContainer.appendChild(li)

    const priceText = target.childNodes[3].childNodes[5].innerText
    const price = parseFloat(priceText);

    total = total + price

    const firstTotal = document.getElementById('total-price')
    firstTotal.innerText = total.toFixed(2).toString()

    
    
    const findTotalField = document.getElementById('total')
    findTotalField.innerText = total.toFixed(2)
    
    if (total >= 200){
        applyButton.removeAttribute('disabled')
        buttonSell.removeAttribute('disabled')
        
    }
    // else{applyButton.setAttribute('disabled')}

    if (total >= 1){
        buttonPurchase.removeAttribute('disabled')
    }
    
}

applyButton.addEventListener('click', function () {
    const couponCode = couponInput.value;

    if (couponCode === 'SELL200' ) {
        const discount = total * 0.20; 

        const discountAmountTeg = document.getElementById('discount') 
        discountAmountTeg.innerText = discount.toFixed(2)

        total = total - discount;

        const firstTotal = document.getElementById('total');
        firstTotal.innerText = total.toFixed(2).toString();
    }
    else{
        alert('Ensure your coupon to get discount')
    }
});


buttonGoHome.addEventListener('click', resetPage);

function resetPage() {
    total = 0;
    selectedItemsContainer.innerText = '';
    firstTotal.innerText = ' 00';
    discountAmountTag.innerText = ' 00';
    findTotalField.innerText = ' 00';
    applyButton.setAttribute('disabled', 'disabled');
    buttonPurchase.setAttribute('disabled', 'disabled');
    couponInput.value = ''; // Reset the coupon input field
}

buttonSell.addEventListener('click',function() {
   
    const buttonInnerText = buttonSell.innerText;
    
    couponInput.value = buttonInnerText

})