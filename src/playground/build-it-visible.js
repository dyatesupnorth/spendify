class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      isVisible: false
    };
  }
  handleToggleVisibility() {
    console.log("yo");
    this.setState(prevState => {
      return {
      isVisible: !prevState.isVisible
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.isVisible ? "Hide visibility" : "toggle visibility"}
        </button>
        {this.state.isVisible && (
          <div>
            <p>Here are some details.</p>
          </div>
        )}
      </div>
    );
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
