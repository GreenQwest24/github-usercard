/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
   
*/
//let followers_link;
//const cards = document.querySelector('card')

axios.get('https://api.github.com/users/GreenQwest24')
  .then(data =>{
    console.log('data: ', data)
    const my_info = data.data;
    const myInfo = data.data;
    console.log('UserInfo: ', myInfo)


    const cards = document.querySelector('.cards')
    const cardInfo = cardCreator(myInfo)
    cards.appendChild(cardInfo)
              
  })

 
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/


const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luisshrd', 'bigknell'];

followersArray.forEach((user, i) => {
  axios.get(`https://api.github.com/users/${user}` )
   .then(data => {
       const card = cardCreator(data.data)
       const cards = document.querySelector('.cards')
       cards.appendChild(card)
  
      })
    
    })


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
const cards = document.querySelector('.cards');
function cardCreator(arg) {

   const card = document.createElement('div');
   const  img = document.createElement('img');
   const  cardInfo= document.createElement('cardInfo');
   const  h3Name = document.createElement('h3');
   const  pUser = document.createElement('p');
   const  pLocation= document.createElement('p');
   const  profile = document.createElement('p');
   const  profileLink = document.createElement('a');
   const  pFollowers = document.createElement('p');
   const  pPursuing = document.createElement('p');
   const  pBio = document.createElement('p');

   card.classList.add('card');
   cardInfo.classList.add('card-info');
   h3Name.classList.add('name');
   pUser.classList.add('username');




        card.appendChild(img)
        card.appendChild(cardInfo)
        cardInfo.appendChild(h3Name)
        cardInfo.appendChild(pUser)
        cardInfo.appendChild(pLocation)
        cardInfo.appendChild(profile)
        cardInfo.appendChild(profileLink)
        cardInfo.appendChild(pFollowers)
        cardInfo.appendChild(pPursuing)
        cardInfo.appendChild(pBio)

       


        

        img.src = arg.avatar_url
        h3Name.textContent = arg.h3Name
        pUser.textContent = arg.login
        pLocation.textContent = arg.pLocation
        const theProfileLink = arg.url
        profileLink.innerHTML = theProfileLink.link(arg.url)
        pFollowers.textContent = `Followers: ${arg.pFollowers}`
        pPursuing.textContent = `Pursuing: ${arg.pPursuing}`
        pBio.textContent = arg.bio

        
        return card
        

}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/