// "background:var(--accent3);" -> { background: 'var(--accent3)' }
export function styleFrom(str = '') {
  const out = {}
  str
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean)
    .forEach((decl) => {
      const i = decl.indexOf(':')
      if (i < 0) return
      const prop = decl.slice(0, i).trim()
      const value = decl.slice(i + 1).trim()
      const key = prop.startsWith('--') ? prop : prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
      out[key] = value
    })
  return out
}
