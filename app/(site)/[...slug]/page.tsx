// import Error404 from "next/error";
import "../../../styles/globals.css"
import Layout from "@/components/layout";
import PageContent from '@/components/pageContent'
import { getPageData, getMenuData } from '@/lib/api'

export const generateStaticParams = async () => {
  const pages = await getPageData();

// need to get correct params for nested pages i.e. services/consultancy
const paths = pages
  .filter((page: any) => !["homepage"].includes(page.slug.current))
  .map((page: any) => {
    const path = page.slug.current;
    return {
        // make an array of paths to match params pattern for [...slug]
        slug: path ? path.split("/") : ["homepage"],
    };
  });
  return paths
}

async function getData(params: any) {
  const page = await getPageData(params.slug[0]);
  const general = await getMenuData()
  return {
        page,
        general
    }
}

// [...slug] will catch all routes unless it matches a subfolder name
export default async function Template({ params }: any) {
  const data:any = await getData(params)
  // if (!data?.general) return <Error404 statusCode={404} />;
  return (
    <Layout general={data.general}>
      <PageContent content={data.page.pageBuilder} />
    </Layout>
  );
}