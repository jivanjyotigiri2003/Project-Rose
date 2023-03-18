import EventsData from "./EventsData";
import UpcomingData from "./UpcomingData";
import { Fade } from "react-awesome-reveal";

export default function Announcement() {
  return (
    <Fade direction="up" triggerOnce="true" delay="50">
      <div className="lg:flex lg:space-x-8 justify-around my-4">
        <div className="lg:w-[60%]">
          <div className="text-3xl lg:ml-3 my-6 font-bold text-center">
            Upcoming Events
          </div>
          <div>
            <div className="grid-cols-3 space-y-2 lg:space-y-0 lg:grid lg:gap-[0.4rem] lg:grid-rows-3 ml-[20%] lg:mx-0  ">
              <div className="lg:w-full w-[80%] col-span-2 row-span-2 rounded shadow-inner relative group ">
                <div class="fullwrap relative">
                  <img
                    className="rounded-xl "
                    src="https://res.cloudinary.com/webwiznitr/image/upload/v1679092337/inno/75210691_2574366819308647_4498087870069735424_n_i0obin.jpg"
                  />
                  <div className="overlay"></div>
                  <div className="fullcap">Celebrity Night</div>
                </div>
              </div>
              {UpcomingData.map((data) => {
                return (
                  <div className="lg:w-full w-[80%] rounded shadow-inner relative  group">
                    <div class="fullwrap relative">
                      <img
                        className="rounded-xl "
                        src="https://res.cloudinary.com/webwiznitr/image/upload/v1679092337/inno/74680816_2569965773082085_3066309201383915520_n_hzqqjb.jpg"
                      />
                      <div className="overlay"></div>
                      <div className="fullcap">Celebrity Night</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="lg:w-[30%]  ">
          <div className="text-3xl my-6 font-bold lg:translate-x-6 text-center">
            Announcement
          </div>
          <div className="mx-2 text-white">
            {EventsData.map((data) => {
              return (
                <div className="lg:flex">
                  <div className="w-0.5 mx-8 bg-gray-400"></div>
                  <div className="bg-[#e5383b] col-start-4 col-end-12 p-4 rounded-xl my-2 shadow-md lg:w-96 ">
                    <div className="font-semibold text-lg mb-1">
                      {data.event}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
