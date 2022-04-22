import { warmColors, coolColors, inBetweenColors } from '../../../Styles/colorPalletes'
import { sample, random } from 'lodash'
import { drawCircle } from './basicShapes'

export const getColorPalette = (weatherParams) => {
    const { temp_c } = weatherParams;

    const colorsArray = (
        temp_c < 0 ? coolColors :
        temp_c > 0 && temp_c < 10 ? inBetweenColors :
        warmColors
    )

    const colorsPallete = sample(colorsArray)

    const random = Math.floor(Math.random() * colorsPallete.length);
    const background = colorsPallete.splice(random, 1)[0];

    return {background, colorsPallete}
}

export const createCanvasDesign = (context, width, height, colorsPallete, weatherParams) => {
    const heightThird = height / 3;
    const heightHalf = height / 2;
    console.log("width => ", width, "height => ", height, heightThird, heightHalf,  width * 0.9)

    drawSun(context, width, heightThird, colorsPallete, weatherParams)
}

export const drawSun = (context, width, height, colorsPallete, weatherParams) => {
    const { temp_c, feelslike_c } = weatherParams;
    const { margX, margY } = calculateMargins(width, height)
        
    const radius = (feelslike_c - temp_c >= 0) ? 10 : 30
    const x = random(0, width - margX) + radius + margX;
    const y = random(0, height * 0.9) + radius + margY;

    // console.log("ddd", height, height /2, height * 0.8)

    drawCircle(context, x, y, radius, colorsPallete)
    // console.log("test", x, y, radius)

    // Randomply generate a new circle that has same staring point but larger radius
    if (random(0, 1)) {
        drawCircle(context, x, y, radius * random(0.2, 0.8), colorsPallete)
    }
console.log('weatherParams => ', weatherParams)
}

export const drawClouds = () => {
    // User reached end of study, we dont send any more notifications
    // if (userReachedEndOfStudy(data)) return false;
    // task/5173-disable-features-18plus
}

export const calculateMargins = (width, height) => {
    // Creating a working space in the canvas.
    const gridW = width * 0.9;
    const gridH = height * 0.9;
    // Calculating the margin of Y and X sides.
    const margX = (width - gridW) * 0.5;
    const margY = (height - gridH) * 0.5;

    console.log(margX, margY, gridW, gridH)
    return { margX, margY, gridW, gridH };
  };
