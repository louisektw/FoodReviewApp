import { FC } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface IMenuButtonProps {
  buttonText: string;
  onClickHandler: () => void;
  icon?: React.ReactElement;
}
const MenuButton: FC<IMenuButtonProps> = (props) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        onClick={props.onClickHandler}
        variant="outlined"
        sx={{ my: 2, color: "white", display: "flex" }}
        endIcon={props.icon}
      >
        {props.buttonText}
      </Button>
    </Stack>
  );
};

export default MenuButton;
