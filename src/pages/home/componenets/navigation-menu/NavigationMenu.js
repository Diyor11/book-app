// @flow 
import React from 'react';
import { MenuForm, MenuInput, NavigationMenuWrap, NavigationTitle, SaveButton } from './navigation-menu.s';
import { Space } from 'antd';
import { useDispatch } from 'react-redux';
import { setSearchText, toggleMenu } from '../../../../store/slice/appSlice';

export const NavigationMenu = (props) => {
  const dispatch = useDispatch()

  const showModal = () => {
    dispatch(toggleMenu(true));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = e.target[0].value

    dispatch(setSearchText(val))
  }

  return (
    <NavigationMenuWrap>
      <NavigationTitle>
        You’ve got <span>7 book  </span>
      </NavigationTitle>
      <Space>
        <MenuForm onSubmit={handleSubmit}>
          <MenuInput placeholder="Enter name" />
          <SaveButton onClick={showModal}>+{" "}Create Book</SaveButton>
        </MenuForm>
      </Space>
    </NavigationMenuWrap>
  );
};