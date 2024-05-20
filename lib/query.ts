// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from '../sanity/sanity.client'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export const getPageData = async (slug?: string) => {
  const query = slug ? `*[_type == "page" && slug.current == '` + slug + `']` : `*[_type == "page"]`
  let general = await client.fetch(groq`${query}`).then(async res => {
    if (slug && res[0]) {
      res[0]?.pageBuilder?.map(async (block: any, i: number) => {
        if (block._type === 'textBlock' && block.button?.internalLink) {
          res[0].pageBuilder[i] = {
            ...block,
            button: {
              ...block.button,
              internalLink: await urlForPage(block.button?.internalLink?.reference._ref).then(res => res),
            }
          }
        }
      })
    }
    return slug ? res[0] : res
  })
  return general
}

export const getHomeData = async () => {
  const homeData = await client.fetch(`*[_type == "homepage"]`).then(res => res[0])
  return homeData
}

export const getNavData = async () => {
  const linkData = await client.fetch(`*[_type == "nav"]`).then(res => res[0])
  return linkData
}

export const getFooterData = async () => {
  const linkData = await client.fetch(`*[_type == "footer"]`).then(res => res[0])
  return linkData
}

export const getMetaData = async () => {
  const metaData = await client.fetch(`*[_type == "metaData"]`).then(res => res[0])
  return metaData
}



export const getLinksData = async (menu: any, type: string) => {

  let ids: string[] = []
  let links: any[] = []

  type === 'nav' ?
    menu?.menuLink && menu.menuLink.length > 0 && menu.menuLink.map(
      ({ _ref }: any) =>  {
        ids.push(_ref)
      }
    )
  : type === 'footerOne' ? 
    menu?.menuLinksFirst && menu.menuLinksFirst.length > 0 && menu.menuLinksFirst.map(
      ({ _ref }: any) =>  {
        ids.push(_ref)
      }
    )
  : type === 'footerTwo' ? 
    menu?.menuLinksSecond && menu.menuLinksSecond.length > 0 && menu.menuLinksSecond.map(
      ({ _ref }: any) =>  {
        ids.push(_ref)
      }
    )
  : null

  const menuData =  await Promise.all(ids.map(async (url) => {
    const query = `*[_type == "page" && _id == '` + url +`'] {
      title,
      slug
    }`
    const linkData = await client.fetch(query).then(res => {
      links.push(res[0])
      return res[0]
    })
    return linkData
  }))
  return menuData
}

export const getMenuData = async () => {
  const meta = await getMetaData().then(res => res)
  const nav = await getNavData().then(res => res)
  const footer = await getFooterData().then(res => res)
  const navLinks = await getLinksData(nav, 'nav').then(res => res)
  const menuLinksFirst = await getLinksData(footer, 'footerOne').then(res => res)
  const menuLinksSecond = await getLinksData(footer, 'footerTwo').then(res => res)

  return {
    meta,
    nav: {
      ...nav,
      menuLink: navLinks,
    },
    footer: {
      ...footer,
      menuLinksFirst: menuLinksFirst,
      menuLinksSecond: menuLinksSecond
    }
  }
}

export const urlForImage = (source: string) => {
  return builder.image(source)
}

export const urlForPage = async (ref: string) => {
  const query = `*[_type == "page" && _id == '` + ref +`'] {
    title,
    slug
  }`

  const linkData = await client.fetch(query).then(res => res[0]?.slug?.current)
  return linkData
}

