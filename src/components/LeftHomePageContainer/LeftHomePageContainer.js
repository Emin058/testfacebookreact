import React from 'react';
import styles from "./LeftHomePageContainer.module.scss";
import Friendshiplogo from "../../assets/icons/friendsLogo.svg";
import { Link, Outlet } from "react-router-dom";
import Accountlogo from "../../assets/icons/account.png";
import Memories from "../../assets/icons/memoriestime.png";
import Friendslogo from "../../assets/icons/friendslogo.png";
import Saved from "../../assets/icons/Saved.png";
import Marketplace from "../../assets/icons/Marketplace.png";
import BlueVideoIcon from "../../assets/icons/videoBlueIcon.png";
import AdsManagerIcon from "../../assets/icons/adsmanagericon.png";
import Feeds from "../../assets/icons/Feeds.png";



const LeftHomePageContainer = () => {
  return (
    
      <div className={styles.leftHomeContainer}>
        <div className={styles.homeLeftItems}>
          <img className={styles.Accountlogo} src={Accountlogo} />
          <Link className={styles.leftItemsLinks} to="/profile">
            Yurd Yurdov
          </Link>
        </div>

        <div className={styles.homeLeftItems}>
          <img className={styles.Friendshiplogo} src={Friendslogo} />

          <Link className={styles.leftItemsLinks} to="/friends">
            Find friends
          </Link>
        </div>
        <div className={styles.homeLeftItems}>
          <img className={styles.Friendshiplogo} src={Memories} />
          <Link className={styles.leftItemsLinks} to="/memories">
            Memories
          </Link>
        </div>
        <div className={styles.homeLeftItems}>
          <img className={styles.Friendshiplogo} src={Saved} />
          <Link className={styles.leftItemsLinks} to="/saved">
            Saved
          </Link>
        </div>
        <div className={styles.homeLeftItems}>
          <img className={styles.Friendshiplogo} src={Friendshiplogo} />
          <Link className={styles.leftItemsLinks} to="/groups">
            Groups
          </Link>
        </div>
        <div className={styles.homeLeftItems}>
          <img className={styles.Friendshiplogo} src={Marketplace} />
          <Link className={styles.leftItemsLinks} to="/watch">
            Marketplace
          </Link>
        </div>
        <div className={styles.homeLeftItems}>
          <img className={styles.Friendshiplogo} src={BlueVideoIcon} />
          <Link className={styles.leftItemsLinks} to="/marketplace">
            Video
          </Link>
        </div>
        <div className={styles.homeLeftItems}>
          <img className={styles.Friendshiplogo} src={AdsManagerIcon} />
          <Link className={styles.leftItemsLinks} to="/feeds">
            Ads Manager
          </Link>
        </div>
        <div className={styles.homeLeftItems}>
          <img className={styles.Friendshiplogo} src={Feeds} />
          <Link className={styles.leftItemsLinks} to="/events">
            Feeds
          </Link>
        </div>
      </div>
    
  );
}

export default LeftHomePageContainer;
