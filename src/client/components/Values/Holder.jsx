import React from 'react';
import PropTypes from 'prop-types';
import Value from './Value.jsx';

export default class Holder extends React.Component {

  valueElement(value) {
    return (
      <div className="w3-third" key={`value_${value.currency}`}>
        <Value currency={value.currency} value={value.value} />
      </div>
    );
  }

  render() {
    const { values } = this.props;
    return (
      <div className="w3-row">
        {
          values.map(value => this.valueElement(value))
        }
      </div>
    );
  }
}

Holder.defaultProps = {
  values: [],
};

Holder.propTypes = {
  values: PropTypes.array,
};
