// Import Client Component
'use client'
import "../../styles/globals.css"
import { getMenuData, getHomeData } from '@/lib/api'
import Layout from '@/components/layout';
import PageContent from '@/components/pageContent';
 
async function getData() {
    const page = await getHomeData()
    const general = await getMenuData()
    return {
          page,
          general
      }
}
 
export default async function Page() {
    // Fetch data directly in a Server Component
    const data:any = await getData()
    // Forward fetched data to your Client Component
    return (
        <Layout general={data.general}>
            <PageContent content={data.page.pageBuilder}/>
        </Layout>
    )
}