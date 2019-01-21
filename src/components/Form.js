import React, { Component } from "react";
import Box from './Box';

class Form extends Component {
  state = {
    objName: "",
    objProp: "",
    propVal: "",
    rendered: false
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ rendered: true });
  };

  onReset = () => {
    this.setState({
      objName: "",
      objProp: "",
      propVal: "",
      rendered: false
    });
  };

  getInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { objName, objProp, propVal, rendered } = this.state;
    let formatRender = {
      val: `
            var ${objName} = {
                ${objProp} : ${propVal}        
            };`
    };

    if (rendered) {
      return (
        <main>
          <form onSubmit={this.onSubmit} className="form-wrap">
            <div>
              <label>
                <i className="material-icons">input</i>
                Object Name
              </label>
              <input
                required
                type="text"
                name="objName"
                placeholder="obj name"
                value={objName}
                onChange={this.getInput}
              />
            </div>
            <div>
              <label>
                <i className="material-icons">input</i>
                Object Property
              </label>
              <input
                required
                type="text"
                name="objProp"
                placeholder="obj property"
                value={objProp}
                onChange={this.getInput}
              />
            </div>
            <div>
              <label>
                <i className="material-icons">input</i>
                Property Value
              </label>
              <input
                required
                type="text"
                name="propVal"
                placeholder="Prop value"
                value={propVal}
                onChange={this.getInput}
              />
            </div>
            <div>
              <input type="submit" className="btn" value="Create Js Object" />
              <input type="reset" className="btn"value="reset" onClick={this.onReset} />
            </div>
          </form>
          <div className="output">
            <textarea value={formatRender.val} onChange={this.getInput} />
          </div>
          <Box />
        </main>
      );
    } else {
      return (
        <main>
          <form onSubmit={this.onSubmit} className="form-wrap">
            <div>
              <label>
                <i className="material-icons">input</i>
                Object Name
              </label>
              <input
                required
                type="text"
                name="objName"
                placeholder="obj name"
                value={objName}
                onChange={this.getInput}
              />
            </div>
            <div>
              <label>
                <i className="material-icons">input</i>
                Object Property
              </label>
              <input
                required
                type="text"
                name="objProp"
                placeholder="obj property"
                value={objProp}
                onChange={this.getInput}
              />
            </div>
            <div>
              <label>
                <i className="material-icons">input</i>
                Property Value
              </label>
              <input
                required
                type="text"
                name="propVal"
                placeholder="Prop value"
                value={propVal}
                onChange={this.getInput}
              />
            </div>
            <div>
              <input type="submit" className="btn" value="Create Js Object" />
            </div>
          </form>
          <div className="output" />
          <Box />
        </main>
      );
    }
  }
}

export default Form;
