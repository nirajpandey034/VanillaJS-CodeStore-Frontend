import User from "../../interfaces/User";
import { setCookie } from "typescript-cookie";
const doLogin = async (credentials: User, handleOpen: any, setOpen: any) => {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
      cache: "no-store",
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const res = await data.json();
    if (res.success) {
      setCookie("token", res.token, { expires: 1 / 24 });
      setOpen(false);
    } else {
      alert("Login failed, Please Try Again");
      handleOpen();
    }
  } catch (err) {
    alert("Login failed, Please Try Again");
  }
};

export default doLogin;
