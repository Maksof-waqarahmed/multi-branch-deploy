// frontend/setupTests.ts

import '@testing-library/jest-dom';
import { webcrypto } from 'node:crypto';

declare global {
  // Ensure TypeScript knows about global crypto with DOM's Crypto type
  var crypto: Crypto;
}

if (!globalThis.crypto) {
  // Node's webcrypto type differs slightly from lib.dom (e.g., Ed25519 overloads).
  // Cast to DOM Crypto to satisfy TypeScript while using Node implementation in tests.
  Object.defineProperty(globalThis, 'crypto', {
    value: webcrypto as unknown as Crypto,
    configurable: true,
    writable: true,
  });
}