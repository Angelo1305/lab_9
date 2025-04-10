function init() {
  // Get references to DOM elements
  const button = document.getElementById("entrybutton");
  const input = document.getElementById("entryinput");
  const output = document.getElementById("textoutput");

  // Add click event listener to the button
  button.addEventListener("click", function () {
    const inputValue = input.value;

    // Show alert with name prepended
    alert("Angelo Santillan: " + inputValue); 

    // Update the headline text
    output.textContent = inputValue;
  });
}

// Run init once the page loads
window.addEventListener("load", init);
