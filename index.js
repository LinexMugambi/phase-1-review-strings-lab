// Write your code in this file!
const currentUser ='Grace Hopper';
//current user is Grace

let welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
//if the welcome message is printed it will say "Welcome to Flatbook, Grace Hopper!"
//`` is where I found some trouble but i caught it

let excitedWelcomeMessage = welcomeMessage.toUpperCase();
//Uppercase version


const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;