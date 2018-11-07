import * as React from 'react';
import MouseProvider from './Usage/MouseProvider'

interface IState {
  count : number;
}


class App extends React.Component<{},IState>{
  state : IState = {
    count : 0
  }

  componentDidMount() {
    this.setState({ count : 10})
  }

  public render() {
    return (
      <div className="App">
        <MouseProvider />
      </div>
    );
  }
}

export default App;
