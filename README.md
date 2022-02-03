render
\*Create vitual DOM for argument JSX
\*Access virtual DOM via screen global

The render wil create virtual DOM for the JSX Component named App.jsx

After it has been rendered it can be accessed through "SCREEN" from
react testing library
import {render, screen} from '@testing-ibrary/react';

screen.getByText(/string/);
that string will be searched in the VIRTUAL DOM
notes:
getByText is for regular expression
for case sensitive(i)
could be any string

after using the function of screen there is a part called Assertion
that causes the test to SUCCEED OR FAIL

JEST ASSERTIONS
These assertions determines the test passess or fails
Central part of testing

PIECES OF ASSERTIONS
expect(argument).matcher();

expect:
expect() -> Jest global, starts the assertion

expect argument:
expect(argument).toBeIntheDocument
subject of the assertion->this is what the jest will examine

expect(argument).matcher(matcher-argument):
type of assertion
this matcher comes from Jest-DOM

matcher argument:
\*refines matcher

ASSERTIONS PATTERNS EXAMPLE

expect(element.textContent).toBe('hello');
expect(elementsArray).toHaveLength(7);

JEST-DOM
comes with create-react-app

uses
src/setupTests.js imports it before each test, makes matchers available
DOM-based matchers
-toBeVisible() or toBeChecked()

JEST HOW IT WORKS AND HOW WE NEED IT
React Testing Library Helps with
-Rendering components into Virtual DOM
-serching virtual DOM
-interacting with virtual DOM
Needs a Test Runner
-find tests run them and make assertions
Jest
-is recommended by Testign Library
-comes with create-react-app

npm test runs an npm script that runs Jest in watch mode

JEST Watch Mode
Watch for changes in files since last commit
Only Run tests related to these files
No Changes? No Tests
-Type a to run all tests
