import InputForm from "../Elements/Input";
import Button from "../Elements/button";

const handleLogin = (event) => {
  event.preventDefault();
  localStorage.setItem("email", event.target.email.value);
  localStorage.setItem("password", event.target.password.value);
  window.location.href = "/products";
};

const FormLogin = () => {
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        title="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        title="Password"
        type="password"
        placeholder="*******"
        name="password"
      />
      <Button classname="bg-slate-700" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
