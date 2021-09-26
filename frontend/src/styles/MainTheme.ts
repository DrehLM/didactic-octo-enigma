import { createTheme, ThemeOptions } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';

const baseTheme: ThemeOptions = {
    palette: {
        primary: {
            main: '#ff5c5f',
        },
        secondary: {
            main: '#99e1d9',
        },
        background: {
            default: '#fcfcfc',
            paper: '#fdfdfd',
        },
        text: {
            primary: '#454545',
            secondary: '#525252',
        },
        success: {
            main: '#a6ce38'
        },
        error: {
            main: '#ff1f22'
        },
    },
}

const buildTheme = (themeOptions: ThemeOptions) => {
    const newTheme = { ...themeOptions };
    newTheme.palette = newTheme.palette || {};
    return createTheme(themeOptions, ptBR);
};

export const mainTheme = buildTheme(baseTheme);