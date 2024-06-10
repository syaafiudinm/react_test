import InputForm from "../Elements/Input";
import Button from "../Elements/button";

const FormLogin = () => {
    return(
        <form action="">
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
          <Button classname="bg-slate-700">Login</Button>
        </form>
    );
};

export default FormLogin;