import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  // DecreaseItem = () => {
  //   this.setState({ clicks: this.state.clicks - 1 });
  // }
  // ToggleClick = () => {
  //   this.setState({ show: !this.state.show });
  // }

  render() {
    return (
      <div className="profileStyles">
        <button style={{color: "white", fontSize: '15px',}}onClick={this.IncrementItem}>Energy Effcient Light Bulbs</button>
        <button style={{color: "white", fontSize: '15px',}}  onClick={this.IncrementItem}>Install Programmable Thermostat</button>
        <button style={{color: "white", fontSize: '15px',}}  onClick={this.IncrementItem}>Install Programmable Lightbulbs</button>
        <button style={{color: "white", fontSize: '15px',}}  onClick={this.IncrementItem}>Remove Your Lawn</button>
        <button style={{color: "white", fontSize: '15px',}}  onClick={this.IncrementItem}>Xeriscape Your Yard</button>
        <button style={{color: "white", fontSize: '15px',}}  onClick={this.IncrementItem}>Buy Organic</button>
        <button style={{color: "white", fontSize: '15px',}}  onClick={this.IncrementItem}>Eat Meat-Free Meals</button>
        <button style={{color: "white", fontSize: '15px',}}  onClick={this.IncrementItem}>Reduce Food Waste</button>
        <button style={{color: "white", fontSize: '15px',}}  onClick={this.IncrementItem}>Don't Drink Bottled Water</button>
        <button style={{color: "white", fontSize: '15px',}}  onClick={this.IncrementItem}>Say No To Plastic</button>
        <button style={{color: "white", fontSize: '15px',}}  onClick={this.IncrementItem}>Solar Panels</button>
        <button style={{color: "white", fontSize: '15px',}}  onClick={this.IncrementItem}>Public Transportation</button>
        <button style={{color: "white", fontSize: '15px',}}  onClick={this.IncrementItem}>Unplug your Devices</button>


        {/* <button onClick={this.DecreaseItem}>Click to decrease by 1</button> */}
        {/* <button onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button> */}
        { this.state.show ? <h2 className="h2style">{ this.state.clicks }<span>%</span></h2> : '' }
      </div>
    );
  }
}

export default App;