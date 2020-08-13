
The ruby FHIR client is usefull for exploring FHIR types of resources such as Questionnaires and QuestionnairResponses. It could be used initially to help create Question types of resources in JSON and validating them etc.

#### Authorization

- The client supports OAuth2
- There is some documentation that says the method set_oauth2_auth actually sets it to use open Id connect. This looks like an important layer for smart fhir and the same authorization that lighthouse uses. https://www.rubydoc.info/gems/fhir_client/FHIR/Client#set_oauth2_auth-instance_method Some details of smart on fhir and open ID connect are mentioned here https://smilecdr.com/docs/security/smart_on_fhir_introduction.html. 

#### Downsides of using a FHIR client

- It may be that the client helps to make authorization transparent but it is also possible that it means a login sequence occurs when we don't want that but our own login oauth sequence
- Everything in vets-api seems to be based on services that you create using a rails generator. So doing something different may possibly create the impression among some that it's novel or something else to figure out. 
- It's something that is supported externally since it's a Ruby GEM
- The VAOS team said that to use a FHIR Client the client you have to deserialize to create the object and then serialize it again when the services are mostly pass thru with some data normalization.

#### Upsides of using a FHIR Client
- The client supports STU3, DSTU2, and R4
- A FHIR client is a high level approach that is able to create objects by having only access to the FHIR server. You don't need to figure out all the endpoints, it does that for you.
```
client = FHIR::Client.new(url)
patient = client.read(FHIR::Patient, "SMART-1272431").resource
puts patient.name.inspect
[#<FHIR::HumanName:0x00007fbbf4051808 @id=nil, @extension=[], @use="official", @text=nil, @family="Graham", @given=["Stephan", "P."], @prefix=[], @suffix=[], @period=nil>]
puts patient.id
SMART-1272431
```
- The Client has various functionality baked in such as search capability
```
reply = client.search(FHIR::Patient, search: {parameters: {name: 'P'}
patient = bundle.entry.first.resource
puts patient.name.inspect
[#<FHIR::HumanName:0x00007fbbeff11668 @id=nil, @extension=[], @use="official", @text=nil, @family="Graham", @given=["Stephan", "P."], @prefix=[], @suffix=[], @period=nil>]
```
- According to the ruby toolbox, the use of this client has been greatly increasing over the past year. It looks like there is a total of about 86,526 downloads. https://www.ruby-toolbox.com/projects/fhir_client

- It's not clear that the cost of serialization/deserialization is enough to cause any performance bottleneck

- The client can be used to manipulate or create objects from json or create json from the objects

<details>
  <summary>JSON FHIR definition</summary>
  
```
require 'fhir_client'

@lifelines_question = 

# https://www.hl7.org/fhir/questionnaire-example-f201-lifelines.json.html

{
  "resourceType": "Questionnaire",
  "id": "f201",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <pre>Lifelines Questionnaire 1 part 1\n  1. Do you have allergies?\n  2. General Questions:\n    2.a) What is your gender?\n    2.b) What is your date of birth?\n    2.c) What is your country of birth?\n    2.d) What is your marital status?\n    3. Intoxications:\n      3.a) Do you smoke?\n      3.b) Do you drink alcohol?</pre>\n    </div>"
  },
  "url": "http://none.hl7.org/fhir/Questionnaire/f201/xxx",
  "status": "active",
  "subjectType": [
    "Patient"
  ],
  "date": "2010",
  "code": [
    {
      "system": "http://none.example.org/system/code/lifelines/nl",
      "code": "VL 1-1, 18-65_1.2.2",
      "display": "Lifelines Questionnaire 1 part 1"
    }
  ],
  "item": [
    {
      "linkId": "1",
      "text": "Do you have allergies?",
      "type": "boolean"
    },
    {
      "linkId": "2",
      "text": "General questions",
      "type": "group",
      "item": [
        {
          "linkId": "2.1",
          "text": "What is your gender?",
          "type": "string"
        },
        {
          "linkId": "2.2",
          "text": "What is your date of birth?",
          "type": "date"
        },
        {
          "linkId": "2.3",
          "text": "What is your country of birth?",
          "type": "string"
        },
        {
          "linkId": "2.4",
          "text": "What is your marital status?",
          "type": "string"
        }
      ]
    },
    {
      "linkId": "3",
      "text": "Intoxications",
      "type": "group",
      "item": [
        {
          "linkId": "3.1",
          "text": "Do you smoke?",
          "type": "boolean"
        },
        {
          "linkId": "3.2",
          "text": "Do you drink alchohol?",
          "type": "boolean"
        }
      ]
    }
  ]
}
```
</details>

