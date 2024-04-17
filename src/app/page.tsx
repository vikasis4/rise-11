import { CreateNote } from "@/components/CreateNote";
import Header from "@/components/Header";
import RenderNotes from "@/components/RenderNotes";

export default function Home() {

  return (
    <div className="flex flex-col gap-16 items-center bg-secondary">
      <Header />
      <CreateNote />
      <RenderNotes />
    </div>
  );
}
