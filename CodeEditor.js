// CodeEditor.js
import React, { useState } from 'react';
import { Controlled as ControlledCodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

const CodeEditor = ({ language, code, onChange }) => {
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <ControlledCodeMirror
      value={code}
      onBeforeChange={handleChange}
      options={{
        lineNumbers: true,
        mode: language,
      }}
    />
  );
};

export default CodeEditor;
