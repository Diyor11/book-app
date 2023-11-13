// @flow 
import React from 'react';
import { HomeWrap } from './home.s';
import {Layout} from '../../components';
import { BookList, Modal, NavigationMenu } from './componenets';
export const Home = (props) => {
  return (
    <HomeWrap>
      <Layout>
        <NavigationMenu />
        <BookList />
        <Modal />
      </Layout>
    </HomeWrap>
  );
};