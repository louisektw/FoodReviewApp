import { FC } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface ISecondaryButtonProps {
  buttonText: string;
  onClickHandler: () => void;
  icon?: React.ReactElement;
}
const SecondaryButton: FC<ISecondaryButtonProps> = (props) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        onClick={props.onClickHandler}
        variant="contained"
        color="secondary"
        endIcon={props.icon}
      >
        {props.buttonText}
      </Button>
    </Stack>
  );
};

export default SecondaryButton;
