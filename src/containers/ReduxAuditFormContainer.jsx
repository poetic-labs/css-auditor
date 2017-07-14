import { connect } from 'react-redux';
import audit from '../audit';
import setAuditSummary from '../actions/setAuditSummary';
import setCss from '../actions/setCss';
import toggleAllBrowsers from '../actions/toggleAllBrowsers';
import browserVersions from '../browsers/browserVersions';
import getFullBrowserScope from '../browsers/getFullBrowserScope';
import AuditForm from '../components/AuditForm';

const totalBrowserCount = Object.keys(getFullBrowserScope()).length;

const getSelectedBrowserCount = browserScope => (
  Object.keys(browserScope)
    .filter((browser) => {
      const versions = browserScope[browser];

      return Object.keys(versions).some(version => versions[version] === true);
    })
    .length
);

const onSubmit = (dispatch, getState) => {
  const { css, browserScope } = getState();

  try {
    if (css === '') {
      throw new Error('Yo! Where\'s your CSS?');
    }

    if (Object.keys(browserScope).length === 0) {
      throw new Error('Hey! You forgot to select at least one browser');
    }

    const auditSummary = audit(css, browserScope);

    dispatch(setAuditSummary(auditSummary));
  } catch (error) {
    alert(error.message);
  }
};

const mapStateToProps = ({ browserScope, css }) => ({
  browserScope,
  browserVersions,
  css,
  hasSelectedAllBrowsers: getSelectedBrowserCount(browserScope) === totalBrowserCount,
});

const mapDispatchToProps = dispatch => ({
  onChangeCss: event => dispatch(setCss(event.target.value)),

  onSubmit: () => dispatch(onSubmit),

  onToggleAllBrowsers: event => dispatch(toggleAllBrowsers(event.target.checked)),
});

const AuditFormContainer = connect(mapStateToProps, mapDispatchToProps)(AuditForm);

export default AuditFormContainer;
