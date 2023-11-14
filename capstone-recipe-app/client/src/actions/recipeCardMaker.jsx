import breakfastPic from '../recipe-images/eggs.jpg';
import lunchPic from '../recipe-images/lunch.jpg';
import dinnerPic from '../recipe-images/dinner.jpg';
import dessertPic from '../recipe-images/dessert.jpg';

// my function that creates the card and modal layout for all of my recipes
export const recipeCardMaker = (data, parent) => {

    // ========CARD========
    // creating the recipe div
    let recipe = document.createElement('div');
    recipe.id = `recipe-${data._id}`; // `#recipe-{item._id}`
    recipe.className = 'col';
    let cardParent = document.createElement('div');

    // creating the card div
    let card = document.createElement('div');
    card.className = 'card';
    card.style = 'width: 400px;';
    card.setAttribute('data-toggle', 'modal');
    card.setAttribute('data-target', `#recipe-modal-${data._id}`); // `#recipe-modal-{item._id}`

    // creating the card title
    let cardTitle = document.createElement('h4')
    cardTitle.className = 'card-title';
    cardTitle.textContent = data.name // item.name

    // creating the card image
    let cardImg = document.createElement('img');
    cardImg.className = 'card-img-top';
    if (cardImg.src === "") {
        if (data.category === "breakfast") {
            cardImg.src = breakfastPic;
        }
        else if (data.category === "lunch") {
            cardImg.src = lunchPic;
        }
        else if (data.category === 'dinner') {
            cardImg.src = dinnerPic;
        }
        else cardImg.src = dessertPic;
    }
    else cardImg.src = data.image;
    cardImg.alt = data.name;
    cardImg.style = 'width:100%';

    // creating the card body
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // creating the card text
    let cardText = document.createElement('p');
    cardText.className = 'card-text'
    cardText.textContent = data.description // item.description

    // appending the card together
    cardBody.appendChild(cardText);
    card.appendChild(cardTitle);
    card.appendChild(cardImg);
    card.appendChild(cardBody);
    cardParent.appendChild(card);

    // ========MODAL========
    let modal = document.createElement('div')
    modal.className = 'modal'
    modal.id = `recipe-modal-${data._id}` //`#recipe-modal-{item._id}`

    // modal text
    let modalDialog = document.createElement('div')
    modalDialog.className = 'modal-dialog'

    // modal content
    let modalContent = document.createElement('div')
    modalContent.className = 'modal-content'

    // modal head
    let modalHeader = document.createElement('div')
    modalHeader.className = 'modal-header'

    // modal title
    let modalTitle = document.createElement('h4')
    modalTitle.className = 'modal-title'
    modalTitle.textContent = data.name //item.name

    // modal close button
    let modalCloseButton = document.createElement('button');
    modalCloseButton.className = 'close';
    modalCloseButton.setAttribute('type', 'button');
    modalCloseButton.setAttribute('data-dismiss', 'modal');
    modalCloseButton.textContent = '&times;'

    // modal body
    let modalBody = document.createElement('div')
    modalBody.className = 'modal-body'

    // modal image
    let modalImg = document.createElement('img')
    modalImg.className = 'card-img-top'
    if (modalImg.src === "") {
        if (data.category === "breakfast") {
            modalImg.src = breakfastPic;
        }
        else if (data.category === "lunch") {
            modalImg.src = lunchPic;
        }
        else if (data.category === 'dinner') {
            modalImg.src = dinnerPic;
        }
        else modalImg.src = dessertPic;
    }
    else cardImg.src = data.image;
    modalImg.alt = data.name;
    modalImg.style = 'width:100%';
    modalBody.appendChild(modalImg)

    // array to label the fields
    const fieldArray = ['description', 'ingredients', 'directions', 'calories', 'servings', 'protein', 'fat', 'carbs', 'category']
    fieldArray.forEach(key => {
        let paragraphItem = document.createElement('p')
        paragraphItem.textContent = `${key}: ${data[key]}` //item[key]
        modalBody.appendChild(paragraphItem)
    })

    // appending the modal together
    modalHeader.appendChild(modalTitle)
    modalContent.appendChild(modalHeader)
    modalContent.appendChild(modalBody)
    modalDialog.appendChild(modalContent)
    modal.appendChild(modalDialog)
    cardParent.appendChild(modal)
    recipe.appendChild(cardParent)
    parent.appendChild(recipe)

}