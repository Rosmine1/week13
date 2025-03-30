// src/main.ts
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { addName } from './api';
import { render, setUpDeleteButtonListener } from './render';

// Run the render function when the page loads
render();

// Set up the delete button event listeners
setUpDeleteButtonListener();

// Add event listener to the add name button
$("#addTodo").click(async (event) => {
  event.preventDefault();
  const text = $("#newTodo").val();

  if (!text) {
    alert("Please enter a name");
    return;
  }

  // Add the new name to the server
  try {
    await addName(text as string);
  } catch (error) {
    console.log(error);
  } finally {
    // Clear the input field regardless of the outcome
    $("#newTodo").val("");
  }

  // Re-render the names again
  render();
});
