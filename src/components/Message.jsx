// export default function Message({ role, text }) {
//   const isUser = role === "user";

//   return (
//     <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
//       <div
//         className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm
//           ${isUser
//             ? "bg-blue-600 text-white rounded-br-none"
//             : "bg-white text-gray-800 rounded-bl-none shadow"
//           }`}
//       >
//         {text}
//       </div>
//     </div>
//   );
// }



export default function Message({ role, text }) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xl px-4 py-3 rounded-lg ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-white border text-gray-800"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
