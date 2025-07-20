import Banner from "./Banner";

function Home() {

  return (
    <>
      <div className="body">
        <Banner />

        <div className="grid-container">

          <a href="https://v2lenry.vercel.app/">
            <div className="card">
              <div className="box">
                <img className="bg-white rounded-full" src="/logo.png" alt="foodie-icon" />
              <h3>
                Lenry Hotel & Suite
              </h3>
              </div>
              <p>
                This was a site developed while learning HTMl and CSS
              </p>
            </div>
          </a>

          <a href="https://bsp-todo.vercel.app/">
            <div className="card">
              <div className="box">
                <img src="/images/checkIcon.png" alt="foodie-icon" />
              <h3>
                Todo App
              </h3>
              </div>
              <p>
                This was a site developed with Typescript and Tailwind CSS
              </p>
            </div>
          </a>

          <a href="https://sunnyside-agency-landingpage-xi.vercel.app/">
            <div className="card">
              <div className="box">
                <img src="/images/reactIcon.png" alt="foodie-icon" />
              <h3>
                Sunnyside Landing Page
              </h3>
              </div>
              <p>
                This was a site developed with Typescript and Tailwind CSS
              </p>
            </div>
          </a>

          <a href="https://expenses-chart-component-ruddy.vercel.app/">
            <div className="card">
              <div className="box">
                <img src="/images/reactIcon.png" alt="foodie-icon" />
              <h3>
                Expenses Chart Page
              </h3>
              </div>
              <p>
                This was a site developed with Typescript and Tailwind CSS
              </p>
            </div>
          </a>

          <a href="https://foodie-app-myfk.vercel.app/">
            <div className="card">
              <div className="box">
                <img src="/images/foodieIcon.png" alt="foodie-icon" />
                <h3>
                  Foodie
                </h3>
              </div>
              <p>
                This was a site developed with Typescript and Tailwind CSS
              </p>
            </div>
          </a>

        </div>

        <div className="container flex-col" id="about">
          <h1 className="self-start">
            About Me
          </h1>
          <p>
            Creative and detail-oriented Front-End Developer with a strong foundation in web development technologies. Proficient in HTML, CSS, JavaScript, and React, with a growing interest in user-centered design and responsive interfaces. Eager to contribute to building intuitive and efficient web applications.
          </p>
        </div>

        <div className="container flex-col">
          <h1 className="self-start">
            Experience
          </h1>

          <div className="card">
            <h2>Maybeach Technologies Intern</h2>
            <i>June - August 2021</i>
            <p>3 months internship learning the basics in web development using HTML, CSS, Javascript and J-Query</p>
          </div>

          <div className="card">
            <h2>FlexiSaf Intern</h2>
            <i>Feb - August 2022</i>
            <p>6 months internship learning and working in teams to develop React Web apps</p>
          </div>

          <div className="card">
            <h2>Lenry Hotel and Suites</h2>
            <i>Septmber - November 2023</i>
            <p>Developed and Managed the hotels site</p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Home;
