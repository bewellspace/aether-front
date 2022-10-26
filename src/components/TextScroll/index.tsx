import React from "react";
import { useStyles } from "./index.style";
function TextScroll() {
  const { classes } = useStyles();
  return (
    <div className={classes.marquee}>
      <div className={classes.marqueeContent}>
        <div className={classes.marqueeTag}>AETHER METAVERSE</div>
        <div className={classes.marqueeTag}>AETHER METAVERSE</div>
        <div className={classes.marqueeTag}>AETHER METAVERSE</div>
        <div className={classes.marqueeTag}>AETHER METAVERSE</div>
        <div className={classes.marqueeTag}>AETHER METAVERSE</div>
        <div className={classes.marqueeTag}>AETHER METAVERSE</div>
        <div className={classes.marqueeTag}>AETHER METAVERSE</div>
        <div className={classes.marqueeTag}>AETHER METAVERSE</div>
        <div className={classes.marqueeTag}>AETHER METAVERSE</div>
        <div className={classes.marqueeTag}>AETHER METAVERSE</div>
        <div className={classes.marqueeTag}>AETHER METAVERSE</div>
        <div className={classes.marqueeTag}>AETHER METAVERSE</div>
        <div className={classes.marqueeTag}>AETHER METAVERSE</div>
        <div className={classes.marqueeTag}>AETHER METAVERSE</div>
        <div className={classes.marqueeTag}>AETHER METAVERSE</div>
        <div className={classes.marqueeTag}>AETHER METAVERSE</div>
        <div className={classes.marqueeTag}>AETHER METAVERSE</div>
        <div className={classes.marqueeTag}>AETHER METAVERSE</div>
      </div>
    </div>
    // <div className="horizontal-container">
    //   <div className="overflow-hidden">
    //     <div className="ticker-wrp__horizontal">
    //       <div className="ticker-track__horizontal">
    //         <div className="ticker-content__horizontal">
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //           <div className="t-15 text-bold">AETHER METAVERSE</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default React.memo(TextScroll);
