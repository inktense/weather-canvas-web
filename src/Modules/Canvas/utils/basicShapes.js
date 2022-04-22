import { sample } from 'lodash'

export const drawCircle = (context, x, y, radius, colorsPallete) => {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.fillStyle = sample(colorsPallete);
    context.fill();
}
