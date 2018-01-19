import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newRandom } from '../redux/actions/TestActions.js';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.newRandom = this.newRandom.bind(this);
  }

  newRandom() {
    this.props.dispatch(newRandom());
  }

  render() {
    return (
      <div className="w3-container">
        <div className="w3-row-padding">
          <h1>Value: {this.props.number}</h1>
          <button onClick={this.newRandom}>Generate new random value</button>
        </div>
        <div className="w3-row-padding">
          <img src="/img/wee.gif" alt="wee" />
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
  number: PropTypes.string,
};

function mapStateToProps(state) {
  return { number: state.testReducer.number.toString() };
}

export default connect(mapStateToProps)(Main);
