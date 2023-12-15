# Declarative vs. imperative

Both declarative (by code) and imperative (by tags) approaches play a vital role in data
equalization processes. These approaches are adopted depending on the particular requirements. The
following will explore the differences between JavaScript libraries (imperative) and Graphane
components (declarative).

## Imperative approach (JavaScript Library)

In the imperative paradigm, we are in charge of defining the actions that achieve our goal. There
are many widely used JavaScript libraries for generating data visualizations. They offer an
imperative methodology where we precisely guide the DOM state changes to reach the end, requiring
quite a lot of programming knowledge and a significant amount of code to build the visualizations.

## Declarative approach (Graphane component)

In contrast, in the declarative paradigm, we only express our goal, the *what*, and the system takes
care of the *how*. Graphane with the SVG template represents the declarative data visualization,
where each concern has its specific space.

Graphane and the declarative model are easier to use, especially when customization is needed.
Therefore, the choice between an imperative or a declarative approach depends on the use-case
scenario on the use case scenario, the specific needs, and the user's familiarity with both methods.

### Directive Syntax

Graphane uses directive syntax (like `g-for`, `g-bind`, etc.) simplifying the templates and making
them more readable. The template syntax is straightforward and expressive. The templates are written
in standard SVG, making them accessible for team members who might not be as familiar with
JavaScript.

### Readability and maintainability

Code is often more accessible to read and more understandable because it describes what we want the
result to be rather than the step-by-step process to achieve it. This readability makes code
maintenance much more manageable as our project scales or our visualization becomes more complex.

### Unidirectional data flow

Graphane implements a unidirectional data flow. This means that the state flows in one direction,
making it easier to track changes and debug the system when things go wrong because we will know
exactly where to look for errors.

### Manageability

Graphane allows more direct control over the final graphical output. It provides a system of
templates to define the visualization, leading to more efficient and easier code management. In
addition, they incorporate other advantages that significantly improve the performance of highly
interactive user interfaces.

### Flexibility and high customization

Declarative coding also provides high customization when it comes to rendering components on the
screen, gaining a great deal of control over their behavior, and we can modify them to meet even the
unique use cases.

