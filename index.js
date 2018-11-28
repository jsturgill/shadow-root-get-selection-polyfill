/**
 * Provide missing shadowRoot.getSelection implementation
 *
 * Sparked by an attempt to solve an issue with {@link https://github.com/ProseMirror/prosemirror/issues/476 prosemirror in shadow dom}.
 *
 * The fix is inspired by changes made to support Shadow DOM in {@link https://github.com/arsnebula/quill/commit/a6489a626f0e5d186ea9114d64efd0a3e1c44186#diff-ae237139107d046c67dc8622d25bace9 quilljs}.
 *
 * Current browsers that do not provide a `shadowRoot.getSelection` implementation (Firefox! Safari!) return an appropriate value from `document.getSelection`.
 *
 * Safari hasn't moved on this for {@link https://bugs.webkit.org/show_bug.cgi?id=163921 2 years}! Amazing.
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
