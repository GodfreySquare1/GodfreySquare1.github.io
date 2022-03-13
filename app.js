// Start of To-Do List app.js
const addButton = document.getElementById('addItem') // grabbing the button
const textList = document.getElementById('listItem') // grabbing the value in input field
const toDoContainer = document.getElementById('list-item-container') // grabbing the div where list goes into


addButton.addEventListener('click', () => {
    var paragraph = document.createElement('p')
    paragraph.innerText = textList.value;
    var remove = document.createElement('button')
    var editParagraph = document.createElement('i')
    var checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.classList = 'checkbox-style'
    editParagraph.innerText = ''
    editParagraph.classList = 'fa fa-pencil'
    editParagraph.setAttribute('id', 'edit')
    remove.innerText = 'X'
    remove.classList.add('remove')
    remove.setAttribute('id', 'removeItem')
    paragraph.append(remove)
    paragraph.append(editParagraph)
    paragraph.append(checkbox)
    toDoContainer.appendChild(paragraph);
    textList.value = "";
    remove.addEventListener('click', () => {
        toDoContainer.removeChild(paragraph)
    });
    editParagraph.addEventListener('click', () => {
        paragraph.removeChild(remove)
        paragraph.removeChild(editParagraph)
        var addField = document.createElement('input')
        addField.setAttribute('id', 'editText')
        addField.classList = 'addField'
        var changeText = document.createElement('button');
        changeText.innerText = 'Save'
        changeText.classList = 'save'
        paragraph.append(addField)
        paragraph.append(changeText)
        changeText.addEventListener('click', () => {
            paragraph.innerText = addField.value
            paragraph.append(remove)
            paragraph.append(editParagraph)
        })
    });
});
// End of To-Do List app.js