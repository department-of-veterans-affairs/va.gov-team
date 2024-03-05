# Nametag Use Cases
**Last updated - February 26, 2024 - added Figma**

__[Figma mockups](https://www.figma.com/file/takD53OoltCjdlmGBwK3DH/Sketch-Archive---Authenticated-Experience?type=design&node-id=1%3A3754&mode=design&t=AjnTodamOvCVzRFF-1)__

The nametag displays the logged in users legal name. If available, it'll also display:
- most recent military branch
- disability rating

It will appear for users when:
- Someone is LOA3 (identity verified), except when there are MPI errors or legal name endpoint does not load (use cases listed below).
- Someone is LOA3 but the Profile is blocked (fiduciary flag/marked as incompetent/deceased).

The nametag will not appear if:

- If someone is LOA1 (not identity verified).
- Legal/full name endpoint does not load.
- Profile encounters MPI errors.
