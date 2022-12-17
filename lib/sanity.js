import sanityClient from '@sanity/client';
import AuthorIntro from 'components/AuthorIntro';
const options = {
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production'
  //useCdn === true = cached data, so fast fast
  //useCdn === false = latest data, so a bit slow
}

export default sanityClient(options);