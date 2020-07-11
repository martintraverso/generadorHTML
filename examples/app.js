import make from "../src/maker";
import { createStore } from "redux";

// funciones basicas
var incrementar = function (valor) {
  return valor + 1;
};
var decrementar = function (valor) {
  return valor - 1;
};

// REDUX
function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return incrementar(state);
    case "DECREMENT":
      return decrementar(state);
    default:
      return state;
  }
}

const store = createStore(counter);

//Implementacion .
var el = document.getElementById("app");
el.appendChild(
  make("input", {
    id: "input",
    type: "button",
    value: "-",
    events: {
      click: {
        fn: store.dispatch,
        params: { type: "DECREMENT" },
      },
    },
  })
);
el.appendChild(
  make("input", {
    id: "elemento",
    type: "number",
  })
);

el.appendChild(
  make("input", {
    id: "input",
    type: "button",
    value: "+",
    events: {
      click: {
        fn: store.dispatch,
        params: { type: "INCREMENT" },
      },
    },
  })
);

function render() {
  document.getElementById("elemento").value = store.getState();
}
render();
store.subscribe(render);
