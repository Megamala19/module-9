import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CohortDetails extends Component {
  render() {
    const { cohort } = this.props;

    if (!cohort) {
      return <div className="cohort-details">No cohort selected.</div>;
    }

    return (
      <div className="cohort-details">
        <h3>{cohort.code}</h3>
        <p>{cohort.name}</p>
        <p>Status: {cohort.status}</p>
        <p>
          {cohort.startDate} - {cohort.endDate}
        </p>
        <p>Trainees: {cohort.traineeCount}</p>
      </div>
    );
  }
}

CohortDetails.propTypes = {
  cohort: PropTypes.shape({
    id: PropTypes.number,
    code: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    traineeCount: PropTypes.number
  })
};

export default CohortDetails;
