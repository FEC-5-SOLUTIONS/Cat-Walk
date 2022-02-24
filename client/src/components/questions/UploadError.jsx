import React from 'react';
import PropTypes from 'prop-types';

export default function UploadError({ err }) {
  return (
    <div>
      {err}
    </div>
  );
}
UploadError.propTypes = {
  err: PropTypes.string.isRequired,
};
