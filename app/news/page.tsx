import { getNewsList } from '@/app/_libs/microcms';
import NewsList from '@/app/_components/Newslist';

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList();

  return <NewsList news={news} />;
}