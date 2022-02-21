import Head from "next/head"
import { Fragment } from "react"        
import BlogItem from '../components/BlogItem/BlogItem'

const BLOG_POSTS = [
  {
    id: 1, 
    slug: 'first-blog',
    title: 'First Blog', 
    image:'https://images.unsplash.com/photo-1645403828936-16726a94b9ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80', 
    detail: 'how it all began'
  },
  {
    id: 2, 
    slug: 'second-blog',
    title: 'Second Blog', 
    image:'https://images.unsplash.com/photo-1645403828936-16726a94b9ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80', 
    detail: 'how it all began the second time'
  },
]

function HomePage(props) {

  return (
    <Fragment>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" />
      </Head>
      <h1>Blog page</h1>
      {props.blogPosts.map((blog) => (
        <div className="flex flex-col" key={blog.id}>
          <BlogItem title={blog.title} image={blog.image} description={blog.detail} slug={blog.slug}/>
        </div>
      ))}
    </Fragment>
    )
}
export async function getStaticProps(context){
  //send / request data
  //Read the file system
  //Securely connect to database the cod inside this function will only be viewed by the server
  return {
    props:{
      blogPosts : BLOG_POSTS
    },
    revalidate: 60
    //revalidate re-render the site in the server the page every x seconds
  }
}

export default HomePage

//this function gets the object context parameter
// export async function getServerSideProps(context){
//   const { req, res } = context 

//   //Gives access to the incoming request, headers, etc
//   console.log(req, res)
//   return {
//     props: {
//       blogPosts: BLOG_POSTS
//     }
//   }
// }
