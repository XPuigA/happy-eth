import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Image from './WeeImage/Image.jsx';
import Holder from './Values/Holder.jsx';
import Timer from './Timer/Timer.jsx';

class Main extends React.Component {

  render() {
    return (
      <div className="w3-container">
        <Timer />
        <div className="w3-row-padding">
          <b>Happy ETH</b>
        </div>
        <div className="w3-half">
          <Image />
        </div>
        <div className="w3-half">
          <Holder values={this.props.values} />
        </div>
      </div>
    );
  }
}

Main.defaultProps = {
  values: [],
};

Main.propTypes = {
  values: PropTypes.array,
};

function mapStateToProps(state) {
  const values = Object.keys(state.values).map(currency =>
    ({ currency, value: state.values[currency] }),
  );
  return { values };
}

export default connect(mapStateToProps)(Main);
