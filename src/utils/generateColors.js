import chroma from "chroma-js";

/**
 * Generates multiple unique color palettes based on a base color using color theory principles.
 * @param {string} baseColor - A valid hex, rgb, or named color string.
 * @returns {object} An object containing arrays of hex color strings: complementary, analogous, triadic, and monochromatic.
 */
export const generateColors = (baseColor) => {
  const color = chroma(baseColor).saturate(1);

  const clampHue = (h) => ((h % 360) + 360) % 360;

  const generateHarmonies = (baseHue, count, hueStep, brightnessStep = 0, saturationStep = 0) => {
    return Array.from({ length: count }, (_, i) => {
      const hue = clampHue(baseHue + i * hueStep);
      const adjusted = chroma.hsl(hue, color.hsl()[1], color.hsl()[2])
        .brighten(i * brightnessStep)
        .saturate(i * saturationStep);
      return adjusted.hex();
    });
  };

  const baseHue = color.get('hsl.h');

  // Complementary Colors (opposite hue, variations)
  const complementary = [
    chroma.hsl(clampHue(baseHue + 180), color.hsl()[1], color.hsl()[2]).hex(),
    ...generateHarmonies(clampHue(baseHue + 180), 9, 15, 0.1, 0.1),
  ];

  // Analogous Colors (-60° to +60° range)
  const analogous = generateHarmonies(clampHue(baseHue - 30), 10, 12, 0.05, 0.05);

  // Triadic Colors (±120° hues)
  const triadic = [
    chroma.hsl(clampHue(baseHue + 120), color.hsl()[1], color.hsl()[2]).hex(),
    chroma.hsl(clampHue(baseHue - 120), color.hsl()[1], color.hsl()[2]).hex(),
    ...generateHarmonies(clampHue(baseHue + 120), 8, 20, 0.08, 0.1),
  ];

  // Monochromatic (same hue, varying brightness and saturation)
  const monochromatic = Array.from({ length: 10 }, (_, i) =>
    color
      .brighten(i * 0.15)
      .saturate(i * 0.1)
      .hex()
  );

  return {
    complementary: [...new Set(complementary)],
    analogous: [...new Set(analogous)],
    triadic: [...new Set(triadic)],
    monochromatic: [...new Set(monochromatic)],
  };
};
