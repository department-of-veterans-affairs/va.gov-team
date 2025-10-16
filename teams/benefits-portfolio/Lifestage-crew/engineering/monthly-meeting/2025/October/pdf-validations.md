## Screenshots
### Pensions PDF before edits

#### Example of a yes/no radio
|<img width="800" alt="Pensions PDF before edits" src="https://github.com/user-attachments/assets/db187fdf-ce6e-4c8a-80ec-6b073e9d7319" />
|-

#### Inconsistency between yes/no radios and other radios
|<img width="375" alt="Inconsistency between different radio types" src="https://github.com/user-attachments/assets/b0ea9817-be75-49e0-9bc3-5c0c60633495" />
|-

### Pensions PDF after edits
#### Consistency between yes/no radios and other radios
|<img width="375" alt="Pensions PDF after edits" src="https://github.com/user-attachments/assets/cc00316c-9d8e-4e19-a0a4-4207706db92f" />
|-

### PDF fill code changes
#### Before
```ruby
# Convert an objects truthiness to a radio yes/no.
def to_radio_yes_no(obj)
  obj ? 1 : 2 # <-- Change this
end
```

#### After
```ruby
# Convert an objects truthiness to a radio yes/no.
def to_radio_yes_no(obj)
  obj ? 0 : 1 # <-- To this
end
```

### Running rspec
#### Terminal output
|<img width="1000" alt="Rspec run" src="https://github.com/user-attachments/assets/13e5b1e6-a8b0-4199-b048-828f1b2ca5ca" />
|-

### Visual inspection
#### Fixture spec (Expected)
|<img width="1000" alt="kitchen_sink fixture" src="https://github.com/user-attachments/assets/25644c3d-7702-4d9d-a6aa-354f6276d8ea" />
|-

#### Generated during test run (Actual)
|<img width="1000" alt="kitchen_sink generated via Rspec specs" src="https://github.com/user-attachments/assets/2691dceb-69c7-49ce-a3f2-733cff8629e5" />
|-
