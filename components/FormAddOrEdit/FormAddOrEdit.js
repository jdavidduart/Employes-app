import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useForm } from "react-hook-form";
import ErrorText from "../ErrorText/ErrorText";
import { useFormAddOrEdit } from "./hook";

export default function FormAddOrEdit({}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { onSubmit } = useFormAddOrEdit();
  return (
    <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <Form.Group>
        <Form.Label>First name</Form.Label>
        <Form.Control
          {...register("firstName", {
            required: "First name is required",
          })}
          type="text"
          placeholder="John"
          maxLength={20}
        />
        <ErrorText name={"firstName"} errors={errors} />
        <Form.Label>Middle name</Form.Label>
        <Form.Control
          {...register("middleName", {
            required: "Middle name is required",
          })}
          type="text"
          placeholder="Robert"
          maxLength={20}
        />
        <ErrorText name={"middleName"} errors={errors} />
        <Form.Label>Last name</Form.Label>
        <Form.Control
          {...register("lastName", {
            required: "Last name is required",
          })}
          type="text"
          placeholder="Doe"
          maxLength={20}
        />
        <ErrorText name={"middleName"} errors={errors} />
        <Form.Label>Location/City</Form.Label>
        <Form.Control
          {...register("locationCity", {
            required: "City is required",
            maxLength: 20,
          })}
          type="text"
          placeholder="New York"
          maxLength={40}
        />
        <ErrorText name={"locationCity"} errors={errors} />
        <Form.Label>Address</Form.Label>
        <Form.Control
          {...register("address", {
            required: "Address is required",
            maxLength: 20,
            pattern: {
              value: /^(\d{1,}) [a-zA-Z0-9\s]+(,)?/,
              message: "Invalid address",
            },
          })}
          type="text"
          placeholder="123 Main St"
          maxLength={60}
        />
        <ErrorText name={"address"} errors={errors} />
        <Form.Label>Date of birth</Form.Label>
        <Form.Control
          {...register("dateBirth", {
            required: "Date of birth is required",
            maxLength: 20,
          })}
          type="date"
        />
        <ErrorText name={"dateBirth"} errors={errors} />
        <Form.Label>Telephone</Form.Label>
        <Form.Control
          {...register("telephone", {
            required: "Phone number is required",
            maxLength: 20,
            pattern: {
              value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
              message: "Invalid phone number",
            },
          })}
          type="text"
          placeholder="555-123-4567"
          maxLength={12}
        />
        <ErrorText name={"telephone"} errors={errors} />
        <Form.Label>Position/Title</Form.Label>
        <Form.Control
          {...register("positionTitle", {
            required: "Position is required",
            maxLength: 20,
          })}
          type="text"
          placeholder="Software Engineer"
          maxLength={60}
        />
        <ErrorText name={"positionTitle"} errors={errors} />
        <Form.Label>Hire date</Form.Label>
        <Form.Control
          {...register("hireDate", {
            required: "Hire date is required",
            maxLength: 20,
          })}
          type="date"
        />
        <ErrorText name={"hireDate"} errors={errors} />
        <Form.Label>Email address</Form.Label>
        <Form.Control
          {...register("email", {
            required: "Email is required",
            maxLength: 20,
          })}
          type="email"
          placeholder="john.doe@example.com"
          maxLength={80}
        />
        <ErrorText name={"email"} errors={errors} />
        <Form.Label>Salary</Form.Label>
        <Form.Control
          {...register("salary", {
            required: "Salary is required",
            maxLength: 20,
          })}
          type="number"
          placeholder="90000"
          maxLength={20}
        />
        <ErrorText name={"salary"} errors={errors} />
        <Form.Label>Role duration</Form.Label>
        <Form.Control
          {...register("timeInPosition", {
            required: "Role duration is required",
            maxLength: 20,
          })}
          type="text"
          placeholder="4 years"
          maxLength={30}
        />
        <ErrorText name={"timeInPosition"} errors={errors} />
      </Form.Group>
      <Button type="submit" onClick={handleSubmit(onSubmit)}>
        Save changes
      </Button>
    </Form>
  );
}
