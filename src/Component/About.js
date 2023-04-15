import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineFileProtect } from "react-icons/ai";

function About() {
  return (
    <section id="About">
      <h1 className="text-white text-2xl text-center ">Get To Know</h1>
      <h1 className="text-sky-500 text-4xl text-center">About Me</h1>
      <div className="mx-w-[1200px] md:py-[80] py-10 flex   sm:flex-row flex-col">
        <div className="basis-[45%]">
          <img
            src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1154083/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
            alt="me"
            className="w-30 mb-4 px-4 rounded-[10%]"
          />
        </div>
        <div className="basis-[55%] px-4">
          <div className="min-w-[50px] grid lg:grid-cols-4 sm:grid-cols-4  grid grid-cols-2 gap-4 ">
            <div className="  shadow-lg p-4  hover:bg-transparent  text-center bg-indigo-900 rounded-md border-2 border-sky-500">
              <a href="/experience" className="text-white text-4xl text-center">
                <AiOutlineUserAdd />
              </a>
              <h3 className="text-white  ">Experience</h3>
              <h3 className="text-white ">3 Month+</h3>
            </div>

            <div className="shadow-lg p-4 text-center   hover:bg-transparent bg-indigo-900 rounded-md   border-2 border-sky-500">
              <a
                href="#Experience"
                className="text-white text-4xl text-center "
              >
                <AiOutlineFileProtect />
              </a>
              <h3 className="text-white">CGPA</h3>
              <h3 className="text-white ">7.6</h3>
            </div>

            <div className=" shadow-lg p-4 text-center   hover:bg-transparent bg-indigo-900 rounded-md border-2 border-sky-500">
              <a href="#Experience" className="text-white text-4xl text-center">
                <AiOutlineFileProtect />
              </a>
              <h3 className="text-white ">Projects</h3>
              <h3 className="text-white ">5+</h3>
            </div>
          </div>
          <p className="text-white mb-3  py-5">
            Dedicated and detail-oriented solution seeker. I consider my self as
            innovative and self driven software solution seeker. Looking for
            beginner role to enhance and explore my technical knowledge gained
            in last four years of my B.Tech. Eager to work with a Organization
            where I can utilize my skills for developing my career and for the
            growth of the organization.
          </p>
          <a
            href="#Contact"
            className="border-2 border-sky-500 rounded-md py-2 px-1    bg-sky-500  text-black "
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
export default About;
