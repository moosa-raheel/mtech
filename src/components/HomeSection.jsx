import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import watch from "../assets/images/watches/watch.jpg";
import mobile from "../assets/images/mobile/mobile 1.jpg";
import laptop from "../assets/images/laptop/laptop 1.jpg";
import css from "../css/style.module.css";

export default function HomeSection() {
  const [data, setData] = useState({
    img: watch,
    para: "A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities. A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands, leather straps, or any other kind of bracelet. A pocket watch is designed for a person to carry in a pocket, often attached to a chain. Watches were developed in the 17th century from spring-powered clocks, which appeared as early as the 14th century. During most of its history the watch was a mechanical device, driven by clockwork, powered by winding a mainspring, and keeping time with an oscillating balance wheel. These are called mechanical watches.[1][2] In the 1960s the electronic quartz watch was invented, which was powered by a battery and kept time with a vibrating quartz crystal. By the 1980s the quartz watch had taken over most of the market from the mechanical watch. Historically, this is called the quartz revolution (also known as quartz crisis in Switzerland).[3][4] Developments in the 2010s include smart watches, which are elaborate computer-like electronic devices designed to be worn on a wrist. They generally incorporate timekeeping functions, but these are only a small subset of the smartwatch's facilities.",
    product: "Watches",
  });
  const handlePgination = (event) => {
    const { target } = event;
    const { innerText: name } = target;
    if (name.toLocaleLowerCase() == "mobile") {
      setData({
        img: mobile,
        product: "Mobile",
        para: "A mobile phone (or cellphone[a]) is a portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area, as opposed to a fixed-location phone (landline phone). The radio frequency link establishes a connection to the switching systems of a mobile phone operator, which provides access to the public switched telephone network (PSTN). Modern mobile telephone services use a cellular network architecture and therefore mobile telephones are called cellphones (or 'cell phones') in North America. In addition to telephony, digital mobile phones support a variety of other services, such as text messaging, multimedia messaging, email, Internet access (via LTE, 5G NR or Wi-Fi), short-range wireless communications (infrared, Bluetooth), satellite access (navigation, messaging connectivity), business applications, video games and digital photography. Mobile phones offering only basic capabilities are known as feature phones; mobile phones which offer greatly advanced computing capabilities are referred to as smartphones.[1] The first handheld mobile phone was demonstrated by Martin Cooper of Motorola in New York City on 3 April 1973, using a handset weighing c. 2 kilograms (4.4 lbs).[2] In 1979, Nippon Telegraph and Telephone (NTT) launched the world's first cellular network in Japan.",
      });
    } else if (name.toLocaleLowerCase() == "watch") {
      setData({
        img: watch,
        product: "Watches",
        para: "A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities. A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands, leather straps, or any other kind of bracelet. A pocket watch is designed for a person to carry in a pocket, often attached to a chain. Watches were developed in the 17th century from spring-powered clocks, which appeared as early as the 14th century. During most of its history the watch was a mechanical device, driven by clockwork, powered by winding a mainspring, and keeping time with an oscillating balance wheel. These are called mechanical watches.[1][2] In the 1960s the electronic quartz watch was invented, which was powered by a battery and kept time with a vibrating quartz crystal. By the 1980s the quartz watch had taken over most of the market from the mechanical watch. Historically, this is called the quartz revolution (also known as quartz crisis in Switzerland).[3][4] Developments in the 2010s include smart watches, which are elaborate computer-like electronic devices designed to be worn on a wrist. They generally incorporate timekeeping functions, but these are only a small subset of the smartwatch's facilities.",
      });
    } else if (name.toLocaleLowerCase() == "laptop") {
      setData({
        img: laptop,
        product: "Laptop",
        para: "A laptop computer or notebook computer, also known as a laptop or notebook for short, is a small, portable personal computer (PC). Laptops typically have a clamshell form factor with a flat panel screen (usually 11–17 in or 280–430 mm in diagonal size) on the inside of the upper lid and an alphanumeric keyboard and pointing device (such as a trackpad and/or trackpoint) on the inside of the lower lid, although 2-in-1 PCs with a detachable keyboard are often marketed as laptops or as having a 'laptop mode'.[1][2] Most of the computer's internal hardware is fitted inside the lower lid enclosure under the keyboard, although many laptops have a built-in webcam at the top of the screen and some modern ones even feature a touch-screen display. In most cases, unlike tablet computers which run on mobile operating systems, laptops tend to run on desktop operating systems which have been traditionally associated with desktop computers.Laptops run on both an AC power supply and a rechargeable battery pack and can be folded shut for convenient storage and transportation, making them suitable for mobile use.[3] Today, laptops are used in a variety of settings, such as at work (especially on business trips), in education, for playing games, web browsing, for personal multimedia, and for general home computer use.",
      });
    }
  };
  return (
    <>
      <div className="container" style={{ marginTop: "2rem" }}>
        <Grid
          container
          bgcolor={"#f3f3f3"}
          borderRadius={"1rem"}
          overflow={"hidden"}
          boxShadow={"2px 4px 24px #d4d4d4"}
        >
          <Grid item style={{ minHeight: "60rem" }} lg={6} md={6}>
            <img
              src={data.img}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              alt="Smart watch"
              loading="lazy"
            />
          </Grid>
          <Grid
            lg={6}
            md={6}
            item
            style={{ minHeight: "40rem", padding: "1rem" }}
          >
            <h2
              className={`${css.text_center} ${css.f_40} ${css.mt_10} ${css.l_black}`}
            >
              Our Products
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button
                variant="outlined"
                onClick={handlePgination}
                size="large"
                sx={{ fontSize: "1.6rem" }}
              >
                Watch
              </Button>
              <Button
                variant="outlined"
                onClick={handlePgination}
                sx={{ fontSize: "1.6rem" }}
              >
                Mobile
              </Button>
              <Button
                variant="outlined"
                onClick={handlePgination}
                sx={{ fontSize: "1.6rem" }}
              >
                Laptop
              </Button>
            </div>
            <h3 className={`${css.text_center} ${css.f_30} ${css.mt_10}`}>
              {data.product}
            </h3>
            <p
              style={{ color: "#2d2d2d" }}
              className={`${css.f_16} ${css.mt_10} ${css.text_justify}`}
            >
              {data.para}
            </p>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
