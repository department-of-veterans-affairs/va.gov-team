# Getting Started with Screen Reader Testing

Screen readers are an important part of the accessibility testing process. Users with low, partial, or no vision depend on screen readers to interpret web pages and help them navigate.

Screen reader testing is an intensive, manual process. It involves subjective judgment--Is this link clear enough? Is this button the right input mechanism?--and takes a lot of time. The accessibility specialists are encouraging front-end engineers to do basic screen reader testing as part of their software development cycle. Our goal is to identify issues sooner and collaborate on solutions ahead of the staging accessibiltiy review.

## MacOS - VoiceOver and Safari

For users working on an Apple laptop or desktop, Safari and VoiceOver included in MacOS. You do not need to download any software to get started.

* Read the  [A11y Project's quick tip on keyboard navigation in MacOS](https://a11yproject.com/posts/macos-browser-keyboard-navigation/)
* Read the [VSP guide to using VoiceOver and Safari on MacOS](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/mac-voiceover-guide.md)

## Windows 10 - NVDA and Firefox

* Read the [WebAIM guide to getting started with NVDA](https://webaim.org/articles/nvda/)

* Download [Firefox latest](https://www.mozilla.org/en-US/firefox/). Firefox is the best browser to pair with NVDA.

* Download the [NVDA screen reader](https://www.nvaccess.org/download/)

* Add plugin(s) to NVDA to customize your experience

  > To install an add-on, go to the NVDA tools menu, then select manage add-ons. Then select install, navigate to the location where you saved the downloaded add-on and choose the add-on package you wish to install.
  >
  > [NVDA Community Add-ons Website](https://addons.nvda-project.org/index.en.html)

* [Focus Highlight plugin (recommended)](https://addons.nvda-project.org/addons/focusHighlight.en.html)

## Windows 10 - VirtualBox VM

If you want to test NVDA on an Apple or Linux device, you will need to create a virtual machine. Microsoft has removed support for Windows 7, so you will have to create a Windows 10 VM. This can significantly decrease performance on your machine; we recommend testing with all non-essential services and applications turned off.

* If you're working on a Mac: [VirtualBox MacOS build instructions]([https://www.virtualbox.org/wiki/Mac%20OS%20X%20build%20instructions](https://www.virtualbox.org/wiki/Mac OS X build instructions))
* If you're working on a Linux distro: [VirtualBox downloads for common distros](https://www.virtualbox.org/wiki/Linux_Downloads)
* [Download an official Windows 10 iso](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/) 
