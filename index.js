let seat = 40;
let totalPrice = 0;



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
    
    totalPrice = totalPrice + 550;
    total(totalPrice);
    // console.log(totalPrice);

    

}

document.getElementById('couponSubmit').addEventListener('click',finalBalance);

function finalBalance(){
    const coupon = document.getElementById('couponInput').value;
    const upperCoupon = coupon.toUpperCase();
    
    // console.log(upperCoupon);
    if( upperCoupon === 'NEW15'){
        const discount = totalPrice * .15 ;
        const grandPrice = totalPrice -discount;
        new15(grandPrice);
        discountText(discount);
        hideThings();

    }
    // else if(upperCoupon === 'couple20'){
    //     const discount = totalPrice * .20 ;
    //     const grandPrice = totalPrice -discount;
    //     new15(grandPrice);
    //     discountText(discount);
    //     hideThings();
    // }

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

