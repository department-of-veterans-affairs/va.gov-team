# Non-Latin Character Language Content Discovery

Languages such as Chinese that do not use a Latin based character set need to be considered when displaying translated content.

- Created Chinese language version of **Covid-19 Vaccines at VA** page
- Translated content blocks into simplified chinese via google translate as to provide a rough approximation of the translated content.
- Published Chinese language page at https://web-nwlghnqkwe3ftxcgy830jkfejcxjswak.demo.cms.va.gov/covid-19-vaccines-at-va-chinese

### Takeaways

- From a basic non-chinese speaking perspective, the content seems to display correctly and no major layout issues are apparent
- The Chinese content actually appears to be shorter than English content due to condensed glyphs and less character counts for sentences
- Font usage appears to be falling back to "PingFang SC" for the Chinese characters so there would need to be a decision made if that is the font that we want to be using.
- The general consensus is that using the fallback font or 'standard' operating system font may be the best option, as there can be a large amount of characters to support (upwards of 20,000 for Chinese!)
- This article describes some considerations when choosing fonts for Chinese language support: https://webdesign.tutsplus.com/articles/the-complete-beginners-guide-to-chinese-fonts--cms-23444

Example of rendered fallback font:
![Screen Shot 2021-11-03 at 9 19 04 AM](https://user-images.githubusercontent.com/8332986/140091853-44992a3a-a638-47bc-83a3-78e1ec053589.png)

- Line heights appear to be larger than English page version, but the font size may be a bit small considering how complex some Chinese glyphs can be.

![Screen Shot 2021-11-03 at 9 25 58 AM](https://user-images.githubusercontent.com/8332986/140091941-6cf96e53-51b3-456a-ae4c-a33c63d53e4d.png)

There are many resources online for guidelines to displaying translated text, and a more in depth review would need to be made by design, accessibility, and Chinese specific translator experts.

Some helpful urls:

- https://www.w3.org/International/articles/css3-text
- https://www.w3.org/International/articles/article-text-size
- https://weglot.com/9-tips-for-designing-a-multi-language-website

### Main areas of focus for introducing non-latin language support

- Choose an initial language (chinese, korean, etc) to focus on for first pages
- Update design system and have design work done to include adaptations for the chosen language.
  - Update font usage if needed
  - Update spacing, line height, and other general layout differences
  - Use some sort of global parent class `.lang-zh` to handle nested styling of language dependent layout changes
  - Audit/update main web-components and design system for new language
- Update react widget to support the URLs for new language pages
- Update accessibility code to support new language pages
