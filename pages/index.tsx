import React from 'react'
import { GetStaticProps } from 'next'
import { getPageData, getMenuData } from '../lib/api'

import Layout from '@/components/layout'
import { IMenu, IPage } from '@/lib/types'
import PageContent from '@/components/pageContent'

interface IHome {
  general: IMenu
  page: IPage
}

const Index = ({ general, page }: IHome) => {
  return (
    <Layout general={general}>
        <PageContent content={page.pageBuilder}/>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const page = await getPageData('homepage')
  const general = await getMenuData()
  return {
    props: {
      page,
      general
    }
  }
}

export default Index