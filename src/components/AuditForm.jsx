import PropTypes from 'prop-types';
import React from 'react';

const AuditForm = ({ css, onChangeCss, onSubmit }) => (
  <form className="aud-form" onSubmit={onSubmit}>
    <div className="inner">
      <h1 className="aud-h1">CSS Auditor</h1>
      <textarea
        autoFocus // eslint-disable-line jsx-a11y/no-autofocus
        className="aud-textarea"
        onChange={onChangeCss}
        placeholder="Paste CSS here to audit..."
        value={css}
      />
      <div>
        <button
          type="submit"
          className="aud-btn-primary submit-btn"
        >
          Audit
        </button>
      </div>
    </div>
  </form>
);

AuditForm.propTypes = {
  css: PropTypes.string.isRequired,
  onChangeCss: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AuditForm;
