import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as p5 from "p5";
import ml5 from "ml5";

import background from "../../assets/Background.png";

const Webcam = () => {
  let capture;
  let posenet;
  let singlePose, skeleton;
  let bodySizeText = "";
  const videoRef = useRef(null);
  const [intervalId, setIntervalId] = useState(null);
  const navigate = useNavigate();
  const [sizeSuggestion, setSizeSuggestion] = useState(null);
  const [shoulderWidth, setShoulderWidth] = useState(null);
  const [hipWidth, setHipWidth] = useState(null);

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        const canvasWidth = window.innerWidth / 3; // canvas width
        const canvasHeight = window.innerHeight / 2; // canvas height
        const canvasX = (window.innerWidth - canvasWidth) / 2; // Center horizontally
        const canvasY = (window.innerHeight - canvasHeight) / 2; // Center vertically

        const canvas = p.createCanvas(canvasWidth, canvasHeight);
        canvas.position(canvasX, canvasY); // Set canvas position

        capture = p.createCapture(p.VIDEO);
        capture.size(canvasWidth, canvasHeight);
        capture.hide();

        posenet = ml5.poseNet(capture, () => {
          console.log("Model has loaded");
        });

        posenet.on("pose", (poses) => {
          console.log(poses);
          if (poses.length > 0) {
            singlePose = poses[0].pose;
            skeleton = poses[0].skeleton;

            // Calculate and display body size (example: shoulder width)
            const shoulderWidth = calculateShoulderWidth(singlePose);
            setShoulderWidth(shoulderWidth);

            const hipWidth = calculateHipWidth(singlePose);
            setHipWidth(hipWidth);

            // Find the suggested size based on shoulder width
            const suggestedSize = findSuggestedSize(shoulderWidth);

            // Set the size suggestion to state
            setSizeSuggestion(suggestedSize);

            // bodySizeText = `Shoulder Width: ${shoulderWidth.toFixed(2)} pixels`;

            // Check the score of the first keypoint
            const firstKeypointScore = singlePose.keypoints[0].score;

            if (shoulderWidth >= 50 && shoulderWidth <= 55 && hipWidth>= 30 && hipWidth<=35) {
              removeCamera();
              clearInterval(intervalId);
              navigate(
                `/collection/${firstKeypointScore}/${suggestedSize}/${shoulderWidth}`
              ).then(() => window.location.reload());
              
            };
          }
        });
      };

      p.draw = () => {
        p.image(capture, 0, 0);
        p.fill(255, 0, 0);

        if (singlePose) {
          for (let i = 0; i < singlePose.keypoints.length; i++) {
            p.ellipse(
              singlePose.keypoints[i].position.x,
              singlePose.keypoints[i].position.y,
              20
            );
          }
          p.stroke(255, 255, 255);
          p.strokeWeight(5);
          for (let j = 0; j < skeleton.length; j++) {
            p.line(
              skeleton[j][0].position.x,
              skeleton[j][0].position.y,
              skeleton[j][1].position.x,
              skeleton[j][1].position.y
            );
          }

          // Display body size text
          p.textSize(24);
          p.fill(255);
          p.text(bodySizeText, 20, 30);
        }
      };

      // // Cleanup function to stop the webcam when unmounting
      function removeCamera() {
        p.remove = () => {
          capture.stop();
        };
      }

      function calculateShoulderWidth(pose) {
        const leftShoulderX = pose.keypoints[5].position.x;
        const rightShoulderX = pose.keypoints[6].position.x;
        return Math.abs(rightShoulderX - leftShoulderX);
      }
      function calculateHipWidth(pose) {
        const leftHipX = pose.keypoints[11].position.x; // Assuming keypoint index 11 is for the left hip
        const rightHipX = pose.keypoints[12].position.x; // Assuming keypoint index 8 is for the right hip
        return Math.abs(rightHipX - leftHipX);
      }

      function findSuggestedSize(shoulderWidth) {
        const sizeChart = [
          { size: "Small", shoulder: shoulderWidth <= 40 },
          {
            size: "Medium",
            shoulder: shoulderWidth > 40 && shoulderWidth <= 45,
          },
          {
            size: "Large",
            shoulder: shoulderWidth > 45 && shoulderWidth <= 50,
          },
          { size: "XL", shoulder: shoulderWidth > 50 && shoulderWidth <= 55 },
          { size: "XXL", shoulder: shoulderWidth > 55 },
        ];

        const matchedSizeData = sizeChart.find((sizeData) => sizeData.shoulder);

        return matchedSizeData ? matchedSizeData.size : "Size Not Found";
      }
    };

    if (videoRef.current) {
      const sketchInstance = new p5(sketch, videoRef.current);

      return () => {
        sketchInstance.remove();
      };
    }
  }, [intervalId, navigate]);

  return (
    <div>
      <img
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          background: `url(../../assets/Background.png)`,
          backgroundSize: "cover",
          zIndex: "-1",
        }}
        src={background}
        alt="background"
      />
      {sizeSuggestion && (
        <h2 style={{ textAlign: "center", paddingTop: "100px" }}>
          recognising Size: {shoulderWidth}&nbsp;&nbsp; Hip width: {hipWidth}
        </h2>
      )}
      <div ref={videoRef}></div>
    </div>
  );
};

export default Webcam;
