import React from "react";

export default function SocietyGallery({ title }) {
  const inno = [
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092350/inno/315849203_683489313339629_2455763644366460721_n_t2obny.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092349/inno/315893045_684062899948937_4952886203097984759_n_lpuljp.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092348/inno/315878086_683465460008681_470484218572244043_n_eq93jn.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092348/inno/315892003_683487873339773_5476925140535560374_n_p48sqz.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092348/inno/315867882_683464376675456_8471421737752891778_n_zhw7iu.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092348/inno/315801668_683489146672979_2852974555673267155_n_padzos.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092348/inno/315884629_683464330008794_4896556460539060665_n_ysmt7x.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092347/inno/315879786_683463880008839_4024956436501787584_n_wllnat.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092347/inno/315847461_683464590008768_2361462879507187579_n_y9b5kj.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092347/inno/315856740_683464423342118_2041003024396756765_n_dyzkhj.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092347/inno/315747183_683464956675398_4736293116591988190_n_qk86ik.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092346/inno/315722437_683465106675383_1328129438635095592_n_piyuw8.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092346/inno/315704007_683465366675357_7782592060108530717_n_xjo9n7.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092346/inno/315747918_683488930006334_826626599753314158_n_i6et9a.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092346/inno/315769370_683466470008580_4666538054288297478_n_ldjs0n.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092344/inno/315713213_683488583339702_4597395922957893521_n_k7qo2t.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092344/inno/315747901_683489176672976_2672627294657136511_n_oyjzwv.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092344/inno/315710854_683465026675391_2116365766081638407_n_kjrqeu.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092343/inno/315637702_681033130251914_8403199372963416692_n_zebmoe.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092343/inno/315713213_683488583339702_4597395922957893521_n_1_fjrhgp.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092343/inno/315530784_681033173585243_6451922980167457976_n_skwxsz.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092342/inno/315525679_681032923585268_8051031146013522430_n_slzmks.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092342/inno/315696878_683488323339728_2316976895124832065_n_z8zmbw.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092341/inno/315614924_681033376918556_1291301528899642548_n_s7ibzn.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092341/inno/315535613_681033440251883_2440261906752101605_n_fgmxfn.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092341/inno/315313202_681032976918596_6399088559737977666_n_bfmyhh.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092340/inno/315332868_681033183585242_6499822283628480337_n_be1dra.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092340/inno/315535985_681033286918565_7721410103510344539_n_qwmkkr.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092340/inno/315472751_681033226918571_2743477781909159460_n_tri1mo.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092340/inno/315456076_681033066918587_3149755097159515307_n_nrelbm.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092339/inno/315446813_681033960251831_8321392885205706925_n_i5vupv.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092339/inno/315423395_681186676903226_7784268543788087473_n_otjdim.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092339/inno/75456942_2569960329749296_8399239259533344768_n_kvnxfl.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092339/inno/76751625_2569980353080627_1796883148345180160_n_kp5kff.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092338/inno/76762535_2574362015975794_8206879433965961216_n_lhtqte.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092338/inno/315439427_681033600251867_2004407477607323437_n_phltx6.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092338/inno/75534262_2574363752642287_3561131859570065408_n_nhiach.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092337/inno/75362282_2574113392667323_8164834560291373056_n_cfcspe.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092337/inno/75204496_2569962683082394_931077639085490176_n_fj6kpz.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092337/inno/75210691_2574366819308647_4498087870069735424_n_i0obin.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092337/inno/74680816_2569965773082085_3066309201383915520_n_hzqqjb.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092337/inno/75199770_2569959319749397_9170295453781065728_n_kf3nib.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092337/inno/74601223_2574361862642476_2683581586145804288_n_scgjxw.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092336/inno/74664562_2574441509301178_4125504413533995008_n_aqmnir.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092336/inno/74634348_2574362862642376_4931949845515599872_n_hsqgwi.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092336/inno/74614908_2574113759333953_2974278068094369792_n_sowlub.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092336/inno/74270605_2574114136000582_5384436122006847488_n_kcwgie.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092336/inno/74604689_2574443755967620_1852697704350613504_n_deuega.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092335/inno/73357413_2574366542642008_2705553393291624448_n_bid1un.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092335/inno/74532297_2574363322642330_1715358248090992640_n_vnalww.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092335/inno/74214515_2574362329309096_1284408994911223808_n_kqk3o8.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092335/inno/74286308_2574444569300872_6333703518821548032_n_nb3bbz.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092335/inno/73495213_2574363189309010_5035485486794145792_n_c2ekpz.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092334/inno/74186175_2569998826412113_5964516457998974976_n_ydwswu.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092334/inno/73230965_2574113879333941_5643529976893407232_n_upzczf.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092334/inno/73381337_2569971523081510_8962361368128782336_n_kehrel.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092334/inno/315988862_683489316672962_5572372265055268088_n_tmyajv.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092334/inno/73180604_2574118706000125_2134480058985742336_n_q9s9bf.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092334/inno/315997594_683465303342030_2756994823352633936_n_k9fser.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092333/inno/73133588_2574362759309053_3744700862040113152_n_olg6jf.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092333/inno/315896692_683465240008703_8992531063539606244_n_xsfrnp.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092332/inno/315944218_683464990008728_7033049455942325088_n_fwrvuo.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092332/inno/315911803_683489420006285_2204050442118049139_n_l6rbmk.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092332/inno/315966806_683464320008795_7309551145883022776_n_fmjo0o.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092331/inno/72725049_2570007463077916_5305365224331673600_n_a0ioue.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092331/inno/315944295_683489136672980_8046188745263207622_n_acqity.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092331/inno/69616856_2574112922667370_1246353961171025920_n_axcnkn.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679092331/inno/315921403_683466393341921_4667261583069703179_n_ntb1hv.jpg",
      },
    ],
  ];

  const vriddhi = [
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091167/vriddhi/313422798_672173934471167_5353053668397946669_n_lhwmhi.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091166/vriddhi/313418078_672175431137684_5900774485456394325_n_rwqxgg.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091165/vriddhi/313411703_672174914471069_6302380422973422220_n_f5yfls.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091165/vriddhi/313424111_672175257804368_7881532493826153972_n_wccdhs.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091158/vriddhi/312102125_672171641138063_5309344069083887058_n_tw1def.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091164/vriddhi/313408142_672173191137908_179030676535292571_n_ubcjzt.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091164/vriddhi/313399530_672174211137806_2473869583321684998_n_to56ov.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091163/vriddhi/313403193_672174527804441_7274455991694940856_n_e3hchw.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091163/vriddhi/313424794_672171791138048_6886697182539795023_n_bmwghs.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091163/vriddhi/313403088_672171731138054_9042922834694879676_n_q7kkvf.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091163/vriddhi/313289110_672174317804462_6795470829156283861_n_zmsou3.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091162/vriddhi/313197698_672174074471153_4378366643355888254_n_fjkne8.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091162/vriddhi/313401932_672173041137923_522549174449123500_n_b3npgw.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091162/vriddhi/313024386_672173421137885_7136640522933722263_n_jmmngp.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091161/vriddhi/312602213_672171984471362_4281868766757993968_n_xchzw4.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091161/vriddhi/312854926_672175327804361_2878057346240350250_n_rusige.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091161/vriddhi/312584579_672171814471379_7322028413057662395_n_nkbysf.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091160/vriddhi/312973198_672172581137969_4507714073766461437_n_yhk8y6.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091160/vriddhi/312732078_672174011137826_5531301563542471114_n_iuddbe.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091159/vriddhi/312450734_672173554471205_6054888641551007980_n_j2x34i.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091159/vriddhi/312246343_672173147804579_6451606475779725250_n_ep8tn5.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091159/vriddhi/312718058_672172674471293_1696850733940554492_n_vrgkij.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091165/vriddhi/313400229_672172837804610_3151279488061510126_n_oy6ofz.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679091157/vriddhi/312662629_672174694471091_7171453292840865027_n_j5blxv.jpg",
      },
    ],
  ];

  const nitrutsav = [
    {
      img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679081974/Gallery%20SAC%20Website/313400661_672172031138024_2560228180936505800_n_cuttgz.jpg",
    },
  ];

  const cosmo = [
    {
      img: "",
    },
  ];

  let data1 = inno;

  if (title === "Technical Society") {
    title = "Innovision";
    data1 = inno;
  } else if (title === "Film and Music Society") {
    title = "Cosmo";
    data1 = cosmo;
  } else if (title === "Literary and Cultural Society") {
    title = "Nitrutsav";
    data1 = nitrutsav;
  } else if (title === "Games and Sports Society") {
    title = "Vriddhi";
    data1 = vriddhi;
  } else {
    title = "none";
    data1 = vriddhi;
  }

  // let apple = [
  //   {
  //     name: "apple",
  //   },
  //   {
  //     name: "mango",
  //   },
  // ];

  // const Users = [
  //   [
  //     {
  //       name: "Deepak",
  //       rollNo: "123",
  //     },
  //     {
  //       name: "Yash",
  //       rollNo: "124",
  //     },
  //     {
  //       name: "Raj",
  //       rollNo: "125",
  //     },
  //     {
  //       name: "Rohan",
  //       rollNo: "126",
  //     },
  //     {
  //       name: "Puneet",
  //       rollNo: "127",
  //     },
  //     {
  //       name: "Vivek",
  //       rollNo: "128",
  //     },
  //     {
  //       name: "Aman",
  //       rollNo: "129",
  //     },
  //   ],
  // ];

  return (
    <>
      <div className="s-gallery-container">
        <div className="society-name">
          <h1 className="s-name">{title}</h1>
        </div>
        <div className="society-gallery-container">
          <div className="container">
            <div className=" box">
              {/* <div className=" w-20 h-20 bg-yellow-300 m-5">
                {Users[0].map((e) => {
                  return (
                    <p>
                      {" "}
                      name={e.name} rollNo={e.rollNo}{" "}
                    </p>
                  );
                })}
              </div> */}
              {/* Section 1 */}
              <div className="dream">
                {data1[0].map((e) => {
                  return <img src={e.img} alt="" />;
                  // <p>apple</p>;
                  // <img src={data.img} alt="" />;
                })}
              </div>

              {/* Section 2 */}
              <div className="dream ">
                {data1[1].map((e) => {
                  return <img src={e.img} alt="" />;
                })}
              </div>

              {/* Section 3 */}
              <div className="dream ">
                {data1[2].map((e) => {
                  return <img src={e.img} alt="" />;
                })}
              </div>

              {/* Section 4 */}
              <div className="dream ">
                {data1[3].map((e) => {
                  return <img src={e.img} alt="" />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="end-line"></div>
      </div>
    </>
  );
}
