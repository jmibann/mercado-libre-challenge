import React, { Fragment } from 'react';
import { Outlet } from "react-router-dom";

import Header from "./Header";

interface RootProps {

};

const Root: React.FC<RootProps> = () => {
    return (
      <Fragment>
        <Header />
        <Outlet />
      </Fragment>
    );
};

export default Root;