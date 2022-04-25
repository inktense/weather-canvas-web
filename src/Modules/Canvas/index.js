import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { getColorPalette, createCanvasDesign } from './utils/helpers'

const Canvas = (props) => {

  const [error, setError] = React.useState(null);
  const [weather, setWeather] = React.useState(null);
  const [background, setbackground] = React.useState(null);
  const [colorsPallete, setcolorsPallete] = React.useState(null);

  const { location } = useParams();

  useEffect(() => {
    const axiosRequest = async () => {
      const response = await axios.get(process.env.REACT_APP_WEATHER_API_URL, {
        params: {
          key: process.env.REACT_APP_WEATHER_API_KEY,
          q: location,
        },
      });

      if(response) {
        setWeather(response.data);

        const {background, colorsPallete} = getColorPalette(response.data?.current)
        setbackground(background)
        setcolorsPallete(colorsPallete)
      }

    };
    axiosRequest()
  }, [location]);

  // TODO implement error page
  if (error) console.log(`Error: ${error.message}`);

  // Create immutable canvas and grab it from DOM
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const width = context.canvas.width;
    const height = context.canvas.height;

    context.fillStyle = background;
    context.fillRect(0, 0, width, height);
   
    if(weather) createCanvasDesign(context, width, height, colorsPallete, weather.current)
    

  }, [weather, background, colorsPallete]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        {...props}
      />
    </div>
  );
};

export default Canvas;
