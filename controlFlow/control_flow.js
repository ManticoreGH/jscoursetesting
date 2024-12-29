let userRole = "admin";
let accessLevel;

if(userRole === "admin"){
    accessLevel = "Full access granted";
} else if (userRole === "manager"){
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level: ", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system";
}
console.log("User Message: ", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category: ", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "User is authenticated" : "User is not authenticated";
console.log("Authentication Status: ", authenticationStatus);

let personType = "Enrolled Member";
let dietaryMessage;

switch (personType){
    case "employee":
        dietaryMessage = "You have access to the Dietary Services";
        break;
    case "Enrolled Member":
        dietaryMessage = "You have access to the Dietary Services & one-and-one consultation with a dietitian";
        break;
    case "subscriber":
        dietaryMessage = "You have access to a partial access to facilitate the Dietary Services";
        break;
    case "guest":
        dietaryMessage = "You have to enroll to access the Dietary Services";
        break;
    default:
        dietaryMessage = "Unknown person";
}
console.log("Dietary Message: ", dietaryMessage);