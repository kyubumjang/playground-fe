import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { Header } from '@components/Header';
import { useAxiosInterceptor } from '@hooks/useAxiosInterceptor';
import { LayoutWrapper, Main, WelcomeWrapper } from '@styles/common';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true);
  useAxiosInterceptor();

  if (router.asPath === '/') {
    return <WelcomeWrapper>{children}</WelcomeWrapper>;
  }

  return (
    <LayoutWrapper>
      <Header />
      <Main>{children}</Main>
      {/* <Footer /> */}
    </LayoutWrapper>
  );
};

export default Layout;
