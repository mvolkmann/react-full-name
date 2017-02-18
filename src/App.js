import React from 'react';

export default class App extends React.Component {
  state = {first: '', last: ''};
  onChange = event => this.setState({[event.target.name]: event.target.value});

  render() {
    const {first, last} = this.state;
    return <div>
      First: <input name="first" onChange={this.onChange} value={first}/><br/>
      Last: <input name="last" onChange={this.onChange} value={last}/><br/>
      Full: {first} {last}
    </div>;
  }
}
