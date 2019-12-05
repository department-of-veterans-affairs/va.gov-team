# Wait Time Design and Content

Following status APIs have wait times

     - `pending_soc`
     - `pending_form9`
     - `pending_certification`
     - `pending_certification_ssoc`
     - `decision_in_progress`
     - `remand`
     - `remand_ssoc`

- Each of these statuses will have one or more `timeliness` attributes in their `details` object. This attribute will be an array with two integer values, like this: `[12, 16]`. Find all of these attribute names in #7023.

- Timeliness is shown as a gray box, with the values formatted as shown. This example shows how `[12, 16]` and `[1, 1]` should appear.

![example](https://user-images.githubusercontent.com/5375557/35489964-005dcb1a-046a-11e8-8a71-2f468d0aaaef.png)

### pending_soc

- `pending_soc` is the only example where the gray box appears above the bulleted next events.
- **Copy:** The Veterans Benefits Administration typically takes [between min and max months] months to review  new appeals.

![pending soc](https://user-images.githubusercontent.com/5375557/35490009-5e37d582-046a-11e8-8fd0-d52125bbed46.png)

### pending_form9, pending_certification, pending_certification_ssoc

- All three of these statuses use the same copy for the gray boxes.
- **Copy 1:** The Veterans Benefits Administration  typically takes [between min and max months] months  to transfer cases to the Board.
- **Copy 2:** The Veterans Benefits Administration  typically takes [between min and max months] months  to write additional Statements of the Case.

![pending certification](https://user-images.githubusercontent.com/5375557/35490037-b1b1218c-046a-11e8-900b-289bf9813c12.png)

### decision_in_progress

- **Copy:** The Board of Veterans’ Appeals typically  takes [between min and max months] to decide appeals once a judge starts their review.

![decision in progress](https://user-images.githubusercontent.com/5375557/35490076-fb0da6c0-046a-11e8-93a7-14d8252da1b9.png)

### remand

- **Copy:** The Veterans Benefits Administration  typically takes [between min and max months]  to complete remand instructions.

![remand](https://user-images.githubusercontent.com/5375557/35490100-21f19616-046b-11e8-8211-2932a087704a.png)

### remand_ssoc

- **Copy 1:** The Veterans Benefits Administration  typically takes [between min and max months]  to return cases to the Board.
- **Copy 2:** The Veterans Benefits Administration  typically takes [between min and max months]  to write additional Statements of the Case.

![remand ssoc](https://user-images.githubusercontent.com/5375557/35490116-4583ea20-046b-11e8-88dc-e1437f440716.png)
