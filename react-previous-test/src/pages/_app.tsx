import { Global, CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { Layout } from '@layouts/index';
import globalStyles from '@styles/global';
import theme from '@styles/theme';
import lightTheme from '@styles/theme/lightTheme';
import createEmotionCache from '@utils/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, pageProps }: AppProps) => {
  const emotionCache = clientSideEmotionCache;

  return (
    <CacheProvider value={emotionCache}>
      {/* TODO: theme에 있는 파일 mui lightTheme에 합칠 것 */}
      <ThemeProvider theme={lightTheme}>
        <Global styles={globalStyles} />
        <CssBaseline />
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </ThemeProvider>
    </CacheProvider>
  );
};
export default App;
