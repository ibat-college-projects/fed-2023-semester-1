const adultPrice = 10;
const childPrice = 5;
const familyPrice = 30; // 2 adults and 3 children

let totalTicketPrice = 0;
let adultTicketCount = 0;
let childTicketCount = 0;

const maxAdultTickets = 4;
const maxChildTickets = 5;

// You can only add a child ticket if there is at least 1 adult ticket in the bag

function init() {
    WriteTotal(0)
    WriteAdultCount(0)
    WriteChildCount(0)
}
// hint: item can be 'adultTicket' or 'childTicket'
function addTicket(item) {

    if (item == 'adult') {

        adultTicketCount = ++adultTicketCount <= maxAdultTickets ? adultTicketCount : maxAdultTickets;


        WriteAdultCount(adultTicketCount)

    } else {

        if (adultTicketCount > 0) {
            childTicketCount = ++childTicketCount <= maxChildTickets ? childTicketCount : maxChildTickets
            WriteChildCount(childTicketCount)
        }

    }




    WriteTotal(CalculatePrice());

}
// hint: item can be 'adultTicket' or 'childTicket'
function removeTicket(item) {

    if (item == 'adult') {

        adultTicketCount = --adultTicketCount >= 0 ? adultTicketCount : 0;

        WriteAdultCount(adultTicketCount)

        if (adultTicketCount == 0) {
            childTicketCount = 0;
            WriteChildCount(0);
        }



    } else {
        childTicketCount = --childTicketCount >= 0 ? childTicketCount : 0
        WriteChildCount(childTicketCount)

    }
    WriteTotal(CalculatePrice());

}

function WriteAdultCount(count) {
    document.getElementById("adultTicketCount").innerHTML = count;
}

function WriteChildCount(count) {
    document.getElementById("childTicketCount").innerHTML = count;
}


function WriteTotal(price) {

    document.getElementById("totalTicketPrice").innerHTML = price;

}

function CalculatePrice() {

    // const isFamilyTicket = false;//are there 2 adults and 3 children tickets selected

    // if (adultTicketCount == 2 && childTicketCount==3) {
    //     isFamilyTicket = true;
    // }

    const isFamilyTicket = adultTicketCount == 2 && childTicketCount == 3 ? true : false;


    if (isFamilyTicket) {
        return familyPrice;
    } else {

        //return (total of the adult ticket prices) and (the total child ticket prices)
        return (adultTicketCount * adultPrice) + (childTicketCount * childPrice)
    }



}