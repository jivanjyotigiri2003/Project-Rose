import React from "react";
import style from "../loading/loading.module.scss";
const Loading = () => {
  return (
    <div className={style.mainbody}>
      <div className={style.figure}>
        <div className={style.loadingstyle}></div>
        <div className={style.loadingstyle}></div>
        <div className={style.loadingstyle}></div>
      </div>
    </div>
  );
};

export default Loading;
