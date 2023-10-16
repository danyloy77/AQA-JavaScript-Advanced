// Task 1
const automationQA = {};
automationQA.programmerName = "Danylo";
automationQA.programmingLanguages = "JS";
automationQA.age = 22;
automationQA.languages = ["UKR", "ENG"];
automationQA.preferences = {"basicPreferences": "desktop"};

console.log(automationQA);

// Task 2

const room = {
    name: "Danylo",
    size: 2,
    window: true
}

console.log("Room: "+ room.name, ", Window: " + room.window);

// Task 3

const movie = {
    title: "Alone",
    releaseYear: 2021,
    genre: "Horror"
}

movie.title = "Not Alone";
movie.genre = "Comedic";
const actors = "actors";
movie[actors] = {mainRole: "Ivan Ivanov"};
movie["director"] = "Stepan Stepanov";
delete movie.title;

console.log(movie)

//Task 4

const englishBooks = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    }
];

for (let i = 0; i < englishBooks.length; i++) {
    const book = englishBooks[i];

    if (book.title === "The Great Gatsby") {
        continue;
    }

    if (book.year > 1940) {
        console.log(`"title": ${book.title}, "year": ${book.year}`);
    }

    if (book.author === "George Orwell") {
        book.author = "John Doe";
    }
}

console.log(englishBooks);

// Task 5

const menu = {
    breakfast: "eggs",
    lunch: "croissant",
    dinner: {
        mainDinner: "meat",
        additionToDinner: "potatoes"
    }
};

for (const key in menu) {
    if (menu.hasOwnProperty(key)) {
        console.log(key + ": " + menu[key]);
    }
}

for (const innerKey in menu.dinner) {
    if (menu.dinner.hasOwnProperty(innerKey)) {
        console.log("dinner." + innerKey + ": " + menu.dinner[innerKey]);
    }
}

//Task 6

const user = {
    name: "John",
    age: 22,
    email: "test@mail.com",
    address: {
        city: "Odesa",
        postalCode: "00000"
    }
};

function getUserInfo({ name, age }) {
    return `user: ${name}, age: ${age}`;
}

function getFullAddress({ email, address: { city, postalCode } }) {
    return `email: ${email}, city: ${city}, post_code: ${postalCode}`;
}

console.log(getUserInfo(user));
console.log(getFullAddress(user));
