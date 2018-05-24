import React from 'react';
import { Link } from 'react-router';
import Breadcrumbs from './Breadcrumbs';

export default function AppealLayout({ children }) {
  return (
    <div>
      <div className="row">
        <Breadcrumbs>
          <li><Link to="your-claims">Track Your Claims and Appeals</Link></li>
        </Breadcrumbs>
      </div>
      {children}
    </div>
  );
}
