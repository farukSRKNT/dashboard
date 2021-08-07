import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    overrides: {
        Mui: {
            focused: {
                backgroundColor: 'white'
            }
        },
        MuiInput: {
            underline: {
                '&::before': {
                    display: 'none'
                },
                '&::focused': {
                    transform: 'ScaleX(0)'
                }
            },
            focused: {
                '&::before': {
                    display: 'none'
                }
            }
        },
        MuiSelect: {
            '&::focus': {
                backgroundColor: 'white'
            }
        }
    },
});

export default theme;