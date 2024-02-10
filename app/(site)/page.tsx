// Import Client Component
'use client'
import "../../styles/globals.css"
import { getMenuData, getPageData } from '@/lib/api'
import Layout from '@/components/layout';
import PageContent from '@/components/pageContent';
 
async function getHomeData() {
    const page = await getPageData('homepage')
    const general = await getMenuData()
    return {
          page,
          general
      }
}
 
export default async function Page() {
    // Fetch data directly in a Server Component
    const data:any = await getHomeData()
    // Forward fetched data to your Client Component
    return (
        <Layout general={data.general}>
            <PageContent content={data.page.pageBuilder}/>
        </Layout>
    )
}