const h2 = document.createElement("h2");

h2.innerText = "Hello World from JavaScript";

const rootElement = document.getElementById("root");

rootElement.appendChild(h2);

const h3 = React.createElement("h3",{id:"section"},"Hello World from React CDN");

const root = ReactDOM.createRoot(document.getElementById("root2"));

root.render(h3);