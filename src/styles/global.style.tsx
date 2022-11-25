import fontFaces from '@styles/fontFaces.style';
import { globalCss } from 'stitches.config';
import tw, { globalStyles } from 'twin.macro';

const customStyles = {
    html: {
        scrollBehavior: 'smooth',
    },
    '*': {
        margin: 0,
        padding: 0,
        ...tw`text-chinese-black font-Poppins`,
    },
    body: {
        ...tw`antialiased
            overflow-x-hidden`,
    },
};

const styles = () => {
    globalCss(fontFaces)();
    globalCss(customStyles)();
    globalCss(globalStyles as Record<any, any>)();
};

export default styles;
