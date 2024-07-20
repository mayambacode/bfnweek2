import { getSortedPostsData } from "../../../lib/posts"
import { notFound } from "next/navigation"

export default  function generateMetaData({params}: {params: { postId:
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

  return (
    <div>Posts</div>
  )
}
