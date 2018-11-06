import * as React from 'react';
import { StatefulCounterWithDefaultProps } from './components/StatefulCounterWithDefaultProps'

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
    const { count } = this.state
    return (
      <div className="App">
        <StatefulCounterWithDefaultProps 
          label='start'
          initialCount={count}
        />
      </div>
    );
  }
}

export default App;
