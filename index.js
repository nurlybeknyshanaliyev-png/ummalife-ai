import { Platform } from 'react-native';
import { polyfillWebCrypto } from 'expo-standard-web-crypto';

// 1. Polyfill DOMException immediately (Hermes compatibility)
if (Platform.OS !== 'web' && typeof global.DOMException === 'undefined') {
  class DOMExceptionPolyfill extends Error {
    constructor(message = 'DOM Exception', name = 'Error') {
      super(message);
      this.name = name;
      this.code = 0;
    }
  }
  global.DOMException = DOMExceptionPolyfill;
}

// 2. Polyfill Web Crypto API
if (Platform.OS !== 'web') {
  polyfillWebCrypto();
}

// 3. Hand over to Expo Router
import 'expo-router/entry';
