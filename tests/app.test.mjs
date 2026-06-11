import test from 'node:test';
import assert from 'node:assert/strict';
import { getStatusMessage } from '../src/app.js';

test('getStatusMessage returns default student name', () => {
  assert.equal(getStatusMessage(), 'Никита');
});
