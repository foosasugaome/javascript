function getData(character) {
    var characterType = character.getAttribute("data-character-type");
    
    // Display data attribute values
    document.getElementById('output').innerHTML = characterType + " is in the " + character.innerHTML + " universe. ";    
}