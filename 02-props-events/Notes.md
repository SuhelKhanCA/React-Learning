# React Props and Events

## Props

- **Definition**: Props (short for properties) are _read-only_ attributes used to pass data from parent to child components.
- **Usage**: Props are passed to components similarly to HTML attributes.
- **Syntax**:
  ```jsx
  <ChildComponent propName={propValue} />
  ```
- **Accessing Props**: Inside the child component, props can be accessed using `this.props` (class components) or directly as function arguments (functional components).

  ```jsx
  // Class Component
  class ChildComponent extends React.Component {
    render() {
      return <div>{this.props.propName}</div>;
    }
  }

  // Functional Component
  const ChildComponent = (props) => {
    return <div>{props.propName}</div>;
  };
  ```

- **Default Props**: Default values for props can be defined using `defaultProps`.
  ```jsx
  ChildComponent.defaultProps = {
    propName: "defaultValue",
  };
  ```

## Rendering Lists

- **Definition**: Rendering lists in React involves using the `map` function to iterate over an array and return a list of elements.
- **Usage**: Each item in the list should have a unique `key` prop to help React identify which items have changed.
- **Syntax**:

  ```jsx
  const items = ["Item 1", "Item 2", "Item 3"];

  const ListComponent = () => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };
  ```

- **Keys**: Keys should be unique and stable. They help React optimize rendering by keeping track of elements.

  ```jsx
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  const ListComponent = () => {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  };
  ```

## Events

- **Definition**: Events in React are triggered by user actions such as clicks, form submissions, etc.
- **Handling Events**: Event handlers are passed as props to the elements.
- **Syntax**:
  ```jsx
  <button onClick={handleClick}>Click Me</button>
  ```
- **Event Handler Functions**: Event handlers can be defined as methods in class components or as functions in functional components.

  ```jsx
  // Class Component
  class MyComponent extends React.Component {
    handleClick = () => {
      console.log("Button clicked");
    };

    render() {
      return <button onClick={this.handleClick}>Click Me</button>;
    }
  }

  // Functional Component
  const MyComponent = () => {
    const handleClick = () => {
      console.log("Button clicked");
    };

    return <button onClick={handleClick}>Click Me</button>;
  };
  ```

- **Synthetic Events**: React uses a synthetic event system that is consistent across all browsers.
- **Passing Arguments to Event Handlers**: Use an arrow function or the `bind` method to pass arguments to event handlers.

  ```jsx
  // Using Arrow Function
  <button onClick={() => handleClick(arg)}>Click Me</button>

  // Using bind
  <button onClick={handleClick.bind(this, arg)}>Click Me</button>
  ```

## Summary

- Props are used to pass data from parent to child components.
- Props are read-only and should not be modified.
- Lists can be rendered using the `map` function, and each item should have a unique `key`.
- Events are used to handle user interactions.
- Event handlers can be defined in both class and functional components.
- React's synthetic event system ensures cross-browser compatibility.
