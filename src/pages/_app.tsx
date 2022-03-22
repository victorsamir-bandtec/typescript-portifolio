import ThemeContainer from 'contexts/theme/theme';
import '../styles/animations.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  );
}

export default MyApp;
