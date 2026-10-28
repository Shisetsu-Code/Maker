/**
 * classic-lobby / demo-game-request.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Declarations only; importing this module does not start the view.
 */
function normalizeDemoGameRequest(e) {
  if (!e || typeof e != `object`) return null;
  let t = e;
  if (t.demo !== !0) return null;
  let n = typeof t.vendorCode == `string` ? t.vendorCode.trim() : ``,
    r = typeof t.gameCode == `string` ? t.gameCode.trim() : ``;
  return !n || !r || n.length > 120 || r.length > 120
    ? null
    : {
        demo: !0,
        vendorCode: n,
        gameCode: r,
        channel: t.channel === `mobile` ? `mobile` : `desktop`,
      };
}
export { normalizeDemoGameRequest };
