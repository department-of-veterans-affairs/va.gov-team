/**
 * Polyfill for toBlob support from canvas elements on IE and Edge
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob
 * @name platform/polyfills/canvas-toBlob
 */

if (!HTMLCanvasElement.prototype.toBlob) {
  Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
    value(callback, type, quality) {
      const canvas = this;
      setTimeout(() => {
        const binStr = atob(canvas.toDataURL(type, quality).split(',')[1]);
        const len = binStr.length;
        const arr = new Uint8Array(len);

        for (let i = 0; i < len; i++) {
          arr[i] = binStr.charCodeAt(i);
        }

        callback(new Blob([arr], { type: type || 'image/png' }));
      });
    }
  });
}
