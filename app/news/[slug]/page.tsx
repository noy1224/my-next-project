import { notFound } from 'next/navigation';
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from '@/app/_components/Article';

type Props = {
    params: {
      slug: string;
    };
};

export default async function Page({ params }: Props) {
    const data = await getNewsDetail(params.slug).catch(notFound);

    return <div>{data.title}</div>
  }