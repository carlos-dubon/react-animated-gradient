export const getBackground = (colorsParam: number[][]) => {
    let background = "#ffffff";

    if (colorsParam && colorsParam.length > 1) {
        // TODO: see what 165 is doing here
        background = `linear-gradient(${165 + "deg,"}`;
        colorsParam.forEach((item, key) => {
            background +=
                `rgba(${item[0]},${item[1]},${item[2]},${item[3]})` +
                (colorsParam[key + 1] != undefined ? "," : ")");
        });
    }

    return background;
};