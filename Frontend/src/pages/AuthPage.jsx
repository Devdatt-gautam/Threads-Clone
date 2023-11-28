import authScreenAtom from "../../atoms/authAtom";
import Logincard from "../components/Logincard";
import Signupcard from "../components/Signupcard";
import { useRecoilValue } from "recoil";

const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);
  console.log(authScreenState);
  return <>{authScreenState === "login" ? <Logincard /> : <Signupcard />}</>;
};

export default AuthPage;
