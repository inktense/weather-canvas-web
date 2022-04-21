import { warmColors, coolColors, inBetweenColors } from '../../../Styles/colorPalletes'
import { sample } from 'lodash'

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
