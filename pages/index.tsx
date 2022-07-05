import Link from "next/link";
import { Gallery } from "../interfaces";

function Index() {
  return (
    <div>
      <p>Mark stars ⭐️</p>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const json: Gallery = await res.json();
  console.log("🚀 ~ file: index.tsx ~ line 17 ~ getStaticProps ~ json", json);

  return {
    props: {
      stars: "da",
    },
  };
}

export default Index;
