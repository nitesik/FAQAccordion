import { useState } from "react";
import "./styles.css";
import background from "./images/bg-pattern-desktop.svg";
import mobile_background from "./images/bg-pattern-mobile.svg";
import desktop from "./images/illustration-woman-online-desktop.svg";
import lady_image from "./images/illustration-woman-online-mobile.svg";
import box from "./images/illustration-box-desktop.svg";
import arrow from "./images/icon-arrow-down.svg"

function Home() {

  const [faqs] = useState([
    { que: "How many team members can I invite?", ans: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan" },
    { que: "What is the maximum file upload size?", ans: "No more than 2GB. All files in your account must fit your allotted storage space." },
    { que: "How do I reset my password?", ans: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you." },
    { que: "Can I cancel my subscription?", ans: "Yes! Send us a message and we’ll process your request no questions asked." },
    { que: "Do you provide additional support?", ans: "Chat and email support is available 24/7. Phone lines are open during normal business hours." }
  ]
  );

  const [key, setKey] = useState(0);
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index)
      return setClicked(null);
      
    return setClicked(index);
    }
  
  // useState(() => {
  //   faqs.map(faq => console.log(faq.ans));
  // },[]);

  function DisplayFAQ() {
    return (
      <div className="container">
        <div className="image">
          <img src={box} alt="box image" className="box-image" />
          <img src={lady_image} alt="lady image" className="lady-image" />
        </div>
        <div className="faq">
          <div className="title">FAQ</div>
          <div className="sub">
            {faqs.map((faq, index) => (
              <div className="text" onClick={() => {toggle(index)}} key={index}>
                <div className="text-arrow">
                  <div className={"question" + (clicked === index ? "-active" : "")}>{faq.que}</div>
                  {clicked === index ? <img src={arrow} alt="arrow" className="arrow-down"/> : <img src={arrow} alt="arrow" className="arrow"/>}
                </div>
                {/* <div className={`answer a-${key}}`}>{faq.ans}</div> */}
                {clicked === index ? <div className="answer">{faq.ans}</div> : null}
              </div>
            ))}
          </div>
        </div>

        <style>{`
        @media (min-width: 738px) {
          .container {
            background-image: url(${background});
            background-size: contain;
            // background-size: 550px;
            background-position-x: -150px;
            background-position-y: 0px;
            background-repeat: no-repeat;
          }
          .image {
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url(${desktop});
            background-repeat: no-repeat;
            background-size: contain;
            background-position-x: -90px;
            background-position-y: 80px;
          }
  
          .box-image {
            position: absolute;
            height: 110px;
            width: 120px;
            padding-top: 120px;
            padding-right: 350px;
          }
        }

        @media (max-width: 738px) {
          .container {
            background-image: url(${mobile_background});
            background-repeat: no-repeat;
            background-position-x: 45px;
          }

        }
        
      `}</style>
      </div>
    )
  }

  return ( <DisplayFAQ /> )
}

export default Home;