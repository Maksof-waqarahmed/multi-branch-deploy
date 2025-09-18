import '@testing-library/jest-dom';

try {
  if (!globalThis.crypto) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { webcrypto } = require('crypto');
    globalThis.crypto = webcrypto;
  }
} catch (err: any) {
  // fallback for Node < 18
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const crypto = require('crypto-browserify');
  globalThis.crypto = crypto;
}
