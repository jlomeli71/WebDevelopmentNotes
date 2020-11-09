var database = [
    {
        username: "pepito",
        password: "punito"
    },
];

var newsFeed = [
    {
        username: "Maria",
        feed: "Wow, incrediblisimo!"
    },
    {
        username: "Pepe",
        feed: "Fantastiquisimo!"
    },
];

var userNamePrompt = prompt("What is your username?")
var passwordPrompt = prompt("What is your password?")

function signIn(user, pass) {
    if (user === database[0].username && 
        pass === database[0].password) {
            console.log(newsFeed);
        } else {
            alert("Sorry, wrong username and password!");
        }
};

signIn(userNamePrompt, passwordPrompt);

