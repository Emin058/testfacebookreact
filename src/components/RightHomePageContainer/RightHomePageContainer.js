import React from 'react';
import { Link, Outlet } from "react-router-dom";
import styles from "./RightHomePageContainer.module.scss"
import PlusIcon from "../../assets/icons/plusicon.svg";

import SponsoredPhoto from "../../assets/images/sponsoredPhoto.png";
import SponsoredSecondPhoto from "../../assets/images/sponsoredImage2.png";

const RightHomePageContainer = () => {
  return (
    <div className={styles.rightHomeContainer}>
        <div className={styles.rightTopSponsored}>Sponsored</div>
        <div className={styles.rightFirstSponsored}>
          <Link
            className={styles.sponsoredWebSite}
            to="https://www.shutterstock.com/explore/flex-subscriptions?c3ch=Paid%20Social&c3nid=FBIG-6306080297039-6306080297639-6319570929439&fbclid=IwAR3ocL4lNAJJMTGOfse2FDYY5WdKUCUu_jNBIW7qeYwWXg7JN7jjwhq2umk&utm_campaign=CO%3DGMAPAC_FF%3Dstaticsocial-desktop-FlexGeoHoldout_BU%3DIMG_AB%3DACQ_CH%3DDS_OG%3DCONV_CC%3DFlexGeoHoldout_PB%3DFacebook_RG%3DAPAC_IT%3DPROG_CM%3DCPM_TS%3Dlggeneric_LG%3DEN&utm_content=CC%3DConversions_PD%3DFlex_CN%3DAllInOne_CA%3DSubscribeNow_LG%3DEN_FN%3DBlue-Subscribe_SZ%3D1080x1080&utm_medium=acq_display&utm_source=facebook&utm_term=CC%3DFlexGeoHoldout_FF%3Dflex_PS%3DMultiple_BT%3DML_TS%3Dlggeneric_AU%3DConquesting_AD%3DBAN"
          >
            <img className={styles.sponsoredPhoto} src={SponsoredPhoto}  />
            <div>
              <b>Shutterstock FLEX</b>
              <p>shutterstock.com</p>
            </div>
          </Link>
        </div>
        <div className={styles.rightSecondSponsored}>
          <Link
            className={styles.sponsoredWebSite}
            to="https://uk.babbel.com/pages/en-gb/bau-hd-singleoffer-prospecting?bsc=ps-fb-eng-prospecting-proffers-6plus6-2023&btp=default&fbclid=IwAR1bq2PkQd1MK4ZY4ElRNyDUxqNi7Gs4exKrUNYZfMc503XS9BK-LhLAFKI&utm_campaign=PSFB_2023_TC2_FUNNEL_CONVERSIONS_Prospecting_WEBSITE-PURCHASE_6m_VO%28Smartly%29&utm_content=23855290833810007_23855290834460007_23855290872430007&utm_medium=social&utm_source=facebook&utm_term=Facebook_Right_Column"
          >
            <img className={styles.sponsoredPhoto} src={SponsoredSecondPhoto}  />
            <div>
              <b>Unexplained on Gaia</b>
              <p>gaia.com</p>
            </div>
          </Link>
        </div>
        <hr />
        <div>
          <div> Group conversations</div>
          <div className={styles.createNewGroup}>
            <img className={styles.createIcon} src={PlusIcon} />
            <b>Create new group</b>
          </div>
        </div>
      </div>
  );
}

export default RightHomePageContainer;
