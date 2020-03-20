console.log("Script Connected");

let ul = document.querySelector("ul");
let input = document.querySelector("input");
let h1 = document.querySelector("h1");

let store = Redux.createStore(function(state = [], action) {
	switch (action.type) {
		case "ADD":
			state.push(input.value);
			console.log(state, "State after push");
			return state;
	}
});

store.subscribe(() => {
	ul.innerHTML = "";
	store.getState().forEach((singleTodo) => {
		let li = document.createElement("li");
		li.textContent = singleTodo;
    ul.appendChild(li);
    input.value = '';
  });
  
	console.log(store, "In subscribe");
	console.log(store.getState());
});

function handleInput() {
	if (event.keyCode == 13) {
		store.dispatch({ type: "ADD" });
	}
}

//Listener
input.addEventListener("keyup", handleInput);