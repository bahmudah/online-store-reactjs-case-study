import Button from "../Elements/Button";
import InputForm from "../Elements/input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        type="text"
        placeholder="insert your full name..."
        name="fullName"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="********"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="********"
        name="confirmPassword"
      />

      <Button variant="bg-blue-600 w-full" hover="hover:bg-blue-700">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
