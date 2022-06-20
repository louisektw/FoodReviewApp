import { FC } from "react"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const btnStyle = {
  margin: "0.5rem"
}

interface IPrimaryButtonProps {
    buttonText: string
    onClickHandler: () => void
    icon?: React.ReactElement
};
const PrimaryButton:FC<IPrimaryButtonProps> = props => {
  return (
    <Stack direction="row" spacing={2}>
      <Button style={btnStyle} onClick={props.onClickHandler} variant="contained" endIcon={props.icon}>
        {props.buttonText}
      </Button>
    </Stack>
  )
};

export default PrimaryButton;
