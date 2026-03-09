
import ChatPanel from "./components/ChatPanel";
import SettingsPanel from "./components/SettingsPanel";

export default function App() {
  return (
    <div className="h-screen flex bg-gradient-to-br from-slate-100 to-slate-200">
      
      {/* Chat Section */}
      <div className="flex-1">
        <ChatPanel />
      </div>

      {/* Settings Section */}
      <div className="w-[360px] border-l bg-white">
        <SettingsPanel />
      </div>

    </div>
  );
}
