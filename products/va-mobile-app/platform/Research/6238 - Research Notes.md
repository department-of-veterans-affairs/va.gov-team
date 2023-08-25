Research notes for [ticket 6238](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/6238) from Tim Roettger.

Post-standup components (down to one or the other unless both have noteworthy issues):
- `SegmentedControl.tsx`
	- Pro
		- Uniquely mobile
		- Used a good quantity of times at a happy medium between hugely prominent and obscure
		- Use cases are pretty straightforward--plugs into a screen simply and screen handles the business logic of the display updating from toggling
		- Fairly happy medium complexity-wise, maybe leaning a tad simplistic
	- Con
		- Can be done without, but would be better with existing Button component implementation to leverage
		- Existing implementation has testIdProps (used by old unit test framework, retained due to also handling a11y) that will need rework
		- All existing cases only have 2 options while, theoretically, one could segment as much as they please--testing locally current behavior keeps everything in a single line with not great wrapping; may open the door to design questions for more general use
- `SnackBar.tsx`
	- Pro
		- Uniquely mobile
		- Used a good quantity of times at a happy medium between hugely prominent and obscure
		- Use is very straightforward (one function `showSnackBar` handles all instances of prompting the globally defined SnackBar component)
		- Fairly happy medium complexity-wise, maybe leaning a tad simplistic
	- Con
		- Has icons that would broaden scope
		- Can be done without, but would be better with existing Button component implementation to leverage
		- Some recent discussion on use of SnackBar vs ActionSheet vs nothing (SnackBar reserved for API calls that can fail, features retry option if unsuccessful and undo if appropriate to attempt revert what was changed--still somewhat murkier than other components)
		- Has haptics which could cause complications

Overall, SegmentedControl appears the ideal component to implement as MVP with similar pro's to SnackBar, but fewer cons.



Full component rundown/earlier notes:
Not looked into more deeply (seemed promising at face value to fall into the "Maybe" list): BaseListItem, ClickForActionLink, DefaultList, LabelTag, LargeNavButton, MultiTouchCard, Pagination, ~~SegmentedControl~~, ~~SnackBar~~, Switch, VABulletList

Components: 
- Maybe
	- `Nametag.tsx`
		- Pro:
			- Fairly straightforward functionality with some nuance
		- Con:
			- Pretty basic
			- Used twice - okay, but could be more common
	- `VAIconWithText.tsx`
		- Pro:
			- Good usage amount (used for header buttons that have icon + text and the navigation tab bar buttons)
			- Good visibility for it to be a useful centralization target
		- Con:
			- Would rely on icon package implementation (potentially beyond MVP, but also better for proof of concept)
			- Pretty basic code-wise/lacking nuance
			- More convenience component than actual component
	- `AccordionCollapsible.tsx`
		- Pro:
			- Used a reasonable amount (claims steps, SM details, Appointments in special cases)
			- Nuance while being reasonable in scope
		- Con:
			- Not highly visible, used only fairly deep into features
	- `AlertBox.tsx`
		- Pro:
			- Common standard component in many design systems
			- Some nuance, but still fairly straightforward
			- Highly visible
		- Con: 
			- Tangled into app level logic with scrolling on appearance (including taking screen reader focus) and haptics which could cause complications
			- Plans to add icons like VADS which would bring into play icon package implementation (potentially beyond MVP, but also better for proof of concept)
			- Used very widely
	- `CollapsibleAlert.tsx`
		- Pro:
			- Good usage quantity with a mix of highly visible and less common use
			- A common general design system component
			- Has some nuance in use
		- Con:
			- Maybe too specific and component should be more generalized/combined with similar expand/collapse type structures
			- Maybe marginally too simple	
	- `CollapsibleView.tsx`
