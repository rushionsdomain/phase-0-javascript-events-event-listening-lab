function addingEventListener() {
  const button = document.getElementById("button");

  function handleClick() {
    console.log("Button was clicked!");
  }

  button.addEventListener("click", handleClick);
}

addingEventListener();
