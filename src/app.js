export function getStatusMessage(studentName = 'студент') {
  return `Готово к проверке: ${studentName}. CI/CD запускает тест и затем обновляет сервер.`;
}

const canUseDom = typeof document !== 'undefined';
const statusNode = canUseDom ? document.querySelector('[data-status]') : null;

if (statusNode) {
  statusNode.textContent = getStatusMessage();
}
