export function getStatusMessage(studentName = 'студент') {
  return `Готово к проверке: ${studentName}.`;
}

const canUseDom = typeof document !== 'undefined';
const statusNode = canUseDom ? document.querySelector('[data-status]') : null;

if (statusNode) {
  statusNode.textContent = getStatusMessage();
}
