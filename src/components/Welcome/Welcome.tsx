import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@assets/svg/playground_logo.svg';
import { Anchor, InnerWrapper } from '@styles/common';

import * as S from './Welcome.styles';

const Welcome = () => (
  <S.Container>
    <InnerWrapper
      flexDirection='column'
      alignItems='center'
    >
      <Image
        width='200px'
        height='200px'
        alt=''
        src={logo}
      />
      <Typography>놀이터에 오신 것을 환영해요</Typography>
      <Typography>
        제가 흥미를 가지는 것들에 대해 정리한 공간입니다. <br /> 보시고 궁금한게 있다면 아래 이메일로 연락주세요!
      </Typography>
    </InnerWrapper>
    <S.ButtonWrapper>
      <Link
        href='/home'
        passHref
      >
        <Anchor>
          <Button variant='contained'>보러가기</Button>
        </Anchor>
      </Link>
    </S.ButtonWrapper>
  </S.Container>
);

export default Welcome;
