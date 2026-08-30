---
title: "Bir XSS Turu: Temelden Az Bilinene 9 Farklı Senaryo"
summary: "XSS'in sadece <script>alert(1)</script> ile sınırlı olmadığını göstermek için izole lab ortamlarında test ettiğim 9 senaryoyu ele aldığım ilk Medium yazım."
date: 2026-08-30
category: yazi
---

İlk Medium yazım yayında. XSS'in sadece `<script>alert(1)</script>` ile sınırlı olmadığını göstermek için izole lab ortamlarında test ettiğim 9 senaryo sonucunda öğrendiklerimi ele aldım:

- Reflected XSS
- Stored XSS (cookie çalma ile oturum ele geçirme)
- DOM Tabanlı XSS
- Attribute-Context XSS
- `href` Özniteliği ve `javascript:` Şeması
- `href` Özniteliğinden Klasik Kaçış
- HTTP Başlıkları Üzerinden Stored XSS
- Yüklenen Dosya Adı Üzerinden Stored XSS

Yazının tamamı → [Medium'da oku](https://medium.com/@aliayyildiz3/bir-xss-turu-temelden-az-bilinene-9-farklı-senaryo-b5d820461e5f)
