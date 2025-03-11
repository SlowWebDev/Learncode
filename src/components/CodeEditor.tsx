import React, { useState } from 'react';
import Editor from "@monaco-editor/react";
import { Play, Copy, Download } from 'lucide-react';

const defaultCode = `<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>Welcome to W3Schools</h1>
  <p>Start learning web development!</p>
</body>
</html>`;

export default function CodeEditor() {
  const [code, setCode] = useState(defaultCode);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'example.html';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Try It Yourself</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Edit the code below and see the results in real-time
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
          <div className="border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between bg-gray-50 dark:bg-gray-800">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                title="Copy code"
              >
                <Copy className="w-4 h-4" />
              </button>
              <button
                onClick={handleDownload}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                title="Download code"
              >
                <Download className="w-4 h-4" />
              </button>
              <button className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 flex items-center gap-2">
                <Play className="w-4 h-4" />
                <span>Run</span>
              </button>
            </div>
          </div>

          <Editor
            height="400px"
            defaultLanguage="html"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value || '')}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              roundedSelection: false,
              scrollBeyondLastLine: false,
              automaticLayout: true
            }}
          />
        </div>
      </div>
    </section>
  );
}