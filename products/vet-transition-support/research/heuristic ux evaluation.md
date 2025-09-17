# **Veteran Transition Experience \- Heuristic Evaluation Report**

## **Summary**

This evaluation creates a baseline of information about the usability of the Veteran Transition Experience (VTE) product. The purpose is to evaluate design decisions by how well they meet user needs and provide data-driven insights for product improvements.  
Scope: This evaluation focuses exclusively on the VTE product. The design system, VA.gov, and help processes are out of scope.

Note: We carried out this evaluation before our July/August research study. Questions from the evaluation and research insights were incorporated into the study, and many of the issues have been addressed through design changes or added to the product road map.

The research plan, insights, and data for the July/August research study can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/vet-transition-support/research/2025-07-generative-and-user-testing-study) in the study folder in GitHub.  

---

## **Evaluation Framework**

The evaluation uses five key heuristic categories:

* VA.gov sitewide standards and design system  
* Industry standard usability heuristic checklist  
* Trauma informed design  
* Accessibility  
* Alignment with research insights

---

## **Usability Heuristics Evaluation**

### **Rating Scale: ★★★★★ (5 stars \= excellent, 1 star \= poor)**

| Heuristic | Description | Anna Rating | Anna Notes | Jessica Rating | Jessica Notes |
| ----- | ----- | ----- | ----- | ----- | ----- |
| 1\. Visibility of System Status | The system should always keep users informed about what is going on, through appropriate feedback within reasonable time | ★★★★★ | Simple and easy | ★★★★★ | It's easy to see where you are in the process with the progress bar at the top |
| 2\. Match Between System and Real World | The system should speak the users' language, with words, phrases, and concepts familiar to the user | ★★★★☆ | We will understand more about the Guard and Reserve portion after completing the upcoming research study | ★★★★☆ | Overall, the product does a good job of speaking the users' language. Some improvements could be made on the results page between all/recommended benefits |
| 3\. User Control and Freedom | Users need a clearly marked "emergency exit" to leave unwanted states without extended dialogue. Support undo and redo | ★★★☆☆ | Reliance on the questionnaire to see benefits is a weak spot. Would be curious to test a prototype with a filtered list option | ★★★☆☆ | The user can decide which questions to answer, but they're unable to easily see benefits without filling out the questionnaire. Difficult to change results/answers after reaching the results page |
| 4\. Consistency and Standards | Users should not have to wonder whether different words, situations, or actions mean the same thing | ★★★★☆ | We are mostly following VADS conventions | ★★★★☆ | The VADS and style guide are very helpful with this |
| 5\. Error Prevention | Careful design which prevents problems from occurring in the first place | ★★★★★ | This is something to be attentive to as the product develops and matures | ★★★★★ | By using the VADS, we have great built-in error prevention throughout the form |
| 6\. Recognition Rather than Recall | Minimize the user's memory load by making elements, actions, and options visible | ★★☆☆☆ | This comes back to the complexity and manipulatability of results | ★★★☆☆ | Once on the results page, it may be difficult for users to remember their questionnaire answers. Some room for improvement |
| 7\. Flexibility and Ease of Use | Accelerators for expert users while catering to both inexperienced and experienced users | ★★★☆☆ | Don't think we will be fully here for advanced users until we have authentication that does some autofill | ★★★☆☆ | Currently not a lot of flexibility in the product, but that might be okay for the current iteration. Something to consider in the future |
| 8\. Aesthetic and Minimalist Design | Dialogues should not contain irrelevant or rarely needed information | ★★★☆☆ | There is a lot of information, and it's hard for the user to figure out how they got there in some cases | ★★★★☆ | The form is very simple and easy to use, but there's a lot of information on the results page |
| 9\. Help Users Recognize, Diagnose, and Recover from Errors | Error messages should be expressed in plain language, precisely indicate the problem, and suggest a solution | ★★★★★ | This is a strength of the platform | ★★★★★ | The VADS and style guide are very helpful with this |
| 10\. Help and Documentation | Even though it's better if the system can be used without documentation, help should be available when needed | ★★★★☆ | Documentation is great. We could do more to make it easier for Veterans to take action when they need help | ★★★★★ | There's a help tool at the bottom of every screen |

---

## **Trauma-Informed Design Evaluation**

| Principle | Explanation | Rating | Notes |
| ----- | ----- | ----- | ----- |
| Safety | Creating physical and emotional environments that do not retraumatize | ★★★★☆ | Plain language |
| Trustworthiness and Transparency | Building genuine, reliable relationships through clear communication and consistency | ★★★★☆ |  |
| Peer Support | Encouraging connections with others who have experienced trauma | ★★★☆☆ | Is this something the product could do? Should do? |
| Collaboration and Mutuality | Reducing power imbalances in support structures by ensuring shared decision-making | ★★★☆☆ |  |
| Empowerment, Voice, and Choice | Prioritizing agency and self-determination in healing processes | ★★★★☆ |  |
| Cultural, Historical, and Gender Issues | Recognizing the unique impacts of systemic and historical trauma in service environments | ★★★★☆ |  |

