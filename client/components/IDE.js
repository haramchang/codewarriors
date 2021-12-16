import React from "react"
import CodeEditor from '@uiw/react-textarea-code-editor';

export const IDE = (props) => {
  const [code, setCode] = React.useState("")

  return (
    <CodeEditor
      value={code}
      language="js"
      placeholder="Type your code here!"
      onChange={(e) => setCode(e.target.value)}
      padding={20}
      style={{
        fontSize: 12,
        backgroundColor: "#f5f5f5",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        margin: 20,
        height: 200,
        width: 400
      }}
    />
  )
}


