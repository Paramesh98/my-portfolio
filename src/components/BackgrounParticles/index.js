import React, { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  nonCollidableParticlesForMobile,
  nonCollidableParticles,
} from "../../utils/particlesConfig";
import { loadSlim } from "@tsparticles/slim";

function BackgroundParticles() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
    if (window.screen.availWidth < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <div>
      {init && (
        <Particles
          // style={{ position: "relative", maxHeight: "200px" }}
          id="tsparticles"
          options={
            isMobile ? nonCollidableParticlesForMobile : nonCollidableParticles
          }
        />
      )}
    </div>
  );
}

export default BackgroundParticles;
