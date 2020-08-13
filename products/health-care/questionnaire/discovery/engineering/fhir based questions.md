
The ruby FHIR client is usefull for exploring FHIR types of resources such as Questionnaires and QuestionnairResponses. It could be used initially to help create Question types of resources in JSON and validating them etc.

#### Downsides of using a FHIR client

- Everything in vets-api seems to be based on services that you create using a rails generator. So doing something different may possibly create the impression among some that it's novel or something else to figure out. 
- It's something that is supported externally since it's a Ruby GEM
- The VAOS team said that to use a FHIR Client the client you have to deserialize to create the object and then serialize it again when the services are mostly pass thru with some data normalization.

#### Upsides of using a FHIR Client

- A FHIR client is a high level approach that is able to create objects by having only access to the FHIR server. You don't need to figure out all the endpoints, it does that for you.
```
client = FHIR::Client.new(url)
```

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




