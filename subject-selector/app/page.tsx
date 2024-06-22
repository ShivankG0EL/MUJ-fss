import { Button } from "@/components/ui/button";
import Popup from "./Signin-up/page";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24 py-40">
      <>
      <div className="pb-4">Welcome To Subject Selector</div>
      <div className="pb-4">Click here to go to forms</div>
      <Button type="submit"><Link href="/selector">Redirect</Link></Button>
      <Popup />
      </>
    </main>
  );
}
