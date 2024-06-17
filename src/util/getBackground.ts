export const getBackground = (colorsParam: number[][], angle: number) => {
    let background = "#ffffff";

    if (colorsParam && colorsParam.length > 1) {
        background = `linear-gradient(${angle + "deg,"}`;
        colorsParam.forEach((item, key) => {
            background +=
                `rgba(${item[0]},${item[1]},${item[2]},${item[3]})` +
                (colorsParam[key + 1] != undefined ? "," : ")");
        });
    }

    return background;
};