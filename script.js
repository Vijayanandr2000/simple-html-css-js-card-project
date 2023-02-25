/* Fill your code*/
const toggleButton = document.getElementById('addBlog');
const toggleCloseButton = document.getElementById('close');
const popupContact = document.getElementById('popupContact');

toggleButton.addEventListener('click', function() {
  if (popupContact.style.display === 'none') {
    popupContact.style.display = 'block';
  } else {
    popupContact.style.display = 'none';
  }
});

toggleCloseButton.addEventListener('click', function() {
    if (popupContact.style.display === 'none') {
      popupContact.style.display = 'block';
    } else {
      popupContact.style.display = 'none';
    }
  });

const titleInput = document.getElementById('title');
const descInput = document.getElementById('detail');
const container = document.querySelector('.body-div2');

const addButton = document.getElementById('post');

addButton.addEventListener('click', function() {
  // Create a new card element with the input and description values
  const newCard = createCard(titleInput.value, descInput.value);
  
  // Add the new card to the container element
  container.appendChild(newCard);
  
  // Reset the input and description fields
  titleInput.value = '';
  descInput.value = '';
});

function createCard(title, description) {
    // Create the new card element and its child elements
    const card = document.createElement('div');
    card.classList.add('article-card');
    
    const img = document.createElement('img');
    img.src = './assets/java card image.svg';
    img.alt = '';
    
    const cardText = document.createElement('div');
    cardText.classList.add('card-text');
    
    const titleElem = document.createElement('h1');
    titleElem.textContent = title;
    
    const descElem = document.createElement('p');
    descElem.textContent = description;
    
    const postedElem = document.createElement('p');
    postedElem.textContent = 'Posted on';
    
    const cardButtons = document.createElement('div');
    cardButtons.classList.add('card-buttons');
    
    const editLink = document.createElement('a');
    const editButton = document.createElement('button');
    editButton.textContent = 'EDIT';
    editLink.appendChild(editButton);
    
    const separator = document.createElement('span');
    separator.textContent = '|';
    
    const deleteLink = document.createElement('a');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteLink.appendChild(deleteButton);
    
    // Append the child elements to the card element
    cardText.appendChild(titleElem);
    cardText.appendChild(descElem);
    cardText.appendChild(postedElem);
    
    cardButtons.appendChild(editLink);
    cardButtons.appendChild(separator);
    cardButtons.appendChild(deleteLink);
    
    card.appendChild(img);
    card.appendChild(cardText);
    card.appendChild(cardButtons);
    
    return card;
  }
  