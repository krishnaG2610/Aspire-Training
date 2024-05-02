/*
 * Title : Event Managemet System
 * Author : Krishna G
 * Created At : 02-04-2024
 * Last Modified Date : 27-04-2024
 * Reviewed By :
 * Review Date :
 */
// Sample list of events
var events = ['birthday party', 'marriage', 'graduation ceremony', 'conference'];
// Remove 'conference' from the list
var removedEvent = events.pop();
console.log("Removed event:", removedEvent);
console.log("Remaining events:", events);
// Add 'conference' back to the list
events.push('conference');
console.log("Added event:", 'conference');
console.log("Events after adding:", events);
// Find the index of 'birthday party'
var birthdayPartyIndex = events.indexOf('birthday party');
console.log("Index of 'birthday party':", birthdayPartyIndex);
// Remove elements from index 2 to 3 (graduation ceremony and conference)
var removedEvents = events.splice(2, 2);
console.log("Removed events:", removedEvents);
console.log("Remaining events:", events);
// Iterate over each event
events.forEach(function (event) { return console.log("Event:", event); });
// Find the index of 'marriage'
var marriageIndex = events.findIndex(function (event) { return event === 'marriage'; });
console.log("Index of 'marriage':", marriageIndex);
// Find 'conference' using find method
var foundEvent = events.find(function (event) { return event === 'conference'; });
console.log("Found event:", foundEvent);
// Sample event IDs
var eventIds = [101, 102, 103, 104, 105];
// Filter event IDs greater than 100
var filteredEventIds = eventIds.filter(function (id) { return id > 100; });
console.log("Filtered event IDs:", filteredEventIds);
// Slice elements from index 1 to index 3
var slicedEventIds = eventIds.slice(1, 4);
console.log("Sliced event IDs:", slicedEventIds);
// Concatenate two arrays
var moreEvents = ['reunion', 'farewell'];
var allEvents = events.concat(moreEvents);
console.log("All events:", allEvents);
// Check if all elements in the array pass a test
var allHaveSpaces = allEvents.every(function (event) { return event.includes(' '); });
console.log("All events have spaces:", allHaveSpaces);
// Check if any element in the array passes a test
var hasGraduation = allEvents.some(function (event) { return event === 'graduation ceremony'; });
console.log("Any event is a graduation ceremony:", hasGraduation);
// Map over the array to create a new array
var eventLengths = allEvents.map(function (event) { return event.length; });
console.log("Length of each event:", eventLengths);
// Reduce the array to a single value (sum of lengths of all events)
var totalEventLength = allEvents.reduce(function (total, event) { return total + event.length; }, 0);
console.log("Total length of all events:", totalEventLength);
// Sort the events alphabetically
var sortedEvents = allEvents.sort();
console.log("Sorted events:", sortedEvents);
// Reverse the events array
var reversedEvents = allEvents.reverse();
console.log("Reversed events:", reversedEvents);
