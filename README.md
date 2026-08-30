# websitem

Ali Ayyıldız'ın kişisel sitesi — [as-ayyildiz.github.io/websitem](https://as-ayyildiz.github.io/websitem/)

Astro ile kurulu. `main` dalına yapılan her push, GitHub Actions üzerinden otomatik olarak GitHub Pages'e deploy edilir.

## Komutlar

| Komut             | Ne yapar                          |
| ------------------ | ---------------------------------- |
| `npm install`       | Bağımlılıkları kurar               |
| `npm run dev`       | `localhost:4321`'de geliştirme sunucusu başlatır |
| `npm run build`     | `./dist/` içine production build alır |
| `npm run preview`   | Build'i yerelde önizler            |

## İçerik ekleme

- **Tefekkür Köşesi**: `src/content/tefekkur/` içine yeni bir `.md` dosyası ekle (frontmatter: `quote`, `author`, `work`, `note`, `date`).
- **Siber Güvenlik**: `src/content/siber-guvenlik/` içine yeni bir `.md` dosyası ekle (frontmatter: `title`, `summary`, `date`, `tags`), yazının gövdesini dosyanın altına Markdown olarak yaz.
- **Projeler**: `src/data/projects.ts` içindeki diziye yeni bir proje ekle.
