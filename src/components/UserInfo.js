import { useEffect, useContext } from "react";
import { UserOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import { StoreContext } from "../store"

export default function UserInfo(props) {

   const { state: { userSignIn : { userInfo, remember } } } = useContext(StoreContext);
   const history = useHistory();

   const goToProfile = () => {
      history.push("/login?redirect=profile");
   };

   useEffect(() => {
      if(remember)
         localStorage.setItem("userInfo", JSON.stringify(userInfo));
      else
       localStorage.removeItem("userInfo");
   }, [userInfo, remember]);

   return (
      <>
         <nav onClick={goToProfile} style={{ ...props.style }} className="header__user-info" >
            {userInfo
               ? <UserOutlined style={{ fontSize: '32px', color: '#1d8796' }} />
               : <UserSwitchOutlined style={{ fontSize: '32px', color: '#4d7072' }} />

            }
            <p className="header__user-info-text">
               {userInfo
                  ? `${userInfo.displayName}'s`
                  : `登入`
               }
            </p>
         </nav>
      </>
   );
}
