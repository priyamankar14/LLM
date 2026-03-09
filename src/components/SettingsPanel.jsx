export default function SettingsPanel() {
  return (
    <div className="h-full p-5 space-y-6">

      <h2 className="text-lg font-semibold">Context & Settings</h2>

      <button className="w-full py-2 rounded-lg border hover:bg-gray-100">
        Clear Context
      </button>

      <div>
        <label className="text-sm font-medium">Temperature</label>
        <input type="range" min="0" max="1" step="0.1" className="w-full" />
      </div>

      <div>
        <label className="text-sm font-medium">Max Tokens</label>
        <input type="number" defaultValue={2000}
          className="w-full border rounded-lg px-3 py-2" />
      </div>

      <div className="flex justify-between items-center">
        <span>RAG Retrieval</span>
        <input type="checkbox" defaultChecked />
      </div>

      <div className="flex justify-between items-center">
        <span>Web Search</span>
        <input type="checkbox" />
      </div>

    </div>
  );
}
