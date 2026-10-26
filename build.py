import hashlib
from pathlib import Path
D = Path(__file__).parent
css = (D/'fonts/fonts.css').read_text()+'\n'+(D/'style.src.css').read_text()
(D/'style.css').write_text(css)
h = lambda b: hashlib.md5(b).hexdigest()[:8]
html = (D/'src.html').read_text().replace('{{css}}',h(css.encode())).replace('{{js}}',h((D/'main.js').read_bytes()))
(D/'index.html').write_text(html); (D/'robots.txt').write_text('User-agent: *\nDisallow: /\n'); print('ok')
