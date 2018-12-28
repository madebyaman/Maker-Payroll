import React from 'react';
import PropTypes from 'prop-types';

class DisplayProject extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
  };

  render() {
    const { name, rate, date, hours } = this.props;
    return (
      <div className="project">
        <h2>{name}</h2>
        <p>{rate}</p>
        <p>{date}</p>
        <p>{hours}</p>
      </div>
    );
  }
}

export default DisplayProject;
