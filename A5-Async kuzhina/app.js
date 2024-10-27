// function bakeCookies(){
//     console.log("1. Start baking cookies...");
//     let cookies = '🍪';
//     console.log("2. Cookies are done!");
//     return cookies;
// }

// function makeSandwiches(){
//     console.log("3. Start making sandwiches...");
//     let sandwich = '🥪';
//     console.log("4. Sandwiches are done!");
//     return sandwich;
// }

// function boilEggs(){
//     console.log("5. Start boiling eggs...");
//     let eggs = '🥚';
//     console.log("6. Eggs are done!");
//     return eggs;
// }

// console.log("Kitchen:");
// let cookies = bakeCookies();
// let sandwich = makeSandwiches();
// let eggs = boilEggs();
// console.log("All done:" + cookies + "" + sandwich + "" +eggs);


function bakeCookies(){
    return new Promise((resolve) =>{
        console.log("1. Start baking cookies...");
        setTimeout(() =>{
            console.log("2. Cookies are done!");
            resolve("🍪");
        },   3000);
    })
}

function makeSandwiches(){
        return new Promise((resolve) =>{
        console.log("3. Start baking sandwiches...");
        setTimeout(() =>{
            console.log("4. Sandwiches are done!");
            resolve("🥪");
        },   2000);
    })
}


function boilEggs(){
    return new Promise((resolve) =>{
        console.log("5. Start boiling eggs...");
        setTimeout(() =>{
            console.log("6. Eggs are done!");
            resolve("🥚");
        },   1000);
    })
}

async function asyncKitchen(){
        console.log("Miresevini ne kuzhinen tone:");
        const cookiesPromise = bakeCookies();
        const sandwichPromise = makeSandwiches();
        const eggsPromise = boilEggs();

    const cookies = await cookiesPromise;
    const sandwich = await sandwichPromise;
    const eggs = await eggsPromise;

    console.log("All done:" + cookies + "" + sandwich + "" + eggs);
}