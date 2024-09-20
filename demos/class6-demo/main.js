window.onload = () => {
  // assign to variable so that we don't need to type "document.getelementbyid" every time
  let button = document.getElementById("btn-click");

  // button.onclick = () => {
  //     console.log('clicked button')
  // }

  // event listener takes 2 params
  // 1. type of event (eg. click)
  // 2. callback function which calls the helper to do something
  // button.addEventListener('click', clickHandler)

  // anonymous callback function as param
  // even listeners can only be added in the onload function (this is because we want the elements to "listen" or be ready to receive the event when they are used)
  button.addEventListener("click", () => {
    console.log("clicked button but in an anonymous function");

    let div = document.getElementById("light-container");
    div.style.color = "white";
    div.innerHTML = "";
    if (div.classList.contains("day")) {
      div.innerHTML = "daytime!";
      div.classList.add("night");
      div.classList.remove("day");
    } else {
      div.innerHTML = "nighttime!";
      div.classList.remove("night");
      div.classList.add("day");
    }
  });

  let addedText = document.getElementById("text");

  // e as param in anonymous function
  // automatically populated by the data passed in from the keypress
  document.addEventListener("keydown", (e) => {
    console.log(e.key);

    let newText = e.key;
    let oldText = addedText.innerHTML;
    if (newText == "Enter") {
      newText = "<br>";
    }
    addedText.innerHTML = oldText + newText;
  });
};

// callback function for event listener
function clickHandler() {
  console.log("clicked button but in a function");
}
