import SimpleCounter from "./components/SimpleCounter"
import PropTypes from 'prop-types'
import './App.css';

function App(props) {
  SimpleCounter.prototype = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
  };

  return (
    <div className='counter'>
      <SimpleCounter one={props.digitOne} two={props.digitTwo} three={props.digitThree} four={props.digitFour}/>
    </div>)
}

export default App;
