# Testing in vets-api

## Getting Started with vets-api

Before running tests, you'll need to have vets-api set up locally. There are two approaches:

### Running Natively
[Running vets-api Natively](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/running_natively.md)

This guide walks you through setting up vets-api directly on your machine without containerization. This approach gives you more direct control over the environment and can be faster for development, but requires installing all dependencies locally (Ruby, PostgreSQL, Redis, etc.).

### Running with Docker
[Running vets-api with Docker](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/running_docker.md)

This guide explains how to run vets-api using Docker containers. This approach ensures consistency across different development environments and simplifies dependency management, though it may have slightly more overhead than running natively.

## Testing Guidelines and Best Practices

### FactoryBot Testing Guidelines
[FactoryBot Testing Guidelines](https://depo-platform-documentation.scrollhelp.site/developer-docs/factorybot-testing-guidelines)

This comprehensive guide covers best practices for using FactoryBot in your RSpec tests. FactoryBot is the preferred way to create test data in vets-api. The guide includes:
- How to create and use factories effectively
- Best practices for factory inheritance and traits
- Common pitfalls to avoid
- Performance considerations when using factories

### Spec File Examples
[Spec File Examples](https://depo-platform-documentation.scrollhelp.site/developer-docs/spec-file-examples)

This resource provides real-world examples of well-written spec files for different types of tests in vets-api:
- Controller specs
- Model specs
- Service object specs
- Request/integration specs
- Best practices for organizing and structuring your tests

These examples serve as templates you can follow when writing your own tests, ensuring consistency with the codebase's testing standards.
