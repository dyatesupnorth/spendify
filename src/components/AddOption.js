import React from 'react';

export default class AddOption extends React.Component {
    state = {
      error:undefined
    }
    
    addOption = (e) => {
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
        <div className="card">
          
          <form onSubmit={this.addOption}>
          {this.state.error && <p className="error">{this.state.error}</p>}
            <div className="group">      
              <input name="option" type="text" />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Option</label>
            </div>
            
            <button className="btn btn-primary btn-raised btn-ripple" type="submit">Add option</button>
          </form>
        </div>
      );
    }
  }
 