import bcrypt from 'bcryptjs';

const hashToCrack = "$2b$10$jLE5wYeFwZtycoAqRfjqguxCWzWBoQTBAB0HjgJ8G/.A9iPQQQGKi"; // Example hash
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; //only work on alphabets + digits
let found = false;

let counter=0;
function bruteForce(currentPassword, maxLength) {
    if (found) return; // Stop if password is found
    console.log(counter," : ",currentPassword,maxLength);
    counter++;
    // Check if the generated password matches the hash
    if (currentPassword.length > 0 && bcrypt.compareSync(currentPassword, hashToCrack)) {
        console.log(`✅ Password found: ${currentPassword}`);
        found = true;
        return;
    }

    // If max length is reached, stop generating further
    if (currentPassword.length === maxLength) return;

    // Loop through all possible characters
    for (let i = 0; i < chars.length; i++) {
        bruteForce(currentPassword + chars[i], maxLength);
        if (found) break;
    }
}

// Start brute-force attack for increasing password lengths (up to 5)
for (let length = 1; length <= 5; length++) {
    if (!found) bruteForce("", length);
}

if (!found) console.log("❌ Password not found (Increase max length)");
