import Head from "next/head";

export interface PageMeta {
    path?: string;
    title?: string;
    description?: string;
  }

export interface PageHeadProps {
    settings: Settings;
    pageMeta?: PageMeta;
}

export interface Settings {
    title?: string;
    description?: string;
}

const PageHead = ({ settings, pageMeta }: PageHeadProps) => {
  const {
    title: mainTitle = "Title",
    description: mainDescription = "Description",
  } = settings;
  const { title: pageTitle, description: pageDescription } = pageMeta ?? {};

  return (
    <Head>
        <title>{pageTitle ? `${pageTitle} | ${mainTitle}` : mainTitle}</title>
        <meta content="width=device-width,initial-scale=1.0" name="viewport" />
        <link href="/favicon/site.webmanifest" rel="manifest" />
        <link href="/favicon/favicon.ico" rel="shortcut icon" />
        <meta content="#000" name="theme-color" />
        <meta
          content={pageDescription ?? mainDescription}
          key="description"
          name="description"
        />
    </Head>
  );
};
export default PageHead;