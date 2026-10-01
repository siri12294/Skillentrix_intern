import { SHEETS_URL } from './config'
const KEY = 'portfolio_responses'
const local = () => { try { return JSON.parse(localStorage.getItem(KEY)) || [] } catch { return [] } }

export async function saveResponse(data) {
  const entry = { ...data, timestamp: new Date().toISOString() }
  localStorage.setItem(KEY, JSON.stringify([entry, ...local()]))
  if (SHEETS_URL) {
    try { await fetch(SHEETS_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify(entry) }) } catch (e) { console.error(e) }
  }
  return entry
}
export async function loadResponses() {
  if (SHEETS_URL) {
    try { const r = await fetch(SHEETS_URL); const d = await r.json(); return d.reverse() } catch (e) { console.error(e) }
  }
  return local()
}
