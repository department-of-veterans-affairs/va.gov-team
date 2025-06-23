# CST Implementation: Platform's Encryption Boolean Solution

**Decision**: Test platform team's `encrypted` boolean array approach  
**Component**: va-file-input-multiple  
**GitHub**: https://github.com/department-of-veterans-affairs/component-library/tree/main/packages/web-components/src/components/va-file-input-multiple

## Understanding the Solution

The platform team solved CST's conditional password field requirement by adding an `encrypted` boolean array prop to `va-file-input-multiple`. This bypasses the broken slots entirely while providing exactly the conditional logic CST needs.

### How the Encryption Boolean Works
- CST passes an array of booleans to the component: `encrypted={[true, false, true]}`
- Array index matches file index - first boolean controls first file's password field
- Password fields appear only when the corresponding boolean is `true`
- Component automatically manages password state and includes it in output events
- No slot rendering bugs because slots aren't used

## High-Level Implementation Approach

### What CST Will Change
**Replace current manual approach** where CST manually renders password fields based on encryption detection with **platform's automated approach** where the component handles password field rendering based on the encryption boolean array.

### Component Structure Changes
**Current pattern**: CST manually maps over files and conditionally renders password inputs alongside document type selects in custom divs.

**New pattern**: CST uses single `va-file-input-multiple` component for file uploads and password handling, plus separate document type select components outside the file input component.

### State Management Updates
CST will need to track three arrays instead of one complex file object array:
- **Files array**: The actual uploaded files
- **Encryption states array**: Boolean flags indicating which files are encrypted
- **Document types array**: Selected document types for each file

### Process Flow Changes
**File Upload Process**:
1. User uploads file → CST analyzes for encryption → Updates encryption states array
2. Component automatically shows/hides password field based on encryption boolean
3. User fills password (if needed) → Component manages password state internally
4. User selects document type → CST manages document type state separately

**Form Submission Process**:
1. CST combines data from three sources: files, encryption states, and document types
2. Component provides password data automatically in its output events
3. CST submits combined data to existing endpoints

## Benefits of This Approach

### Technical Benefits
- **Unblocks component library upgrade** - CST can move to latest version immediately
- **No slot bugs** - completely avoids the broken slot rendering system
- **Simplified password handling** - component manages password state automatically
- **Platform support** - solution is already implemented and tested by platform team

### User Experience Benefits
- **Maintains current UX** - veterans see same conditional password fields as before
- **No regression** - all existing functionality preserved
- **Improved reliability** - no conditional rendering bugs

### Development Benefits
- **Clean API** - simple boolean array instead of complex slot configuration
- **Predictable behavior** - no mysterious slot rendering failures
- **Future-proof** - can enhance later if slots are fixed

## What Doesn't Change
- **User flow remains identical** - veterans upload files, see conditional password fields, select document types
- **Form validation logic** - same requirements for document types and passwords
- **Backend integration** - CST submits same data structure to existing endpoints
- **File analysis** - CST continues using existing encryption detection logic

## Trade-offs Accepted
- **Document type fields remain separate** - not consolidated into file input component
- **Slightly more state management** - tracking three arrays instead of one
- **Not full slot solution** - doesn't solve broader slot rendering for other use cases

## Next Steps: Testing the Solution

**Decision**: CST will test the platform team's encryption boolean approach to validate it meets our requirements before committing to full implementation.

### Testing Objectives
- **Verify conditional password fields** - Confirm password fields appear only for encrypted files based on the boolean array
- **Validate password handling** - Test that component properly manages password state and includes it in output events
- **Test user experience** - Ensure veterans see the expected conditional behavior
- **Confirm data flow** - Validate that CST can properly manage encryption states and retrieve password data

### Testing Approach
CST will create a prototype implementation using the encryption boolean array to:
1. **Upload mixed file types** (encrypted and non-encrypted)
2. **Set encryption boolean array** based on file analysis
3. **Test password field visibility** - verify only encrypted files show password fields
4. **Validate form submission** - confirm password data is properly captured and accessible
5. **Compare against current implementation** - ensure no UX regression

### Success Criteria for Testing
If testing confirms the encryption boolean solution works as expected, CST will proceed with full implementation. If testing reveals issues, CST will work with the platform team to address them or explore alternative solutions.

---

*This testing phase will validate whether the platform team's encryption boolean solution can successfully replace CST's current conditional password field implementation.* 
