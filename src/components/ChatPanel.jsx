// import { useState, useRef, useEffect } from "react";
// import api from "../services/api";
// import Message from "./Message";
// import Loader from "./Loader";

// export default function ChatPanel() {
//   const [messages, setMessages] = useState([]);
//   const [question, setQuestion] = useState("");
//   const [loading, setLoading] = useState(false);
//   const bottomRef = useRef(null);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, loading]);

//   const askQuestion = async () => {
//     if (!question.trim() || loading) return;

//     const userMsg = { role: "user", text: question };
//     setMessages(prev => [...prev, userMsg]);
//     setQuestion("");
//     setLoading(true);

//     try {
//       const res = await api.post("/rag/ask/", {
//         question: userMsg.text,
//       });

//       setMessages(prev => [
//         ...prev,
//         { role: "bot", text: res.data.answer },
//       ]);
//     } catch {
//       setMessages(prev => [
//         ...prev,
//         { role: "bot", text: "⚠️ Backend not reachable" },
//       ]);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="h-full flex flex-col">

//       {/* Header */}
//       <div className="px-6 py-4 bg-slate-900 text-white text-xl font-semibold">
//         🤖 AI Chat Assistant
//       </div>

//       {/* Messages */}
//       <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
//         {messages.length === 0 && (
//           <p className="text-gray-400 text-center">
//             Ask something to get started ✨
//           </p>
//         )}

//         {messages.map((msg, i) => (
//           <Message key={i} role={msg.role} text={msg.text} />
//         ))}

//         {loading && <Loader />}
//         <div ref={bottomRef} />
//       </div>

//       {/* Input */}
//       <div className="p-4 border-t bg-white flex gap-2">
//         <input
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && askQuestion()}
//           placeholder="Type your message..."
//           className="flex-1 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
//         />
//         <button
//           onClick={askQuestion}
//           disabled={loading}
//           className="px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium"
//         >
//           Send
//         </button>
//       </div>

//     </div>
//   );
// }






import { useState, useRef, useEffect } from "react";
import api from "../services/api";
import Message from "./Message";
import Loader from "./Loader";

export default function ChatPanel() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await api.post("ask/", {
        question: userMsg.text,
      });

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: res.data.answer },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "⚠️ Backend reachable but request failed",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-slate-100">
      {/* Chat Area */}
      <div className="flex flex-col flex-1">

        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 text-lg font-semibold">
          🤖 ThinkFetch-AI Intelligent Retrieval-Agumented LLM System
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 && (
            <p className="text-gray-400 text-center">
              Ask something to get started ✨
            </p>
          )}

          {messages.map((m, i) => (
            <Message key={i} role={m.role} text={m.text} />
          ))}

          {loading && <Loader />}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your question..."
            className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg"
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );
}



