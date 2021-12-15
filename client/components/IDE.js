import React from "react"
import CodeEditor from '@uiw/react-textarea-code-editor';

export const IDE = (props) => {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  return (
    <CodeEditor
      value={code}
      language="js"
      placeholder="Please enter JS code."
      onChange={(evn) => setCode(evn.target.value)}
      padding={20}
      style={{
        fontSize: 12,
        backgroundColor: "#f5f5f5",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        height: 500,
        width: 800,
        margin: 20,
      }}
    />
  )
}


