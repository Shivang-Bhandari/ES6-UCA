// Populator function
function getStudentDetails() {
  list.innerHTML = "";

  students.map(student => list.innerHTML += `
      <li>

      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">${student.name}</span>
            <p>Roll Number : ${student.roll}</p>
            <p>batch : ${student.batch}</p>
            <p>passout : ${student.passout}</p>
          </div>
          <div class="card-action" style="display:flex;flex:auto;">
            <div>
            <a href="#" onclick=edit($(this))>Edit</a>
            <a href="#" onclick=deleteStudent($(this))>Delete</a>
            </div>
            <div class="switch right">
              <label>
                No
              <input type="checkbox" name="deleteThis">
              <span class="lever"></span>
                Delete Multiple
              </label>
            </div>
          </div>
        </div>
      </div>

      </li>
      `);
}

// Pre-Filled Object Array for students dummy data
const students = [
  {
    'name': 'Abra',
    'roll': '1510991999',
    'batch': 'UCA2018',
    'passout': '2019'
  }, {
    'name': 'Gujju',
    'roll': '141099888',
    'passout': '2018',
    'batch': 'CPM'
  }
];

let list = document.getElementById('main');

// method to add a student to the list
const addStudent = () => {

  let name = document.getElementById('add_name').value;
  let batch = document.getElementById('add_batch').value;
  let roll = document.getElementById('add_roll').value;
  let passout = document.getElementById('add_passout').value;

  // Check for fields
  if (name == "" || batch == "") {
    Materialize.toast('Please Fill all form Feilds and Try Again', 3000, 'rounded');
  }

  // object decalaration
  const kid = {
    name,
    batch,
    roll,
    passout
  };

  students.push(kid);

  // updating list
  getStudentDetails();
}

// method to remove students
const deleteStudent = ($element) => {
  let parent1 = $element.parent().parent();
  parent1.remove();
}

// method to remove multiple students
const deleteMultiple = ()=>{
  let deleteList = document.getElementsByName('deleteThis');
  for(var i=0;i<deleteList.length;i++){
    if(deleteList[i].checked==true){
      deleteList[i].parentNode.parentNode.parentNode.parentNode.remove();
      i--;
    }

  }
}