---

## **Design System Divergences**

| Issue | Status |
| ----- | ----- |
| Breadcrumbs don't use mobile variation | Will be addressed with \#529 |
| Radio/checkbox components don't use tile variation on mobile | Will be addressed with \#529 |
| Spacing doesn't always align with VADS documentation | Will be addressed with \#529 |
| Tags in cards show up with sans serif in Figma and serif in live site | Will be addressed with \#378 |
| Product doesn't currently use search results template | Will be addressed with \#517, 518, 519 |

---

## **Research Insights and Implementation Status**

### **User Understanding and Tool Perception**

Key Findings:

* Most participants found the overall tool straightforward and easy to use  
* Many participants said the tool would be helpful and relevant to their needs, especially for those just starting their VA journeys  
* The welcome page generally provided helpful information, but some users suggested more specific information  
* Participants generally understood the results page layout and navigation

### **Tool Naming and Positioning**

Key Findings:

* More participants preferred "Discover your benefits" over "Find your benefits"  
* Most participants wanted a straightforward name that describes the tool's purpose  
* Participants overwhelmingly expected the tool's entry point to be on the VA.gov homepage  
* Many expected it under the "VA Benefits and Health Care" top navigation menu

### **Questionnaire Feedback**

Areas for Improvement:

* Some answer choices were wordy  
* The 'Years of Service' question was confusing due to its specific tying to benefit requirements  
* The GI Bill question and answer choices caused confusion, particularly for those who transferred benefits  
* The disability rating question caused confusion for participants currently applying but not yet rated  
* The "character of discharge" question was potentially jarring due to its format (dropdown instead of radio buttons)

### **Results Page Features and Functionality**

Strengths:

* Participants appreciated the goals list on the first question  
* "Understand my benefits" was the most commonly selected goal  
* The Review Answers Page was generally understood

Areas for Improvement:

* The "Time sensitive benefits" alert/dropdown was often missed or not recognized as clickable  
* Many participants did not explore the "Benefits you may not be eligible for" section  
* Several participants would NOT use the "Share my results" button, preferring to screenshot or download instead

### **Desired Additional Features**

Timeline and Task Management:

* Several transitioning service members expressed a desire for a timeline, task tracker, or checklist  
* Users wanted reminders about when it's time to start thinking about different benefits  
* Participants suggested a checklist feature to keep track of outstanding tasks

Content and Integration:

* Participants wanted state and local Veteran benefits included  
* Some desired integration with authenticated VA.gov profiles for pre-populating questionnaires  
* Users wanted the ability to ask for help while exploring or applying for benefits  
* Strong desire for the tool to help users take action rather than just providing information  
* Participants wanted to learn about lesser-known benefits alongside popular ones

### **Addressing Misconceptions and Emotional Support**

Critical Issues:

* Many participants held pre-conceived notions that discouraged them from exploring benefits  
* Feelings that they don't deserve benefits or that using them takes away from others  
* Reservists specifically held misconceptions about their eligibility and expressed guilt  
* The transition experience can be highly emotional for transitioning service members  
* TAP class experiences vary significantly in helpfulness

### **Terminology and Content Clarity**

Recommendations:

* The phrase "previous period of service" caused confusion; "break in service" was suggested as clearer  
* Importance of being cognizant of senior Veterans' needs  
* Mental health support should be considered as part of the tool

---

## **Priority Recommendations**

### **High Priority**

1. Improve questionnaire clarity \- Address confusing questions around GI Bill, disability rating, and years of service  
2. Enhance time-sensitive benefits visibility \- Make the alert more prominent and clickable  
3. Add timeline/task management features \- Implement requested checklist or timeline functionality

### **Medium Priority**

1. Improve results page navigation \- Make it easier to change answers and see benefits without completing full questionnaire  
2. Address misconceptions \- Include content that helps Veterans feel worthy and understand their eligibility  
3. Enhance help functionality \- Make it easier for Veterans to get assistance when needed

### **Future Considerations**

1. Authentication integration \- Pre-populate forms with existing VA data  
2. State and local benefits \- Consider including non-federal benefits  
3. Advanced user features \- Add flexibility for experienced users

---

## **Conclusion**

Strengths of the Discover Your Benefits tool include strong performance in system status visibility, error prevention, and adherence to design standards. However, there are opportunities for improvement in user control, recognition vs. recall, and addressing the emotional and informational needs of transitioning service members.  
The research insights reveal a clear need for more data to make decisions about aligning with users’ task management, better handling of misconceptions about benefit eligibility, and enhanced support for taking action on discovered benefits. Addressing these areas will significantly improve the tool's effectiveness in serving Veterans during their transition process.

