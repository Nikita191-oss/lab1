import test from 'node:test';
import assert from 'node:assert/strict';
import { getStatusMessage } from '../src/app.js';

test('getStatusMessage returns a deploy-ready string', () => {
  assert.equal(getStatusMessage('Алексей'), 'Готово к проверке: Алексей.');
});
