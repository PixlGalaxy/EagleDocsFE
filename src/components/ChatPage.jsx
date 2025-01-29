// ChatPage.jsx
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [loadingDots, setLoadingDots] = useState('');
  const textAreaRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    document.title = 'EagleDocs';
  }, []);

  // Auto-resize the textarea
  const handleChange = (event) => {
    setUserMessage(event.target.value);
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  // Scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isStreaming]);

  // Loading animation with dots
  useEffect(() => {
    if (!isStreaming) return;
    const interval = setInterval(() => {
      setLoadingDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 400);
    return () => clearInterval(interval);
  }, [isStreaming]);

  // Send a message to Ollama API (with streaming)
  const handleSendMessage = async () => {
    if (!userMessage.trim() || isStreaming) return;

    const newUserMessage = { role: 'user', content: userMessage };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    setUserMessage('');
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
    }

    setIsStreaming(true);

    try {
      const response = await fetch('', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'llama3.1:8b-instruct-fp16',
          messages: updatedMessages,
          stream: true,
        }),
      });

      if (!response.body) throw new Error('No response body');

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let assistantMessage = { role: 'assistant', content: '' };

      // Add empty message first for streaming effect
      setMessages((prev) => [...prev, assistantMessage]);

      let currentText = ''; // Stores text as it streams

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });

        const jsonChunks = chunk
          .split('\n')
          .filter(Boolean)
          .map((line) => {
            try {
              return JSON.parse(line);
            } catch (error) {
              console.error('Error parsing chunk:', line, error);
              return null;
            }
          })
          .filter(Boolean);

        for (const jsonChunk of jsonChunks) {
          if (jsonChunk.message?.content) {
            currentText += jsonChunk.message.content;

            // Update message dynamically
            setMessages((prev) =>
              prev.map((msg, idx) =>
                idx === prev.length - 1 ? { ...msg, content: currentText } : msg
              )
            );
          }
        }

        // Adjust streaming speed
        await new Promise((resolve) => setTimeout(resolve, 10));
      }
    } catch (error) {
      console.error('Error in Ollama response:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Error: Could not retrieve a response.' },
      ]);
    } finally {
      setIsStreaming(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <button
            className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded"
            onClick={() => setMessages([])}
          >
            + New Chat
          </button>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col">
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`p-4 rounded-lg max-w-[90%] ${
                    msg.role === 'user'
                      ? 'bg-gray-200 text-gray-900 ml-auto'
                      : 'bg-blue-500 text-white mr-auto'
                  }`}
                >
                  <ReactMarkdown
                    children={msg.content}
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        return inline ? (
                          <code className="bg-gray-200 p-1 rounded" {...props}>
                            {children}
                          </code>
                        ) : (
                          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                            <code {...props}>{children}</code>
                          </pre>
                        );
                      },
                    }}
                  />
                </div>
              </div>
            ))}
            {isStreaming && (
              <div className="flex justify-start">
                <div className="p-4 rounded-lg max-w-[90%] bg-blue-500 text-white mr-auto">
                  {loadingDots}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Message Input Area */}
        <footer className="bg-white border-t border-gray-200 p-4">
          <div className="max-w-4xl mx-auto flex space-x-2">
            <textarea
              ref={textAreaRef}
              className="flex-1 border border-gray-300 rounded p-2 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         resize-none overflow-hidden"
              rows="1"
              placeholder="Type your message..."
              value={userMessage}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default ChatPage;
