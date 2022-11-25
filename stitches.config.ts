import { createStitches, defaultThemeMap } from '@stitches/react';

export type { VariantProps } from '@stitches/react';

export const stitches = createStitches({
    prefix: '',
    theme: {},
    themeMap: { ...defaultThemeMap },
    utils: {},
});

export const { css, styled, globalCss, theme, keyframes, getCssText } = stitches;
