// Make this an ambient declaration file
export {}; // this makes the file an external module

// Augment globalThis for all Node versions
declare global {
  var crypto: Crypto;
}
