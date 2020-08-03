import React from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../context/global';

import FormPhone from './FormPhone';
import FormCode from './FormCode';

const Wrapper = styled.div`
  width: 600px;
  margin-top: 36px;
`;

const Login = () => {
  const { isOpenFormPhone, phoneNumber, toggleAuthForm, setAuth } = React.useContext(
    GlobalContext
  );

  const renderForm = () => {
    return isOpenFormPhone ? (
      <FormPhone toggleAuthForm={toggleAuthForm} />
    ) : (
        <FormCode phoneNumber={phoneNumber} setAuth={setAuth}/>
    );
  };

  return <Wrapper>{renderForm()}</Wrapper>;
};
export default Login;
