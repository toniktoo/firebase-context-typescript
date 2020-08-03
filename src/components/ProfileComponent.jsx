import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import firebase from '../firebase/index';
import { routes } from '../constants/routes';
import { GlobalContext } from '../context/global';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgb(18, 18, 18);
  z-index: 10;
  display: flex;
  justify-content: center;
`;
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: left;
  width: 100%;
  height: 100px;
  margin-top: 50px;
  padding: 25px 0px;
  background: rgb(217, 86, 64);
`;
const AuthContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 600px;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
`;
const AuthTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AuthArrow = styled.img`
  width: 16px;
`;
const AuthTitle = styled.h2`
  font-family: Walsheim;
  font-weight: normal;
  font-size: 26px;
  line-height: 27px;
  color: rgb(255, 255, 255);
  display: inline-block;
  margin: 0px 10px 5px 0px;
`;
const AuthSubtitle = styled.h4`
  font-family: Walsheim;
  font-size: 17px;
  line-height: 21px;
  color: rgb(239, 184, 175);
  margin: 0px;
`;
const BtnSignOut = styled.button`
  border: none;
  background: none;
  color: #000;
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
`;

const ProfileComponent = () => {
  const history = useHistory();
  const {
    isOpenProfile,
    setIsOpenProfile,
    isAuth,
    setAuth,
    toggleAuthForm,
  } = React.useContext(GlobalContext);

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setAuth(false);
        setIsOpenProfile(false);
        toggleAuthForm({ isOpenFormPhone: true, phoneNumber: null });
        history.push(routes.home);
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  const renderNoAuthUser = () => {
    return (
      <AuthContainer
        to={routes['login']}
        onClick={() => setIsOpenProfile(false)}
      >
        <AuthTitleWrap>
          <AuthTitle>Войти</AuthTitle>
          <AuthArrow src="https://gotovo.ru/static/media/add-phone-arrow.78f0033b.svg"></AuthArrow>
        </AuthTitleWrap>
        <AuthSubtitle>Доступ к своим заказам, адресам и бонусам</AuthSubtitle>
      </AuthContainer>
    );
  };
  const renderAuthUser = () => {
    return (
      <div>
        <BtnSignOut onClick={handleSignOut}>Выйти</BtnSignOut>
      </div>
    );
  };

  const renderProfile = () => {
    return (
      <Wrapper>
        <ProfileContainer>
          {isAuth ? renderAuthUser() : renderNoAuthUser()}
        </ProfileContainer>
      </Wrapper>
    );
  };

  return isOpenProfile ? renderProfile() : null;
};
export default ProfileComponent;
