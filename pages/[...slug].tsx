import React from 'react'
import Error404 from "next/error";
import { GetStaticPaths, GetStaticProps } from "next";

import Layout from "@/components/layout";
import PageContent from '@/components/pageContent'

import { getPageData, getMenuData } from '@/lib/api'
import { IMenu, IPage } from '@/lib/types'

interface IHome {
  general: IMenu
  page: IPage
}

// [...slug] will catch all routes unless it matches a subfolder name
export default function Template({ general, page }: IHome) {
  if (!general) return <Error404 statusCode={404} />;
  console.log(JSON.stringify(page) + ' ------ stage 1')
  return (
    <Layout general={general}>
      <PageContent content={page.pageBuilder} />
    </Layout>
  );
}

// function to to get props during build for [...slug] component
export const getStaticProps: GetStaticProps = async ({ params } :any) => {
  const page = await getPageData(params.slug[0]);
  const general = await getMenuData()

  return { props: { general, page } };
};

//getStaticProps will run for the paths return
export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getPageData();

  // need to get correct params for nested pages i.e. services/consultancy
  const paths = pages
    .filter((page: any) => !["homepage"].includes(page.slug.current))
    .map((page: any) => {
      const path = page.slug.current;
      return {
        params: {
          // make an array of paths to match params pattern for [...slug]
          slug: path ? path.split("/") : ["homepage"],
        },
      };
    });
    
  return {
    paths,
    // totally static build so cannot use fallback too ssr missing paths
    fallback: false,
  };
};