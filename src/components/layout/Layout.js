import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Account from "../Account/Account";
import FbHome from "../../assets/icons/fbHome.svg";
import FbLogo from "../../assets/icons/fblogo.svg";
import FaceLittleLogo from "../../assets/icons/fbLittleLogo.svg";
import styles from "./Layout.module.scss";
import FriendsLogo from "../../assets/icons/friends.svg";
import TvLogo from "../../assets/icons/tvlogo.svg";
import MarketLogo from "../../assets/icons/market.svg";
import GroupsLogo from "../../assets/icons/groups.svg";
import Menudots from "../../assets/icons/menuDots.svg";
import Messenger from "../../assets/icons/messenger.svg";
import NotificationLogo from "../../assets/icons/notification.svg";
import AccountLogo from "../../assets/icons/account.png";
import SearchIcon from "../../assets/icons/searchIcon.svg";
import Home from "../Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/user";
import axios from "axios";
import Products from "../Products/Products";


const Layout = () => {

  const [products,setProducts]=useState([]);
  const [product,setProduct]=useState(null);
  const [loading,setLoading]=useState(false)
  

  const getProducts = async () => {
    setLoading(true);

    const response = await axios.get("https://fakestoreapi.com/products");

    setProducts(response.data);
    setLoading(false);
  };
  
  const dispatch = useDispatch();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [isAccountVisible, setIsAccountVisible] = useState(false);
  const accountData = useSelector((state) => state.auth.accountData);

  const handleClickAccount = () => {
    setIsAccountVisible(!isAccountVisible);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleChangeInput = (e) => {
    const isCheckhed = e.target.checked;

    setIsDark(isCheckhed);
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  const changeInput = (e) => {
    const { value } = e.target;
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  // const logOut=async()=>{
  //   const response=await axios.post("https://dummyjson.com/auth/login",userData)
  //   if(response){
  //     dispatch(setUserAuth(true))
  //     dispatch(setAccountData(response.data))
  //   }

  //   }

  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.leftHeaderItems}>
          <Link to="/">
            <img className={styles.facebookHeaderLogo} src={FaceLittleLogo} />
          </Link>
          <input
            onChange={changeInput}
            className={styles.input}
            type="text"
            placeholder="Search Facebook"
          />
          <img
            onClick={getProducts}
            className={styles.searchicon} 
            src={SearchIcon}
          /><Link to="/products">Products</Link>
         
        </div>
        <div className={styles.centerHeaderLinks}>
          <div>
            <Link to="/">
              <img className={styles.layoutLinks} src={FbHome} />
            </Link>
          </div>
          <div>
            <Link to="/friends">
              <img className={styles.layoutLinks} src={FriendsLogo} />
            </Link>
          </div>
          <div>
            <Link to="/watch">
              <img className={styles.layoutLinks} src={TvLogo} />
            </Link>
          </div>
          <div>
            <Link to="/marketplace">
              <img className={styles.layoutLinks} src={MarketLogo} />
            </Link>
          </div>
          <div>
            <Link to="/groups">
              <img className={styles.layoutLinks} src={GroupsLogo} />
            </Link>
          </div>
        </div>
        {/* <button onClick={toggleDarkMode} >
          {isDarkMode ?  "Light" : "Dark"}
        </button> */}
        {/* <label className={styles.switch}>
          <input type="checkbox" onChange={handleChangeInput} value={isDark} />
          <div className={styles.slider}></div>
        </label> */}
        <div className={styles.rightHeaderItems}>
          <img src={Menudots} />
          <img src={Messenger} />
          <img src={NotificationLogo} />
          <img
            className={styles.accountlogo}
            src={AccountLogo}
            onClick={handleClickAccount}
          />
        </div>
        {isAccountVisible ? <Account /> : null}
      </div>

      <Outlet />
    </div>
  );
};

export default Layout;
