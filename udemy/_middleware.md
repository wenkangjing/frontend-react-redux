Intermediate Redux: Middleware
------------------------------

weather app
![weather app component structure](./weatheapp_component_structure);

### Split the UI

Q1: Container or Component?
- Container (user interaction)
  - `mapStateToProps(state)`
  - `mapDispatchToProps(dispatch)`
  - then bind `this.props.action` to element callback to talk to redux

- Component (show data)
  -  `mapStateToProps(state)` 
  - then show `this.props` in render()

Q2: Component State vs Application State (Redux)
- Component State - between elements inside the component
- Application State (Redux) - between Components, either
  - pass data to children component, or
  - dispatch action

Q3: Context Lost in callback function
- arrow function
- bind(this)

// check bootstrap doc for styling
// 
- [] SearchBar
- [] 


### Form 
- `form` `onSubmit` `event.preventDefault()`

