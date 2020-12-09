import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  buttonHandler() {
    this.setState((state) => ({
      count: state.count + 1
    }))
  }

  resetCounter() {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <>
        <Card className="counter" id={this.props.counterName}>
          <Card.Body>
            <h3> {this.props.counterName}</h3>
            <p>{this.state.count}</p>
            <Button onClick={() => this.buttonHandler()}> increace count</Button>
            <Button onClick={() => this.resetCounter()}> reset</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default Counter;