Using the JSON FHIR defition above and the FHIR Ruby Client, we can build an object from the JSON and examine it

```
@ques1 = FHIR::Questionnaire.new(@lifelines_question)
```

We can see that the Question has 3 items, we inspect the first one
```
@ques1.item.length
=> 3
irb(main):032:0> @ques1.item[0]
=> #<FHIR::Questionnaire::Item:0x00007fddc879fb00 @id=nil, @extension=[], @modifierExtension=[], @linkId="1", @definition=nil, @code=[], @prefix=nil, @text="Do you have allergies?", @type="boolean", @enableWhen=[], @enableBehavior=nil, @required=nil, @repeats=nil, @readOnly=nil, @maxLength=nil, @answerValueSet=nil, @answerOption=[], @initial=[], @item=[]>
```

We see that the first item is a question, the others may have sub items
```
@ques1.item.map(&:text)
=> ["Do you have allergies?", "General questions", "Intoxications"]
```

We see that the second item has a series of 4 questions under it
```
@ques1.item[1].item.map(&:text)
=> ["What is your gender?", "What is your date of birth?", "What is your country of birth?", "What is your marital status?"]
```

Show JSON for Question
```
puts @ques1.item.map(&:to_json)
{
  "linkId": "1",
  "text": "Do you have allergies?",
  "type": "boolean"
}
{
  "linkId": "2",
  "text": "General questions",
  "type": "group",
  "item": [
    {
      "linkId": "2.1",
      "text": "What is your gender?",
      "type": "string"
    },
    {
      "linkId": "2.2",
      "text": "What is your date of birth?",
      "type": "date"
    },
    {
      "linkId": "2.3",
      "text": "What is your country of birth?",
      "type": "string"
    },
    {
      "linkId": "2.4",
      "text": "What is your marital status?",
      "type": "string"
    }
  ]
}
{
  "linkId": "3",
  "text": "Intoxications",
  "type": "group",
  "item": [
    {
      "linkId": "3.1",
      "text": "Do you smoke?",
      "type": "boolean"
    },
    {
      "linkId": "3.2",
      "text": "Do you drink alchohol?",
      "type": "boolean"
    }
  ]
}
```


We create another Questionnaire intending to use as a new sub question
```
@subq = FHIR::Questionnaire.new({
  "resourceType": "Questionnaire",
  "id": "f2012",
  "item": [
    {
      "linkId": 4,
      "text": "Do you have high blood pressue ?",
      "type": "boolean"
    }
  ]
})  
```

Append the subquestion and print the new Questionnaire
```
@ques1.item << @subq.item[0]

puts @ques1.item.map(&:to_json)
{
  "linkId": "1",
  "text": "Do you have allergies?",
  "type": "boolean"
}
{
  "linkId": "2",
  "text": "General questions",
  "type": "group",
  "item": [
    {
      "linkId": "2.1",
      "text": "What is your gender?",
      "type": "string"
    },
    {
      "linkId": "2.2",
      "text": "What is your date of birth?",
      "type": "date"
    },
    {
      "linkId": "2.3",
      "text": "What is your country of birth?",
      "type": "string"
    },
    {
      "linkId": "2.4",
      "text": "What is your marital status?",
      "type": "string"
    }
  ]
}
{
  "linkId": "3",
  "text": "Intoxications",
  "type": "group",
  "item": [
    {
      "linkId": "3.1",
      "text": "Do you smoke?",
      "type": "boolean"
    },
    {
      "linkId": "3.2",
      "text": "Do you drink alchohol?",
      "type": "boolean"
    }
  ]
}
{
  "linkId": 4,
  "text": "Do you have high blood pressue ?",
  "type": "boolean"
}

```




