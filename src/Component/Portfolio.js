import "./portfolio.css";

export default function Portfolio() {
  return (
    <section id="Portfolio">
      <h1 className="text-white text-2xl text-center ">My Recent Work</h1>
      <h1 className="text-sky-500 text-4xl text-center mb-2">Portfolio</h1>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio-item-image">
            <img
              src="https://img.freepik.com/free-vector/data-points-concept-illustration_114360-2194.jpg?w=740&t=st=1680261850~exp=1680262450~hmac=a167d3c90601683b735fd49aa262c71cac0fdad6d2e592bdb37da9902f8caebe"
              alt="Me"
            />
          </div>

          <h3>News Website </h3>
          <div className="portfolio_item-cta">
            <a
              href="/"
              className="btn border-2 border-sky-500 rounded-md m-4 px-2 py-2 text-sky-500   "
              target="_blank"
            >
              Github
            </a>
            <a
              href="/"
              className="btn-primary border-2  border-sky-500 rounded-md m-4 px-2 py-2   bg-sky-500 text-grey-900"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio-item-image">
            <img
              src="https://img.freepik.com/free-vector/data-points-concept-illustration_114360-2194.jpg?w=740&t=st=1680261850~exp=1680262450~hmac=a167d3c90601683b735fd49aa262c71cac0fdad6d2e592bdb37da9902f8caebe"
              alt="Me"
            />
          </div>

          <h3>Photo Website </h3>
          <div className="portfolio_item-cta">
            <a
              href="/"
              className="btn border-2 border-sky-500 rounded-md m-4 px-2 py-2 text-sky-500   "
              target="_blank"
            >
              Github
            </a>
            <a
              href="/"
              className="btn-primary border-2  border-sky-500 rounded-md m-4 px-2 py-2 bg-sky-500  text-black"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio-item-image">
            <img
              src="https://img.freepik.com/free-vector/data-points-concept-illustration_114360-2194.jpg?w=740&t=st=1680261850~exp=1680262450~hmac=a167d3c90601683b735fd49aa262c71cac0fdad6d2e592bdb37da9902f8caebe"
              alt="Me"
            />
          </div>

          <h3>Todo List </h3>
          <div className="portfolio_item-cta">
            <a
              href="/"
              className="btn border-2 border-sky-500 rounded-md m-4 px-2 py-2 text-sky-500 hover:bg-white  "
              target="_blank"
            >
              Github
            </a>
            <a
              href="/"
              className="btn-primary border-2  border-sky-500 rounded-md m-4 px-2 py-2 text-black bg-sky-500   "
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
