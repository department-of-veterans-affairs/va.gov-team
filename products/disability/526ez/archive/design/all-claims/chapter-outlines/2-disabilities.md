## X of Y Disabilities

On the next few screens, we’ll ask about your disabilities in two parts.

- Your rated service-connected disabilities, if you have any. (Please note, if you don’t have any rated disabilities, you won’t see this screen.)
- Your new service-connected disabilities or conditions 

 Once we have your list of disabilities, we’ll ask you more specific questions about each of them. 

#### 2.1 Rated disabilities

| Selecting Conditions for Increase |
| --------------------------------- |
| This is the same as in MVP        |

## X of Y Disabilities

#### Rated disabilities
Below are your rated disabilities. If you’re filing for increased compensation because one, or more, of them has gotten worse, please choose the disability here. 

{ list of rated disabilities, as in mvp }


[ Back | Continue ] { buttons }
[Save and finish this application later.]()



------


#### 2.2 New Conditions

| Adding New Conditions |
| ------------------ |
| Naming a condition to try to map back to the contention IDs. Just building a list of conditions. |

## X of Y List Disabilities

#### New disabilities

Now we’ll ask you about your new service-connected disabilities or conditions.

[ Back | Continue ] { buttons }
[Save and finish this application later.]()



------



#### Add a new disability

Do you have any new service-connected disabilities or conditions 
to add to your claim? { radio }

- Yes
- No



{ If yes new disabilities }

{ for each disability }

If you know the name of your disability, please enter it here. Or, if you don't know the name, please briefly describe your disability or condition in as much detail as possible. { text } 
{ fuzzy match with the ability to specifiy conceptual matches ( tinnitus : ringing in ears ) }

{ If no match : infobox }

> Below are some details that may be helpful to include when you describe your disablity: 
>
> - The part of your body that's affected 
> - If your disablity is on the right side or left side of your body 
> - The part of your body that isn't working right 

{ endif no match }

{ end for each disability }

[ Add Another Disability ] { button }

[ Back | Continue ] { buttons }
[Save and finish this application later.]()

#### 2.3 Follow up questions

| Follow up questions |
| ------------------ |
| Loop through the listed new conditions to collect the relevant details. Sort PTSD to last position in loop |



## X of Y List Disabilities

#### Disability details

{ for each *new* disability }

{ if not PTSD }

What caused this service-connected disability?  { radio }

- My disability was caused an injury or exposure during my service in the military.
- My disability was caused by another disability (for example, I have a limp that caused lower-back problems).
- My disability existed before, but got worse due to, my service.
- My disability was caused by VA mistreatment.



{ if directly connected (opt 1) }

Please briefly describe the {event|exposure} that caused your condition. { textarea }

{ endif }



{ if secondary (opt 2) }

Please choose the secondary disability that caused the disability you’re claiming here. { select }

{ options include all disabilities but this one : append to condition name above }



Please briefly describe how this disability is related to {event|exposure}. { textarea }

{ endif secondary }



{ if worsened (opt 3) }

Please briefly describe how the disability affected you before your service, and how it is now after your service. { textarea }

{ end if }



{ if mistreatment  (opt 4) }

Please briefly describe how VA treatment lead to this disability. { textarea }

{ endif }



Date this {event|exposure} happened (This date doesn't have to be exact.) { date }

{ endfor }


{ elseif (PTSD) }

If you're filing a claim for PTSD, you'll need to provide additional documents and details about the traumatic (or “stressor”) event that caused your PTSD. You may also need to provide treatment records and contact details for any relevant supporting statements.

If you need more time to prepare your evidence for your PTSD claim, your application is saved, you can return to it later when you have your evidence ready to upload.

{ endif not PTSD}



{ endif yes new disabilities }



[ Back | Continue ] { buttons }
[Save and finish this application later.]()



------



## X of Y Disabilities

#### PTSD claims

{ INSERT BAH 0781 FLOW HERE }



## X of Y Disabilities



#### Summary of disabilities

This is the list of disabilities that you are applying for in this claim. If anything is missing, go back one screen and add it.



We will ask follow up questions and 

- **$documentname1**
- **$documentname2**
- **$etc**