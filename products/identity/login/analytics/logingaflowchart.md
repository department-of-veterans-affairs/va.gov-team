## Updated login GA flowchart (2.11.19)
![screen shot 2019-02-08 at 11 07 08 am](https://user-images.githubusercontent.com/786704/52500002-b6e19480-2b91-11e9-8d24-c8af2fc91b12.png)

Generated with https://mermaidjs.github.io/mermaid-live-editor

Flowchart code:
```
graph TD 

Z[login-link-clicked-header]-->A
Y[login-link-clicked-forms]-->A
A[login-modal-opened] --> B[login-link-clicked-modal]
B -->C[login-link-opened]
C -->D[login-attempted-dslogon]
A -->I[login-modal-closed]
D -->E[login-success-dslogon]
C -->F[login-attempted-mhv]
F -->K[login-success-myhealthevet]
C -->H[login-attempted-idme]
H--> J[login-success-idme]
A-->M[register-link-clicked]
M-->N[register-link-opened]
N-->W[register-success-idme]
W-->L
E--> L[login-loa-current-**LOA**]
K-->L
J-->L
```

