import '@testing-library/jest-dom';
import { webcrypto } from 'crypto';

// Polyfill crypto for Node < 20
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto as unknown as Crypto;
}
