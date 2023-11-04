import { PropsWithChildren, SVGProps } from "react";

export interface ISvgProps extends SVGProps<any>, PropsWithChildren {
    className?: string;
    size?: number;
    color?: string;
    colorHover?: string;
}

const Svg: React.FC<ISvgProps> = ({ className, size = 24, color = 'black', colorHover, children, ...rest }) => {
    let classes = `fill-current ${className ? className : ''}`;
    //if (size) classes.push(`h-${size} w-${size}`);
    //if (color) classes.push(`text-${color}`);
    //if (className) classes.push(className);

    const sizeProps = size ? { height: `${size}px`, width: `${size}px` } : {};


    const style = {
        fill: color,
        ':hover': {
            fill: colorHover || color,
        }
    };

    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={style} className={classes} {...sizeProps} {...rest}>
            {children}
        </svg>
    );
};

export default Svg;
