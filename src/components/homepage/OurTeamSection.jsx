import React, { useEffect, useState } from "react";
import CardTeam from "./CardTeam";
import Slider from "react-slick";
import Skeleton from "react-loading-skeleton";
import { debounce } from "lodash";
import AOS from "aos";
import "aos/dist/aos.css";
import 'react-loading-skeleton/dist/skeleton.css'; // Import the skeleton CSS

const slideSettings = [
  { width: 540, slides: 1.6 },
  { width: 640, slides: 1.8 },
  { width: 768, slides: 2 },
  { width: 868, slides: 2.3 },
  { width: 968, slides: 2.6 },
  { width: 1068, slides: 2.9 },
  { width: 1168, slides: 3.2 },
  { width: 1268, slides: 3.5 },
  { width: 1368, slides: 3.8 },
  { width: 1468, slides: 4.1 },
  { width: 1568, slides: 4.4 },
  { width: 1609, slides: 5 },
  { width: Infinity, slides: 6 },
];

function OurTeamSection() {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isLoading, setIsLoading] = useState(true);

  const handleResize = debounce(() => {
    const windowWidth = window.innerWidth;
    const { slides } = slideSettings.find(setting => windowWidth < setting.width);
    setSlidesToShow(slides);
  }, 100);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow,
  };

  const teamMembers = [
    { title: "EI CHANUDOM", 
      role: "Front-End/UX/UI", 
      desc: "One side love is hard, but why I keeping it.",
      github: "https://github.com/domkh12", 
      facebook: "https://www.facebook.com/ei.chanudom/", 
      img: "homepageImg/udom.png" },
    { title: "SEM SOPAHNA", desc: "When I wake up, First thing to do for me is play game.", role: "Front-End/UX/UI", github: "https://github.com/SopanhaSem", facebook: "https://www.facebook.com/profile.php?id=100035612538137", img: "homepageImg/panha.png" },
    { title: "KHUON CHHOEURN", desc: "The best person in the world is me.", role: "Front-End/UX/UI", github: "https://github.com/ChhoeunKhuon", facebook: "https://www.facebook.com/mnus.tmey.94064?mibextid=ZbWKwL", img: "homepageImg/photo.png" },
    { title: "MOM RAKSMEY", desc: "I can't live without love, Because love is life.", role: "Front-End/UX/UI", github: "https://github.com/raksmeymom", facebook: "https://www.facebook.com/profile.php?id=100069487637655&mibextid=ZbWKwL", img: "homepageImg/raksmey.png" },
    { title: "RETH SARAKNORIN", desc: "I'm alway dreaming about you, Why you are so cute.", role: "Front-End/UX/UI", github: "https://github.com/itsmestevee", facebook: "https://www.facebook.com/bobaaa13?mibextid=LQQJ4d", img: "homepageImg/norin.png" },
    { title: "SOY SREYTEY", desc: "Hey, Can i borrow 10$ please.", role: "Front-End/UX/UI", github: "https://github.com/Zeiitey", facebook: "https://www.facebook.com/profile.php?id=100057300903859&mibextid=LQQJ4d", img: "homepageImg/tey.png" },
    { title: "HOR RATHA", desc: "I never give up to achieve my dream.", role: "Front-End/UX/UI", github: "https://github.com/HorRatha", facebook: "https://www.facebook.com/thouy.dp.7?mibextid=LQQJ4d", img: "homepageImg/rotha.png" },
    { title: "SRIV NARY", desc: "Be my boyfriend, If you want to learn IT.", role: "Front-End/UX/UI", github: "https://github.com/SrivNary", facebook: "https://www.facebook.com/profile.php?id=100046388491383&mibextid=ZbWKwL", img: "homepageImg/nary.png" },
    { title: "NGOV BUNSINH", desc: "I love sleeping, Sleeping is my life. ", role: "Front-End/UX/UI", github: "https://github.com/Bunsinhh", facebook: "https://www.facebook.com/NAMWOOON", img: "homepageImg/bunsinh.png" },
  ];

  const mentors = [
    { title: "SANG SOKEA", role: "Mentor", github: "https://github.com/sangsokea", facebook: "https://www.facebook.com/sang.sokea.7", img: "https://i.pinimg.com/originals/17/7f/cb/177fcb59d048fdf27b627b08119e02a1.png" },
    { title: "SIN SREYPHEA", role: "Mentor", github: "https://github.com/sreypheasin", facebook: "https://www.facebook.com/sreyphea.sin?mibextid=LQQJ4d", img: "https://i.pinimg.com/originals/db/e9/3e/dbe93ed4781896ef5c33375e1f9bd797.jpg" },
  ];
  

  return (
    <section className="py-20 font-sans section bg-[#F7F7F7] dark:bg-gray-800 lg:px-40" name="about">
      <div className="flex flex-col justify-center items-center gap-6 sm-max:px-5">
        {isLoading ? (
          <>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
          <Skeleton circle height={256} width={256} />
          <div className="flex flex-col gap-2">
            <Skeleton height={20} width={100} />
            <Skeleton height={200} width={400} />
          </div>
        </div>
          </>
        ) : (
          <>
  <div className="flex flex-col items-center gap-5">
  <div className="flex flex-col md:flex-row w-full max-w-6xl justify-center gap-5 md:gap-5">
    <div className="relative w-full md:w-1/2 mx-auto" data-aos="flip-right">
      <div className="absolute inset-0 w-8/12 h-auto m-auto"></div>
      <img src="/marketing/girl.png" alt="girl image" className="relative w-8/12 h-auto z-10 m-auto" />
    </div>
    <div className="w-full md:w-1/2 text-center md:text-start flex flex-col items-center md:items-start  xl:mt-14">
      <h2 className="text-4xl text-primary font-semibold mb-4">About Us</h2>
      <p className="text-lg dark:text-gray-100 md:w-full w-[80%]" >
        At Show Case, we blend creativity with technology to craft unique, 
        visually stunning, and effective digital solutions. With a passion for [your field, e.g., 
        web design, development, digital marketing], 
        we bring your vision to life through innovative design and meticulous attention to detail.
      </p>
    </div>
  </div>
  <div className="w-44 rounded-md h-1 bg-primary mt-6"></div>
</div>
</>
        )}
      </div>


      <div className="sm-max:mx-5 slider-container mt-10">
        <div className="flex flex-col justify-center items-center gap-6 sm-max:px-5">
        {isLoading ?(
          <>
          <Skeleton height={20} width={300}/>
          <Skeleton height={60} width={600}/>
          </>
        ):(
          <>
          <h2 className="text-4xl text-primary font-semibold mt-16">Our Mentor</h2>
          <p className="text-lg dark:text-gray-100 sm-max:text-center text-center w-[80%]">
          Meet the driving force behind our success. Our mentors are experts in full-stack development and technology. 
          They shape our vision, 
          ensuring we deliver excellence in end-to-end web solutions.
          </p>
          </>
        )}
          <br />
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-20 items-center">
          {isLoading ? (
            [1, 2].map((_, index) => (
              <div key={index} className="w-64 h-64 gap-20">
                <Skeleton circle height={256} width={256} />
                <Skeleton height={30} width={`80%`} />
                <Skeleton height={20} width={`60%`} />
              </div>
            ))
          ) : (
            mentors.map(mentor => (
              <CardTeam key={mentor.title} title={mentor.title} role={mentor.role} github={mentor.github} facebook={mentor.facebook} img={mentor.img} />
            ))
          )}
        </div>
        
        <div className="flex flex-col justify-center items-center gap-6 sm-max:px-5">
        {isLoading ?(
          <>
          <Skeleton height={20} width={300}/>
          </>
        ):(
          <>
          <h2 className="text-4xl text-primary font-semibold mt-16">Our Team</h2>
          </>
        )}
          <br />
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-20 xl:gap-20 items-center w-full xl:w-[1000px] xl:mx-auto">
        {isLoading ? (
          <div className="flex flex-wrap justify-center items-center gap-20">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
              <div key={index} className="w-64 h-64 mx-2">
                <Skeleton circle height={256} width={256} />
                <Skeleton height={30} width={`80%`} />
                <Skeleton height={20} width={`60%`} />
              </div>
            ))}
          </div>
        ) : (
          teamMembers.map(mentor => (
            <CardTeam key={mentor.title} desc={mentor.desc} title={mentor.title} role={mentor.role} github={mentor.github} facebook={mentor.facebook} img={mentor.img} />
          ))
        )}
        </div>
      </div>
    </section>
  );
}

export default OurTeamSection;
