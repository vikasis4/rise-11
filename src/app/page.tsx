import { CreateNote } from "@/components/CreateNote";
import Header from "@/components/Header";
import RenderNotes from "@/components/RenderNotes";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <Header />
      <CreateNote />
      <RenderNotes />
    </div>
  );
}
