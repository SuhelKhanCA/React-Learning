
const rootElement = document.getElementById("root");

console.log(rootElement); // working fine

// type, props, children
// function Hello() {
//     return React.createElement("h1", {className: "heading"}, "Hello world!");
// }

const el = React.createElement("h1", null, "Hello world!");

console.log(el); // obj

// ReactDOM.createRoot(rootElement).render(el);
// ReactDOM.createRoot(rootElement).render(Hello());


// JSX

function HelloWorld() {
  return <h1 className="heading">Hello World</h1>
}
// h1, p, div, article, main
// ReactDOM.createRoot(rootElement).render(<HelloWorld />);


// Things to remember

// react, reactDOM
// JSX(Babel convert jsx to actual react code)

const rootEle = document.getElementById("root");

function Hello() {
    return <h1 className="heading">Hello Suhel into the world of React</h1>
}

ReactDOM.createRoot(rootEle).render(<Hello/>)
