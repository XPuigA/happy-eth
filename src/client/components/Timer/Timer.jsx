import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateValues } from '../../redux/actions/TimerActions.js';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {
      timer: null,
    };
  }

  componentWillMount() {
    const timer = setInterval(this.update, 10000);
    this.setState({ timer });
    this.update();
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  update() {
    this.props.dispatch(updateValues('ETH', ['BTC', 'EUR', 'USD']));
  }

  render() {
    return (
      false
    );
  }
}

Timer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Timer);
