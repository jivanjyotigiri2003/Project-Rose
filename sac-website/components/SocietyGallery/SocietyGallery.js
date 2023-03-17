import React from "react";

export default function SocietyGallery({ title }) {
  

const inno=[
    {
       img:""
    },
    {
       img:""
    },


    
  ]
  const vriddhi=[
    {
      img:""
    },
  ]
   const nitrutsav=[
    {
      img:""
    }
  ]
   const cosmo=[
    {
      img:""
    }
  ]

  let data=inno;



  if (title=="Technical Society"){
    title="Innovision"
    data=inno;
  }else if(title=="Film and Music Society"){
    title="Cosmo"
    data=cosmo
  } else if(title=="Literary and Cultural Society"){
    title="Nitrutsav"
    data=nitrutsav
  } else if(title="Games and Sports Society"){
    title="Vriddhi"
    data=vriddhi
  }
  
  
  
  return (
    <>
      <div className="s-gallery-container">
        <div className="society-name">
          <h1 className="s-name">{title}</h1>
        </div>
        <div className="society-gallery-container">
          <div className="container">
            <div className="box">
              <div className="dream">
                <img
                  src={data.img}
                  alt=""
                />
                <img
                  src={data.img}
                                    alt=""
                />
                <img
                 src={data.img}
                />
                <img
                  src="https://images.unsplash.com/photo-1677529458529-2bf0e643214d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
                <img
                  src="https://plus.unsplash.com/premium_photo-1663100049063-30f539fd4ba1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1504704911898-68304a7d2807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
              </div>

              <div className="dream">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661716057749-ff55532be02d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1677665248618-0425412a4cd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1677529460256-db11fd8feeff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1677461517419-221eb098ea99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1610659606489-77967e40fa35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1551883709-2516220df0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
              </div>

              <div className="dream">
                <img
                  src="https://images.unsplash.com/photo-1677658992057-d90f001e02f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1677461404787-2d295bb224e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1677688013109-61dda1cfc53f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1677690092396-e1efd8a3bc01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
                <img
                  src="https://plus.unsplash.com/premium_photo-1661716057749-ff55532be02d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1572575156811-2ae050d748d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
              </div>

              <div className="dream">
                <img
                  src="https://images.unsplash.com/photo-1677613935629-5de03180c113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1677665248618-0425412a4cd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1677529460256-db11fd8feeff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1677461517419-221eb098ea99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1598387993240-44b625d97d7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1551883738-19ffa3dc4c43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="end-line"></div>
      </div>
    </>
  );
}
