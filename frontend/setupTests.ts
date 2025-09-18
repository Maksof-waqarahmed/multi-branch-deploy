import '@testing-library/jest-dom';
import { webcrypto } from 'node:crypto';

// Only assign if missing
if (!globalThis.crypto) {
    globalThis.crypto = webcrypto as unknown as Crypto;
}
