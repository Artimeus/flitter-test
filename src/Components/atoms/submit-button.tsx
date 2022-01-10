import { Button } from "@mui/material";

interface SubmitButtonInterface {
    label: string,
    clickAction?: React.MouseEventHandler<HTMLButtonElement>
}
function SubmitButton(props: SubmitButtonInterface) {
    return (
        <>
        {
            props.clickAction != undefined &&
            <Button className="submit-button" type='submit' variant="contained" size="large" onClick={props.clickAction}>{props.label}</Button>
        }
        {
            props.clickAction == undefined &&
            <Button className="submit-button" type='submit' variant="contained" size="large">{props.label}</Button>
        }
        </>
    );
}

export default SubmitButton;