import cxs from 'cxs/atomic';

import colors from '../../assets/colors.js';

export default {
    container: cxs({
        backgroundColor: '#EAF1B5',
        height: '100vh',
        opacity: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        overflowX: 'hidden',
        overflowY: 'hidden'
    }),
    inerContainer: cxs({
        width: 810,
        height: 540,
        display: 'flex',
        flexDirection: 'row'
    }),
    left : cxs({
        width: 330,
        backgroundColor: 'grey',
        height: 540,
        position: 'relative',
        top: 0,
        left: '-200%',
        transition: '0.5s'
    }),
    right: cxs({
        width: 480,
        backgroundColor: colors.BG,
        height: 540,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        bottom: 0,
        right: '-200%',
        transition: '0.5s'
    }),
    leftZero: cxs({
        left: 0
    }),
    rightZero: cxs({
        right: 0
    }),
    leftTop: cxs({
        top: '-200%',
        transition: '0.8s'
    }),
    rightBottom: cxs({
        bottom: '-200%',
        transition: '0.8s'
    }),
    continue: cxs({
        width: '70%',
        height: 90,
        bottom: 60,
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: colors.GREY,
        backgroundColor: colors.LIGHT_GREY,
        ':hover': {
            backgroundColor: colors.RED_05,
            color: colors.WHITE
        },
        ':active': {
            color: colors.GREY
        }
    })
};
