import { useState } from 'react'

type CategoryPageProps = { title: string; icon: string }

type Item = { id: string; title: string; notes?: string }

export function CategoryPage({ title, icon }: CategoryPageProps) {
  const [items, setItems] = useState<Item[]>([])
  const [newTitle, setNewTitle] = useState('')
  const [open, setOpen] = useState(false)

  return (
    <div className="mx-auto max-w-screen-xl px-6 md:px-10 py-10">
      <div className="flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      <p className="text-gray-600 mt-1">Add new items and manage your {title.toLowerCase()}.</p>

      <div className="mt-6 flex items-center gap-3">
        <button onClick={() => setOpen(true)} className="rounded-xl bg-indigo-600 text-white px-4 py-3 hover:bg-indigo-500 hover-lift">Add {title.slice(0, -1)}</button>
        <div className="text-sm text-gray-600">{items.length} total</div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-4" role="dialog" aria-modal>
          <div className="w-full max-w-md rounded-2xl glass-card p-6">
            <h2 className="text-lg font-semibold">Add {title.slice(0, -1)}</h2>
            <div className="mt-4 space-y-3">
              <input
                autoFocus
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder={`Title`}
                className="w-full rounded-xl border px-4 py-3"
              />
              <div className="flex justify-end gap-2">
                <button onClick={() => setOpen(false)} className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50 hover-lift">Cancel</button>
                <button
                  onClick={() => {
                    if (!newTitle.trim()) return
                    setItems((prev) => [{ id: crypto.randomUUID(), title: newTitle.trim() }, ...prev])
                    setNewTitle('')
                    setOpen(false)
                  }}
                  className="rounded-xl bg-indigo-600 text-white px-4 py-2 text-sm hover:bg-indigo-500 hover-lift"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 space-y-3">
        {items.length === 0 && (
          <p className="text-sm text-gray-600">No items yet.</p>
        )}
        {items.map((item) => (
          <div key={item.id} className="rounded-xl glass-card p-4 flex items-center justify-between hover-lift">
            <div className="font-medium">{item.title}</div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setItems((prev) => prev.filter((i) => i.id !== item.id))}
                className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-50 hover-lift"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


