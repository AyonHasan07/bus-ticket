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

    console.log(totalPrice);

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
    seatLeftNow = document.getElementById('seatLeft');
    seatLeftNow.innerText = element;
}

function total(element){
    const totalAmaount = document.getElementById('totalPrice');
    totalAmaount.innerText = element;
}
