import Banner from "./Banner";
import Card from "./Card";

function Home() {

  return (
    <>
      <div className="body">
        <Banner />

        <h1 className="self-start mt-10 ml-2 text-white">
            Projects
        </h1>
        <div className="grid-container">

          <a href="https://v2lenry.vercel.app/">
            <Card 
              title="Lenry Hotel & Suite" 
              content="Developed the hotel&#39;s promotional website using TypeScript and Tailwind CSS."
              iconLink="/logo.png" 
              iconAlt="lenry-icon"
            />
          </a>


          <a href="https://expenses-chart-component-ruddy.vercel.app/">
            <div className="card">
              <div className="box">
                <img src="/images/reactIcon.png" alt="foodie-icon" />
              <h3>
                Expenses Chart Page <span> &#x1F517;</span>
              </h3>
              </div>
              <p>
                A visually intuitive expense tracker that renders dynamic charts to track user spending. Built based on challenge from <a href="frontendmentor.io">frontendmentor.io</a>.
              </p>
            </div>
          </a>

          <a href="https://redux-todo-list-inky.vercel.app/">
            <Card 
              title="Todo App" 
              content="A simple task-tracking web app built with React and Redux."
              iconLink="/images/checkIcon.png" 
              iconAlt="task-icon"
            />
          </a>

          <a href="https://sunnyside-agency-landingpage-xi.vercel.app/">
            <div className="card">
              <div className="box">
                <img src="/images/reactIcon.png" alt="foodie-icon" />
              <h3>
                Sunnyside Landing Page <span> &#x1F517;</span>
              </h3>
              </div>
              <p>
                A modern, responsive landing page designed with an array of CSS tools.
              </p>
            </div>
          </a>


          <a href="https://foodie-app-myfk.vercel.app/">
            <div className="card">
              <div className="box">
                <img src="/images/foodieIcon.png" alt="foodie-icon" />
                <h3>
                  Foodie <span> &#x1F517;</span>
                </h3>
              </div>
              <p>
                A food discovery platform developed to explore Create, Read, Update and Delete (CRUD) web app functionality.
              </p>
            </div>
          </a>

        </div>

        <div className="container flex-col" id="about">
          <h1 className="self-start">
            About Me
          </h1>
          <p>
            Creative and detail-oriented Front-End Developer with a strong foundation in Web Development Technologies. Proficient in HTML, CSS, JavaScript, and React, with a growing interest in user-centered design and responsive interfaces. Eager to contribute to building intuitive and efficient web applications.
          </p>
        </div>

        <div className="container flex-col">
          <h1 className="self-start">
            Experience
          </h1>

          <div className="card">
            <h2>Maybeach Technologies - Intern</h2>
            <i>June - August 2021</i>
            <p>Completed a 3-month internship focused on foundational web development. Gained hands-on experience building static web pages using HTML, CSS, JavaScript, and jQuery. Learned the fundamentals of responsive design and collaborated in pair-programming tasks.</p>
          </div>

          <div className="card">
            <h2>FlexiSaf - Front-End Intern</h2>
            <i>February - August 2022</i>
            <p>Engaged in a 6-month intensive internship centered on front-end development using React.js. Worked collaboratively in agile teams to build responsive web applications. Improved proficiency in reusable component design, API integration, and Git-based version control.</p>
          </div>

          <div className="card">
            <h2>Lenry Hotel & Suites - Web Developer</h2>
            <i>Septmber - November 2023</i>
            <p>Designed and managed the official website for Lenry Hotel & Suites. Responsible for the complete front-end implementation using HTML and CSS, ensuring a clean and responsive user interface. Gained real-world experience in deploying and maintaining a live business site.</p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Home;
