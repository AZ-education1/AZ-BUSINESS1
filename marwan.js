document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};


function noMenu() {
  return false;
}
function disableCopyPaste(elm) {
  // Disable cut/copy/paste key events
  elm.onkeydown = interceptKeys
  // Disable right click events
  elm.oncontextmenu = function() {
    return false
  }
}
function interceptKeys(evt) {
  evt = evt||window.event // IE support
  var c = evt.keyCode
  var ctrlDown = evt.ctrlKey||evt.metaKey // Mac support
  // Check for Alt+Gr (http://en.wikipedia.org/wiki/AltGr_key)
  if (ctrlDown && evt.altKey) return true
  // Check for ctrl+c, v and x
  else if (ctrlDown && c==67) return false // c
  else if (ctrlDown && c==86) return false // v
  else if (ctrlDown && c==88) return false // x
  // Otherwise allow
  return true
}














