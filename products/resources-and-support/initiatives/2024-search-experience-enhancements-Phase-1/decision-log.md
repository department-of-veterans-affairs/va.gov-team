## Decision log

Documenting rationale for decisions made during the course of this initiative

Date | Decision | Rationale 
--- | --- | --- |
09/05/2024 | No sort function | Mikki and Amanda met and determined there are no uses cases at this time to support this | 
09/05/2024 | Filter tags will have "AND" not "OR" relational logic | Mikki / Amanda, helps Veteran narrow down contextually relevant results | 
11/20/2024 | Updated "AND" / "OR" filter logic: Within a tag group (i.e. benefit, topic, audience), multiple selections are treated as an "or".  Veteran or service member, Disability or Pension, etc. Across tag groups, selections are treated as an "and".  Veteran and Disability. A search term is considered an "and" when used in addition to filter selections.  Filter by Veteran and my search term. This allows me to search for anything tagged Veteran OR service member AND has a tag of pension OR disability AND matches my search term "payment". | Mikki's rationale: If everything is treated as an "or", the list of results won't filter to an expected level.  If I filter by Veteran OR service member OR education OR careers, I'll get things that are tagged education but might be tagged family, or things tagged Veteran but also tagged pension. If everything is treated as an "and", the list of results will be over filtered.  If I filter by Veteran AND service member AND education AND careers, I'm only going to get content that is tagged with a minimum of those 4 tags. | 
11/20/2024 | Eliminate Office tag group | Mikki, Amanda, and Michelle believe the current purpose of this tag is to inform the help/contact numbers displayed at the bottom. This can be managed in another method, such as via selecting the exact contact numbers wanted on the page from a list of options
