"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
  const navigate = (page: any) => {
    router.push("/login" + page);
  };
  return (
    <div>
      <h1 className="heading">Welcome to login page</h1>
      <Link href="/">Go to home page</Link>
      <br />
      <br />
      <br />
      <button onClick={() => navigate("/loginstudent")}>
        Go to login student
      </button>
      <br />
      <br />
      <br />
      <button onClick={() => router.push("/login/loginteacher")}>
        Go to login Teacher
      </button>
    </div>
  );
};
export default Login;
