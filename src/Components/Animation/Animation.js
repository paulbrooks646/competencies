import React, { useState } from "react";
import "./Animation.scss";

export default function Animation() {
  const [delay, setDelay] = useState(0);
  const [direction, setDirection] = useState();
  const [duration, setDuration] = useState(8);
  const [fill, setFill] = useState();
  const [iteration, setIteration] = useState("infinite");
  const [timing, setTiming] = useState("linear");

  return (
    <main className="animation-main">
      <section className="animation-section">
        <h1 className="animation-title">Animation</h1>
        <h4 className="animation-description">
          CSS allows the animation of HTML elements without the use of other
          coding languages. This is done with @keyframes in your CSS. You give
          your @keyframes an animation name that elements can access to apply
          the contained animation. Within your @keyframes, you give the element
          attributes at different junctures based on the percentage of the way
          through the animation they are. Watch the animation below and see how
          different style attributes change at different points. You can change
          any property you want throughout the animation.
        </h4>
      </section>
      <div className="animationBox">
        <div
          style={{
            backgroundColor: "blue",
            height: "100px",
            width: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            WebkitAnimationIterationCount: iteration,
            WebkitAnimationDirection: direction,
            WebkitAnimationFillMode: fill,
            WebkitAnimationTimingFunction: timing,
            WebkitAnimationDelay: `${delay}s`,
            WebkitAnimationDuration: `${duration}s`,
            WebkitAnimationName: "test",
          }}
        >
          @keyframes
        </div>
        <div className="animationPercents">
          <h2>0%</h2>
          <h2>25%</h2>
          <h2>50%</h2>
          <h2>75%</h2>
          <h2>100%</h2>
        </div>
      </div>
      <div className="hundred">
        <h4 className="animationh4">
          There are other properties whose values can be assigned to an element
          undergoing an animation, that help define how the animation actually
          happens. You can see descriptions of these properties below.
        </h4>
      </div>
      <div className="animationInputField">
        <div className="flex">
          <label>Animation Direction:</label>
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="reverse">Reverse</option>
            <option value="alternate">Alternate</option>
            <option value="alternate-reverse">Alternate Reverse</option>
          </select>
        </div>
        <div className="flex">
          <label>Animation Fill Mode:</label>
          <select value={fill} onChange={(e) => setFill(e.target.value)}>
            <option value="none">None</option>
            <option value="forwards">Forwards</option>
            <option value="Backwards">Backwards</option>
            <option value="both">Both</option>
          </select>
        </div>
        <div className="flex">
          <label>Animation Timing Function:</label>
          <select value={timing} onChange={(e) => setTiming(e.target.value)}>
            <option value="ease">Ease</option>
            <option value="ease-in">Ease In</option>
            <option value="ease-out">Ease Out</option>
            <option value="ease-in-out">Ease In Out</option>
            <option value="linear">Linear</option>
          </select>
        </div>
      </div>
      <div className="animationDescriptions">
        <div className="flex">
          <label>Animation Delay:</label>
          <input
            value={delay}
            onChange={(e) => setDelay(e.target.value)}
            placeholder="Enter number here"
          />
        </div>
        <div className="flex">
          <label>Animation Iteration Count:</label>
          <input
            onChange={(e) => setIteration(e.target.value)}
            placeholder="Enter number here"
          />
          <h4 style={{ marginTop: "-8px" }}>or</h4>
          <button
            style={{ width: "100px", marginTop: "-15px", marginBottom: "20px" }}
            onClick={() => setIteration("infinite")}
          >
            Infinite
          </button>
        </div>
        <div className="flex">
          <label>Animation Duration:</label>
          <input
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Enter number here"
          />
        </div>
      </div>
      <div className="animationDescriptionRow">
        <div className="fifty">
          <h2>Animation Iteration Count</h2>
          <p>
            The animation-iteration-count property specifies how many times an
            animation should run. This can be any number or 'infinite'.
          </p>
        </div>
        <div className="fifty">
          <h2>Animation Delay</h2>
          <p>
            The animation-delay property specifies an amount of time for the
            animation to delay before starting. This time is in seconds (s) or
            milliseconds (ms).
          </p>
        </div>
      </div>
      <div className="animationDescriptionRow">
        <div className="fifty">
          <h2>Animation Direction</h2>
          <p>
            The animation-direction property defines whether an animation should
            be played forwards (normal), backwards (reverse), forward than
            backward (alternate) or backward than forward (alternate-reverse).
          </p>
        </div>
        <div className="fifty">
          <h2>Animation Duration</h2>
          <p>
            The animation-duration property how long it takes the animation to
            complete a cycle, by so doing it determines the speed of the
            animation. The value for animation duration is defined in seconds
            (s) or milliseconds (ms).
          </p>
        </div>
      </div>
      <div className="animationDescriptionRow">
        <div className="fifty">
          <h2>Animation Timing Function</h2>
          <p>
            The animation-timing-function specifies the speed curve of an
            animation. The speed curve defines the time an animation uses to
            change from one style to another and helps to make these changes
            smoothly. Ease: This is the default value. It gives the animation a
            slow start, then fast, and ends slowly. Linear: The animation will
            have the same speed from start to end. Ease-in: The animation has a
            slow start. Ease-out: The animation has a slow end.Ease-in-out: The
            animation has a slow start and a slow end. You can also customize
            speeds with steps or cubic-bezier.
          </p>
        </div>
        <div className="fifty">
          <h2>Animation Fill Mode</h2>
          <p>
            The animation-fill-mode designates which properties the animated
            element will retain, after the animation is completed. None: The
            element will not retain any styles added during the animation.
            Forwards: The element will retain any stlye set by the last
            keyframe. Backwards: The element will get the style values set by
            the first keyframe. Both: The element will receive the styles set in
            both the first and last keyframe.
          </p>
        </div>
      </div>
    </main>
  );
}
