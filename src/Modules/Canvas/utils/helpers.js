import { warmColors, coolColors, inBetweenColors } from '../../../Styles/colorPalletes'
import { sample, random } from 'lodash'
import { drawCircle, drawRectangle } from './basicShapes'

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

    console.log('weatherParams => ', weatherParams)

    drawSun(context, width, heightThird, colorsPallete, weatherParams);
    drawClouds(context, width, heightHalf, colorsPallete, weatherParams);
}

export const drawSun = (context, width, height, colorsPallete, weatherParams) => {
    const { temp_c, feelslike_c } = weatherParams;
    const { margX, margY } = calculateMargins(width, height)
        console.log("test ", (feelslike_c - temp_c))
    const offset = feelslike_c - temp_c
    const radius = height * 0.3
    const x = random(0, width - margX - radius) + radius + margX;
    const y = random(0, height * 0.8) + radius + margY;

    drawCircle(context, x, y, radius, colorsPallete)
    // Randomply generate a new circle that has same staring point but smaller radius
    if (random(0, 1)) {
        drawCircle(context, x, y, radius * random(0.2, 0.8), colorsPallete)
    }
}

export const drawClouds = (context, width, heightHalf, colorsPallete, weatherParams) => {
    const x = random(0, width);
    const y = random(0, heightHalf);
    const heightRect = random(heightHalf / 10, heightHalf / 2);
    const widthRect = random(0, heightHalf);

    var angle = Math.random()*Math.PI*2;

const a = Math.cos(angle)*3;
const b = Math.sin(angle)*3;

console.log("fdfd => ", angle, a, b, x, y)

    drawRectangle(context, x, y, widthRect, heightRect, colorsPallete)

    for (let i = 0; i < 10; i++) {
        const x2 = random(0, width);
        const y2 = random(0, heightHalf);
        const heightRect2 = random(heightHalf / 10, heightHalf / 2);
        const widthRect2 = random(0, heightHalf);
        drawRectangle(context, x2, y2, widthRect2, heightRect2, colorsPallete)

        if (random(0, 1)) {
            const x3 = random(0, width);
            const y3 = random(0, heightHalf);
            const heightRect3 = random(heightHalf / 10, heightHalf / 2);
            const widthRect3 = random(0, heightHalf);
            drawRectangle(context, x3, y3, widthRect3, heightRect3, colorsPallete)
        }
    }
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
