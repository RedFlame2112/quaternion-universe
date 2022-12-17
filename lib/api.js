import client from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const postFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'author': author->{
    name, 
    'avatar': avatar.asset->url
  },
  coverImage,
`;

const builder = imageUrlBuilder(client);

export const urlFor = (src) => {
  return builder.image(src);
}

export const getAllPosts = async() => {
 const results = await client
  .fetch(`*[_type == "post"] | order(_createdAt desc) {${postFields}}`);
  return results; 
}

export const getPostBySlug = async(slug) => {
  const result = await client
  .fetch(`*[_type == "post" && slug.current == $slug]{
    ${postFields}
    content[]{..., "asset": asset->}
  }`, {slug}).then(res => res?.[0]);

  return result;
}