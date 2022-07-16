import Image from "next/image";
import clock from "../assets/clock.svg";
import ocean from "../assets/ocean.mp3";
import { useState } from "react";
import mutedicon from "../assets/muted.svg";
import React from "react";


const Home = () => {
  const [speakerState, setSpeakerState] = useState("unmuted");

  
  const handleSpeaker = () => {
    const audio = document.querySelector("#audioPlayer");

    if (speakerState === "muted") {
      setSpeakerState("unmuted");
      audio.pause();
    } else {
      setSpeakerState("muted");
      audio.play();
    }
  };

  return (
    <div className="text-center home">
      <div className="welcome-wrapper pb-20 md:pb-10 lg:pb-10">
        <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl uppercase animate__animated animate__fadeInDown animate__slow">
          Welcome To Life !
        </h1>
        <h3 className="pt-4 pb-8 font-medium animate__animated animate__fadeInDown animate__slow">This is the Kings Assembly</h3>
        <a
          href="#"
          className="px-16 py-5 text-zinc-800 bg-zinc-50 rounded-full text-base font-semibold animate__animated animate__fadeInRight animate__slow"
        >
          Next steps
        </a>

        <audio loop id="audioPlayer" className="hidden">
          <source src={ocean} type="audio/mpeg" />
        </audio>

        <div className="speaker flex items-center justify-between mx-auto mt-7 animate__animated animate__fadeInLeft animate__slow">
          <div
            onClick={handleSpeaker}
            className={`${"speaker__toggle"} ${
              speakerState === "unmuted" ? `${"active"}` : ``
            }`}
          >
            &nbsp;
          </div>
          <div className="speaker__muted">
            <Image
              src={mutedicon}
              alt="Picture of the author"
              width={10}
              height={10}
            />
          </div>
          <div className="speaker__unmuted">
            <svg
              width="14"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.599976"
                y="1.06665"
                width="1.4"
                height="10"
                fill="#F2F2F2"
                className="rect1-anim"
              />
              <rect
                x="9"
                y="1.06665"
                width="1.4"
                height="10"
                fill="#F2F2F2"
                className="rect2-anim"
              />
              <rect
                x="4.79999"
                y="1.06665"
                width="1.4"
                height="10"
                fill="#F2F2F2"
                className="rect3-anim"
              />
            </svg>
          </div>
        </div>

        <img
          className="h-auto rounded-xl mx-auto pt-5 pb-10 animate__animated animate__fadeInUp animate__slow"
          src="https://thechurchco-production.s3.amazonaws.com/uploads/sites/2482/2022/05/541-2000x1125.jpg"
          alt=""
        />
      </div>

      <div className="service-times py-10">
        <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl pb-5 animate__animated animate__fadeInUp animate__slow">
          Service Times
        </h1>
        <h3 className="pt-4 pb-8 font-medium animate__animated animate__fadeInUp animate__slow">
          Join our services LIVE, also follow the conversations on our socials
          [Facebook, Instagram & Twitter] <br /> @tkacommunity
        </h3>
        <div className="times-links pb-14">
          <a
            href="#"
            className="px-10 py-4 text-zinc-50 bg-[#8000ff] rounded-full text-base font-semibold mr-2"
          >
            Watch Live
          </a>
          <a
            href="#"
            className="px-10 py-4 text-[#8000ff] bg-zinc-50 rounded-full text-base font-semibold border-link"
          >
            Live Audio
          </a>
        </div>

        <div className="times-cards row justify-evenly">
          <div className="flex-[0_0_auto] w-full md:w-5/12 xl:w-3/12">
            <div className="time-card bg-violet-500 bg-opacity-20 backdrop-blur-lg rounded-3xl border-violet-500 border-2 drop-shadow-lg w-80 h-auto px-10 py-3 mx-auto ">
              <Image
                src={clock}
                alt="Picture of the author"
                width={35}
                height={35}
              />
              <h2 className="text-2xl font-semibold py-2">Worship Service</h2>
              <h3 className="pb-2 font-medium">Sunday</h3>
              <h3 className="pb-2 font-medium">7:00 AM | 8:45 AM | 10:30 AM</h3>
              <h5>
                58 Tombia Road GRA Phase 3 Portharcourt. | 1 Stadium Road By
                Airforce Junction Portharcourt. | Itrust Event Center Eliozu,
                Portharcourt
              </h5>
            </div>
          </div>

          <div className="flex-[0_0_auto] w-full md:w-5/12 xl:w-3/12 pt-4 md:pt-0 xl:pt-0">
            <div className="time-card bg-violet-500 bg-opacity-20 backdrop-blur-lg rounded-3xl border-violet-500 border-2 drop-shadow-lg w-80 h-72 px-10 py-3 mx-auto ">
              <Image
                src={clock}
                alt="Picture of the author"
                width={35}
                height={35}
              />
              <h2 className="text-2xl font-semibold py-2">Rebroadcast Service</h2>
              <h3 className="pb-2 font-medium">Sunday</h3>
              <h3 className="pb-7 font-medium">6:00 PM</h3>
              <a
            href="https://linktr.ee/tkacommunity/"
            className="px-10 py-4 text-[#8000ff] bg-zinc-50 rounded-full text-base font-semibold border-link"
          >
            View
          </a>
            </div>
          </div>

          <div className="flex-[0_0_auto] w-full md:w-5/12 xl:w-3/12 pt-4 xl:pt-0">
            <div className="time-card bg-violet-500 bg-opacity-20 backdrop-blur-lg rounded-3xl border-violet-500 border-2 drop-shadow-lg w-80 h-auto px-10 py-3 mx-auto ">
              <Image
                src={clock}
                alt="Picture of the author"
                width={35}
                height={35}
              />
              <h2 className="text-2xl font-semibold py-2">WordAlive Service</h2>
              <h3 className="pb-2 font-medium">Wednesday</h3>
              <h3 className="pb-2 font-medium">5:30 PM</h3>
              <h5>
                58 Tombia Road GRA Phase 3 Portharcourt. | 1 Stadium Road By
                Airforce Junction Portharcourt. | Itrust Event Center Eliozu,
                Portharcourt
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="purpose-wrapper py-20">
      <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl pb-5 animate__animated animate__fadeInUp animate__slow">
          Purpose Statement
        </h1>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5x lg:px-32 underline decoration-[#8000ff]">
        "To Reach and Raise Christ Followers, Equip them as Leaders, to Raise others for Christ."
        </h1>
      </div>

      <div className="excel-bulletin py-20">
      <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl pb-5 animate__animated animate__fadeInUp animate__slow">
          Excel Bulletin
        </h1>
        <h3 className="pt-4 pb-8 font-medium animate__animated animate__fadeInDown animate__slow w-10/12 mx-auto">
        The Excel Bulletin is our weekly publication that contains everything you need to know about us and our events for a particular week. It also contains inspiration and timely messages to get you through your week. It’s free! Click on the button and download this week’s copy.
You can share it with your friends.
        </h3>
        <a href="https://thechurchco-production.s3.amazonaws.com/uploads/sites/2482/2022/07/BULLETIN-10TH-JULY-2022.pdf" className="px-10 py-4 text-zinc-50 bg-[#8000ff] rounded-full text-base font-semibold">Download Here</a>
      </div>

      <div className="contact-form py-20">
      <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl pb-5 animate__animated animate__fadeInUp animate__slow">
          Contact Us
        </h1>
        <form action="#" className="flex flex-col md:px-10 lg:px-20">
          <input type="text" name="name" className="my-2 bg-zinc-900 border-b-2 border-violet-500 outline-0 focus:bg-zinc-900 px-2 py-2" placeholder="Your Name"/>
          <input type="text" name="email" className="my-2 bg-zinc-900 border-b-2 border-violet-500 outline-0 focus:bg-zinc-900 px-2 py-2" placeholder="Your Email" />
          <textarea name="message" cols="30" rows="10" className="my-2 bg-zinc-900 border-2 border-violet-500 outline-0 focus:bg-zinc-900 px-2 py-2 rounded-sm" placeholder="What would you like us to know"></textarea>
          <button className="px-10 py-4 text-[#8000ff] bg-zinc-50 rounded-full text-base font-semibold border-link">Submit</button>
        </form>
        <div className="social-links">

        </div>
      </div>

    </div>
  );
};

export default Home;
