class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.deleteOptions = this.deleteOptions.bind(this);
    this.pick = this.pick.bind(this);
    this.addOption = this.addOption.bind(this);
    this.deleteOption = this.deleteOption.bind(this);
    this.state = {
      options: []
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      alert(e)
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      console.log("saving data");
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
    console.log("component did update");
  }

  pick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
    console.log(randomNum);
  }
  deleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  deleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }
  addOption(option) {
    if (!option) {
      return "Enter valid value to add item.";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }));

    console.log("option: ", option);
  }
  render() {
    const title = "Indecision";
    const subtitle = "The man in black fled across the desert.";
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} pick={this.pick} />
        <Options
          options={this.state.options}
          deleteOptions={this.deleteOptions}
          deleteOption={this.deleteOption}
        />
        <AddOption addOption={this.addOption} />
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: []
};
const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision"
};

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.pick}>
        What should I do?
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.deleteOptions}>Remove all</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          deleteOption={props.deleteOption}
        />
      ))}
    </div>
  );
};
const Option = props => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={e => {
          props.deleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  addOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.addOption(option);
    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = ''
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addOption}>
          <input name="option" type="text" />
          <button type="submit">Add option</button>
        </form>
      </div>
    );
  }
}
const jsx = (
  <div>
    <h1>Title</h1>
  </div>
);

const User = props => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
