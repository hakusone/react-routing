# react routing (template)

a way to implement routes in a react web app. will keep this updated as i learn more about react.

modified from the tutorial [here](https://www.ryanjyost.com/react-routing/).

## setup

in an existing react app (or new app created by [create-react-app](https://github.com/facebook/create-react-app#readme)), install [react-router-dom](https://reactrouter.com/web/guides/quick-start):
```
npm install react-router-dom
```

wrap the root component `App` with the `BrowserRouter` component:

```javascript
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

## setting up routes

create a file `routes.js`. an array called `ROUTES` will store paths and corresponding components. routes can be nested.

for each route in the array:
- `path`: (string) path relative to the app path
- `key`: (string) a unique identifier for this route
- `exact`: (boolean) whether the path should be matched exactly
- `component`: (Component) the component rendered when navigating to this path
- `routes`: (array) list of subroutes

in `routes.js`: component `RouteWithSubRoutes` renders a route with nested subroutes.

in `routes.js`: component `RenderRoutes` renders a `Switch` component with an array of `Route`s, using `RouteWithSubRoutes` component and the `ROUTES` array. `RenderRoutes` should be used as the component to handle arrays of nested subroutes.

## render the routes

in the root component `App`, render the `RenderRoutes` component, using the `ROUTES` array as the prop `routes`.

additionally, create a separate component to render a navigation menu, also using `ROUTES`. as an example, the `Navigation` component will render an unordered list navigation, utilizing a similar nested structure.

```javascript
function App() {
  return (
    <>
      <Navigation routes={ROUTES} />
      <RenderRoutes routes={ROUTES} />
    </>
  );
}
```

## resources

[React Router Documentation](https://reactrouter.com/web/guides/quick-start)

[React Router Architecture that's Simple, Scalable and Protected](https://www.ryanjyost.com/react-routing/)

[React Router Tutorial: Adding Navigation to your React App](https://www.educative.io/blog/react-router-tutorial)