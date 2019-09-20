import React from 'react';
import { Link } from 'react-router-dom';

import AnyCorp from './logos/AnyCorp';

const HomeIcon = () => (
  <Link className="ac-link--home" to="/">
    <AnyCorp />
  </Link>
);

export default HomeIcon;
