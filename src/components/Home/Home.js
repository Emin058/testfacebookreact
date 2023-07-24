import React from "react";
import { Link, Outlet } from "react-router-dom";
import AccountLogo from "../../assets/icons/accountlogo.svg";
import Friendshiplogo from "../../assets/icons/friendsLogo.svg";
import styles from "./Home.module.scss";
import PlusIcon from "../../assets/icons/plusicon.svg";
import CreateStories from "../CreateStories/CreateStories";
import LiveVideo from "../../assets/icons/liveVideo.svg";
import SponsoredPhoto from "../../assets/images/sponsoredPhoto.png";
import SponsoredSecondPhoto from "../../assets/images/sponsoredImage2.png";
import Accountlogo from "../../assets/icons/account.png";
import Memories from "../../assets/icons/memoriestime.png";
import Friendslogo from "../../assets/icons/friendslogo.png";
import Saved from "../../assets/icons/Saved.png";
import Marketplace from "../../assets/icons/Marketplace.png";
import BlueVideoIcon from "../../assets/icons/videoBlueIcon.png";
import AdsManagerIcon from "../../assets/icons/adsmanagericon.png";
import Feeds from "../../assets/icons/Feeds.png";
import TrendYol from "../../assets/icons/trendyol.jpg";
import ThreeDots from "../../assets/icons/threedots.svg";
import CloseIcon from "../../assets/icons/closeIcon.svg";
import Done from "../../assets/icons/done.png";
import Public from "../../assets/icons/public.svg";
import TrendYolImage from "../../assets/images/trendYolImage.jpg";
import LikeIcon from "../../assets/icons/likeIcon.svg";
import Photos from "../../assets/icons/photos.png";
import Feeling from "../../assets/icons/Feeling.png";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
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

      <div className={styles.centerHomeContainer}>
        <div className={styles.topHomeContainer}>
          <Link to="/create/stories" className={styles.storiesLink}>
            <img className={styles.plusIconTopContainer} src={PlusIcon} />
            <div>
              <div className={styles.topOfCenterItem}>Create story</div>
              <div>Share a photo or write something.</div>
            </div>
          </Link>
        </div>

        <div className={styles.secondCenterHomeContainer}>
          <div className={styles.accountComment}>
            <Link to="/profile">
              {" "}
              <img src={AccountLogo} />
            </Link>

            <input
              className={styles.commentInput}
              type="text"
              placeholder="Whats on your mind,Yurd?"
            />
          </div>
          <hr />
          <div className={styles.centralThreeItems}>
            <Link className={styles.liveVideoLink} to="/live">
              <div className={styles.centralThreeIcons}>
                <img className={styles.threeCenteredIcons} src={LiveVideo} />
                <div className={styles.liveVideo}> Live video</div>
              </div>
            </Link>

            <div className={styles.centralThreeIcons}>
              <img className={styles.threeCenteredIcons} src={Photos} />
              <div>Photo/video</div>
            </div>
            <div className={styles.centralThreeIcons}>
              <img className={styles.threeCenteredIcons} src={Feeling} />
              <div>Feeling/activity</div>
            </div>
          </div>
        </div>
        <div className={styles.thirdCenterHomeContainer}>
          <div className={styles.profileWithClosebar}>
            <div className={styles.profileWithImg}>
              <Link to="https://www.facebook.com/TrendyolENG">
                {" "}
                <img className={styles.trendyolimg} src={TrendYol} />
              </Link>
              <div>
                <Link
                  className={styles.profileLink}
                  to="https://www.facebook.com/TrendyolENG"
                >
                  <div className={styles.trendYolAndDoneIcon}>
                    <div className={styles.profileName}>TrendYol </div>
                    <img className={styles.doneIcon} src={Done} />{" "}
                  </div>
                </Link>
                <Link className={styles.underProfileSponsoredLink} to="">
                  <div className={styles.sponsoredAndPublicIcon}>
                    <div>Sponsored</div>
                    <img className={styles.publicIcon} src={Public} />
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <img src={ThreeDots} />
              <img src={CloseIcon} />
            </div>
          </div>
          <div className={styles.discountInfo}>
            İlk alış-verişində 40% endirimi qaçırma! Azərbaycana ilk birbaşa
            sifarişinə özəl<br></br> çatdırılman bizdən, alış-verişə başla!
          </div>
          <img className={styles.trendYolImage} src={TrendYolImage} />
          <div className={styles.advertisementContainer}>
            <Link
              className={styles.advertisementLink}
              to="https://www.trendyol.com/?adjust_t=r7x8wfn_bz3o6ag&adjust_campaign=c%3Aaz_l%3Atr_ch%3Ameta_os%3Aall_obj%3Areach_kpi%3Asession_s%3Amass_st%3Abranding&utm_source=facebook&utm_medium=cpc&utm_campaign=c%3Aaz_l%3Atr_ch%3Ameta_os%3Aall_obj%3Areach_kpi%3Asession_s%3Amass_st%3Abranding&fbclid=IwAR23UoTa_nwAHz_YCZVopVs1ywS2g6l1I54JD6RFMwcsbxci8Gk7ZGl_h7g"
            >
              <div className={styles.advertisementOptions}>
                <div className={styles.advertisementH3}>TRENDYOL.COM</div>
                <div className={styles.advertisementBold}>TRENDYOL</div>
                <div>
                  Shop the latest fashion trends on Trendyol! | Free Shipping |
                  E...
                </div>
              </div>
              <button className={styles.learnBtn}>Learn more</button>
            </Link>
            <hr />
            <div className={styles.likeAndCount}>
              <img className={styles.likeIcon} src={LikeIcon} />
              <div>59</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightHomeContainer}>
        <div className={styles.rightTopSponsored}>Sponsored</div>
        <div className={styles.rightFirstSponsored}>
          <Link
            className={styles.sponsoredWebSite}
            to="https://www.shutterstock.com/explore/flex-subscriptions?c3ch=Paid%20Social&c3nid=FBIG-6306080297039-6306080297639-6319570929439&fbclid=IwAR3ocL4lNAJJMTGOfse2FDYY5WdKUCUu_jNBIW7qeYwWXg7JN7jjwhq2umk&utm_campaign=CO%3DGMAPAC_FF%3Dstaticsocial-desktop-FlexGeoHoldout_BU%3DIMG_AB%3DACQ_CH%3DDS_OG%3DCONV_CC%3DFlexGeoHoldout_PB%3DFacebook_RG%3DAPAC_IT%3DPROG_CM%3DCPM_TS%3Dlggeneric_LG%3DEN&utm_content=CC%3DConversions_PD%3DFlex_CN%3DAllInOne_CA%3DSubscribeNow_LG%3DEN_FN%3DBlue-Subscribe_SZ%3D1080x1080&utm_medium=acq_display&utm_source=facebook&utm_term=CC%3DFlexGeoHoldout_FF%3Dflex_PS%3DMultiple_BT%3DML_TS%3Dlggeneric_AU%3DConquesting_AD%3DBAN"
          >
            <img className={styles.sponsoredPhoto} src={SponsoredPhoto} />
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
            <img className={styles.sponsoredPhoto} src={SponsoredSecondPhoto} />
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
    </div>
  );
};

export default Home;
