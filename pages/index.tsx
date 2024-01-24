import Link from 'next/link'
import groq from 'groq'
import client from '../client'


interface IPost {
  posts: {
    _id: number,
    title: string,
    slug: {
      current: string
    },
    publishedAt: string
  }[]
}


const Index = ({posts}: IPost) => {
    return (
      <div>
        <h1>Welcome to a blog!</h1>
        {posts.length > 0 && posts.map(
          ({ _id, title, slug, publishedAt}) =>
            slug && (
              <li key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  {title}
                </Link>{' '}
                ({new Date(publishedAt).toDateString()})
              </li>
            )
        )}
      </div>
    )
}

export async function getStaticProps() {
    const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `)
    return {
      props: {
        posts
      }
    }
}

export default Index