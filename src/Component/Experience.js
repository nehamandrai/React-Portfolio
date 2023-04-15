import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="Experience">
      <div id=" container experience">
        <h1 className="text-white text-2xl text-center ">What Skills I Have</h1>
        <h1 className="text-sky-500 text-4xl text-center mb-7 ">
          My Experience
        </h1>
        <div className="container experience_container ">
          <div className="experience_frontend ">
            <h3 className="text-2xl mb-5">Frontend Develoment</h3>
            <div className="experience_content ">
              <article className="experience_details mr-2">
                <div className="inline-flex">
                  <BsFillPatchCheckFill className="experience_details-icon mr-2" />
                  <h3 className="font-bold">HTML 3</h3>
                </div>
                <div className="inline-block">
                  <h3 className="text-light sm:ml-6">Experienced</h3>
                </div>
              </article>

              <article className="experience_details mr-2">
                <div className="inline-flex">
                  <BsFillPatchCheckFill className="experience_details-icon mr-2" />
                  <h3 className="font-bold"> CSS 3</h3>
                </div>
                <div className="inline-block">
                  <h3 className="text-light sm:ml-6">Experienced</h3>
                </div>
              </article>

              <article className="experience_details mr-2">
                <div className="inline-flex">
                  <BsFillPatchCheckFill className="experience_details-icon mr-2" />
                  <h3 className="font-bold">JavaScript</h3>
                </div>
                <div className="inline-block">
                  <h3 className="text-light sm:ml-6">Experienced</h3>
                </div>
              </article>

              <article className="experience_details mr-2">
                <div className="inline-flex">
                  <BsFillPatchCheckFill className="experience_details-icon mr-2" />
                  <h3 className="font-bold">React</h3>
                </div>
                <div className="inline-block">
                  <h3 className="text-light sm:ml-6">Experienced</h3>
                </div>
              </article>

              <article className="experience_details mr-2">
                <div className="inline-flex">
                  <BsFillPatchCheckFill className="experience_details-icon mr-2" />
                  <h3 className="font-bold">Tailwind</h3>
                </div>
                <div className="inline-block">
                  <h3 className="text-light sm:ml-6">Experienced</h3>
                </div>
              </article>
            </div>
          </div>

          {/* foronted end  */}

          <div className="experience_frontend ">
            <h3 className="text-2xl mb-5">Other Skills</h3>
            <div className="experience_content ">
              <article className="experience_details mr-2">
                <div className="inline-flex">
                  <BsFillPatchCheckFill className="experience_details-icon mr-2" />
                  <h3 className="font-bold">SQL</h3>
                </div>
                <div className="inline-block">
                  <h3 className="text-light sm:ml-6">Proficient</h3>
                </div>
              </article>

              <article className="experience_details mr-2">
                <div className="inline-flex">
                  <BsFillPatchCheckFill className="experience_details-icon mr-2" />
                  <h3 className="font-bold">Python</h3>
                </div>
                <div className="inline-block">
                  <h3 className="text-light sm:ml-6">Intermidiate</h3>
                </div>
              </article>

              <article className="experience_details mr-2">
                <div className="inline-flex">
                  <BsFillPatchCheckFill className="experience_details-icon mr-2" />
                  <h3 className="font-bold">API</h3>
                </div>
                <div className="inline-block">
                  <h3 className="text-light sm:ml-6">Experienced</h3>
                </div>
              </article>

              <article className="experience_details mr-2">
                <div className="inline-flex">
                  <BsFillPatchCheckFill className="experience_details-icon mr-2" />
                  <h3 className="font-bold">Bootstrap </h3>
                </div>
                <div className="inline-block">
                  <h3 className="text-light sm:ml-6">Intermidiate</h3>
                </div>
              </article>

              <article className="experience_details mr-2">
                <div className="inline-flex">
                  <BsFillPatchCheckFill className="experience_details-icon mr-2" />
                  <h3 className="font-bold">OOPS</h3>
                </div>
                <div className="inline-block">
                  <h3 className="text-light sm:ml-6">Intermidiate</h3>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Experience;
