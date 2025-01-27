import React from "react";
import { Section } from "@/components/ui/Section";
import { Form } from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
export const Login = () => {
  const clickAction = () => {
    console.log("first");
  };
  return (
    <Section className="bg-gray-50">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-white shadow sm:max-w-lg md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Welcome back
            </h1>
            <p className="text-center tracking-wide text-gray-500">
              Please enter your details
            </p>
            <Form actionHandler={clickAction}>
              <Input type="password" />
              <Button type="submit" action={() => {}}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </Section>
  );
};
