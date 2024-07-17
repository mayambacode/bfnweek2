// import Link from "next/link";

// async function getBlogs() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     return data?.items as any[];
// }

// export default async function BlogPage () {
    
//     const blogs = await getBlogs();
   
//     return (
//         <div>
//             <h1>Blog</h1>
//             <div>
//                 {blogs?.map((blog) => {
//                     return <Blog key={blog.id} blog={blog} />;
//                 })}
//             </div>
//         </div>
//     );
// }

// function Blog({ blog}: any) {
//     const { id, title, content,created } = blog || {};

//     return (
//         <Link href={`/blogs/${id}`}>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{content}</p>
//                 <p>{created}</p>
//             </div>
//         </Link>
//     );

// }
