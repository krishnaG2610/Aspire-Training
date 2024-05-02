var event=require('events');
var emitter= new event.EventEmitter();
emitter.on('EventManagement',()=>{
    console.log("Event booked");
})

function eventBooking(){
    console.log("Welcome");
    console.log("Book birthday event");
    emitter.emit('EventManagement');
    console.log("Your event booked successfully");
}
eventBooking();