import PropTypes from 'prop-types';
import React from 'react';
import BrowserScope from './BrowserScope';

const AuditForm = ({ css, onChangeCss, onSubmit, ...browserScopeProps }) => (
  <form className="audit-form__container" onSubmit={onSubmit}>
    <div className="app__inner">
      <h1 className="app__h1">CSS Auditor</h1>
      <textarea
        autoFocus // eslint-disable-line jsx-a11y/no-autofocus
        className="audit-form__css"
        onChange={onChangeCss}
        placeholder="Paste CSS here to audit..."
        value={css}
      />
      <BrowserScope {...browserScopeProps} />
      <div className="audit-form__btns">
        <button
          type="submit"
          className="app__btn-primary audit-form__submit-btn"
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
