import React from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

function Notification({ notifyMessage }) {
  return (
    <>
      <p className={s.text}>{notifyMessage}</p>
    </>
  );
}

Notification.propTypes = {
  notifyMessage: PropTypes.string.isRequired,
};

export { Notification };
