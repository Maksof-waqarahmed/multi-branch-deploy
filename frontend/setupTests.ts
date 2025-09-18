import '@testing-library/jest-dom';

// Use proper DOM-compatible crypto polyfill
import { Crypto } from '@peculiar/webcrypto';

if (!globalThis.crypto) {
  // Safe assignment for jsdom
  globalThis.crypto = new Crypto() as unknown as Crypto;
}
