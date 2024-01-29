
import ReactMarkdown from 'react-markdown'
import MarkdownEditor from '@uiw/react-markdown-editor';
import { useState } from 'react';

const Extra = () => {
  const mdStr = `# This is a H1  \n## This is a H2  \n###### This is a H6`;
  const [markdown, setMarkdown] = useState(mdStr);

  return (
    <div style={{height:"100vh"}}>
      <div className="preview" style={{width:"80%", margin:"auto", padding:"2%"}}>
      <MarkdownEditor.Markdown source={markdown} height="400px" />

      </div>
      

      <MarkdownEditor 
      value={markdown}
      height="500px"
      onChange={(value, viewUpdate) => setMarkdown(value)}
    />

    </div>
  )
}

export default Extra