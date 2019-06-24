import React from 'react';
import logo from './logo.svg';
import './App.css';
import dayjs from 'dayjs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: dayjs(),
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: dayjs() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

renderTime = () => {
    return <h3>
      {this.state.time.format('YYYY-MM-DD hh:mm:ss A')}
    </h3>
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.renderTime()}
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
