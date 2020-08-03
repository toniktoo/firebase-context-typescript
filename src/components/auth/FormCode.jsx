/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import firebase from '../../firebase/index';

import { routes } from '../../constants/routes';

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Walsheim;
  font-weight: 500;
  font-style: normal;
  font-size: 26px;
  line-height: 29px;
  text-transform: uppercase;
  color: rgb(18, 18, 18);
  margin: 0px;
`;
const PhoneNumber = styled.h2`
  color: rgb(215, 87, 69);
  font-family: Walsheim;
  font-weight: 500;
  font-style: normal;
  font-size: 26px;
  line-height: 29px;
  text-transform: uppercase;
  font-weight: 700;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BtnGetCodeRepeat = styled.button`
  border: none;
  background: none;
  font-family: Walsheim;
  font-size: 17px;
  line-height: 17px;
  cursor: pointer;
  padding: 0;
  color: rgb(17, 17, 17);
  margin: 20px 0px 0px 0px;
  outline: none;
`;
const CodeInput = styled.input`
  width: 100%;
  font-family: Walsheim;
  font-weight: 500;
  font-size: 30px;
  line-height: 34px;
  color: rgb(18, 18, 18);
  padding: 0px 0px 7px;
  outline: none;
  border-style: none none solid;
  border-image: initial;
  border-bottom: 2px solid rgb(238, 238, 238);
  border-radius: 0px;
`;

const FormCode = ({ phoneNumber, setAuth }) => {
  const [authCode, setAuthCode] = useState(null);
  const [codeValue, setCodeValue] = useState('');
  const history = useHistory();

  useEffect(() => {
    const sendCodeFirebase = async () => {
      await setUpRecaptcha();
      await onSignInSubmitPhone(phoneNumber);
    };
    sendCodeFirebase();
  }, []);

  useEffect(() => {
    if (codeValue.length === 6) {
      onSendCodeSubmit(String(codeValue));
    }
  }, [codeValue]);

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'recaptcha-conteiner',
      {
        size: 'invisible',
        callback: function (response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
        },
      }
    );
  };

  const onSendCodeSubmit = async (code) => {
    try {
      const res = await authCode.confirm(code);
      console.log(res.user);
      setAuth(true);
      history.push(routes.home);
    } catch (err) {
      alert('Не правильный код. Попробуйте еще раз');
      console.log(`Code error ${err}`);
    }
  };

  const onSignInSubmitPhone = async (phoneNumber) => {
    try {
      if (phoneNumber[0] === '8' || phoneNumber[0] === '7') {
        phoneNumber = '+7' + phoneNumber.slice(1);
      }
      const appVerifier = await window.recaptchaVerifier;
      const auth = await firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier);
      window.confirmationResult = await auth;
      setAuthCode(await auth);
    } catch (err) {
      console.log(`Error phone ${err}`);
    }
  };

  return (
    <form>
      <div id="recaptcha-conteiner"></div>
      <TitleWrapper>
        <Title>ПРОВЕРЯЙТЕ СМСКИ НА</Title>
        <PhoneNumber>&nbsp;{phoneNumber}</PhoneNumber>
      </TitleWrapper>
      <CodeInput
        type="code"
        name="code"
        placeholder="0 0 0 0 0 0"
        onChange={(ev) => setCodeValue(ev.target.value)}
      />
      <BtnGetCodeRepeat>Скиньте код еще раз</BtnGetCodeRepeat>
    </form>
  );
};

export default FormCode;
