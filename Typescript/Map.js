// Creating a Set to store event IDs
var eventSet = new Set();
// Adding event IDs to the Set
eventSet.add(101);
eventSet.add(102);
eventSet.add(103);
eventSet.add(104);
eventSet.add(105);
// Trying to add a duplicate event ID
eventSet.add(101);
console.log("Number of unique events:", eventSet.size);
// Checking if the Set contains specific event IDs
console.log("Set contains event ID 103:", eventSet.has(103));
console.log("Set contains event ID 106:", eventSet.has(106));
// Deleting an event ID from the Set
eventSet.delete(102);
// Displaying all event IDs in the Set
console.log("Event IDs in the Set:");
eventSet.forEach(function (eventID) {
    console.log(eventID);
});
// Clearing the Set
eventSet.clear();
console.log("Number of event IDs after clearing:", eventSet.size);
// Creating a Map to store event names and their capacities
var eventMap = new Map();
// Adding events to the Map
eventMap.set("Birthday Party", 50);
eventMap.set("Marriage", 100);
eventMap.set("Graduation Ceremony", 200);
eventMap.set("Conference", 150);
// Updating the capacity of an event
eventMap.set("Birthday Party", 60);
console.log("Number of events in the Map:", eventMap.size);
// Retrieving the capacity of specific events
console.log("Capacity of Birthday Party:", eventMap.get("Birthday Party"));
console.log("Capacity of Seminar:", eventMap.get("Seminar"));
// Checking if the Map contains specific events
console.log("Map contains event 'Marriage':", eventMap.has("Marriage"));
console.log("Map contains event 'Festival':", eventMap.has("Festival"));
// Deleting an event from the Map
eventMap.delete("Graduation Ceremony");
// Displaying all events and their capacities in the Map
console.log("Events and their capacities in the Map:");
eventMap.forEach(function (capacity, eventName) {
    console.log("".concat(eventName, " ").concat(capacity));
});
// Clearing the Map
eventMap.clear();
console.log("Number of events in the Map after clearing:", eventMap.size);
