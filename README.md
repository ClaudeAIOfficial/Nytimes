# Local New York Times Homepage Clone

A locally runnable **front-end snapshot** built from the supplied ZIP. This is an unofficial demo and is not affiliated with The New York Times.

## Run

From this folder, launch a small local HTTP server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser. Alternatively, open `index.html` directly, though in-browser search suggestions may require HTTP because they load `articles.json`.

## Included

- Homepage HTML with its layout/styles and image assets, cleaned to remove the original analytics scripts, cookie popups, and advertisement trackers.
- Fixed missing stylesheet references in the archived HTML.
- Local pages for the homepage's `pages/*.html` links.
- Searchable local headline index (`search.html`), mobile sections menu, and keyboard search shortcut (Ctrl/Cmd+K).

## Limitations

This snapshot captures one date, not real-time news. The supplied archive did **not** contain original article pages or the live platform backend. Generated story pages therefore show the homepage headline/summary only, while category pages use the available archive headlines. Links to outside sites may still open externally. No authentication, subscription transactions, or official NYT services are replicated.

No client-side tracking is added. This demo should not be presented as an official New York Times publication or used for credentials or payments.

## Newly added feature

- **Could “Human Error” Become the Biggest Anti-AI Movement Yet?**: `pages/human-error-anti-ai-movement.html`
- The new story is featured at the top of the local homepage and indexed by local search.
- `human-error-article.md` provides editable source text.
- This is an independent draft within a demo; it has not been published to a live newspaper website.