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

How Does Jest Work?
Global test Method has two arguments:
*string description
*test function
Test failes if error is thrown when running function
\*assertions throw errors when expectation fails
\*No error->test pass(Empty Test ->Passes)

TEST DRIVEN DEVELOPMENT(TDD)
*WRITE TESTS BEFORE WRITING CODE
*THEN WRITING CODE ACCORDING TO "SPEC" SET BY TESTS
"RED-GREEN" Testing
\*tests fail before code is written
1.Write "Shell function"
2.Write Tests
3.Test Fails
4.Write Code
5.Test Pass

WHY TDD?
Makes a huge difference in how it feels to write tests
*part of the coding process, not a "chore" to do at the end
*more efficient(re-run tests "for free" after changes)

React Testing Library Philosophy(Opinionated)
\*CREATES VIRTUAL DOM FOR TESTING
-provides utilities for interacting with DOM(interact and find something on the DOM)
-allows testing without a browser

TYPES OF TESTS
\*UNIT TESTS
-Tests one unit of code in isolation
\*Integration Tests
-How multiple units work together
\*Functional tests
-Tests a particular function of software(behaviour)
-FOR EXAMPLE THE FORM RECEIVES THE RIGHT AMOUNT OF DATA
\*ACCEPTANCE/END-TO-END(E2E) Tests
-Use actual browser and server(Cypress, Selenium)

----------------------------------------FUNCTIONAL TESTING & UNIT TESTING----------------------------------------------------------------
UNIT Testing
-Isolated:mock dependencies, test internals
-Very easy to pinpoint failures
-Further from how users interact with Software
-More likely to break with refactoring

FUNCTIONAL TESTING
-Include all relevant units, test behavior
-Close to how users interact with software
-Robust Tests
-More difficult to debug failing tests

---------------------------------------BDD(Behavior Driven) vs TDD(Test Driven)------------------------------------------------------------
Testing Library encourages testing behavior over implementation? So why TDD instead of BDD?
Actually BDD is very implicitly defined needs a lot of resources(Devs,QA,etc) that needs process for different groups to interact

----------------------------------------ACCESSIBILITY AND FINDING ELEMENTS-----------------------------------------------------------------
source: https://testing-library.com/docs/guide-which-query/

|QUERIES ACCESSIBLE TO EVERYONE:
-is for people has access on mouse/or visually or assistive technology

getByRole i.e. buttons heading

getByLabelText
getPlaceholderText
getByDisplayValue

|Semantic QUeries
getByAltText
getByTitle

|Test IDs: for last resort
only to be used if entirely necessary

sometimes you can use some accessibility in other way around depending on its efficiency

Roles documentation: https://www.w3.org/TR/wai-aria/#role_definitions
some elements have built-in roles: button, a(link)

If you can't find an element like a screen reader would?
App isn't friendly to screen readers

-----------------------------------------------COURSE PLAN----------------------------------------------------
CHANGEING BUTTON COLOR, DISABLING BUTTON WITH CHECKBOX
INTRODUCE: TESTING INTERACTIONS THAT AFFECT DOM, unit testing functions
FUTURE SECTIONS: BUILD UP TO MORE COMPLEX FUNCTIONALITY AND TESTS
TESTING MORE COMPLEX USER INTERACTIONS<>INTERACTIONS BETWEEN COMPONENTS
MOCKING SERVER RESPONSES WITH MOCK SERVER WORKER
TESTING ASYNC FUNCTIONALITY REACT TESTING

-----------------------------------NOTES-----------------------------------------------------------------------
IS IT OKAY TO HAVE MULTIPLE ASSERTIONS ON A SINGLE TEST?

PREFERRABLY NO

IF THERE's A LOT OF CHECKBOXES AND getByRole isn't a good choice to use you can simply put a label on it
and call the label to distinguish the checkboxes

---------------------------UNIT TESTING FUNCTIONS------------------------------------------------------------
|Functions seperate from components
-Used by several components
-Complex logic
|Unit Test if
-Complex logic difficult to test via functional tests
-Too many edge cases

DESCRIBE STATEMENTS
-A way of combining test cases

WHEN TO UNIT TEST?
-replaceCamelWithSpaces is pretty simple
-could be covered by functional tests on button

For more complicated functions, unit tests help with:
covering all possible edge cases
determining what caused the functional tests to fail
