import React from "react";
import { Link, Outlet } from "react-router-dom";

import styles from "./Home.module.scss";


import LeftHomePageContainer from "../LeftHomePageContainer/LeftHomePageContainer";
import CentralHomePageContainer from "../CentralHomePageContainer/CentralHomePageContainer";
import RightHomePageContainer from "../RightHomePageContainer/RightHomePageContainer";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <LeftHomePageContainer />
      <CentralHomePageContainer />
      <RightHomePageContainer />
    </div>
  );
};

export default Home;
