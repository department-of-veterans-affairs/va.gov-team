# outline

1. [Building from CMS locally with a specific FE build](#building-cms-locally-with-a-specific-fe-build)


## Building CMS locally with a specific FE build

To connect your local build to a specific front end build, alter it in your composer.json here

```
 "source": {
                    "url": "https://github.com/department-of-veterans-affairs/vets-website",
                    "type": "git",
 +                  "reference": "e76d8b6e1ae5fddc9c3f629b76c082e2d956ee8f"
 -                  "reference": "bf54229be12badf4078abab5ae156f30ce6908f9"
                }

```
Then followup with a `composer update --lock` and `lando test` will build the FE with the new hash.

