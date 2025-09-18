import '@testing-library/jest-dom';

async function polyfillCrypto() {
    if (!globalThis.crypto) {
        try {
            // Node 18+ built-in
            const { webcrypto } = await import('node:crypto');
            (globalThis as any).crypto = webcrypto;
        } catch (err) {
            // Node 16 fallback
            const { Crypto } = await import('@peculiar/webcrypto');
            (globalThis as any).crypto = new Crypto();
        }
    }
}

await polyfillCrypto();
