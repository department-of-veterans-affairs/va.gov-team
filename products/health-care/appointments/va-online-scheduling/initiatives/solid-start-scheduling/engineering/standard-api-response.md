# Standard API Response

We should move to something like

```json
{
  "correlationId": "string",
  "timeStamp": "2025-07-29T14:28:02.920Z",
  "statusCode": 0,
  "message": "string",
  "success": true,
  "data": {...}
}
```

this will help make response cleaner and easier to consume and expand as requirements change

## Example

For /AppointmentAvailibity

Currently:

```json
{ 
  "appointmentDuration": "2025-06-07T18:40:09.929Z", 
  "availableTimeSlots": [ 
    { 
      "timeStartUTC": "2025-06-07T18:40:09.929Z", 
      "timeEndUTC": "2025-06-07T18:40:09.929Z"
    } 
  ], 
  "agentSkills": [ 
    { 
      "skillId": "string", 
      "skillName": "string" 
    } 
  ] 
} 
```

would look like

```json
{
  "correlationId": "message-id-from-header",
  "timeStamp": "2025-07-29T14:28:02.920Z",
  "statusCode": 0,
  "message": "",
  "success": true,
  "data": {
    { 
      "appointmentDuration": "2025-06-07T18:40:09.929Z", 
      "availableTimeSlots": [ 
        { 
          "timeStartUTC": "2025-06-07T18:40:09.929Z", 
          "timeEndUTC": "2025-06-07T18:40:09.929Z"
        } 
      ], 
      "agentSkills": [ 
        { 
          "skillId": "string", 
          "skillName": "string" 
        } 
      ] 
    } 
  }
}
```
