import { useRef, useEffect } from "react";
import "./style.css";
const Content = ({ timeline }) => {
  let h1 = useRef(null);
  let pText = useRef(null);
  let btn = useRef(null);
  useEffect(() => {
    timeline.from(
      [h1.children, pText, btn],
      1,
      {
        opacity: 0,
        y: "100",
        skewY: 10,
        stagger: {
          amount: 0.4,
        },
      },
      "-=1"
    );
  });
  return (
    <div>
      <div className="content">
        <h1 className="content-inner-bold" ref={(el) => (h1 = el)}>
          <div>
            Hard Work beats talent
            <br />
            <div>when talent doesnt work</div>
          </div>
        </h1>
        <p ref={(el) => (pText = el)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          voluptatum eaque et nulla, similique, quam, consequuntur animi
          doloribus quos quis fugiat delectus corporis distinctio! Nostrum alias
          sit architecto perspiciatis repudiandae.
        </p>
        <button ref={(el) => (btn = el)}>Explore</button>
      </div>
    </div>
  );
};

export default Content;
