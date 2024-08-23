import { Card } from "@/components/ui/card";
import { simpleBlogCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import Image from "next/image";

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
  title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
}`;

  const data = await client.fetch(query);

  console.log(data);
  
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  console.log(data);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 mt-5">
      {data.map((post, idx)=>(
        <Card key={idx}>
        </Card>
      ))

      }
    </div>
  );
}
