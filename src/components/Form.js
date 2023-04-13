import { Input, Label, FormGroup, Button } from "reactstrap";

const Form = ({ title, isLoading, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit} style={{ marginBottom: 50 }}>
      <FormGroup>
        <Label>Title</Label>
        <Input value={title} onChange={onChange} />
      </FormGroup>
      <Button type="submit" disabled={isLoading}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
