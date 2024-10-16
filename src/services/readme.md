# Purpose

The services folder is designed to handle external interactions like API calls or business logic that involves data fetching and manipulation. This folder centralizes the logic for communication with servers or third-party services, ensuring that your React components remain clean and focused on rendering UI.

By separating API calls and external requests into the services folder, you make your components more maintainable and reusable, while the service functions manage side effects and handle external data.

# How to Use Services

Services can be used to fetch data, post data, or perform other operations that involve side effects. You should create functions in the services folder that return promises or async results, and call them from your components.
