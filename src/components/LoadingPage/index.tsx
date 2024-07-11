import { FC } from 'react';
import { LoadingWrapper } from './_styles';
import LogoImage from '@assets/images/logo.png';


const LoadingPage: FC = () => {
  return (
    <LoadingWrapper>
        <img src={LogoImage} />
    </LoadingWrapper>
  )
}

export default LoadingPage;
