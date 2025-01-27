import { useEffect, useState } from "react";
import { Section } from "@/components/ui/Section";
import { Form } from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
// import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { ErrorLabel } from "@/components/ui/ErrorLabel";
import { NavLink } from "react-router-dom";
import { getLoginData } from "@/api/index";
export const Login = () => {
  const [user, setUser] = useState("");
  const clickAction = () => {};
  useEffect(() => {
    const fetchLoginData = async () => {
      try {
        const Data = await getLoginData();
        console.log(Data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchLoginData();
  }, []);
  return (
    <Section className="bg-gray-50">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-white shadow sm:max-w-lg md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Welcome back
            </h1>
            <p className="text-center tracking-wide">
              Please enter your details
            </p>
            <Form actionHandler={clickAction}>
              <Label htmlFor="username">Username</Label>
              <Input type="text" id="username" />
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" defaultValue="" />
              <div className="items-center justify-between sm:flex">
                <div className="flex items-center gap-1">
                  <Input
                    type="checkbox"
                    className="checked:bg-blue-600"
                    id="remember_me"
                    defaultChecked
                    defaultValue=""
                  />
                  <Label htmlFor="remember_me" className="mb-0">
                    Remember me
                  </Label>
                </div>
                <NavLink className="block text-blue-600">
                  Forgot Password?
                </NavLink>
              </div>
              {/* <Button
                type="submit"
                className="mb-2 mt-4 w-full"
                action={() => {}}
              >
                Sign in
              </Button> */}
            </Form>
            <p className="text-center">
              Don't have an account? &nbsp;
              <NavLink to="#" className="text-blue-600">
                Sign up
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
