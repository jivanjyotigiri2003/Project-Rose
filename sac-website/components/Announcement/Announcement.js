import { LazyLoadImage } from "react-lazy-load-image-component";
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
            <div className="grid-cols-3 space-y-2 lg:space-y-0 lg:grid lg:gap-[0.6rem] lg:grid-rows-3 lg:ml-[20%] max-sm:ml-[20%] ml-[25%] lg:mx-0  ">
              <div className="lg:w-full w-[80%] col-span-2 row-span-2 rounded shadow-inner relative group ">
                <div class="fullwrap relative ">
                  <LazyLoadImage
                    src="https://res.cloudinary.com/de2s0mcjo/image/upload/v1697658721/WhatsApp_Image_2023-09-03_at_4.51.08_PM_gspv26.jpg"
                    className="rounded-xl lg:h-[21rem] h-40 object-cover"


                  />
                  <div className="overlay"></div>
                  {/*<div className="fullcap max-md:-my-6">Celebrity Night</div> */}
                </div>
              </div>
              {UpcomingData.map((data) => {
                return (
                  <div className="lg:w-full w-[80%] rounded  relative group">
                    <div class="fullwrap relative">
                      <LazyLoadImage
                        className="rounded-xl shadow-inner h-40 object-cover"
                        src={data.src}
                      />
                      <div className="overlay"></div>
                      {/*<div className="fullcap -my-6 ">Celebrity Night</div> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="lg:w-[30%]  ">
          <div className="text-3xl my-6 font-bold lg:translate-x-6 text-center">
            Timeline
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
