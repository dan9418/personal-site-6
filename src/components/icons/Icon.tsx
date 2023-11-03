import { ISvgProps } from "./Svg";
import ICON, { IconId } from "./icons";

interface IIconProps extends ISvgProps {
    iconId: IconId;
}

const Icon: React.FC<IIconProps> = ({ iconId, ...rest }) => {
    const IconComponent = ICON[iconId];
    return <IconComponent {...rest} />
};

export default Icon;
