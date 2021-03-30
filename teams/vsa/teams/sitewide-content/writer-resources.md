**Paste to Markdown Tool**\
Here's a quick way to convert a Word doc or other text to Markdown so that you keep all your formatting when pasting it into GitHub.
<http://euangoddard.github.io/clipboard2markdown/>

**Em-dash Command in Drupal**\
Shift+option+hyphen

**Finding a Piece of Drupal Content Fast**\
Click **Edit all** button under **Main Content** which opens all content for editing. Then click anywhere on the page, hit CTRL F, and type in the phrase you're looking for.

**Anchor Links**\
Here's an example that shows how to link to the h2 **A legacy appeal follows these steps** on the legacy appeals page (https://www.va.gov/decision-reviews/legacy-appeals/). 

1. In Drupal, open the page in preview and highlight the h2 you want to link to. Then (on a Mac) press **CTRL** while right clicking. On the menu, click **Inspect**. 

![image](https://user-images.githubusercontent.com/53535663/113006257-343a3b80-9143-11eb-82a2-2b5f75758aa8.png)

2. In the blue highlight, copy the h2 ID. You want everything inside the quotation marks. So, in this example, it's **a-legacy-appeal-follows-these**

![image](https://user-images.githubusercontent.com/53535663/113005324-6008f180-9142-11eb-976c-6d59850c3b57.png)

3. Put a # in front of it, then insert it at the end of the page url:
**https://www.va.gov/decision-reviews/legacy-appeals/#a-legacy-appeal-follows-these-**    
   

**View Tracked Changes in Drupal**\
In the revisions tab, click an older version you want to compare to. 

![image](https://user-images.githubusercontent.com/53535663/113008180-cf7fe080-9144-11eb-87c7-e93ba642b745.png)

Scroll to the bottom and click the **Compare selected revisions** button. 

![image](https://user-images.githubusercontent.com/53535663/113009064-9eec7680-9145-11eb-9ea7-f2cb1a6b6329.png)

Red and green highlights indicate revisions.
![image](https://user-images.githubusercontent.com/53535663/113009319-d529f600-9145-11eb-89d2-182ff87761b9.png)


**Adding aria labels to phone numbers**\
1. In **Edit** mode, select the phone number and unlink it. 
![image](https://user-images.githubusercontent.com/53535663/113010532-e9222780-9146-11eb-96de-99b4d9f3f608.png)

2. Select **Source**
![image](https://user-images.githubusercontent.com/53535663/113010670-0525c900-9147-11eb-91e6-433a3d218789.png)

3. Add the following href tag, replacing placeholder digits with phone number:
<a href="tel:18008271000" aria-label="8 0 0. 8 2 7. 1 0 0 0.">800-827-1000</a>

(In the aria label, the dots and spaces tell the screen reader to read the numbers slowly, as a phone number.)
![image](https://user-images.githubusercontent.com/53535663/113010959-48803780-9147-11eb-88da-c289885c4bc6.png)



