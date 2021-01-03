import React from 'react';
import { Affix, Menu, Anchor } from 'antd';

import './Header.less';

const { Link } = Anchor;
const Header = () => (
  <div className="Header" id="home">
    <Affix className="full-wdith">
      <Anchor>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <Link href="#home" title="Home" />
          </Menu.Item>
          <Menu.Item key="about">
            <Link href="#about" title="About" />
          </Menu.Item>
          <Menu.Item key="resume">
            <Link href="#resume" title="Resume" />
          </Menu.Item>
          <Menu.Item key="portfolio">
            <Link href="#portfolio" title="Portfolio" />
          </Menu.Item>
        </Menu>
      </Anchor>
    </Affix>

  </div>
);

export default Header;
