import { fakultet } from './fakultet.js';
import test from 'node:test';
import * as assert from "node:assert";

test('fakultet av 5 er 120', () => {
    assert.strictEqual(fakultet(5), 120);
})