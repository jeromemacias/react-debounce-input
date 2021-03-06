import React from 'react';
import DebounceInput from '..';


const App = React.createClass({
  getInitialState() {
    return {
      value: '',
      minLength: 0,
      debounceTimeout: 300,
      indefinite: false
    };
  },


  onChangeDebounceTimeout({target: {value}}) {
    this.setState({debounceTimeout: parseInt(value, 10)});
  },


  onChangeMaxLength({target: {value}}) {
    this.setState({minLength: parseInt(value, 10)});
  },


  render() {
    return (
      <div>
        <div>
          <h2>Customize</h2>
          <label>
            minLength:&nbsp;
            <input type="number" step={1} min={0} max={10}
              value={this.state.minLength} onChange={this.onChangeMaxLength} />&nbsp;
          </label>

          <label>
            debounceTimeout:&nbsp;
            <input disabled={this.state.indefinite} type="number" step={100} min={0} max={1000}
              value={this.state.debounceTimeout} onChange={this.onChangeDebounceTimeout} />&nbsp;
          </label>

          <label>
            Indefinite timeout:&nbsp;
            <input
              type="checkbox"
              onChange={({target: {checked}}) => this.setState({indefinite: checked})} />
          </label>
        </div>

        <div>
          <h2>Test</h2>
          <DebounceInput
            minLength={this.state.minLength}
            debounceTimeout={this.state.indefinite ? -1 : this.state.debounceTimeout}
            onChange={value => this.setState({value})}
            onKeyDown={({key}) => this.setState({key})} />
          <p>Value: {this.state.value}</p>
          <p>Key pressed: {this.state.key}</p>
        </div>
      </div>
    );
  }
});


export default App;
