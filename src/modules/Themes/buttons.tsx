import colors from './colors';

const commonButtonStyles = {
    outline: 'none',
    border: 'none',
    fontWeight: 500,
    fontSize: 11,
    borderRadius: 4,
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    padding: '8px 14px',
    justifyContent: 'center',
    textTransform: 'uppercase',
    cursor: 'pointer',
};

export const buttons = {
    contained: {
        ...commonButtonStyles,
        background: colors.blue[200],
        border: 'none',
        '&:hover': {
            background: ` linear-gradient(0deg, rgba(255, 255, 255, 0.38), rgba(255, 255, 255, 0.38)), ${colors.blue[200]}`,
        },
    },
    text: {
        ...commonButtonStyles,
        color: colors.blue[200],
        background: 'none',
        '&:hover': {
            background: 'rgba(141, 202, 254, 0.04)',
        },
    },
    outlined: {
        ...commonButtonStyles,
        border: '1px solid rgba(255, 255, 255, 0.12)',
        background: 'none',
        color: colors.blue[200],
        '&:hover': {
            backgroundColor: 'rgba(141, 202, 254, 0.04)',
        },
    },
    danger: {
        ...commonButtonStyles,
        border: '1px solid rgba(255, 255, 255, 0.12)',
        background: 'none',
        color: '#FC534E',
        '&:hover': {
            backgroundColor: 'rgba(252, 83, 78, 0.04)',
        },
    },
    whiteOutlined: {
        ...commonButtonStyles,
        border: '1px solid rgba(255, 255, 255, 0.12)',
        color: '#ffffff',
        background: 'none',
        borderRadius: '32px',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
        },
    },
    whiteContained: {
        ...commonButtonStyles,
        background: 'rgba(255, 255, 255, 0.87)',
        color: '#000000',
        borderRadius: '32px',
        '&:hover': {
            background: ` linear-gradient(0deg, rgba(255, 255, 255, 0.38), rgba(255, 255, 255, 0.38)), rgba(255, 255, 255, 0.87)`,
        },
    },
};

export const disabledButtons = {
    contained: {
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
        color: 'rgba(255, 255, 255, 0.38)',
        '&:hover': {
            background: 'rgba(255, 255, 255, 0.12)',
        },
    },
    text: {
        color: 'rgba(255, 255, 255, 0.38)',
        backgroundColor: 'none',
        '&:hover': {
            background: 'none',
        },
    },
    outlined: {
        color: 'rgba(255, 255, 255, 0.38)',
        '&:hover': {
            background: 'none',
        },
    },
    danger: {
        color: 'rgba(255, 255, 255, 0.38)',
        '&:hover': {
            background: 'none',
        },
    },
};

export const pressedButtons = {
    text: {
        background: 'rgba(141, 202, 254, 0.12)',
        '&:hover': {
            background: 'rgba(141, 202, 254, 0.12)',
        },
    },
    outlined: {
        backgroundColor: 'rgba(141, 202, 254, 0.12)',
        '&:hover': {
            background: 'rgba(141, 202, 254, 0.12)',
        },
    },
    danger: {
        backgroundColor: 'rgba(252, 83, 78, 0.12)',
        '&:hover': {
            background: 'rgba(252, 83, 78, 0.12)',
        },
    },
};

export const buttonSizes = {
    pagen_m: {
        padding: 0,
        width: 32,
        height: 32,
        color: colors.gray.iconDark,
        fontSize: '1rem',
        fontWeight: 500,
    },
    pagen_s: {
        padding: 0,
        width: 26,
        height: 26,
        color: colors.gray.primary,
        fontSize: '0.85rem',
        fontWeight: 400,
    },
    primary_m: {
        padding: '0 10px',
        height: 32,
        color: colors.gray.iconDark,
        fontSize: '0.85rem',
        fontWeight: 500,
    },
    primary_s: {
        padding: '0 10px',
        height: 26,
        color: colors.gray.primary,
        fontSize: '0.85rem',
        fontWeight: 500,
    },
    withoutBorder_m: {},
};
