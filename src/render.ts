// src/render.ts
import { fetchNames, deleteName, Name } from './api';

export const render = async () => {
  const names = await fetchNames();
  $("#todoList").empty();

  names.forEach(function (name: Name) {
    let nameItem = `<li class="list-group-item d-flex justify-content-between align-items-center">
                      <span class="todo-text">${name.text}</span>
                      <div>
                        <button class="btn btn-sm btn-danger deleteTodo" data-index="${name.id}">Delete</button>
                      </div>
                    </li>`;
    $("#todoList").append(nameItem);
  });
};

// Function to set up event listeners
export const setUpDeleteButtonListener = () => {
  $(document).on("click", ".deleteTodo", async function () {
    const id = $(this).data("index");
    console.log("deleting", { id });
    await deleteName(id);
    render();
  }); // <-- This was missing
};
