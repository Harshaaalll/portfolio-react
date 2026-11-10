// Injects a page's original stylesheet while that page is mounted, so the two
// pages (which define overlapping selectors) never leak styles into each other.
export default function PageStyle({ css }) {
  return <style dangerouslySetInnerHTML={{ __html: css }} />
}
