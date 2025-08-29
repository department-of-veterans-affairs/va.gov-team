## Andrews Aliases

### FSR Stuffs
```
alias fastcdp='yarn && yarn watch --env entry=auth,login-page,profile,static-pages,terms-of-use,verify,virtual-agent,combined-debt-portal'
alias fastfsr='yarn && yarn watch --env entry=auth,login-page,profile,static-pages,terms-of-use,verify,virtual-agent,request-debt-help-form-5655'
alias digital='yarn && yarn watch --env entry=auth,login-page,profile,static-pages,terms-of-use,verify,virtual-agent,dispute-debt'
alias fastdebt='yarn && yarn watch --env entry=auth,login-page,profile,static-pages,terms-of-use,verify,virtual-agent,combined-debt-portal,request-debt-help-form-5655,dispute-debt'

alias fsrcypress='yarn cy:run --spec "src/applications/financial-status-report/**/*.spec.js"'
alias fsrunit='yarn test:unit --app-folder financial-status-report --log-level=error'
alias cdpcypress='yarn cy:run --spec "src/applications/combined-debt-portal/**/*.spec.js"'
alias cdpunit='yarn test:unit --app-folder combined-debt-portal --log-level=error'## FSR Stuffs
alias fastcdp='yarn && yarn watch --env entry=auth,login-page,profile,static-pages,terms-of-use,verify,virtual-agent,combined-debt-portal'
alias fastfsr='yarn && yarn watch --env entry=auth,login-page,profile,static-pages,terms-of-use,verify,virtual-agent,request-debt-help-form-5655'
alias digital='yarn && yarn watch --env entry=auth,login-page,profile,static-pages,terms-of-use,verify,virtual-agent,dispute-debt'
alias fastdebt='yarn && yarn watch --env entry=auth,login-page,profile,static-pages,terms-of-use,verify,virtual-agent,combined-debt-portal,request-debt-help-form-5655,dispute-debt'

alias fsrcypress='yarn cy:run --spec "src/applications/financial-status-report/**/*.spec.js"'
alias fsrunit='yarn test:unit --app-folder financial-status-report --log-level=error'
alias cdpcypress='yarn cy:run --spec "src/applications/combined-debt-portal/**/*.spec.js"'
alias cdpunit='yarn test:unit --app-folder combined-debt-portal --log-level=error'```
