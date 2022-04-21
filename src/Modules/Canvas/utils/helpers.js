import { warmColors, coolColors, inBetweenColors } from '../../../Styles/colorPalletes'

export const getColorPalette = (weatherParams) => {
    const { temp_c } = weatherParams;
    let colors = [];

    if(temp_c < 0) colors = coolColors
    else if(temp_c > 0 && temp_c < 10) colors = inBetweenColors
    else colors = warmColors
    console.log('temp_c', temp_c, colors)
console.log('weatherParams 2 => ', weatherParams)
}
