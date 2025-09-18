import '@testing-library/jest-dom';
import { webcrypto } from 'crypto';

// Node <20 ke liye polyfill
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto as unknown as Crypto;
}

// kuch libraries specifically `crypto.subtle` expect karti hain
if (!globalThis.crypto.subtle) {
  // agar subtle missing hai to ek dummy subtleCrypto de dete hain
  (globalThis.crypto as any).subtle = {
    digest: async () => new ArrayBuffer(0),
    generateKey: async () => ({}),
    sign: async () => new ArrayBuffer(0),
    verify: async () => true,
    encrypt: async () => new ArrayBuffer(0),
    decrypt: async () => new ArrayBuffer(0),
    deriveKey: async () => ({}),
    deriveBits: async () => new ArrayBuffer(0),
    exportKey: async () => ({}),
    importKey: async () => ({}),
    wrapKey: async () => new ArrayBuffer(0),
    unwrapKey: async () => ({}),
  };
}
