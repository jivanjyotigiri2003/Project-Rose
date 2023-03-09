import React,{ useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import FestCarousel from './FestCarousel';

import data from './data';
const Carousel4=() =>{
    const [carousel,setCarousel]=useState(data)
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        disableSwipeByMouse={false}	
        autoplay={true}
        itemsToScroll={1}
        disableSwipeByTouch={false}
        itemsToShow={1}
        autoplayDelay={4000}
        delay={0}
        
        // forwardBtnProps={{
        //   //here you can also pass className, or any other button element attributes
        //   style: {
        //     alignSelf: 'center',
        //     background: 'black',
        //     border: 'none',
        //     borderRadius: '50%',
        //     color: 'white',
        //     cursor: 'pointer',
        //     fontSize: '20px',
        //     height: 30,
        //     lineHeight: 1,
        //     textAlign: 'center',
        //     width: 30,
        //   },
        //   children: <span>{`>`}</span>,
        // }}
        // backwardBtnProps={{
        //   //here you can also pass className, or any other button element attributes
        //   style: {
            
        //     alignSelf: 'center',
        //     background: 'black',
        //     border: 'none',
        //     borderRadius: '50%',
        //     color: 'white',
        //     cursor: 'pointer',
        //     fontSize: '20px',
        //     height: 30,
        //     lineHeight: 1,
        //     textAlign: 'center',
        //     width: 30,
            
        //   },
        //   children: <span>{`<`}</span>,
        // }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={600}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {carousel.map((data)=>{
          return(
            <div>
               <FestCarousel
            key={data.id}
            name={data.name}
            desc={data.desc}
            category={data.category}
            link={data.link}
            img={data.img}
            />
            </div>        
          )
        })}    
        
      </ReactSimplyCarousel>
    </div>
  );
}

export default Carousel4;