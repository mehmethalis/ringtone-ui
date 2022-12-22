import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { userVerifyToken } from "./actions/user.actions";

export default function StoreWrapper({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { isLogin } = useSelector((state) => state.userState);

  useEffect(() => {
    const checkUser = async () => {
      const session = await window.localStorage.getItem("session");
      if (session) {
        const { userId } = JSON.parse(session);
        if (userId) {
          await dispatch(userVerifyToken());
          setLoading(false);
          if (location.pathname === "/auth/signin") {
            return navigate("/");
          }
        }
      } else {
        setLoading(false);
        if (location.pathname !== "/auth/signin") {
          return navigate("/auth/signin");
        }
      }
    };
    setLoading(false)
    // checkUser();
  }, [location.pathname, isLogin, dispatch, navigate]);

  return loading ? <></> : <>{children}</>;
}
