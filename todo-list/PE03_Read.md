input:

In an input field, the user types descriptions of ToDo items.
To add a task to the list of ToDos, the user clicks the "Add Task" button.
To remove a ToDo item from the list, the user clicks the "Delete" button next to it.

process:
Handling input: 
Through event handlers for adding and deleting ToDos, the app records user interactions.
The list of ToDos and the presently entered ToDo description are managed by the useState hook.

Adding a ToDo: 
The app checks to see if the description entered for the ToDo is not empty when the user presses the "Add Task" button.
Adding the new ToDo to the list of ToDos modifies the state if it is not empty.
React's state management enables the ToDo list to be updated without requiring a page reload.

Removing a ToDo: A "Delete" button is displayed for each ToDo in the list.
The program activates the handleDeleteTodo event handler when the user selects the "Delete" button next to a particular ToDo.
By eliminating the selected ToDo from the list using the filter method, the app updates the status.

output:
The app shows a list of tasks along with a description for each task.
Using the supplied buttons, the user can interact with the program by adding new ToDos and deleting current ones.

**NOTE:** More details in the PE03 submission document. 
