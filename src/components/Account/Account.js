import React from 'react';
import styles from "./Account.module.scss"
import {useDispatch, useSelector} from 'react-redux';
import {setUserAuth, setAccountData} from "../../redux/actions/auth"

const Account = () => {
    const accountData = useSelector(state => state.auth.accountData)
    const dispatch = useDispatch();

    const handleClickLogOut = () => {
        dispatch(setUserAuth(false));
        dispatch(setAccountData(null))
        localStorage.setItem('token', null);
    }

    return (
        <div className={styles.accDetails}>
            <div>
                <div>username: {accountData?.username}</div>
                <div>email : {accountData?.email}</div>
                <div className={styles.logout} onClick={handleClickLogOut}>Log out</div>
            </div>
        </div>

    );
}

export default Account;
