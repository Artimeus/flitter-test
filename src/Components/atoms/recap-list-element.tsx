import { IconProps, SvgIconProps, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface RecapListElementInterface {
    icon: React.ReactElement<SvgIconProps>,
    title: string
}
function RecapListElement(props: RecapListElementInterface){

    return (
        <div className="recap-list-element">
            <div className="icon">
                {props.icon}
            </div>
            <div className="text">
                <p>{props.title}</p>
            </div>
        </div>
    );
}

export default RecapListElement;