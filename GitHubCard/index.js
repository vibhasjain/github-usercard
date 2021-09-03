/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from 'axios';

function cardFetcher(username){

  axios.get(`https://api.github.com/users/${username}`)
.then(data => {
  console.log(data);
  let object = data.data;
  let card = cardMaker(object);
  document.querySelector('.cards').appendChild(card);
})
.catch(error => console.error(error));

}


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

const followersArray = ['vibhasjain',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

followersArray.forEach(user => cardFetcher(user));

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

function cardMaker(object) {

  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = object.avatar_url;
  card.appendChild(img);

  const cardInfo = document.createElement('div');
  cardInfo.className = 'card-info';
  card.appendChild(cardInfo);

  const name = document.createElement('h3');
  name.className = 'name';
  name.textContent = object.name;
  cardInfo.appendChild(name);

  const username = document.createElement('p');
  username.className = 'username';
  username.textContent = object.login;
  cardInfo.appendChild(username);

  const location = document.createElement('p');
  location.className = 'location';
  location.textContent = `Location: ${object.location}`;
  cardInfo.appendChild(location);

  const profile = document.createElement('p');
  profile.textContent = 'Profile:';
  cardInfo.appendChild(profile);

  const profileAddress = document.createElement('a');
  profileAddress.href = object.html_url;
  profileAddress.textContent = 'Link';
  profile.appendChild(profileAddress);

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${object.followers}`;
  cardInfo.appendChild(followers);

  const following = document.createElement('p');
  following.textContent = `Following: ${object.following}`;
  cardInfo.appendChild(following);

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${object.bio}`;
  cardInfo.appendChild(bio);

  return card;

}

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
