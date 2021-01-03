import React, { FC } from 'react';
import Typing from 'react-typing-animation';
import './Cover.less';


import {coverText} from './texts';

const Cover: FC = () => (
  <div className="Cover" id="home">
    <Typing speed={100} className="vertical-align-middle">
      <h1 className="vertical-align-middle white-text">
        {coverText.mainTitle}
      </h1>
      <h2 className="vertical-align-middle white-text">
        {coverText.subTtile}
      </h2>
    </Typing>
  </div>
);

export default Cover;