- No
	- `Carousel.tsx` - Only used once for new user onboarding info
	- `CommonErrorComponents` folder - Too broadly used general app error screen contents
	- `FileList.tsx` - Only used once for claims file uploads
	- `FormWrapper.tsx` - Already a mess in the app, way too complicated
	- `LoadingComponent.tsx` - Used too widely, too basic
	- `MenuView.tsx` - Only used once, limited use case may be eliminated in the future
	- `NotificationManager.tsx` - Only used once, handler for push notifications--potentially useful for a mobile platform, but not as a component
	- `SelectionList.tsx` - Only used once
	- `Templates` folder - Too widely used and too broad in scope; could potentially be an entire package in their own right as a step above components
		- `HeaderBanner.tsx` Potentially would fall into `components` package, but is pretty complex for MVP
	- `types` folder - Appears to just be some type declarations--not components
	- `VAIcon.tsx` - Too widely used and too broad in scope, already slated by #6237 to be it's own package
	- `VAImage.tsx` - Used once to display an image of a paper check in direct deposit
	End of folder-based components
	- `AppVersionAndBuild.tsx` - Not a real component, just pulls and displays the version/build #'s
	- `AttachmentLink.tsx` - Only used once, subject to change/deletion with SM tickets outstanding
	- `BackButton.tsx` - Not sure this is actually used at all post-Nav with shifting to templates, but still exists in the code because the useEffects it's in make the unit tests happy
	- `Box.tsx` - Extremely widely used and more of a style wrapper than component
	- `ClickToCallPhoneNumber.tsx` - Potentially too widely used, rather straightforward, more of a convenient component
	- `CloseModalButton.tsx` - Not used at all, remnant of on hold Request Appointments feature
	- `ClosePanelButton.tsx` - Not sure this is actually used at all post-Nav with shifting to templates, but still exists in the code
	- `CrisisLineCta.tsx` - Overly simple
	- `CtaButton.tsx` - Basically tied directly with the above
	- `DescriptiveBackButton.tsx` - Just a convenience component for within the HeaderBanner within the Nav Templates
	- `EncourageUpdate.tsx` - Infused with business logic, needs to be fixed
	- `FocusedNavHeaderText.tsx` - Not sure this is actually used at all post-Nav with shifting to templates, but still exists in the code
	- `FooterButton.tsx` - A convenience component of a more general Button, should not exist independently in a design system
	- `HeaderIconBtn.tsx` - Superseded by VAIconWithText, now a remnant of on hold Request Appointments feature
	- `HeaderTitle.tsx` - Not sure this is actually used at all post-Nav with shifting to templates, but still exists in the code
	- `InlineTextWithIcons.tsx` - Used one time, convenience component
	- `List.tsx` - Essentially just a wrapper for other `___List` components
	- `MessageAlert.tsx` - Only used by SM details (Start New, Reply, Edit Draft), too closely tied to business logic
	- `MessageList.tsx` - Only used by SM for general page formatting, more a template than component
	- `MessagesCountTag.tsx` - Used one time, overly simple
	- `NavigationTabBar.tsx` - Used one time if a highly visible time, doesn't feel great for MVP since it's fairly generic
	- `PhotoAdd.tsx` - Used one time, pretty obscure place/component
	- `PhotoPreview.tsx` - Used one time, pretty obscure place/component
	- `RadioGroupModal.tsx` - Used one (kind of two) time, fairly obscure place/component
		- Fun fact: wholly separate from the Gender Identity radio group, that's part of FormWrapper
	- `SaveButton.tsx` - Not sure this is actually used at all post-Nav with shifting to templates, but still exists in the code
	- `SignoutButton.tsx` - A convenience component of a more general Button, should not exist independently in a design system
	- `SimpleList.tsx` - Somewhat a convenience component on a generic list
	- `TabBar.tsx` - Used one time, recent discussions on need vs SegmentedControl
	- `TextArea.tsx` - Used very widely, more or less just a convenience wrapper
	- `TextLines.tsx` - Mostly used as a convenience component for lists and MultiTouchCard
	- `TextLineWithIcon.tsx` - Convenience component for `TextLines.tsx` and otherwise only used for on hold Request Appointments feature
	- `TextView.tsx` - Extremely widely used, a wrapper for text formatting
	- `VAButton.tsx` - Widely used, button more complex/integral than desirable for MVP
	- `VAScrollView.tsx` - Fairly widely used, mostly just a wrapper on RN's ScrollView component to fix an outstanding bug where the scrollbar didn't appear visually in iOS
	- `WhatsNew.tsx` - Infused with business logic, needs to be fixed
