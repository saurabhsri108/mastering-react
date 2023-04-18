# Mastering Context

This repository is for learning purpose made by following the tutorial of Jack Herrington in this [YouTube Video](https://www.youtube.com/watch?v=MpdFj8MEuJA)

## Learnings

1. React State has multiple rendering problems where all the components renders regardless of whether it has changed or not if the parent changes.
2. To fix the above, we can use "memo" in the children components.
3. React Context API doesn't solve the default rendering of all children issue. We used use-context-selector package to make it similar to typical state management package like Zustand.
4. Zustand state manager only renders the component where the value changes by default and solves both the problem of global state management on the client end and rendering only the component where value is being changed out of the box.
5. Context API is better for Theme changing type of scenario where every component must re-render for it to work and perhaps in micro-frontends.
6. For the rest, going with the global state management solution like zustand and redux-toolkit works best.
