// Populator function
function getStudentDetails() {
  list.innerHTML="";
  students.map(student=> list.innerHTML+=`
      <li>
        <div class="collapsible-header white"><span>${student.name}</span></div>
        <div class="collapsible-body blue-grey lighten-3"><span>${student.batch}</span></div>
      </li>
      `);
}

// Pre-Filled Object Array for students dummy data
const students=[
  {
    'name':'Abra Dabra',
    'batch':'UCA2018'
  },
  {
    'name':'Fudu',
    'batch':'222'
  }
];

let list=document.getElementById('main');

// method to add a student to the list
const addStudent=()=>{

  let name=document.getElementById('add_name').value;
  let lastName=document.getElementById('add_last_name').value;
  let batch=document.getElementById('add_batch').value;

  // Check for fields
  if(name==""||lastName==""||batch==""){
    Materialize.toast('Please Fill all form Feilds and Try Again', 3000, 'rounded');
  }

  // object decalaration
  const kid={
    name,
    batch
  };

  students.push(kid);

  // updating list
  getStudentDetails();
}
