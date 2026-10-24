// Minimal preview shim for .dc.html design files (screenshot rendering only).
window.DCLogic = class { constructor(props) { this.props = props || {}; } renderVals() { return {}; } };
function dcGet(path, scope) {
  path = path.trim();
  if (path === 'false') return false;
  if (path === 'true') return true;
  return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), scope);
}
function dcInterp(str, scope) {
  return str.replace(/\{\{([^}]+)\}\}/g, (_, p) => { const v = dcGet(p, scope); return v == null ? '' : String(v); });
}
function dcRender(node, scope) {
  if (node.nodeType === 3) { if (node.nodeValue.includes('{{')) node.nodeValue = dcInterp(node.nodeValue, scope); return; }
  if (node.nodeType !== 1) return;
  const tag = node.tagName.toLowerCase();
  if (tag === 'sc-for') {
    const m = node.getAttribute('list').match(/\{\{([^}]+)\}\}/);
    const list = (m ? dcGet(m[1], scope) : []) || [];
    const as = node.getAttribute('as');
    const frag = document.createDocumentFragment();
    list.forEach((item, i) => {
      node.childNodes.forEach(ch => {
        const c = ch.cloneNode(true);
        const holder = document.createElement('div'); holder.appendChild(c);
        dcRender(c, Object.assign({}, scope, { [as]: item, index: i }));
        while (holder.firstChild) frag.appendChild(holder.firstChild);
      });
    });
    node.replaceWith(frag);
    return;
  }
  if (tag === 'sc-if') {
    const m = node.getAttribute('value').match(/\{\{([^}]+)\}\}/);
    const ok = !!(m ? dcGet(m[1], scope) : false);
    if (!ok) { node.remove(); return; }
    const kids = [...node.childNodes];
    kids.forEach(k => dcRender(k, scope));
    node.replaceWith(...node.childNodes);
    return;
  }
  for (const a of [...node.attributes]) if (a.value.includes('{{')) a.value = dcInterp(a.value, scope);
  [...node.childNodes].forEach(ch => dcRender(ch, scope));
}
document.addEventListener('DOMContentLoaded', () => {
  const s = document.querySelector('script[data-dc-script]');
  let props = {};
  try {
    const dp = JSON.parse(s.getAttribute('data-props') || '{}');
    for (const [k, v] of Object.entries(dp)) if (k[0] !== '$' && v && 'default' in v) props[k] = v.default;
  } catch (e) {}
  const Component = new Function('DCLogic', s.textContent + '\nreturn Component;')(window.DCLogic);
  const vals = new Component(props).renderVals() || {};
  const root = document.querySelector('x-dc');
  const helmet = root.querySelector('helmet');
  if (helmet) { [...helmet.childNodes].forEach(n => document.head.appendChild(n)); helmet.remove(); }
  [...root.childNodes].forEach(ch => dcRender(ch, vals));
  root.style.display = 'block';
  window.__dcDone = true;
});
