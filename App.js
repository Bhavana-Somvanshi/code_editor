// App.js
import React, { useState } from 'react';
import CodeEditor from './CodeEditor';

const App = () => {
  const [htmlCode, setHtmlCode] = useState('<h1>Hello, World!</h1>');
  const [cssCode, setCssCode] = useState('body { background-color: #f0f0f0; }');
  const [jsCode, setJsCode] = useState('');

  const handleHtmlChange = (newCode) => {
    setHtmlCode(newCode);
  };

  const handleCssChange = (newCode) => {
    setCssCode(newCode);
  };

  const handleJsChange = (newCode) => {
    setJsCode(newCode);
  };

  return (
    <div className="app">
      <div className="editor">
        <CodeEditor language="xml" code={htmlCode} onChange={handleHtmlChange} />
        <CodeEditor language="css" code={cssCode} onChange={handleCssChange} />
        <CodeEditor language="javascript" code={jsCode} onChange={handleJsChange} />
      </div>
      <div className="result">
        <iframe
          title="output"
          srcDoc={`<html><style>${cssCode}</style></head><body>${htmlCode}<script>${jsCode}</script></body></html>`}
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default App;
