import { ToastContainer, toast } from 'react-toastify';

function Banner() {

  const handleClick = () => {
    toast.info("paulbayo321@gmail.com")
  }

  return (
    <div className="container">
      <div className="flex justify-center items-center imgBox">
        <img className="w-4/5" src="./images/Bayo-Seye-Paul.png" alt="Bayo Seye Paul" />
      </div>
      <div>
        <h2>
          Hi I'm Paul
        </h2>

        <h1>
          Web Developer
        </h1>

        <p className="w-5/6 my-2">
          My name is Bayo Seye Paul and i am a front-end developer with skills in Javascript, React and Flutter
        </p>

        
        <div className="flex flex-row h-8 gap-4">
          <a href="https://github.com/VariantBSP/">
          <svg role="img" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg" id="Github--Streamline-Simple-Icons" height="29" width="29">
            <desc>
              Github Streamline Icon: https://streamlinehq.com
            </desc>
            <title>GitHub</title>
            <path d="M22.5 0.556875c-12.43125 0 -22.5 10.074375 -22.5 22.5 0 9.943125 6.44625 18.375 15.384375 21.346875 1.125 0.211875 1.5374999999999999 -0.48375 1.5374999999999999 -1.081875 0 -0.5343749999999999 -0.01875 -1.9500000000000002 -0.028124999999999997 -3.825 -6.25875 1.3575 -7.578749999999999 -3.0187500000000003 -7.578749999999999 -3.0187500000000003C8.29125 33.88125 6.811875 33.1875 6.811875 33.1875c-2.038125 -1.395 0.1575 -1.366875 0.1575 -1.366875 2.2593750000000004 0.1575 3.44625 2.3175 3.44625 2.3175 2.00625 3.440625 5.266875000000001 2.446875 6.5531250000000005 1.87125 0.20249999999999999 -1.455 0.781875 -2.446875 1.425 -3.009375 -4.996875 -0.5625 -10.248750000000001 -2.4975 -10.248750000000001 -11.118749999999999 0 -2.4562500000000003 0.8718750000000001 -4.4624999999999995 2.3156250000000003 -6.0375000000000005 -0.25312500000000004 -0.568125 -1.0125000000000002 -2.855625 0.196875 -5.955 0 0 1.884375 -0.60375 6.1875 2.30625 1.7999999999999998 -0.500625 3.7125 -0.748125 5.625 -0.759375 1.9125 0.01125 3.825 0.25875000000000004 5.625 0.759375 4.2749999999999995 -2.91 6.159375000000001 -2.30625 6.159375000000001 -2.30625 1.209375 3.099375 0.44999999999999996 5.386875000000001 0.22499999999999998 5.955 1.434375 1.575 2.30625 3.58125 2.30625 6.0375000000000005 0 8.64375 -5.259375 10.546875 -10.265625 11.1 0.7875 0.6749999999999999 1.51875 2.055 1.51875 4.1625000000000005 0 3.01125 -0.028124999999999997 5.43 -0.028124999999999997 6.16125 0 0.590625 0.39375 1.29375 1.546875 1.0687499999999999C38.559375 41.4225 45 32.985 45 23.056875c0 -12.425625 -10.074375 -22.5 -22.5 -22.5" fill="#ffffff" stroke-width="1.875"></path>
          </svg>
          </a>

          <button name="paulbayo321@gmail.com" onClick={handleClick}>
          <svg className="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="gmail">
            <path fill="#EAEAEA" d="M22.5 21h-21A1.5 1.5 0 0 1 0 19.5v-15A1.5 1.5 0 0 1 1.5 3h21A1.5 1.5 0 0 1 24 4.5v15a1.5 1.5 0 0 1-1.5 1.5z"></path>
            <path fill="#D54C3F" d="M3 21H1.5A1.5 1.5 0 0 1 0 19.5v-15a1.5 1.5 0 0 1 3 0V21z"></path>
            <path fill="#B63524" d="M21 21h1.5a1.5 1.5 0 0 0 1.5-1.5v-15a1.5 1.5 0 0 0-3 0V21z"></path>
            <path fill="#DE5145" d="M23.359 5.73a1.5 1.5 0 0 0-1.718-2.46l-9.64 7.018h-.002L2.359 3.27A1.501 1.501 0 0 0 .641 5.73l-.04-.029L12 14l11.359-8.27zm.04-.029L12 14l11.399-8.299z"></path>
            <path fill="#EFEFEF" d="M22.5 3c-.319 0-.616.1-.859.27l-9.64 7.018h-.002L2.359 3.27A1.496 1.496 0 0 0 1.5 3h21z"></path>
            <path fill="#C64132" d="M3.001 8.094.473 5.59l-.001.002c.053.05.109.096.169.138l-.04-.029 2.4 1.747v.664-.018z"></path>
            <path fill="#E3E3E3" d="M10.334 15.296 3 21l.001-12.968 7.332 7.262.001.002z"></path>
            <linearGradient id="a" x1="-261.914" x2="-261.679" y1="1097.147" y2="1097.147" gradientTransform="matrix(38.2761 0 0 -38.2761 10028.054 42005.938)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#c8c8c8"></stop>
              <stop offset="1" stop-color="#cdcdcd"></stop>
            </linearGradient>
            <path fill="url(#a)" d="M10.334 15.296 12 14 3.001 7.448v.583l7.332 7.262.001.003z"></path>
            <linearGradient id="b" x1="-261.722" x2="-261.444" y1="1097.073" y2="1097.073" gradientTransform="matrix(38.2761 0 0 -38.2761 10028.054 42005.938)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#d9d9d9"></stop>
              <stop offset="1" stop-color="#e2e2e2"></stop>
            </linearGradient>
            <path fill="url(#b)" d="M16.03 21H21V7.448L12 14l-1.667 1.293L16.03 21z"></path>
          </svg>
          <ToastContainer 
            position='top-center'
            theme='dark'
          />
          </button>

          <a href="https://www.linkedin.com/in/bayo-seye-paul/">
          <svg className="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="linked">
            <g id="Style_2_copy_2">
              <path fill="#FFF" d="M16 31.25C7.591 31.25.75 24.409.75 16S7.591.75 16 .75 31.25 7.591 31.25 16 24.409 31.25 16 31.25z"></path>
              <path fill="#E8E8E8" d="M16 1.5c7.995 0 14.5 6.505 14.5 14.5S23.995 30.5 16 30.5 1.5 23.995 1.5 16 8.005 1.5 16 1.5M16 0C7.163 0 0 7.163 0 16c0 8.836 7.163 16 16 16s16-7.164 16-16c0-8.837-7.163-16-16-16z"></path>
              <path fill="#333" d="M24.294 22.942v-6.137c0-3.288-1.755-4.818-4.096-4.818-1.889 0-2.735 1.039-3.206 1.768v-1.517h-3.558c.047 1.005 0 10.704 0 10.704h3.558v-5.978c0-.319.023-.639.117-.867.257-.639.842-1.301 1.825-1.301 1.288 0 1.803.981 1.803 2.42v5.727l3.557-.001zM9.685 10.777c1.24 0 2.013-.823 2.013-1.85-.023-1.05-.773-1.849-1.99-1.849s-2.012.799-2.012 1.849c0 1.028.772 1.85 1.967 1.85h.022zm1.779 12.165V12.238H7.907v10.704h3.557z"></path>
            </g>
          </svg>
          </a>

        </div>

        <a href="#about"> <button className="btn">
          ABOUT ME
        </button>
        </a>
      </div>
    </div>
  );
}

export default Banner;