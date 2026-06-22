# Enes Demirel Blog + SEO Site Paketi

Bu paket, Enes Demirel markası için premium tek sayfa siteye blog sistemi ve temel SEO dosyaları eklenmiş tam sürümdür.

## Dosya Yapısı

```text
enesdemirel-blog-seo/
├── index.html
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
└── blog/
    ├── index.html
    ├── enes-demirel-kimdir.html
    ├── fikirden-dijital-projeye.html
    └── dijital-gorunurluk-nedir.html
```

## Ne Eklendi?

- Blog liste sayfası: `/blog/`
- 3 adet SEO odaklı blog yazısı
- Ana hedef yazı: `/blog/enes-demirel-kimdir.html`
- Blog içi arama kutusu
- Site içi bağlantılar
- Her sayfada title, description, canonical ve Open Graph etiketleri
- Person, WebSite ve BlogPosting JSON-LD schema yapısı
- `sitemap.xml`
- `robots.txt`

## Yayına Alma

1. Bu klasördeki tüm dosyaları hosting veya GitHub Pages reposuna yükle.
2. `index.html`, `style.css`, `script.js`, `robots.txt`, `sitemap.xml` kök dizinde kalmalı.
3. `blog` klasörü kök dizinde kalmalı.
4. Domain `https://enesdemirel.com/` üzerinden çalışıyorsa linkler hazırdır.
5. Farklı domain kullanılacaksa tüm `https://enesdemirel.com/` geçen alanları yeni domainle değiştir.

## SEO İçin Yapılması Gerekenler

1. Google Search Console'a domain mülkü olarak ekle.
2. `sitemap.xml` dosyasını Search Console üzerinden gönder.
3. Ana sayfa ve `blog/enes-demirel-kimdir.html` sayfası için URL denetimi yapıp dizine ekleme iste.
4. Instagram bio kısmına `https://enesdemirel.com/` linkini ekle.
5. GitHub, LinkedIn, YouTube gibi profillerde web sitesi olarak aynı domaini kullan.
6. Bloga haftada 1 gerçek ve özgün yazı ekle.
7. Yeni yazı ekledikçe `blog/index.html` ve `sitemap.xml` dosyasını güncelle.

## Yeni Blog Yazısı Ekleme

1. `blog/` klasöründe yeni bir `.html` dosyası oluştur.
2. Eski blog yazılarından birini kopyala.
3. Title, description, canonical, h1, içerik ve schema alanlarını değiştir.
4. `blog/index.html` içine yeni yazı kartı ekle.
5. `sitemap.xml` içine yeni yazının URL'sini ekle.

## Not

Bu sistem statik blog sistemidir. Admin panelden yazı ekleme istenirse WordPress, Strapi, Sanity, Firebase veya özel PHP/MySQL panel yapılabilir.
