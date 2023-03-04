var heading = document.getElementById("recipient-name");
var comment = document.getElementById("message-text");

var time = new Date();

let arr = [];
var see_ID = null;

var Save_changes = "Publish Post";
console.log(see_ID);
function submit() {
  var name = heading.value;
  var comm = comment.value;

  if (see_ID != null) {
    arr.splice(see_ID, 1, { head: name, ttt: comm });
  } else {
    arr.push({ head: name, ttt: comm });
  }

  document.getElementById("test").innerHTML = Save_changes;
  display();

  document.getElementById("recipient-name").value = "";
  document.getElementById("message-text").value = "";
}

console.log(arr.length);

function display() {
  let check = "";
  console.log(arr.length);
  arr.forEach((hh, i) => {
    check += `
    <div class="container mt-5 mm">
        <h1 class="h2" id="name">${hh.head}</h1>
        <div class="content" >
            <p id="content">${hh.ttt}</p>
        </div>
        <div class="btn d-flex justify-content-between">
            <div class="btn-container d-flex">
            <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="edit_post(${i})">
            Edit Post
        </button>
                <button type="button" class="btn btn-outline-danger ms-5" onclick='deleteh(${i})'>Delete Post</button>
            </div>
            <div class="update-container">
                <p id="update" class="text-white">Created At : ${time.toLocaleString(
                  "en-US",
                  { hour: "numeric", hour12: true } + " : " + time.getMinutes()
                )}</p>
            </div>
        </div>

    </div>`;
  });

  document.getElementById("sample").innerHTML = check;
}

function deleteh(id) {
  arr.splice(id, 1);
  display();
}

function edit_post(id) {
  see_ID = id;
  document.getElementById("test").innerHTML = "Save changes";

  document.getElementById("recipient-name").value = arr[id].head;
  document.getElementById("message-text").value = arr[id].ttt;
}
