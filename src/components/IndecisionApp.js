import React from "react";

import Header from "./Header";
import Action from "./Action";
import AddOption from "./AddOption";
import Options from "./Options";
import OptionModal from "./OptionModal";
export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    closeModal: false
  };
  clearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }
  pick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];

    this.setState(() => ({
      selectedOption: option
    }))
  };
  deleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  deleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };
  addOption = option => {
    if (!option) {
      return "Enter valid value to add item.";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }));

    console.log("option: ", option);
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      alert(e);
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

  render() {
    const title = "Indecision";
    const subtitle = "The man in black fled across the desert, and the gunslinger followed.";
    return (
      <div id="wrapper">
        <Header subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} pick={this.pick} />
        <Options
          options={this.state.options}
          deleteOptions={this.deleteOptions}
          deleteOption={this.deleteOption}
        />
        <AddOption addOption={this.addOption} />
        <OptionModal selectedOption={this.state.selectedOption} clearSelectedOption={this.clearSelectedOption}/>
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: []
};
