
//--------------------------------NAMED FUCTION TO AVOID CALLBCKHELL!!!!!

console.log("Before sinhrono");

getUser(1, getUserNamed)

console.log("After sinhroo");

function getUserNamed(user){
        console.log("User from callback 1", user);
        getRepositories(user.gitHubUserName, getRepositoriesNamed)
}

function getRepositoriesNamed(repos) {
    console.log("repo from secound callback!", repos);
}


function getUser(id, callback) {

    setTimeout(() => {
        console.log("Reading  user from a deta base!!!");
        callback({ id: id, gitHubUserName: 'MyName' })
    }, 3000);


}



function getRepositories(userName, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API... for user', userName);
        callback(['repo1', 'repo2', 'repo3']);
    }, 4000);



}

//--------------------------------NAMED FUCTION TO AVOID CALLBCKHELL!!!!! 

//---------CALLBACK HELL---------
// console.log("Before");

// getUser(1, (user) => {
//     console.log("User from callback 1", user);
//     getRepositories(user.gitHubUserName, (repos) => {
//         console.log("repo from secound callback!", repos);


//     })

// })



// console.log("After");



// function getUser(id, callback) {

//     setTimeout(() => {
//         console.log("Reading  user from a deta base!!!");
//         callback({ id: id, gitHubUserName: 'MyName' })
//     }, 3000);


// }



// function getRepositories(userName, callback) {
//     setTimeout(() => {
//         console.log('Calling GitHub API... for user', userName);
//         callback(['repo1', 'repo2', 'repo3']);
//     }, 4000);



// }