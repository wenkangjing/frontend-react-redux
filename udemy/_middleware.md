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






