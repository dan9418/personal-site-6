import { PropsWithChildren, SVGProps } from "react";

export interface ISvgProps extends SVGProps<any>, PropsWithChildren {
    className?: string;
}

const Svg: React.FC<ISvgProps> = ({ className, children, ...rest }) => {
    let classes = `fill-current ${className ? className : ''}`;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className={classes} {...rest}>
            {children}
        </svg>
    );
};

export default Svg;
