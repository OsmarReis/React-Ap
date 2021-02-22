import React, { Component } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Fields from "./components/Fields";
import Arrays from "./components/Arrays";
import "./styles.css";

export default class App extends Component {
  state = {
    firstTerm: 1,
    constant: 1,
    terms: 30,
    arrayTerms: [],
  };

  formatInput = (e) => {
    // Prevent characters that are not numbers ("e", ".", "+" & "-")
    let checkIfNum;
    if (e.key !== undefined) {
      // Check if it's a "e", ".", "+" or "-"
      checkIfNum =
        e.key === "e" ||
        e.key === "." ||
        e.key === "+" ||
        e.key === "-" ||
        e.key === ",";
    } else if (e.keyCode !== undefined) {
      // Check if it's a "e" (69), "." (190), "+" (187) or "-" (189)
      checkIfNum =
        e.keyCode === 69 ||
        e.keyCode === 190 ||
        e.keyCode === 187 ||
        e.keyCode === 189;
    }
    return checkIfNum && e.preventDefault();
  };

  getData = () => {
    let arrTerms = new Array(this.state.terms);
    for (let i = 0; i < this.state.terms; i++) {
      arrTerms[i] = this.state.firstTerm + i * this.state.constant;
    }
    console.log(arrTerms);
    this.setState({
      arrayTerms: arrTerms,
    });
  };

  termChange = (newTerm) => {
    this.setState({
      firstTerm: newTerm,
    });
  };

  constChange = (newConstant) => {
    this.setState({
      constant: newConstant,
    });
  };

  termsChange = (newTerms) => {
    this.setState({
      terms: newTerms,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Header">
          <Header />
        </div>
        <div className="Form">
          <Card>
            <Fields
              firstTermChange={this.termChange}
              constantChange={this.constChange}
              termsChange={this.termsChange}
              getData={this.getData}
              onKey={this.formatInput}
            ></Fields>
          </Card>
        </div>
        <div className="Result">
          <Card>
            <Arrays arrTerms={this.state.arrayTerms}></Arrays>
          </Card>
        </div>
      </div>
    );
  }
}
