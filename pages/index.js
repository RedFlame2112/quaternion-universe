import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import PageLayout from "components/PageLayout";
import AuthorIntro from "components/AuthorIntro";
import CardItem from "components/CardItem";
import FilteringMenu from "components/MenuFilter";
import { getAllPosts } from "lib/api";
import CardListItem from "components/CardListItem";
import { useGetPosts } from "actions";

const Home = ({ posts: initialData }) => {
  //sate logic for setting list vs card view
  //if menu button pressed from default state, then toggle to list
  //else if pressed again, toggle to card and back and forth
  const [filter, setfilter] = useState({
    view: {
      list: 0
    }
  });
  const getDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
  }
  //fetch json data from url to SWR hook
  const { data: posts, err } = useGetPosts(initialData);
  return (
    <PageLayout>
      <div className="blog-detail-page">
        <AuthorIntro />
        <FilteringMenu 
         filter = {filter}
          onChange={(opt, val) => {
            setfilter({...filter, [opt]: val});
          }}
        />
        <hr />

        <div className={`page-wrapper`}>
          <Row className="mb-5">
            {/* iterate cards over each post */}
            {posts.map((post) => (
              filter.view.list ? 
              <Col key={`${post.slug}-list`} md="9">
                <CardListItem 
                  author={post.author}
                  title={post.title}
                  subtitle={post.subtitle}
                  date={getDate(post.date)}
                  link={{
                    href: '/posts/[slug]',
                    as: `/posts/${post.slug}`
                  }}
                />
              </Col>
              :
                <Col key={post.slug} md="4">
                  <CardItem
                    author={post.author}
                    title={post.title}
                    subtitle={post.subtitle}
                    date={getDate(post.date)}
                    image={post.coverImage}
                    link={{
                      href: '/posts/[slug]',
                      as: `/posts/${post.slug}`
                    }}
                  />
                </Col>
            ))}
          </Row>
        </div>
      </div>
    </PageLayout>
  );
};
export default Home;
//called during build time and creates static page
//provides props
export const getStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts
    },
  }
}
