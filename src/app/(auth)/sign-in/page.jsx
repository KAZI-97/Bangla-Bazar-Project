"use client";
import { signUp } from "@/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { toast } from "react-toastify";

export default function SignIn() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const Userdata = Object.fromEntries(formData.entries());

    const { data, error } = await signUp.email({
      name: Userdata.name,
      email: Userdata.email,
      password: Userdata.password,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message || "রেজিস্ট্রেশন ব্যর্থ হয়েছে");
      return;
    }
    toast.success("আপনি সফলভাবে রেজিস্ট্রেশন কমপ্লিট করেছেন ");
    console.log(data, error);
  };

  return (
    <>
      <div className=" max-w-md mx-auto flex flex-col justify-center items-center bg-[#F3FBF4] border border-box rounded-4xl shadow-2xl p-6 mt-10 mb-10 border-none">
        <Form className="w-full max-w-96" onSubmit={onSubmit}>
          <Fieldset>
            <Fieldset.Legend className="text-center text-5xl font-extrabold">
              সাইন ইন{" "}
            </Fieldset.Legend>
            <Description className="text-center text-normal font-bold">
              সাইন ইন করতে আপনার প্রয়োজনীয় তথ্য প্রদান করুন
            </Description>
            <FieldGroup>
              <TextField isRequired name="email" type="email">
                <Label>ইমেইল</Label>
                <Input placeholder="আপনার ইমেইল লিখুন" />
                <FieldError />
              </TextField>
              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                  }
                  return null;
                }}
              >
                <Label>পাসওয়ার্ড</Label>
                <Input placeholder="আপনার পাসওয়ার্ড লিখুন" />
                <Description>কমপক্ষে ৮ অক্ষর লিখতে হবে</Description>
                <FieldError />
              </TextField>
            </FieldGroup>
            <Fieldset.Actions>
              <Button type="submit">
                <FloppyDisk />
                সাইন ইন করুন
              </Button>
              <Button type="reset" variant="secondary">
                বাতিল করুন
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
        <div className="w-full max-w-96 mt-6 space-y-3">
          {/* divider */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-sm font-semibold text-gray-500">অথবা</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-xl py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:shadow-sm transition cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 48 48">
              <path
                fill="#EA4335"
                d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.5 17.7 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z"
              />
              <path
                fill="#FBBC05"
                d="M10.5 28.7c-.5-1.5-.8-3-.8-4.7s.3-3.2.8-4.7l-7.9-6.1C.9 16.4 0 20.1 0 24s.9 7.6 2.6 10.8l7.9-6.1z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.8 2.3-8.4 2.3-6.3 0-11.6-4-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z"
              />
            </svg>
            Google দিয়ে চালিয়ে যান
          </button>

          {/* GitHub */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 bg-gray-900 rounded-xl py-2.5 text-sm font-semibold text-white hover:bg-gray-800 hover:shadow-sm transition cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
            GitHub দিয়ে চালিয়ে যান
          </button>
        </div>
      </div>
    </>
  );
}
