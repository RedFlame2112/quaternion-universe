import BlockContent from '@sanity/block-content-to-react';
import CodeHighlights from './CodeHighlights';
import Latex from 'react-latex-next'

import { urlFor } from 'lib/api';
const serializers = {
  types: {
    code: ({node: {language, code, filename}}) => {
      return (
        <CodeHighlights language={language}>
          {code}
          <div className="code-filename">
            {filename}
          </div>
        </CodeHighlights>
      )
    },
    image: ({node: {asset, caption, position}}) => {
      let styles = {};
      if (position === 'left') {
        styles.float = position;
        styles.marginRight = '30px';
      } if (position === 'right') {
        styles.float = position;
        styles.marginLeft = '30px';
      } 
      return (
        <div className="blog-image" style ={{...styles}}>
          <img src={urlFor(asset).height(300).width(300).fit('max').url()} />
          <div className="image-alt">
            {caption}
          </div>
        </div>
      )
    },
    latex: ({node: {body}}) => {
      const mathFormatted = `$$ ${body} $$`
      return(
        <div className='math'>
          <Latex>
            {mathFormatted}
          </Latex>
        </div>
      )
    }
  }
}
const PostContent = ({content}) =>
<BlockContent 
  imageOptions={{w: 320, h: 240, fit:'max'}}
  serializers={serializers}
  blocks={content}
/>
export default PostContent;