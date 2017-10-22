import React from 'react';
import PropTypes from 'prop-types';
import SampleRow from './SampleRow';

const SampleTable = ({SampleStore}) => {

  return (

    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Values</th>
        </tr>
      </thead>
      <tbody>
        {SampleStore.map(sample => <SampleRow key={sample.id} sample={sample}/>)}
      </tbody>
    </table>
  )
}
SampleTable.PropTypes = {
  SampleStore: PropTypes.array.isRequired
}

export default SampleTable;
