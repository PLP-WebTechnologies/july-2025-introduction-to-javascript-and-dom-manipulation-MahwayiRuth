// ================= Part 1: Variables & Conditionals =================
let myAge = 17;
const myName = "Khensani";

if (myAge >= 18) {
    console.log(myName + " can vote!");
} else {
    console.log(myName + " is too young to vote.");
}

// ================= Part 2: Custom Functions =================
function greetUser(name) {
    return "Hi " + name + ", welcome to my page!";
}

function favoriteSnack(snack, quantity) {
    return `I love ${quantity} servings of ${snack}!`;
}

// NEW: Function to calculate years until voting age
function yearsUntilVoting(age) {
    if (age >= 18) {
        return "You are already old enough to vote!";
    } else {
        return "You have " + (18 - age) + " years until you can vote.";
    }
}

console.log(greetUser(myName));
console.log(favoriteSnack("tropical fruit salad", 2));
console.log(yearsUntilVoting(myAge));

// ================= Part 3: Loops =================
const hobbies = ["coding", "writing"];

// For loop
for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
}

// forEach loop
hobbies.forEach(hobby => console.log("I enjoy " + hobby));

// NEW: While loop (countdown example)
let countdown = 3;
while (countdown > 0) {
    console.log("Countdown: " + countdown);
    countdown--;
}

// ================= Part 4: DOM Interactions =================
const heading = document.getElementById("title");
heading.textContent = "Welcome to " + myName + "'s page!";

// 1) Button click event
const button = document.getElementById("clickMe");
button.addEventListener("click", () => {
    alert("Thanks for visiting my page!");
});

// 2) Add hobbies dynamically
const hobbyList = document.getElementById("menu");
hobbies.forEach(hobby => {
    const li = document.createElement("li");
    li.textContent = hobby;
    hobbyList.appendChild(li);
});

// 3) Toggle heading color
heading.addEventListener("click", () => {
    heading.classList.toggle("active");
});

// 4) Change description text (now cycles through fun facts)
const desc = document.getElementById("description");
const changeBtn = document.getElementById("changeText");

const descriptions = [
    "This is my safe space, don't make it weird 😎.",
    "I love coding and writing, and I enjoy making interactive web pages!",
    "Fun fact: I can code while eating a tropical fruit salad 🍍🥭.",
    "When I’m not coding, I’m probably daydreaming or writing stories ✍️.",
    "Blue is my favorite color, it keeps me calm 💙."
];

let currentIndex = 0;

changeBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % descriptions.length;
    desc.textContent = descriptions[currentIndex];
});

// 5) Add new hobby on button click
const addBtn = document.getElementById("addHobby");
addBtn.addEventListener("click", () => {
    const newHobby = prompt("Enter a new hobby:");
    if (newHobby) {
        const li = document.createElement("li");
        li.textContent = newHobby;
        hobbyList.appendChild(li);
    }
});

// 6) Change background color
const bgBtn = document.getElementById("changeBG");
bgBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});