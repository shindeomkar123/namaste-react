/**
 * <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div>
 * 
 * 
 * 
 */
const heading = React.createElement(
  "h1", //tagname
  { id: "heading" }, //options
  "Hello world from react" //content or another child element
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [heading, heading])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
