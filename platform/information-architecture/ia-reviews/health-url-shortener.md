# IA Design and Recommendations
**STATUS:  COMPLETE**

**Team:** Health appointments 

**Product/Featue:** ULR shortener

**IA Request:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/33449


## Notes and requirements <br>

- The team working on the appointment check-in experience is building a URL shortener service so that links to the check-in experience, delivered via text, are not extensively long.  
- This will essentially be a beta version of a URL shortener service and requirements were established to support this particular use (appointment check-in) only.  
- Use of this URL shortening service for any other product or user flow must be evaluated prior to using. 


Here are high level decisions made:
- this initial solution will only apply to the appointment URLs used for the check-in and pre-check-in scenarios. This solution will need to be reviewed for necessarily modifications to support any other use case or VA product.
- We will utilize a sub-directory structure for these short URLs that includes a single character sub-directory and a unique random character set: www.va.gov/h/xxxxxx
  - www.va.gov/h/ for "health" was originally recommended, the team chose to use www.va.gov/c/ for "check-in"
- We will want to avoid users getting the generic 404 when possible
  - users trying to view the base sub-directory www.va.gov/a/ should be redirected to either the home page or a custom error page.
  - users trying to access an invalid/expired short URL should be either redirected to the home page or a custom error page.
- These shortened URLs should not be tagged or included in analytics
- These shortened URLs should not be indexed


