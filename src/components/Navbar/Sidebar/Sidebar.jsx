import React from "react";
import styles from './Sidebar.module.css';
import Friend from "./Friend/Friend";

const Sidebar = (props) => {

    let friends = props.sidebar.map(f => <Friend name ={f.name} />)


    return (
        <div className={styles.sideBar_wrapper}>
            <div>My friends</div>
                <div className={styles.friendsAva}>
                    {friends}
                </div>
        </div>
    )
};


export default Sidebar;