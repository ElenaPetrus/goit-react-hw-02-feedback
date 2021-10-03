/* eslint-disable no-unused-vars */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <div className={s.btnConteiner}>
      <button
        key={option}
        className={s.btn}
        type="button"
        onClick={event => onLeaveFeedback(event)}
      >
        {option}
      </button>
    </div>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export { FeedbackOptions };
