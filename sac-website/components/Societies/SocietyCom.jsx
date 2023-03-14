import React, { useEffect, useState } from "react";
import MainSec from "./MainSec";
import { EventSecn, Logo } from "./stylescss";
// import allEvents from "./event/eventsInfo";
import { useRouter } from "next/router";
import Link from "next/link";

const EventCom = () => {
  const router = useRouter();

  const { event } = router.query;

  const objMain = {
    info: {
      dance: { sec: "Technical", bgColor: "#153C37" },
      music: { sec: "music", bgColor: "#A34744" },
      drama: { sec: "drama", bgColor: "#EDAD38" },
      random: { sec: "random", bgColor: "Black" },
    },
    danceClick: {
      dance: {
        eventSec: true,
        marginLeft: "0",
        bgImgUrl:
          "https://res.cloudinary.com/durga811/image/upload/v1671704891/cosmo%20assets/dance_bg_mwmgjp.png",
      },
      music: {
        marginLeft: "73%",
        marginLeftDesktop: "79%",
      },
      drama: {
        marginLeft: "82%",
        marginLeftDesktop: "86%",
      },
      random: {
        marginLeft: "91%",
        marginLeftDesktop: "93%",
      },
    },
    musicClick: {
      dance: {
        marginLeft: "0",
      },
      music: {
        eventSec: true,
        marginLeft: "9%",
        marginLeftDesktop: "7%",
        bgImgUrl:
          "https://res.cloudinary.com/durga811/image/upload/v1671704891/cosmo%20assets/song_bg_lcdb6c.png",
      },
      drama: {
        marginLeft: "82%",
        marginLeftDesktop: "86%",
      },
      random: {
        marginLeft: "91%",
        marginLeftDesktop: "93%",
      },
    },
    dramaClick: {
      dance: {
        marginLeft: "0",
      },
      music: {
        marginLeft: "9%",
        marginLeftDesktop: "7%",
      },
      drama: {
        eventSec: true,
        marginLeftDesktop: "14%",
        marginLeft: "18%",
        bgImgUrl:
          "https://res.cloudinary.com/durga811/image/upload/v1671704891/cosmo%20assets/drama_bg_oll5m0.png",
      },
      random: {
        marginLeft: "91%",
        marginLeftDesktop: "93%",
      },
    },
    randomClick: {
      dance: {
        marginLeft: "0",
      },
      music: {
        marginLeft: "9%",
        marginLeftDesktop: "7%",
      },
      drama: {
        marginLeft: "18%",
        marginLeftDesktop: "14%",
      },
      random: {
        eventSec: true,
        marginLeftDesktop: "21%",
        marginLeft: "27%",
        bgImgUrl: "",
      },
    },
  };

  const [clickState, setClickState] = useState(objMain.musicClick);

  useEffect(() => {
    if (event) {
      if (event == "dance") setClickState(objMain.danceClick);
      if (event == "music") setClickState(objMain.musicClick);
      if (event == "drama") setClickState(objMain.dramaClick);
      if (event == "random") setClickState(objMain.randomClick);
    }
  }, [event]);

  const clickFun = (para) => {
    if (para == "drama") setClickState(objMain.dramaClick);
    if (para == "music") setClickState(objMain.musicClick);
    if (para == "dance") setClickState(objMain.danceClick);
    if (para == "random") setClickState(objMain.randomClick);
  };
  return (
    <EventSecn>
      <MainSec
        property={clickState.dance}
        info={objMain.info.dance}
        clickFun={clickFun}
        event={event}
      />
      <MainSec
        property={clickState.music}
        info={objMain.info.music}
        clickFun={clickFun}
        event={event}
      />
      <MainSec
        property={clickState.drama}
        info={objMain.info.drama}
        clickFun={clickFun}
        event={event}
      />
      <MainSec
        property={clickState.random}
        info={objMain.info.random}
        clickFun={clickFun}
        event={event}
      />
    </EventSecn>
  );
};

export default EventCom;
