import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import firebase from '../firebase/index';

import { ProductsProvider } from '../context/products.jsx';
import { ProductsContext } from '../context/products.jsx';
import ListComponent from './ListComponent';

const ListCategories = styled.ul`
  width: 600px;
  padding: 0;
`;

const TitleCategories = styled.h2`
  font-family: Walsheim;
  font-weight: 500;
  font-size: 26px;
  line-height: 27px;
  text-transform: uppercase;
  color: rgb(18, 18, 18);
  margin: 0px 0px 20px;
`;

const Content = () => {
  const { meals, setMeals } = useContext(ProductsContext);
  const { categories, setCategories } = useContext(ProductsContext);

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db.collection('meal').onSnapshot((snapshot) => {
      const mealsData = [];
      snapshot.forEach((doc) => mealsData.push({ ...doc.data() }));
      setMeals(mealsData);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db.collection('categories').onSnapshot((snapshot) => {
      let categoriesData = {};
      snapshot.forEach((doc) => {
        categoriesData = {
          ...categoriesData,
          [doc.data().id]: [],
        };
        return categoriesData;
      });
      setCategories(categoriesData);
    });
    return unsubscribe;
  }, []);
  return (
    <div>
      {Object.keys(categories).map((category) => (
        <ListCategories key={category}>
          <TitleCategories>{category}</TitleCategories>
          <ListComponent meals={meals} category={category} />
        </ListCategories>
      ))}
    </div>
  );
};
export default () => (
  <ProductsProvider>
    <Content />
  </ProductsProvider>
);
