import { FC } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const btnStyle = {
  margin: "0.5rem"
}

interface ISecondaryButtonProps {
  buttonText: string;
  onClickHandler: () => void;
  icon?: React.ReactElement;
  type?: "submit" | "reset" | "button";
}
const SecondaryButton: FC<ISecondaryButtonProps> = (props) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        onClick={props.onClickHandler}
        variant="contained"
        color="secondary"
        endIcon={props.icon}
        fullWidth
        type={props.type}
        style={btnStyle}
      >
        {props.buttonText}
      </Button>
    </Stack>
  );
};

export default SecondaryButton;
