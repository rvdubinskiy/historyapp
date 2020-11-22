import colors from './colors';

export const commonStyle = {
    lineHeight: '16px',
    borderRadius: 4,
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    minWidth: '64px',
    opacity: 1
};

export const sizes = {
    small: {
        padding: '4px 8px !important',
        fontSize: '10px'
    },
    medium: {
        padding: '8px 10px !important',
        fontSize: '11px'
    },
    large: {
        padding: '12px 16px !important',
        fontSize: '14px'
    }
};

export const variants = {
    text: {
        color: `${colors.blue[200]}`,
        background: 'transparent',
        '&:hover': {
            background: `${colors.primary.hovered}`
        },
        '&:active': {
            background: `${colors.primary.focused}`
        },
        '&:disabled': {
            color: `${colors.onSurface.disabled}`,
            border: 'none'
        }
    },
    outlined: {
        border: 'none',
        color: `${colors.blue[200]}`,
        boxShadow: `0px 0px 0px 1px ${colors.onSurface.white12} inset`,
        '&:hover': {
            background: `${colors.primary.hovered}`
        },
        '&:active': {
            background: `${colors.primary.focused}`
        },
        '&:disabled': {
            color: `${colors.onSurface.disabled}`,
            border: 'none'
        }
    },
    contained: {
        background: `${colors.blue[200]} !important`,
        color: '#000000',
        '&:hover': {
            background: `${colors.blue[200]}`
        },
        '&:disabled': {
            background: `${colors.onSurface.white12} !important`,
            color: `${colors.onSurface.disabled}`
        },
        '&:active': {
            background: `${colors.blue[200]}`
        }
    }
};
