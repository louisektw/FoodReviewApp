import { FC } from "react"
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';

interface IAddButtonProps {
    buttonText: string
};
const AddButton:FC<IAddButtonProps> = props => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" endIcon={<AddIcon />}>
        {props.buttonText}
      </Button>
    </Stack>
  )
};

export default AddButton;
