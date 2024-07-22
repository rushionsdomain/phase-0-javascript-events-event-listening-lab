function addingEventListener() {
  // Select the button element by its ID
  const button = document.getElementById("button");

  button.addEventListener("click", () => {
    console.log("Button clicked");
  });
}

addingEventListener();
