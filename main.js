// document.addEventListener('DOMContentLoaded', function() {
//     const nameElement = document.querySelector('nome');
//     const usernameElement = document.querySelector('nome');
//     const avatarElement = document.querySelector('nome');
//     const reposElement = document.querySelector('nome');
//     const followersElement = document.querySelector('nome');
//     const followingElement = document.querySelector('nome');
//     const linkElement = document.querySelector('nome');

//     fetch('https://api.github.com/users/JoaoNS')
//         .then(function(res) {
//             return res.json();
//         })
//         .then(function(json) {
//             nameElement.innerText = json.name;
//             usernameElement.innerText = json.login;
//             avatarElement.innerText = json.avatar_url;
//             followingElement.innerText = json.following;
//             followersElement.innerText = json.followers;
//             reposElement.innerText = json.public_repos;
//             linkElement.href = json.html_url;
//         })
// })