//your code here!
document.addEventListener("DOMContentLoaded", function() {
    // Function to add list items
    function addListItems() {
        const myList = document.getElementById("myList");

        // Add 10 list items by default
        for (let i = 1; i <= 10; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = "List Item " + i;
            myList.appendChild(listItem);
        }

        // When the user scrolls to the end of the list, add 2 more list items
        myList.addEventListener("scroll", function() {
            if (myList.scrollTop + myList.clientHeight >= myList.scrollHeight) {
                for (let i = 1; i <= 2; i++) {
                    const listItem = document.createElement("li");
                    listItem.textContent = "List Item " + (myList.children.length + i);
                    myList.appendChild(listItem);
                }
            }
        });
    }

    // Call the function to add list items
    addListItems();
});

