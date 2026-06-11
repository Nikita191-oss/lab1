export function getStatusMessage(studentName = 'Никита') {
  return `${studentName}`;
}

const canUseDom = typeof document !== 'undefined';
const statusNode = canUseDom ? document.querySelector('[data-status]') : null;

if (statusNode) {
  statusNode.textContent = getStatusMessage();
}
