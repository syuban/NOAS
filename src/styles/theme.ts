const Theme = {
    button: {
        primary: '#5B69BC',
        primary_hover: '#626fbe',
        cancel: '#5B69BC',
        setting: '#519EE8',
    },
    background: {
        dark100: '#363F4C',
        dark200: '#303946',
        dark300: '#282E38',
        dark400: '#47505D',
        dark500: '#323A45',
        dark600: '#3d4755',
    },
    fontcolor: {
        white: '#FFFFFF',
        blue100: '#71b6f9',
        blue200: '#b2bdff',
        blue300: '#5B69BC',
        red100: '#d9534f',
        orange100: '#ffbd4a',
        active100: '#FFC14A',
        active200: '#70B4F3',
        gray100: '#615E60',
        gray200: '#adb5bd',
    },
    border: {
        error: '#d32424',
        dark100: '#262e3a',
        dark300: '#282E38',
    },
};

export default Theme;

export type ThemeType = typeof Theme;

export type ButtonColorType = keyof typeof Theme.button;

export type BackgroundColorType = keyof typeof Theme.background;

export type FontColorType = keyof typeof Theme.fontcolor;

export type BorderColorType = keyof typeof Theme.border;
