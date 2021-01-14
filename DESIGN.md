Components Drafts:
- "Add Todo" bar - form
- list of Todos - "<ul>" of strings with checkboxes
- search bar - form

Components Hierarchy:
- App, Todo Array
  - SearchBar
  - AddTodoBar
  - TodoList

Implementation Details:
User will check the checkbox to delete a Todo from the array. The id of each Todo (https://www.npmjs.com/package/nanoid) will be used to uniquely identify it so that it can be deleted.
Array of Todo items - When user clicks "Add Todo" button, assign new id and append to array. Elements of array will be objects, each with id and string description.
When user searches, query the array for the substring and return all elements.