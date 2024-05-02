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
events.forEach(event => console.log("Event:", event));

// Find the index of 'marriage'
var marriageIndex = events.findIndex(event => event === 'marriage');
console.log("Index of 'marriage':", marriageIndex);

// Find 'conference' using find method
var foundEvent = events.find(event => event === 'conference');
console.log("Found event:", foundEvent);

// Sample event IDs
var eventIds = [101, 102, 103, 104, 105];

// Filter event IDs greater than 100
var filteredEventIds = eventIds.filter(id => id > 100);
console.log("Filtered event IDs:", filteredEventIds);

// Slice elements from index 1 to index 3
var slicedEventIds = eventIds.slice(1, 4);
console.log("Sliced event IDs:", slicedEventIds);

// Concatenate two arrays
var moreEvents = ['reunion', 'farewell'];
var allEvents = events.concat(moreEvents);
console.log("All events:", allEvents);

// Check if all elements in the array pass a test
var allHaveSpaces = allEvents.every(event => event.includes(' '));
console.log("All events have spaces:", allHaveSpaces);

// Check if any element in the array passes a test
var hasGraduation = allEvents.some(event => event === 'graduation ceremony');
console.log("Any event is a graduation ceremony:", hasGraduation);

// Map over the array to create a new array
var eventLengths = allEvents.map(event => event.length);
console.log("Length of each event:", eventLengths);

// Reduce the array to a single value (sum of lengths of all events)
var totalEventLength = allEvents.reduce((total, event) => total + event.length, 0);
console.log("Total length of all events:", totalEventLength);

// Sort the events alphabetically
var sortedEvents = allEvents.sort();
console.log("Sorted events:", sortedEvents);

// Reverse the events array
var reversedEvents = allEvents.reverse();
console.log("Reversed events:", reversedEvents);
