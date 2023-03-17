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
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094547/cosmo/326801516_2137715769952076_6573928090331001421_n_iqwt7x.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094544/cosmo/326726993_1580746492399532_3659542357123065730_n_obyio3.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094543/cosmo/326739735_602162055070560_2721702902245759038_n_eynypo.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094542/cosmo/326770670_1831279037228881_3574667790777756545_n_effzsz.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094542/cosmo/326769113_1201297820762938_2959971467969655450_n_xzfwj3.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094542/cosmo/326789574_856978982048869_4484573809603125309_n_amj8a3.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094542/cosmo/326746657_1223675218572005_5342527622794320435_n_xdjsca.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094540/cosmo/326729925_1347304419398466_7515177636805732387_n_v4knrx.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094541/cosmo/326663617_455881003280805_1744622815671686395_n_sa1dku.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094540/cosmo/326688969_862533738364033_2157041159826493231_n_f9zmfq.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094540/cosmo/326593599_548722457301112_7021333885746268395_n_ydhhm5.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094539/cosmo/326567724_538390611586517_7792614186201883640_n_hginyj.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094520/cosmo/326250339_732422598312245_6061164052703152239_n_ocowx8.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094519/cosmo/326232441_504634421779082_522532710088932995_n_ujaceh.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094520/cosmo/326269303_896293468173603_697154942974703970_n_qsudue.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094505/cosmo/10631074_719204874824860_3610820194899291912_o_byczcd.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094505/cosmo/941801_544307238981292_967884057_n_mdnowa.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094505/cosmo/1400504_544307952314554_16409990_o_iyqire.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094505/cosmo/12646_544307425647940_2090336337_n_xyaeol.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094539/cosmo/326681609_704262081415351_6880955639836155032_n_renzop.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094538/cosmo/326586771_1946512199013400_8249174499762068308_n_a24gaf.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094537/cosmo/326532969_1273196719904227_8522406070940327044_n_zs4xph.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094536/cosmo/326529293_591298389492841_8122153863078340666_n_qfmrfg.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094538/cosmo/326502368_701916558000183_950391606198679883_n_lgxrtv.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094537/cosmo/326566128_853646972580245_5870302530809331963_n_wjr2lb.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094536/cosmo/326551958_573846414670332_3220177084909985871_n_kkzok8.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094534/cosmo/326505291_566218035141743_8318004181118166838_n_w0y2e3.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094507/cosmo/81829362_2725895184155809_5125368651104387072_n_wv5mzr.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094508/cosmo/46042391_1977935075618494_7534279287600316416_n_pklgec.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094507/cosmo/14882117_1143342889077721_685590207079216243_o_qcp8l8.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094505/cosmo/14876653_1141894189222591_4655026734957743163_o_aqqum2.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094506/cosmo/45973439_1977930038952331_784724107328487424_n_rtpt5e.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094510/cosmo/82087834_2725889197489741_6433965858149629952_n_pmexut.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094508/cosmo/81981011_2730634570348537_8388299750197166080_n_smzzqe.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094507/cosmo/81955381_2725883187490342_3229680037812764672_n_iksj61.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094509/cosmo/82131516_2730644453680882_6996409314667659264_n_drdyxn.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094506/cosmo/46002466_1977927952285873_188821811897565184_n_pllnll.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094534/cosmo/326490759_1330091007843983_3991087101077979600_n_sphvaf.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094531/cosmo/326455338_873887243892776_848400655454152611_n_ixaoo2.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094532/cosmo/326486654_1194250984551022_3800299267019945416_n_e9h1ti.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094533/cosmo/326507790_1165321791021250_2455549064432274565_n_v34itc.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094530/cosmo/326477918_2028238864050903_4783392592172938304_n_pdi1da.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094530/cosmo/326477918_2028238864050903_4783392592172938304_n_pdi1da.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094530/cosmo/326416005_1269632120432027_2762369601528938227_n_fagaj3.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094510/cosmo/82191978_2730644947014166_8246715221276622848_n_smyooz.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094509/cosmo/82071287_2725884917490169_4660738552152195072_n_mgpjk6.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094516/cosmo/325611970_3439601339630581_6512559757941330412_n_bqyzru.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094510/cosmo/82185813_2730640293681298_6995820736644382720_n_lmrztd.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094515/cosmo/323419303_1376115612926984_5537123487566322802_n_v2170g.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094511/cosmo/82002182_2725902450821749_2517884994861400064_n_vleucd.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094511/cosmo/82363003_2730633170348677_2814680253060874240_n_bnvgwb.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094518/cosmo/326223963_736574871227846_8760792837857279823_n_nkc4qu.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094511/cosmo/82550106_2730629590349035_7607416198329794560_n_pfgjhh.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094519/cosmo/326044037_742804423870192_9209480142822654084_n_l2olz7.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094512/cosmo/82912661_2730636203681707_7850717127756480512_n_dlirsg.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094526/cosmo/326365672_693501088924434_3601613321628606036_n_x9h7pg.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094529/cosmo/326405315_537616924999715_3825533483181036787_n_bllecs.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094507/cosmo/46057196_1977931378952197_5279753973568372736_n_tzenww.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094529/cosmo/326357268_1261025218094704_7942987106376326940_n_nr36kk.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094519/cosmo/326231104_1243266316534349_7350961641431276538_n_pfg6tf.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094527/cosmo/326363908_682763500210076_6548920936008751262_n_en08ie.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094526/cosmo/326387003_543489221073770_2396104022161292559_n_s0djkr.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094525/cosmo/326340271_894539271882586_7044149889241158111_n_xundxm.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094523/cosmo/326249313_888600562185648_429698947631548767_n_af4dte.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094523/cosmo/326354504_1297957934387369_6361623270098146158_n_etby3n.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094522/cosmo/326270864_862228068382704_274574866068352384_n_uruuzb.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094521/cosmo/326100359_521093463470075_2946804321443614666_n_n0fno2.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094521/cosmo/323712282_865021294781456_4675619626252051756_n_vrh60e.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094514/cosmo/83162421_2730648087013852_6291790728276213760_n_trbsp0.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094514/cosmo/83162421_2730648087013852_6291790728276213760_n_trbsp0.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094514/cosmo/323774420_717332726582006_6869407075916194237_n_wf3ee1.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094515/cosmo/325419865_1218097105459962_8737154895870162119_n_jqp4lz.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094513/cosmo/323586630_964358334540662_3822545216048411725_n_prhias.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094515/cosmo/325613307_579356663563853_8627409365322328678_n_ys5tlz.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679094517/cosmo/325932631_855885912363828_5331445811585354785_n_jr0l18.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/v1679095751/cosmo/1956952_719062278172453_893854861070338010_o_iefwwl.jpg",
      },
    ],
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
