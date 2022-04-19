# Using Unmount in Front End Unit Tests

## Summary

- This proposal seeks to add to the unit testing guidelines.
- The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in RFC 2119.

## Motivation

- Leaving components mounted by enzyme after a unit test can cause [unintended side effects]()

## Scope

- New and current projects that are using enzyme for component unit tests will be **accountable** for understanding and executing the result of this proposal
- Completed projects will be **accountable** for executing the result of this proposal on new or modified unit tests


## Implementation

- Unit tests that mount components with enzyme `mount()` or `shallow()` MUST unmount the component either 
  - in the context where the component is mounted (e.g. at the end of an `it` in mocha), or
  - in the context where `done()` is called directly before `done()` is called
- Unit tests SHOULD NOT mount components in `beforeEach()` or `describe()` contexts
- Unit tests SHOULD NOT unmount components in `afterEach()` context

## Tradeoffs

- Every unit test that uses Enzyme will have an `unmount()` call which is often unnecessary defensive code.

## Resources

- [Testing React with Jest and Enzyme](https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675)
- [Unmount documentation](https://airbnb.io/enzyme/docs/api/ReactWrapper/unmount.html)


## Examples

### In component mount context

```javascript
  it('renders VA facility form', () => {
    const form = mount(
      <DefinitionTester
        arrayPath={arrayPath}
        pagePerItemIndex={0}
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={initialData}
        formData={initialData}
        uiSchema={uiSchema}
      />,
    );

    expect(form.find('select').length).to.equal(6);
    expect(form.find('input').length).to.equal(4);
    form.unmount();
  });
```

### In done() context

```javascript
it('should continue to make api calls until the response is not pending', done => {
    mockMultipleApiRequests([
      pendingResponse,
      pendingResponse,
      successResponse,
      failureResponse,
    ]);

    const wrapper = mount(<ConfirmationPoll {...defaultProps} pollRate={10} />);
    // Should stop after the first success
    setTimeout(() => {
      expect(global.fetch.callCount).to.equal(3);
      wrapper.unmount();
      done();
    }, 50);
  });
 ```
