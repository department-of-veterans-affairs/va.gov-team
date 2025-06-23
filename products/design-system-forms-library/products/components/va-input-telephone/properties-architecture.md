# Properties and Architecture for international phone number
## Properties

|   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|
|**Release**|**Name**|**Required**|**Type**|**Default Value**|**Platform**|**Description**|
|v1|contact|true|string|-|web/mobile|Specifies the phone number|
|v1|country|true|string|US|web/mobile|Two characters that specifie the country code for the phone number according to the ISO 3166 standard|

## Third Party Libraries

A primary development consideration is bundle size. Including data for hundreds of countries (phone number format/validation, flag) means the component size will be large. We will need to make use of optimized libraries to cut down the bundle size of the component as much as possible.  
  
**Formatting and validation**: [libphonenumber-js](https://www.npmjs.com/package/libphonenumber-js) is a popular Javascript port of Google’s phone number utilities for Android. It provides formatting and validation for 250+ countries. The bundle size for this library is about 80KB. This appears to be the best library for this purpose.

**Flag icons**: The component must be able to show 250+ country flags on load since a user might scroll through the whole list. The [flag-icons](https://www.npmjs.com/package/flag-icons) library contains SVG icons of all countries. It looks like it might be the de facto standard. We would need to make an optimized SVG sprite sheet similar to the one in va-icon. We might also experiment with making a WebP sprite sheet which would probably be smaller but lower in quality.

One question is whether, like va-icon we will need to copy the sprite sheet to the repos where is used. Unlike va-icon whatever sprite sheet is made is unlikely to change, so we wouldn’t have to worry about updates.

## Architecture Overview

Depending on the finalized design we should be able to make use of two existing DS components: va-combo-box and va-text-input. The markup for the va-international-telephone component will probably look something like:

```
<Host>
  <div class="va-international-telephone-wrapper">
    <va-combo-box label="Phone number" name="test">
      ...options...
    </va-combo-box>
    <va-text-input />
  </div>
</Host>
```

The flow of information from the selected country would travel up from va-combo-box to the parent va-international-telephone component before being passed down to va-text-input where formatting / validation would occur. The primary challenge with this setup is that some modifications will need to be made to the underlying components to match the designs. For example, the va-combo-box includes a X button to clear input, but this is not currently part of the va-international-telephone designs. In effect va-combo-box and va-text-input need to be aware if they are inside va-internationa-telephone and change accordingly.

## Future Considerations

It’s possible that we may need to support allowing teams to provide either a list of countries to include or exclude. We don’t have a use case for this yet but the component should be able to support this if it becomes important later.
