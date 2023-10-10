"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className="">Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex justify-center w-1/3 mx-auto mt-20">
      <button
        className="bg-blue-200 text-black"
        onClick={() => signIn("google")}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginPage;
