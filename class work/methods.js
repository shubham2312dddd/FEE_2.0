// 1. Immutable String:
// let msg = "    meet me at...   ";
// // Trying to modify a string character (will not work as strings are immutable)
// console.log("Original msg:", msg);
// // msg[2] = 'x'; // This will cause an error because strings in JS are immutable

// // 2. Trim:
// let newMsg = msg.trim();
// console.log("Trimmed msg:", newMsg); // Trimmed message
// console.log("Original msg after trim operation (unchanged):", msg); // Original message remains unchanged

// // 3. Convert to Uppercase:
// let uppercase = msg.toUpperCase();
// console.log("Uppercase msg:", uppercase); // Uppercased message

// // 4. Convert to Lowercase:
// let name = "HARRY";
// let lowercase = name.toLowerCase();
// console.log("Lowercase name:", lowercase); // Lowercased name

// // 5. indexOf:
// let textMsg = "sonam_bewafa_hai";
// console.log("Index of 'bewafa':", textMsg.indexOf("bewafa")); // Index of substring 'bewafa'
// console.log("First occurrence of '_':", textMsg.indexOf("_")); // Index of the first underscore

// // 6. Method Chaining:
// let fruit = "   bananas";
// let fruitTrim = fruit.trim(); // First, trim the string
// console.log("Trimmed fruit:", fruitTrim); // Display the trimmed fruit
// let fruitUpper = fruitTrim.toUpperCase(); // Convert trimmed string to uppercase
// console.log("Uppercased fruit:", fruitUpper); // Display the uppercased fruit
// // Chaining trim and toUpperCase together
// let fruitAfterChaining = fruit.trim().toUpperCase();
// console.log("Fruit after chaining:", fruitAfterChaining); // Display the result after chaining

// // 7. Slice:
// let mrngMsg = "kaalu kaliya";
// console.log("Slice from index 3:", mrngMsg.slice(3)); // Slice from index 3 to the end
// console.log("Slice last 3 characters:", mrngMsg.slice(-3)); // Slice the last 3 characters
// console.log("Slice from index 3 to 7:", mrngMsg.slice(3, 7)); // Slice from index 3 to index 7 (excluding 7)

// // 8. Replace:
// let txt = "i love moon";
// console.log("Original txt:", txt); // Original message
// let newTxt = txt.replace("moon", "Yue"); // Replace 'moon' with 'Yue'
// console.log("Replaced txt:", newTxt); // Display the replaced message

// // 9. Repeat:
// let message = "An idiot in the class always does ruckus. ";
// console.log("Repeated message:", message.repeat(3)); // Repeat the message 3 times


