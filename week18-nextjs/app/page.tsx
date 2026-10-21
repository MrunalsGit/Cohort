import Link from "next/link";

export default async function Home() {

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-black">
      <div className="m-0 text-white">
        Welcome
      </div>
      <br />
      <Link className="border p-2 text-white" href="/signup" >Sign up</Link>
      <br />
      <Link className="border p-2 text-white" href="/signin" >Sign in</Link>
    </div>
  );
}
