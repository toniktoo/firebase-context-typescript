import React from 'react';
import styled from 'styled-components';
import { Func } from '@tinkoff/utils/typings/types';
import { Link } from 'react-router-dom';

import { routes } from '../constants/routes';

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(247, 247, 247);
`;
const HeaderContainer = styled.div`
  max-width: 600px;
  width: 100%;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 48px;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px -10px;
`;
const Title = styled(Link)`
  grid-area: 1 / 2 / 2 / 3;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  text-decoration: none;
  color: #000;
`;
const MenuBtnWrapper = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  cursor: pointer;
  display: block;
  justify-self: flex-end;
  padding: 0;
  background: transparent;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MenuImg = styled.img`
  height: 18px;
  z-index: 200;
`;

interface Props {
  setIsOpenProfile: Func;
  isOpenProfile: boolean;
}

const Header = ({ setIsOpenProfile, isOpenProfile }: Props) => {
  return (
    <Wrapper>
      <HeaderContainer>
        <Title to={routes.home} onClick={() => setIsOpenProfile(false)}>
          ГОТОВО
        </Title>
        <MenuBtnWrapper>
          <MenuImg
            onClick={() => setIsOpenProfile(!isOpenProfile)}
            src={
              isOpenProfile
                ? 'https://gotovo.ru/static/media/close-icon.66b4aac9.svg'
                : 'https://gotovo.ru/static/media/menu-icon.8207bef0.svg'
            }
          ></MenuImg>
        </MenuBtnWrapper>
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;
