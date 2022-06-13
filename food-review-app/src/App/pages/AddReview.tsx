import { FormControl } from "@mui/material"
import { FC } from "react"
import FormTextField from "../components/Form/FormTextField";

interface IAddReviewProps {
  // onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
};
const AddReview:FC<IAddReviewProps> = props => {
  return (
    <FormTextField  label="sfd" value="test" placeholder="Review"/>
  )
};

export default AddReview;


