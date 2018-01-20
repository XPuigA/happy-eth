import React from 'react';
import PropTypes from 'prop-types';

export default class Value extends React.Component {

  render() {
    return (
      <div className="w3-row-padding">
        <div className="w3-row">
          <b>{this.props.currency}</b>
        </div>
        <div className="w3-row">
          <b>{this.props.value}</b>
        </div>
      </div>
    );
  }
}

Value.defaultProps = {
  currency: '###',
  value: 0.000,
};

Value.propTypes = {
  currency: PropTypes.string,
  value: PropTypes.number,
};
