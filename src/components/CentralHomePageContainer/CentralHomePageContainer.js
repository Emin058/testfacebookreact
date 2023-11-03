import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import AccountLogo from "../../assets/icons/accountlogo.svg";

import PlusIcon from "../../assets/icons/plusicon.svg";

import LiveVideo from "../../assets/icons/liveVideo.svg";

import TrendYol from "../../assets/icons/trendyol.jpg";
import ThreeDots from "../../assets/icons/threedots.svg";
import CloseIcon from "../../assets/icons/closeIcon.svg";
import Done from "../../assets/icons/done.png";
import Public from "../../assets/icons/public.svg";
import TrendYolImage from "../../assets/images/trendYolImage.jpg";
import LikeIcon from "../../assets/icons/likeIcon.svg";
import Photos from "../../assets/icons/photos.png";
import Feeling from "../../assets/icons/Feeling.png";
import styles from "./CentralHomePageContainer.module.scss";


const CentralHomePageContainer = () => {
  const [inputValue, setInputValue] = useState();
  const [pressPostBtn, setPressPostBtn] = useState([]);
  // const [state,setState]=useState(false)

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  

  const postComment = () => {
    setPressPostBtn(inputValue);

  };
  

  const deleteCommentBtn=()=>{
    setPressPostBtn("")
  }

  return (
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
            onChange={handleChange}
            className={styles.commentInput}
            type="text"
            placeholder="Whats on your mind,Yurd?"
          />
        
        
          <button onClick={postComment} className={styles.postCommentButton}>
            Post
          </button>
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
      <div className={styles.commentPlace}>
        <div >{pressPostBtn}</div>
       <div className={styles.deleteBtn} onClick={deleteCommentBtn}>delete</div>
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
  );
};

export default CentralHomePageContainer;
