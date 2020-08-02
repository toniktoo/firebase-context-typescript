import React from 'react';
import styled from 'styled-components';
import { ReactHover, Trigger, Hover } from 'react-hover';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ImgWrapper = styled.div``;
const Img = styled.img`
  height: 180px;
  width: 180px;
`;
const ContentWrapper = styled.div``;
const Title = styled.h3`
  font-size: 24px;
  font-weight: normal;
`;
const Price = styled.div`
  width: 86px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(196, 196, 196);
  border-color: rgb(196, 196, 196);
  font-family: Walsheim;
  font-size: 19px;
  line-height: 16px;
  white-space: nowrap;
  user-select: none;
  position: relative;
  background: transparent;
  border-radius: 50px;
  border-width: 2px;
  border-style: solid;
  border-image: initial;
  padding: 10px 15px;
  outline: none;
`;

const options = {
  followCursor: true,
  shiftX: 20,
  shiftY: 0,
};

const Item = ({ meal }) => {
  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={meal.image}></Img>
      </ImgWrapper>
      <ContentWrapper>
        <Title>{meal.title}</Title>
        <Price>261 P</Price>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Item;
