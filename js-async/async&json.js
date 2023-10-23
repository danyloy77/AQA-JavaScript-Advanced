//Task 1

const userSettings = {
    username: "john_doe",
    theme: "dark",
    language: "en",
    notifications: true,
};

const serialized = JSON.stringify(userSettings);

console.log(serialized);

const json = '{"username":"john_doe","theme":"dark","language":"en","notifications":true}';

const deserialized = JSON.parse(json);

console.log(deserialized);

//Task 2

async function delayAndLog(message, milliseconds) {

    await new Promise((resolve) => setTimeout(resolve, milliseconds));


    console.log(message);
}


delayAndLog("Перше повідомлення", 1500).then(() => {
    return delayAndLog("Друге повідомлення", 3000);
}).then(() => {
    return delayAndLog("Третє повідомлення", 500);
});

//Task 3

async function getComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments/1');
    const data = await response.json();
    return data;
}

async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    const data = await response.json();
    return data;
}

const promise1 = getComments();
const promise2 = getPosts();

Promise.all([promise1, promise2])
    .then(([comments, posts]) => {
        console.log('Результати виконання Promise.all:');
        console.log('Коментарі:', comments);
        console.log('Пости:', posts);
    })
    .catch(error => {
        console.error('Помилка:', error);
    });

Promise.race([promise1, promise2])
    .then(result => {
        console.log('Результат виконання Promise.race:');
        console.log('Перший завершений результат:', result);
    })
    .catch(error => {
        console.error('Помилка:', error);
    });
