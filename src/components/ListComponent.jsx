import React from 'react';
import styled from 'styled-components';

import Item from './Item.jsx';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const List = styled.ul`
  padding: 0;
  width: 100%;
`;

const ListComponent = ({ meals, category }) => {
  return (
    <Wrapper>
      <Container>
        <List>
          {meals.map((meal) => {
            if (meal.categories.includes(category)) {
              return <Item key={meal.title} meal={meal} />;
            }
            return null;
          })}
        </List>
      </Container>
    </Wrapper>
  );
};

export default ListComponent;

// const onCreate = () => {
//   const db = firebase.firestore();
//   db.collection('spells').add({ name: newSpellName });
// };
