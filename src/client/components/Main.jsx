import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Image from './WeeImage/Image.jsx';
import Holder from './Values/Holder.jsx';
import Timer from './Timer/Timer.jsx';

class Main extends React.Component {

  render() {
    const { values, slope } = this.props;
    return (
      <div className="w3-container">
        <Timer />
        <div className="w3-row-padding">
          <b>Happy ETH</b>
        </div>
        <div className="w3-half">
          <Image slope={slope} />
        </div>
        <div className="w3-half">
          <Holder values={values} />
        </div>
      </div>
    );
  }
}

Main.defaultProps = {
  values: [],
  slope: 0,
};

Main.propTypes = {
  values: PropTypes.array,
  slope: PropTypes.number,
};

function mapStateToProps(state) {
  const { change, slope } = state.values;
  return { values: change, slope };
}

export default connect(mapStateToProps)(Main);
