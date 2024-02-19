let seat = 40;
let totalPrice = 0;
let count = 0;



document.getElementById('seats').addEventListener("click", seatBooking)

function seatBooking(element){
    

    const seats = element.target.innerText;
    console.log(seats);

    // color
    setColorById(seats);

    // addElement
    addElement(seats);

    seat-- ;
    seatLeft(seat);

    count = count + 1;
    document.getElementById('numberOfSeat').innerText = count;
    
    totalPrice = totalPrice + 550;
    total(totalPrice);
    // console.log(totalPrice);

    grand(totalPrice);

    if(count >= 4){
        disableButton();
        // alert('you can book only 4 ticket');
    }

    

}

document.getElementById('couponSubmit').addEventListener('click',finalBalance);

function finalBalance(){
    const coupon = document.getElementById('couponInput').value;
    const upperCoupon = coupon.toUpperCase();
    
    // console.log(upperCoupon);
    if(totalPrice === 2200){
        if( upperCoupon === 'NEW15'){
            const discount = totalPrice * .15 ;
            const grandPrice = totalPrice -discount;
            new15(grandPrice);
            discountText(discount);
            hideThings();
        }
        else if(upperCoupon === 'COUPLE 20' || upperCoupon === 'COUPLE20'){
            const discount = totalPrice * .20 ;
            const grandPrice = totalPrice -discount;
            new15(grandPrice);
            discountText(discount);
            hideThings();
        }
        else{
            alert('Enter a valid Coupon');
        }
    

    }
    

}

// modal button section

const phoneInput = document.getElementById('phoneInput');
const nextButton = document.getElementById('nextButton');

phoneInput.addEventListener("keyup",function(e){
    
    const phone  = e.target.value;
    console.log( phone);

    if( phone !== "" ){
        nextButton.removeAttribute('disabled');
    }
})

function grand(element){
    const grandTotal = document.getElementById('grandTotal');
    grandTotal.innerText = element;
}

function new15(element){
    const grandTotal = document.getElementById('grandTotal');
    grandTotal.innerText = element;
}



function setColorById(element){
    const takeElement = document.getElementById(element);
    takeElement.style.backgroundColor = '#1DD100';

}

function addElement(seatNumber){
    const findDiv = document.getElementById('seat-container');

    const newTable = document.createElement('table');
    newTable.style.width = '100%';
    newTable.style.textAlign = 'center';

    const tableRow = document.createElement('tr');
    const tableData = document.createElement('td');
    tableData.innerText = seatNumber
    const tableData2 = document.createElement('td'); 
    tableData2.innerText = 'Economoy';
    const tableData3 = document.createElement('td'); 
    tableData3.innerText = 550;

    newTable.appendChild(tableRow);
    tableRow.appendChild(tableData);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    findDiv.appendChild(newTable);

}

function seatLeft(element){
   const seatLeftNow = document.getElementById('seatLeft');
    seatLeftNow.innerText = element;
}

function total(element){
    const totalAmaount = document.getElementById('totalPrice');
    totalAmaount.innerText = element;
}

function discountText(element){
    const findDiv = document.getElementById('discount-container');

    const newTable = document.createElement('table');
    newTable.style.width = '100%';
    newTable.style.textAlign = 'center';

    const tableRow = document.createElement('tr');

    const tableData = document.createElement('td'); 
    tableData.innerText = 'Discount';

    const tableData2 = document.createElement('td');
    tableData2.innerText = element

    newTable.appendChild(tableRow);
    tableRow.appendChild(tableData);
    tableRow.appendChild(tableData2);
    findDiv.appendChild(newTable);
}

function hideThings(){
    const hide = document.getElementById('couponDiv');
    hide.setAttribute('class', 'hidden');

}



function disableButton(){
    const button = document.getElementsByClassName('btn-sm');
    // console.log(button);

    for(const btn of button){
        btn.setAttribute('disabled', true);
    }

}


// function removeAttribute(){
//     const next = document.getElementById('nextButton');
//     next.removeAttribute('disabled');
// }

