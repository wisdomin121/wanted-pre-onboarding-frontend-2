/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { StyledContent } from './IssueDetailContent.styled'
import useContentStore from 'stores/useContentStore'

function IssueDetailContent() {
  const { data } = useContentStore()

  return (
    <StyledContent>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw as any, remarkGfm]}
        components={{
          img: ({ ...props }) => <img style={{ maxWidth: '100%' }} {...props} alt="" />,
          pre: ({ ...props }) => (
            <pre
              style={{
                maxWidth: '100%',
                padding: '8px',
                overflow: 'auto',
                border: '0.5px solid gray',
              }}
              {...props}
            />
          ),
        }}
      >
        {data.body}
      </ReactMarkdown>
    </StyledContent>
  )
}

export default IssueDetailContent
