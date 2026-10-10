// "use client";
// import { signUp } from "@/lib/auth-client";
// import { useRouter } from "next/navigation";
// import { FloppyDisk } from "@gravity-ui/icons";
// import {
//   Button,
//   Description,
//   FieldError,
//   FieldGroup,
//   Fieldset,
//   Form,
//   Input,
//   Label,
//   TextArea,
//   TextField,
// } from "@heroui/react";
// import { toast } from "react-toastify";

// export default function SignUp() {
//   const router = useRouter();
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const Userdata = Object.fromEntries(formData.entries());

//     const { data, error } = await signUp.email({
//       name: Userdata.name,
//       email: Userdata.email,
//       password: Userdata.password,
//     });
//     if (error) {
//       toast.error(error.message || "রেজিস্ট্রেশন ব্যর্থ হয়েছে");
//       return;
//     }
//     toast.success("আপনি সফলভাবে রেজিস্ট্রেশন কমপ্লিট করেছেন ");
//     router.push("/sign-in");

//   };

//   return (
//     <div className=" max-w-md mx-auto flex justify-center items-center bg-[#F3FBF4] border border-box rounded-4xl shadow-2xl p-6 mt-10 mb-10 border-none">
//       <Form className="w-full max-w-96" onSubmit={onSubmit}>
//         <Fieldset>
//           <Fieldset.Legend className="text-center text-5xl font-extrabold">
//             সাইন আপ{" "}
//           </Fieldset.Legend>
//           <Description className="text-center text-normal font-bold">
//             সাইন আপ করতে আপনার প্রয়োজনীয় তথ্য প্রদান করুন
//           </Description>
//           <FieldGroup>
//             <TextField
//               isRequired
//               name="name"
//               validate={(value) => {
//                 if (value.length < 3) {
//                   return "Name must be at least 3 characters";
//                 }

//                 return null;
//               }}
//             >
//               <Label>নাম</Label>
//               <Input placeholder="আপনার নাম লিখুন" />
//               <FieldError />
//             </TextField>
//             <TextField isRequired name="email" type="email">
//               <Label>ইমেইল</Label>
//               <Input placeholder="আপনার ইমেইল লিখুন" />
//               <FieldError />
//             </TextField>
//             <TextField
//               isRequired
//               minLength={8}
//               name="password"
//               type="password"
//               validate={(value) => {
//                 if (value.length < 8) {
//                   return "Password must be at least 8 characters";
//                 }
//                 if (!/[A-Z]/.test(value)) {
//                   return "Password must contain at least one uppercase letter";
//                 }
//                 if (!/[0-9]/.test(value)) {
//                   return "Password must contain at least one number";
//                 }
//                 return null;
//               }}
//             >
//               <Label>পাসওয়ার্ড</Label>
//               <Input placeholder="আপনার পাসওয়ার্ড লিখুন" />
//               <Description>কমপক্ষে ৮ অক্ষর লিখতে হবে</Description>
//               <FieldError />
//             </TextField>
//           </FieldGroup>
//           <Fieldset.Actions>
//             <Button type="submit">
//               <FloppyDisk />
//               রেজিস্ট্রার
//             </Button>
//             <Button type="reset" variant="secondary">
//               বাতিল করুন
//             </Button>
//           </Fieldset.Actions>
//         </Fieldset>
//       </Form>
//     </div>
//   );
// }

// After Responsive
"use client";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
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
import Link from "next/link";

export default function SignUp() {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const Userdata = Object.fromEntries(formData.entries());

    const { data, error } = await signUp.email({
      name: Userdata.name,
      email: Userdata.email,
      password: Userdata.password,
    });
    if (error) {
      toast.error(error.message || "রেজিস্ট্রেশন ব্যর্থ হয়েছে");
      return;
    }
    toast.success("আপনি সফলভাবে রেজিস্ট্রেশন কমপ্লিট করেছেন ");
    router.push("/sign-in");
  };

  return (
    <div className="w-[calc(100%-1.5rem)] max-w-md mx-auto flex justify-center items-center overflow-hidden bg-[#F3FBF4] rounded-3xl sm:rounded-[2rem] shadow-2xl p-4 sm:p-6 mt-6 mb-6 sm:mt-10 sm:mb-10">
      <Form className="w-full min-w-0 max-w-96" onSubmit={onSubmit}>
        <Fieldset className="w-full min-w-0">
          <Fieldset.Legend className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold">
            সাইন আপ{" "}
          </Fieldset.Legend>
          <Description className="text-center text-sm sm:text-base font-bold">
            সাইন আপ করতে আপনার প্রয়োজনীয় তথ্য প্রদান করুন
          </Description>
          <FieldGroup className="w-full min-w-0">
            <TextField
              isRequired
              name="name"
              className="w-full min-w-0"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }

                return null;
              }}
            >
              <Label className="text-sm sm:text-base">নাম</Label>
              <Input
                className="w-full text-base"
                placeholder="আপনার নাম লিখুন"
              />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              name="email"
              type="email"
              className="w-full min-w-0"
            >
              <Label className="text-sm sm:text-base">ইমেইল</Label>
              <Input
                className="w-full text-base"
                placeholder="আপনার ইমেইল লিখুন"
              />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              className="w-full min-w-0"
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
              <Label className="text-sm sm:text-base">পাসওয়ার্ড</Label>
              <Input
                className="w-full text-base"
                placeholder="আপনার পাসওয়ার্ড লিখুন"
              />
              <Description className="text-xs sm:text-sm">
                কমপক্ষে ৮ অক্ষর লিখতে হবে
              </Description>
              <FieldError />
            </TextField>
          </FieldGroup>
          <Fieldset.Actions className="flex flex-col sm:flex-row gap-2 w-full">
            <Button type="submit" className="w-full sm:w-auto">
              <FloppyDisk />
              রেজিস্ট্রার
            </Button>
          </Fieldset.Actions>
        </Fieldset>
        <div className="flex justify-center items-center px-4 pb-6 text-center">
        <Link
          href="/"
          className="text-base sm:text-xl hover:underline hover:bg-green-200"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
      </Form>
      
    </div>
  );
}
