import React from "react";
import HTMLFlipBook from "react-pageflip";
import { months } from "../data/months";

export default function Book() {
  return (
    <div className="book-wrapper">
      <HTMLFlipBook
        width={600}
        height={520}
        showCover={true}
        drawShadow={true}
        usePortrait={false}
      >
        {/* FRONT COVER */}
        <div className="page cover">
          <h1>Our 2025 💖</h1>
          <p>A year written with love</p>
        </div>

        {/* INTRO SPREAD */}
        <div className="page left-page intro">
          <div className="text-area">
            <p>
              Every story begins quietly.<br /><br />
              Before dates,<br />
              before memories,<br />
              before we knew.
            </p>
          </div>
        </div>

        <div className="page right-page intro">
          <div className="text-area">
            <p>
              These pages hold moments<br />
              exactly as they were.<br /><br />
              Simple.<br />
              Honest.<br />
              Ours.
            </p>
          </div>
        </div>

        {/* MONTH SPREADS */}
        {months.map((m, i) => (
          <React.Fragment key={i}>
            {/* IMAGE PAGE */}
            <div className="page left-page">
              <h2>{m.month}</h2>

              <div className="image-bubble">
                <img src={m.image} alt={m.month} />
              </div>

              <div className="page-spacer" />
            </div>

            {/* TEXT PAGE */}
            <div className="page right-page">
              <div className="text-area">
                <p>{m.text}</p>
              </div>
            </div>
          </React.Fragment>
        ))}

        {/* OUTRO SPREAD */}
        <div className="page left-page intro">
          <div className="text-area">
            <p>
              Some years pass.<br />
              Some years stay.
            </p>
          </div>
        </div>

        <div className="page right-page intro">
          <div className="text-area">
            <p>
              This one stayed.
            </p>
          </div>
        </div>

        {/* BACK COVER */}
        <div className="page cover">
          <p style={{ maxWidth: "80%", textAlign: "center", lineHeight: "1.7" }}>
            Forever & Always<br /><br />
            Wishing you, maa baba and dadubhai a very very happy new year.
            May this year bring more joy, happiness and good things
            into your family, and all of you may stay healthy and happy always.<br /><br />
            I will always be with you and you forever.<br />
            I love you moreeeee, amar mammam 💖
          </p>
        </div>
      </HTMLFlipBook>
    </div>
  );
}
