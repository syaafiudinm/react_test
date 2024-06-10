import InputForm from "../Elements/Input";
import Button from "../Elements/button";

const FormRegister = () => {
    return(
        <form action="">
          <InputForm
            title="Username"
            type="text"
            placeholder="insert your username here"
            name="email"
          />
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
          <InputForm
            title="Confirm Your Password"
            type="password"
            placeholder="*******"
            name="confirm password"
          />
          <Button classname="bg-slate-700">Login</Button>
        </form>
    );
};

export default FormRegister;