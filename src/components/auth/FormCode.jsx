/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from 'styled-components';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

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
const BtnGetCode = styled.h2`
  color: rgb(238, 238, 238);
  box-shadow: none;
  cursor: unset;
  background: rgb(196, 196, 196);
  width: 100%;
  margin-top: 35px;
  font-family: Walsheim;
  text-align: center;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-size: 17px;
  line-height: 19px;
  background: rgb(18, 18, 18);
  border-radius: 40px;
  padding: 16px;
  box-sizing: border-box;
  outline: none;
`;
const PhoneInput = styled(Field)`
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

const FormCode = ({ phoneNumber }) => {
  const phoneRegExp = /^((\+7|7|8)+([0-9]){10})$/gm;
  const schema = yup.object().shape({
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  });

  const onHandleSubmit = (phone) => {
    console.log(phone);
  };

  const renderForm = (handleSubmit) => {
    return (
      <form onSubmit={handleSubmit}>
        <TitleWrapper>
          <Title>ПРОВЕРЯЙТЕ СМСКИ НА</Title>
          <PhoneNumber>&nbsp;{phoneNumber}</PhoneNumber>
        </TitleWrapper>
        <PhoneInput type="phone" name="phone" placeholder="0 0 0 0 0 0" />
        <BtnGetCode type="submit">Скиньте код еще раз</BtnGetCode>
      </form>
    );
  };
  return (
    <Formik
      initialValues={{
        phone: '',
      }}
      validationSchema={() => schema}
      onSubmit={(values, { setFieldError }) => {
        const { phone } = values;
        onHandleSubmit(phone);
      }}
    >
      {({ handleSubmit }) => {
        return renderForm(handleSubmit);
      }}
    </Formik>
  );
};

export default FormCode;
