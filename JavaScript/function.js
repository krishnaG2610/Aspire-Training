let attendees = [];
let eventCapacity = 100; 
let eventStaffBonus = 0; 

function addAttendee(attendeeName) {
    if (attendees.length < eventCapacity) {
        attendees.push(attendeeName);
        console.log(attendeeName + " added to the attendee list.");
    } else {
        console.log("Sorry, the event is full.");
    }
}

function removeAttendee(attendeeName) {
    const index = attendees.indexOf(attendeeName);
    if (index !== -1) {
        attendees.splice(index, 1);
        console.log(attendeeName + " has been removed.");
    } else {
        console.log(attendeeName + " is not found in the attendee list.");
    }
}

function displayAttendees() {
    console.log(attendees);
}

// Arrow Function
const calculateStaffBonus = (percentage) => eventStaffBonus = eventCapacity * percentage;

console.log("Bonus for the event staff: " + calculateStaffBonus(0.05));

// CallBack Function

function greetAttendee(attendeeName, callback) {
    const greetMessage = "Welcome, " + attendeeName;
    callback(greetMessage);
}

function sayGoodbye(greetMessage) {
    console.log(greetMessage + " Thank you for attending the event.");
}

addAttendee("Ram");
addAttendee("rajesh");
addAttendee("ragul");
displayAttendees();

removeAttendee("ragul");

displayAttendees();

greetAttendee("ragul", sayGoodbye);//callback call
