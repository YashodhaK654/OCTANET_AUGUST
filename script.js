document.getElementById('item-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the input value
    const item = document.getElementById('item').value;

    // Add the item to the list
    addItemToList(item);

    // Clear input field
    document.getElementById('item').value = '';
});

function addItemToList(item) {
    const shoppingList = document.getElementById('shopping-list');

    // Create a new list item
    const li = document.createElement('li');

    // Set the item content
    li.innerHTML = `
        <span>${item}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Append the item to the list
    shoppingList.appendChild(li);

    // Delete item event
    li.querySelector('.delete-btn').addEventListener('click', function() {
        shoppingList.removeChild(li);
    });
}

// Reset the list
document.getElementById('reset-list').addEventListener('click', function() {
    document.getElementById('shopping-list').innerHTML = '';
});
