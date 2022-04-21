import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { getColorPalette } from './utils/helpers'

const Canvas = (props) => {
  const [error, setError] = React.useState(null);
  const [weather, setWeather] = React.useState(null);

  const { location } = useParams();

  useEffect(() => {
    const axiosRequest = async () => {
      const response = await axios.get(process.env.REACT_APP_WEATHER_API_URL, {
        params: {
          key: process.env.REACT_APP_WEATHER_API_KEY,
          q: location,
        },
      });

      setWeather(response.data);
    };
    axiosRequest()
  }, []);

  // TODO implement error page
  if (error) console.log(`Error: ${error.message}`);
  
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
   
    if(weather) getColorPalette(weather?.current)
    
    context.fillStyle = "red";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, [weather]);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      {...props}
    />
  );
};

export default Canvas;
