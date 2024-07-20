import { getSortedPostsData, getPostData } from "../../../../lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"


export function generateMetaData({params}: {params: { postId:
    string}}) {

        const posts = getSortedPostsData() // don't need to request data twice
        const {postId} = params

        const post = posts.find(post => post.id === postId)

        if(!post) {
            return {
                title: 'Post not found'
            }
        }

        return {
            title: post?.title,
        }
          
        
    }

export default async function Posts({params}: {params: { postId:
    string}}) {
        const posts = getSortedPostsData() // don't need to request data twice

        const {postId} = params

        if(!posts.find(post => post.id === postId)) {
            return notFound()
        }

        const {title, date, contentHtml} = await getPostData(postId)

        // const pubDate = getFormattedDate(date)

  return (
    
        <main>
            <h1>{title}</h1>
            <article>
               
                    <section dangerouslySetInnerHTML={{__html: contentHtml}} />
                <p>
                    <Link href="/">Back to home</Link>
                </p>
            </article>
           
        </main>

  )
}
