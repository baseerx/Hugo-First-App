$(document).ready(function () {
  let array = [];

  // Function to display array items
  function displayArray() {
    $(".list-group").empty(); // Clear previous content

    array.forEach((item) => {
      const listItem = `
            <li class="list-group-item d-flex justify-content-between">
                ${item.value} 
                <span>
                    <button class="edit btn btn-success btn-sm" data-id="${item.id}">Edit</button>
                    <button class="delete btn btn-danger btn-sm mx-2" data-id="${item.id}">Delete</button>
                </span>
            </li>`;
      $(".list-group").append(listItem);
    });
  }

  // Add item to array
  $("#add").click(function () {
    const val = $("#text-field").val();
    const randomId = Math.floor(Math.random() * 1000);
    const jsonObject = {
      id: randomId,
      value: val,
    };
      array.push(jsonObject);
          $("#text-field").val("");

    displayArray(); // Update displayed array
  });

  // Edit item in array
  $(document).on("click", ".edit", function () {
    const id = $(this).data("id");
    const newValue = prompt("Enter new value:");

    const index = array.findIndex((item) => item.id === id);

    if (index !== -1 && newValue !== null) {
      array[index].value = newValue;
      displayArray(); // Update displayed array
    }
  });

  // Delete item from array
  $(document).on("click", ".delete", function () {
    const id = $(this).data("id");

    const index = array.findIndex((item) => item.id === id);

    if (index !== -1) {
      array.splice(index, 1);
      displayArray(); // Update displayed array
    }
  });
});
