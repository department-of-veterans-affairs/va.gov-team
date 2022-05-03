# Visual Regression Testing

This is the first iteration of visual regression testing. It is useful to detect side effects or scope of visual changes.

It works by gathering the links for the site using the sitemap, then opening an chromium instance using Puppeteer to navigate throughout the site, capturing an image of each page. The developer must first create the baseline image set for comparisons (sometimes called the golden set), then after making their changes, run an additional task to make the comparison.

# How to use
1. **Start the local website instance**
2. **Generate your baseline/golden image set for desktop with the following command** 
    - `npm run test:visual:baseline`
    - Note - These images should be generated before your changes, so you may want to switch to the main branch before running this command. This will create the directory `site-root/logs/visual-regression/baseline/desktop` with all of the website images.
3. **Generate your baseline/golden image set for mobile with the following command** 
    - `npm run test:visual:baseline -- --mobile`
    - Note - These images should be generated before your changes, so you may want to switch to the main branch before running this command. This will create the directory `site-root/logs/visual-regression/baseline/mobile` with all of the website images.
3. **Make your changes**
4. **Run the visual regression test for desktop**
    - `npm run test:visual`
    - Screenshots of the website (updated to have your changes) will be stored in memory and compared to the baseline images created in step 3. If the images are different, a "diff" image will be generated and stored in the `site-root/logs/visual-regression/diffs/desktop` directory
    - All pages that have changed will be outputted as test case failures
5. **Run the visual regression test for mobile**
    - `npm run test:visual -- mobile`
    - Screenshots of the website (updated to have your changes) will be stored in memory and compared to the baseline images created in step 3. If the images are different, a "diff" image will be generated and stored in the `site-root/logs/visual-regression/diffs/mobile` directory
    - All pages that have changed will be outputted as test case failures

# Limitations/ideas going forward
Right now this is really limited to being useful for the developer, which I think is a good foundation if we decide to expand on it. Some thoughts -
1. All screenshots are stored in a git-ignored directory
    - All images are stored in `logs/visual-regression`, with two subdirectories, one being for the baseline and the other for diffs. This was the minimal implementation and what I considered to be a good stopping point for the first iteration.
    - Do we want to include them in version control? And if so, will we store images using the commit SHA?
2. Tests fail on all pages that don't match the baseline
    - This means that intentionally-changed pages are detected as test failures the same as pages that may have been changed visually as an unintended side affect. 
    - If we want to plug this into our build pipeline, this will have to be addressed, meaning that we'll need a way for developers to sign off on pages that were intentionally changed.
3. Does not scroll or resize the browser window
    - This means that with this current implementation, we're only testing it on the desktop viewport. It wouldn't be very difficult to change the window size and take new screenshots as part of the automated tests but I wanted to avoid overkill on the first iteration.
4. Uses the sitemap to navigate throughout the site
    - Pages not included in the sitemap will not be evaluated by this tool. 
5. Does not interact with the page at all
    - This means that style for elements that are visible only after certain user interactions will not be evaluated.
