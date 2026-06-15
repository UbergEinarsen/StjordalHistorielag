/* Small shared presentational helpers ported from the design. */

export const SecOrn = () => (
  <div className="sec-orn">
    <span className="sec-orn-d"></span>
  </div>
)

export const FolkBorder = () => <div className="folk-border"></div>

/* Replicates the design's <img> error fallback: hide the broken image and
   paint a hatched parchment placeholder on its frame. */
export function onImgError(e) {
  const t = e.target
  const w = t.closest('.art-img, .album-thumb, .album-cover, .pub-cover, .gallery-item, .detail-hero-img')
  if (w && w !== t) {
    w.style.background = 'repeating-linear-gradient(135deg,#DDD0B5 0,#DDD0B5 8px,#EDE3CC 8px,#EDE3CC 16px)'
    t.style.visibility = 'hidden'
  }
}
