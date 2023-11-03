import { PropsWithChildren, SVGProps } from "react";

interface ISvgProps extends SVGProps<any>, PropsWithChildren  {
    className?: string;
    size?: number;
    color?: string;
}

const Svg: React.FC<ISvgProps> = ({ className, size, color, children, ...rest }) => {
    let classes = ['fill-current'];
    if (size) classes.push(`h-${size} w=${size}`);
    if (color) classes.push(`bg-${color}`);
    if (className) classes.push(className);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className={classes.join(' ')} {...rest}>
            {children}
        </svg>
    );
};

export default Svg;
