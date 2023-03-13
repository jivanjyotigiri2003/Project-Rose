import React from "react";
import EventSec from "./EventSec";

import { Main, SecName, event } from "./stylescss";
const MainSec = ({ property, info, clickFun }) => {
  return (
    <Main
      info={info}
      property={property}
      onClick={() => {
        clickFun(info.sec);
      }}
    >
      {!property.eventSec && <SecName>{info.sec}</SecName>}
      {property.eventSec && (
        <EventSec
          event={info.sec}
          individualEvents={property.individualEvents}
        />
      )}
      {!property.eventSec && (
        <SecName style={{ right: "0" }}>{info.sec}</SecName>
      )}
    </Main>
  );
};

export default MainSec;
