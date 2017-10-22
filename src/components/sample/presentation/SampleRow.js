import React from 'react';
import PropTypes from 'prop-types';

const SampleRow = ({sample}) => {
  return (
    <tr>
      <td>{sample.id}</td>
      <td>{sample.name}</td>
      <td>{sample.values.start}</td>
      <td>{sample.values.middle}</td>
      <td>{sample.values.end}</td>
    </tr>
  )
}
SampleRow.PropTypes = {
  onSubmit: PropTypes.object.isRequired
}

export default SampleRow;
