import { CreateNote } from "@/components/CreateNote";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <CreateNote />
    </div>
  );
}
