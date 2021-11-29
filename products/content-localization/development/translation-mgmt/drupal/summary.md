# Translation Management and XLIFF Export Via Drupal

### Setup Process

Running in a Github Codespace CMS instance, the Multilingual and Translation Management modules were installed. After modules installation, the configuration was updated to add Spanish as a translated language for all content. In addition to the core page content, the 'paragraph' types were also configured to allow Spanish language translation, otherwise the custom blocks of contents would  not be exported when XLF files were generated.

IMAGE OF CONTENT TRANSLATION CHECKBOXES

### Exporting XLIFF files

- Open a page in Drupal and navigate to the 'Translate" of the page. Check the box next to the desired language, and click the "Request Translation" button.

![Screen Shot 2021-11-29 at 2 03 02 PM](https://user-images.githubusercontent.com/8332986/143944387-3ffaaf97-df0b-4d8a-879a-31c98c93a22f.png)

- Label your translation job and make sure the target language dropdown is correct, then click the "Submit to provider" button.

![Screen Shot 2021-11-29 at 2 04 08 PM](https://user-images.githubusercontent.com/8332986/143944439-97b7860f-fe98-4b06-9825-0a3653ffd175.png)

- An export file for the translation will be generated, and you will be redirected to the main translate tab, and a link alert will be displayed for the file link. Right click on the download link and select the "Save link as..." option to save the XLF file in your desired location. Once the XLF file is downloaded it can be opened in a CAT tool like MateCat or emailed to translators.

![Screen Shot 2021-11-29 at 2 04 59 PM](https://user-images.githubusercontent.com/8332986/143944470-3c5eb693-196c-4d9a-9037-a74d75fac6be.png)



### Importing XLIFF files

- Open the translation job list by navigating to `/admin/tmgmt/jobs/` and selecting the translation job that you would like to import an XLIFF file for by clicking the 'Manage' button for the job.

![Screen Shot 2021-11-29 at 2 15 47 PM](https://user-images.githubusercontent.com/8332986/143944586-14d6f802-064a-4b8d-8db6-87b1cb7a4cba.png)


- Select the file and click 'Import'

![Screen Shot 2021-11-29 at 2 12 05 PM](https://user-images.githubusercontent.com/8332986/143944609-64f10a31-0cff-49d8-8af4-201b51910c8e.png)
