const AuthLayout = (props) => {
    const {children, title} = props;
    return (
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-black">{title}</h1>
        <p className="font-medium text-slate-700 mb-6">Please enter your details</p>
        {children}
      </div>
    );
};

export default AuthLayout;