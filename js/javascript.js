const applyButton = document.getElementById('apply-button')
const couponInput = document.getElementById('coupon-code')

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
    firstTotal.innerText = total.toString()

    
    
    const findTotalField = document.getElementById('total')
    findTotalField.innerText = total
    
    if (total >= 200){
        applyButton.removeAttribute('disabled')
    }
    // else{applyButton.setAttribute('disabled')}

}

applyButton.addEventListener('click', function () {
    const couponCode = couponInput.value;

    if (couponCode === 'SELL200' ) {
        const discount = total * 0.20; 

        const discountAmountTeg = document.getElementById('discount') 
        discountAmountTeg.innerText = discount

        total = total - discount;



        const firstTotal = document.getElementById('total');
        firstTotal.innerText = total.toString();
    }
});




