# Legacy address forwarding

This small static site forwards **theusapartyswitch.com** to **[American Political History](https://americanpoliticalhistory.org/)**. It contains no atlas data, account information, analytics or external dependencies.

## GitHub Pages

Publish the repository's **main** branch from its **root (`/`)**. The `CNAME` file specifies `theusapartyswitch.com` as the custom domain. `.nojekyll` disables Jekyll processing. Configure that custom domain and its DNS for GitHub Pages separately; these files do not change DNS or hosting settings.

## Redirect behavior

Both `index.html` and GitHub Pages' custom `404.html` load `/redirect.js` synchronously. The absolute script URL also works when a visitor opens a nested path handled by the custom 404 page. `location.replace` redirects without adding the old address to the browser's history.

The script always starts with the fixed target origin `https://americanpoliticalhistory.org/`, then assigns the old pathname, query string and fragment separately. This preserves timeline fragments and other deep links while preventing an old path, query or fragment from replacing the target hostname. The exact root path `/index.html` becomes `/`; other paths are retained.

For example, `https://theusapartyswitch.com/?lesson=1964#y=1964&view=atlas` becomes `https://americanpoliticalhistory.org/?lesson=1964#y=1964&view=atlas`.

When JavaScript is disabled, the `noscript` meta refresh forwards to the new site's root. That static fallback cannot reconstruct the old path, query and fragment. The visible, keyboard-accessible link also leads to the new root. No active meta refresh competes with JavaScript when scripting is enabled.

This is browser forwarding, not a server-issued HTTP 301 redirect. The custom 404 page can retain a 404 response status while its script forwards the visitor.
