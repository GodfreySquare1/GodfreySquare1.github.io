// Start of To-Do List app.js
const addButton = document.getElementById('addItem') // grabbing the button
const textList = document.getElementById('listItem') // grabbing the value in input field
const toDoContainer = document.getElementById('list-item-container') // grabbing the div where list goes into


addButton.addEventListener('click', () => { // this is a click event to add the string that was entered in the textfield area.
    var paragraph = document.createElement('p')
    paragraph.innerText = textList.value;
    var remove = document.createElement('button')
    var editParagraph = document.createElement('i')
    var checkbox = document.createElement('i')
    checkbox.classList = 'fa fa-square-o'
    editParagraph.innerText = ''
    editParagraph.classList = 'fa fa-pencil'
    editParagraph.setAttribute('id', 'edit')
    remove.innerText = 'X'
    remove.classList.add('remove')
    remove.setAttribute('id', 'removeItem')
    paragraph.append(remove)
    paragraph.append(editParagraph)
    paragraph.append(checkbox)
    toDoContainer.appendChild(paragraph)
    textList.value = "";

    checkbox.addEventListener('click', () => { // This is the click event to mark-off an item
        paragraph.style.textDecoration = 'line-through'
        paragraph.style.color = 'skyblue'
        paragraph.removeChild(checkbox)
        paragraph.removeChild(remove)
        paragraph.removeChild(editParagraph)
        var tick = document.createElement('i')
        tick.setAttribute('id', 'check')
        tick.classList = 'fa fa-undo'
        tick.style.textDecoration = 'none'
        paragraph.appendChild(tick)

        tick.addEventListener('click', () => {  // This is the click event to undoe mark-off
            paragraph.style.textDecoration = 'none'
            paragraph.style.color = 'white'
            paragraph.removeChild(tick)
            paragraph.append(remove)
            paragraph.append(editParagraph)
            paragraph.append(checkbox)
        })
    })

    remove.addEventListener('click', () => { // This is the click event to remove the current list item
        toDoContainer.removeChild(paragraph)
    });
    editParagraph.addEventListener('click', () => { // This is the click event to edit the current list item
        paragraph.removeChild(remove)
        paragraph.removeChild(editParagraph)
        paragraph.removeChild(checkbox)
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
            paragraph.append(checkbox)
        })
    });
});
// End of To-Do List app.js