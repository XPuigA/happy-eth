import React from 'react';
import PropTypes from 'prop-types';

export default class Image extends React.Component {

  render() {
    return (
      <div className="w3-row">
        <img src="/img/wee.gif" alt="" style={{ transform: `rotate(${this.props.slope}deg)` }} />
      </div>
    );
  }
}

Image.defaultProps = {
  slope: 0,
};

Image.propTypes = {
  slope: PropTypes.number,
};
