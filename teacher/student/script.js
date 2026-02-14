function login() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  users.push({ name, role });
  localStorage.setItem("users", JSON.stringify(users));

  if (role === "teacher") {
    window.location = "teacher.html";
  } else {
    window.location = "student.html";
  }
}

// Guru Tambah Tugas
function addTask() {
  const title = document.getElementById("taskTitle").value;
  const desc = document.getElementById("taskDesc").value;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ title, desc });

  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Tugas ditambahkan!");
}

// Load data otomatis
window.onload = function() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (document.getElementById("totalStudents")) {
    let students = users.filter(u => u.role === "student");
    document.getElementById("totalStudents").innerText = students.length;

    let list = document.getElementById("studentList");
    students.forEach(s => {
      list.innerHTML += `<p>${s.name}</p>`;
    });
  }

  if (document.getElementById("taskList")) {
    let list = document.getElementById("taskList");
    tasks.forEach(t => {
      list.innerHTML += `
        <div class="card">
          <h3>${t.title}</h3>
          <p>${t.desc}</p>
        </div>
      `;
    });
  }
};
