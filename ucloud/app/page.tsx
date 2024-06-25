import FolderCard from "@/components/FolderCard";
import Button from "../components/Button";
import Header from "@/components/Header";
import FolderContainer from "@/components/FolderContainer";

export default async function Home() {


  return (
    <main>
      <Header />
      <FolderContainer />

      {/* <Button handler={handler}>Folder</Button> */}
    </main>
  );
}
