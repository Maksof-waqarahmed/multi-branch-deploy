import '@testing-library/jest-dom';

// Node < 18 ke liye polyfill
import { webcrypto } from 'crypto';

if (!globalThis.crypto) {
  globalThis.crypto = webcrypto as unknown as Crypto;
}
