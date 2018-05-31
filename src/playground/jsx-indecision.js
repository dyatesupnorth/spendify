const appRoot = document.getElementById("app");

//JSX - Javascript XML (ew. XML.) is a language extension. Like Sass.
const app = {
  title: "Indecision",
  subtitle:
    "The man in black fled across the desert. And the gunslinger followed.",
  options: []
};
const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  console.log("form submitted");
  render();
};
const removeAll = () => {
  app.options = [];
  render();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option)
    console.log(randomNum);
}

const numbers = [55,101,1000];

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options "}</p>
      <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>
      {
        numbers.map((number) => {
            return <p key={number}>Number: {number}</p>
        })

      }
      <ol>
        {
            app.options.map((option) => {
                return <li key={option}>{option}</li>
            })
        }
        
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
render();
