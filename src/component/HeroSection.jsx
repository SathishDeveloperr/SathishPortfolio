import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import profile from "../assets/profile-pictures/DarkImg2.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">


      <div className="flex flex-col lg:flex-row justify-center items-center my-10 px-4">
        <div className="flex-1 flex justify-center items-center mt-6 lg:mt-0">
          <img
            src={profile}
            className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-r-full"
            alt="Profile"
          />
        </div>
        <div className="flex-1 lg:pr-6 py-3">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center lg:text-left tracking-wide">
            Sathish Kumar
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-center lg:text-left text-neutral-500 max-w-4xl lg:max-w-none">
            Hi, I’m Sathish, a seasoned Software Engineer and full-stack developer with 2.5 years in designing, developing, and delivering scalable software solutions. My expertise spans a wide range of technologies, including .NET, MERN, Angular, Django, FastAPI, and Flutter. I have successfully contributed to multiple projects, from enterprise-grade web applications to cross-platform mobile solutions, showcasing my ability to adapt and excel in diverse environments.
          </p>
        </div>
      </div>


      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
