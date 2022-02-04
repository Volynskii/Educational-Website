import React, {useState} from 'react';
import Login from "./forms/login";
import Register from "./forms/register";
import cx from "classnames";

const AccountForm = ({activeClassName,HandleToggleForm}) => {


    const TabsItems = {
        LOGIN: `Login`,
        REGISTER: `Register`
    };

    const [currentTab, setCurrentTab] = useState(TabsItems.LOGIN);

    const handleTabClick = (tab) => {
        setCurrentTab(tab);
    };

    const getContent = (name) => {
        switch (name) {
            case TabsItems.LOGIN:
                return (
                    <Login/>
                );

            case TabsItems.REGISTER:
                return (
                    <Register/>
                );
            default:
                return null;
        }
    };
    return (
        <>
            <div className={`account-form ${activeClassName}`}>

                <div onClick={HandleToggleForm} id="close-form" className="fas fa-times"/>

                <div className="buttons">
                    {Object.values(TabsItems).map((item,index) => {
                        return (
                            <span key={index} onClick={() => handleTabClick(item)}
                                  className={cx(`btn  login-btn`, {
                                      [`active`]: currentTab === item})}>{item}</span>
                        )})}
                </div>
                {getContent(currentTab)}
            </div>
            </>
    );
};

export default AccountForm;
