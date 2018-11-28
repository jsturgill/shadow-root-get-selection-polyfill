/**
 * Provides missing shadowRoot.getSelection implementation
 *
 * Usage:
 *
 * <pre><code>
 * import { patch } from 'shadow-root-get-selection-polyfill';
 * patch();
 * </pre></code>
 */
export function patch() {
    if (
        typeof ShadowRoot !== 'undefined' &&
        typeof ShadowRoot.getSelection === 'undefined'
    ) {
        ShadowRoot.prototype.getSelection = function() {
            return document.getSelection();
        };
        console.log('added ShadowRoot.getSelection');
    }
}
