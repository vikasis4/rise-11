import { CreateNote } from "@/components/CreateNote";
import Header from "@/components/Header";
import RenderNotes from "@/components/RenderNotes";

export default function Home() {

  return (
    <div className="flex h-screen flex-col gap-16 items-center bg-secondary justify-start">
      <Header />
      <div className="flex-1 items-center w-full flex flex-col gap-14">
        <CreateNote />
        <RenderNotes />
      </div>
    </div>
  );
}
