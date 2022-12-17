import { library } from '@fortawesome/fontawesome-svg-core';
import { faListUl, faBorderAll, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
library.add(faListUl, faBorderAll, faLinkedin, faGithubSquare, faEnvelopeSquare)
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/nord.css';
import 'styles/globals.css';
import 'styles/index.scss';
import 'katex/dist/katex.min.css';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp;
