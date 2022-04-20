import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Canvas = (props) => {
  const [error, setError] = React.useState(null);

  const { location } = useParams();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_WEATHER_API_URL, {
        params: {
          key: process.env.REACT_APP_WEATHER_API_KEY,
          q: location,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  });

  // TODO implement error page   
  if (error) console.log(`Error: ${error.message}`);

  const canvasRef = useRef(null);

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    //Our draw came here
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
