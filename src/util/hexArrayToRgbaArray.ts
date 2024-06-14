import { colord } from "colord";

const hexArrayToRgbaArray = (
    hexArray: string[]
): [number, number, number, number][] => {
    return hexArray.map((hexColor: string) => {
        const rgba = colord(hexColor).toRgb();

        return [rgba.r, rgba.g, rgba.b, rgba.a];
    });
};

export { hexArrayToRgbaArray };