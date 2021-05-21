/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router.js'

describe('testing length of history stack from pushToHistory', () => {
    test('adds a settings state to history', () => {
        let length = history.length;
        expect(pushToHistory('settings')).toHaveLength(length + 1);
    });
    test('adds a entry state to history', () => {
        let length = history.length;
        expect(pushToHistory('entry', 3)).toHaveLength(length + 1);
    });
    test('adds a default state to history', () => {
      let length = history.length;
      expect(pushToHistory('default')).toHaveLength(length + 1);
    });
});

describe('testing current state of stack from pushToHistory', () => {
  test('adds a settings state to history', () => {
      expect(pushToHistory('settings').state).toMatchObject({ page: 'settings' });
  });
  test('adds a entry state to history', () => {
      expect(pushToHistory('entry', 3).state).toMatchObject({ page: 'entry3' });
  });
  test('adds a default state to history', () => {
    expect(pushToHistory('default').state).toMatchObject({ });
  });
});