import { FC } from 'react';
import Helmet from 'react-helmet';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <Helmet>
        <title>Vision Surf | 视界</title>
      </Helmet>
      <h1>Vision Surf</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};
