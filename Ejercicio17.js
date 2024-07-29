document.addEventListener("DOMContentLoaded", function() {
    // Selecciona los elementos necesarios del DOM
    const inputField = document.getElementById("item-input");
    const addButton = document.getElementById("add-button");
    const shoppingList = document.getElementById("shopping-list");

    // Añade un evento de clic al botón para agregar elementos a la lista
    addButton.addEventListener("click", function() {
        // Obtiene el valor del campo de entrada
        const newItemText = inputField.value.trim();
        
        // Comprueba si el campo de entrada no está vacío
        if (newItemText !== "") {
            // Crea un nuevo elemento de lista y establece su contenido de texto
            const newItem = document.createElement("li");
            newItem.textContent = newItemText;

            // Añade el nuevo elemento de lista a la lista de compras
            shoppingList.appendChild(newItem);

            // Limpia el campo de entrada
            inputField.value = "";
        }
    });
    
    // Permite añadir elementos a la lista pulsando Enter
    inputField.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
});