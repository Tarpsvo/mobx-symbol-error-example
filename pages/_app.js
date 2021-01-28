import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import GlobalContextProvider from 'global-context';

const App = ({ Component, pageProps }) => (
  <GlobalContextProvider>
    <Component {...pageProps} />
  </GlobalContextProvider>
);

App.propTypes = {};

export default observer(App);
