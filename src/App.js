import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.scss';
import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counterRefs: [],
      counters: []
    }
  }

  resetHandler() {
    this.state.counterRefs.forEach((r) => r.current.resetCounter())
  }


  createCounter(i, ref) {
    return ( <
      Counter counterName = {
        "counter" + (i + 1)
      }
      key = {
        i
      }
      ref = {
        ref
      }
      />
    )
  }

  addCounter() {
    this.setState((state) => {
      const ref = React.createRef();
      const newCounter = this.createCounter(state.counters.length, ref);
      return ({
        counters: state.counters.concat(newCounter),
        counterRefs: state.counterRefs.concat(ref)
      })
    })
  }

  removeCounter() {
    this.setState((state) => {
      return ({
        counters: state.counters.slice(0, state.counters.length - 1),
        counterRefs: state.counterRefs.slice(0, state.counterRefs.length - 1)
      })
    })
  }


  render() {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
            <Button onClick={() => this.resetHandler()} > Reset All</Button>
          </Col>
          <Col className="text-center">
            <Button onClick={() => this.addCounter()} > Add Counter</Button>
          </Col>
          <Col className="text-center">
            <Button onClick={() => this.removeCounter()} > Remove Counter</Button>
          </Col>
        </Row>
        <Row>
          {this.state.counters}
        </Row>
      </Container>
    </>
  );
}
}


export default App;
