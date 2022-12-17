import PageLayout from "components/PageLayout";
import BlogHeader from 'components/Blogheader';
import PostContent from 'components/PostContent';
import { getPostBySlug, getAllPosts } from "lib/api";
import { Row, Col } from 'react-bootstrap';
import { urlFor } from "lib/api";

const BlogDetail = ({post}) => {
  return ( 
    <PageLayout className="blog-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader
            title={post.title}
            subtitle={post.subtitle}
            author={post.author}  
            date={post.date}
            coverImage={urlFor(post.coverImage).url()}
          />
          <hr/>
          <PostContent 
            content={post.content}
          />
        </Col>
      </Row>
    </PageLayout>
  );
}
export async function getStaticProps({params}) {
  const post = await getPostBySlug(params.slug);
  return {
    props: {post}
  }
}
export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts?.map(p => ({params: {slug: p.slug}})),
    fallback: false
  }
}

export default BlogDetail;