import { HiCheck } from "react-icons/hi";
import "./services.css";

export default function Services() {
  return (
    <section id="Services">
      <h5 className="text-white text-2xl text-center ">what I Can Offer</h5>
      <h2 className="text-sky-500 text-4xl text-center mb-3">Services</h2>
      <div className="container services_container  ">
        <article className="services ">
          <div className="services_head ">
            <h3>UI/UX</h3>
          </div>
          <ul className="services_list">
            <ol>
              <HiCheck className="services_list-icon" />
              <p>Innovative design.</p>
            </ol>
            <ol>
              <HiCheck className="services_list-icon" />
              <p>Website Designing.</p>
            </ol>
            <ol>
              <HiCheck className="services_list-icon" />
              <p>Beautification of elements.</p>
            </ol>
            <ol>
              <HiCheck className="services_list-icon" />
              <p>Visual design.</p>
            </ol>
            <ol>
              <HiCheck className="services_list-icon" />
              <p>Modified or custom design.</p>
            </ol>
          </ul>
        </article>
        {/* end */}
        <article className="services">
          <div className="services_head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="services_list">
            <ol>
              <HiCheck className="services_list-icon" />
              <p>User interface design.</p>
            </ol>
            <ol>
              <HiCheck className="services_list-icon" />
              <p>Cross-browser compatibilityv.</p>
            </ol>
            <ol>
              <HiCheck className="services_list-icon" />
              <p>Mobile responsiveness.</p>
            </ol>
            <ol>
              <HiCheck className="services_list-icon" />
              <p>Performance optimization.</p>
            </ol>
            <ol>
              <HiCheck className="services_list-icon" />
              <p>Website development & maintanance.</p>
            </ol>
            <ol>
              <HiCheck className="services_list-icon" />
              <p>Customization of components.</p>
            </ol>
            <ol>
              <HiCheck className="services_list-icon" />
              <p>Dashboard and other interfaces.</p>
            </ol>
          </ul>
        </article>
        {/* end */}
        <article className="services">
          <div className="services_head">
            <h3>Additional Competence</h3>
          </div>
          <ul className="services_list">
            <ol>
              <HiCheck className="services_list-icon" />
              <p>Rapid designing using Tailwiind CSS.</p>
            </ol>
            <ol>
              <HiCheck className="services_list-icon" />
              <p>Data fetching from API.</p>
            </ol>
            <ol>
              <HiCheck className="services_list-icon" />
              <p>Function Based React Programming.</p>
            </ol>
            <ol>
              <HiCheck className="services_list-icon" />
              <p>Class Based React Programming.</p>
            </ol>
            <ol>
              <HiCheck className="services_list-icon" />
              <p>Database using SQL.</p>
            </ol>
          </ul>
        </article>
      </div>
    </section>
  );
}
