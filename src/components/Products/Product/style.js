import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    root: {
        maxWidth: '100%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        transform: 'scale(1)',
        transition: '.5s transform ease-in-out',
        "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.2)',
            transition: '.5s transform ease-in-out'
        }
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    cardContent: {
        paddingTop: 30
    },
    typography: {
        lineHeight: 1.7
    }
}))