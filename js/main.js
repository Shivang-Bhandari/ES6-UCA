var batch = "UCA2018";
let batch2 = "UCA2019";

function getStudentDetails() {
  list.innerHTML="";
  students.map(student=> list.innerHTML+=`
      <li>
        <div class="collapsible-header white"><span>${student.name}</span></div>
        <div class="collapsible-body blue-grey lighten-3"><span>${student.batch}</span></div>
      </li>
      `);
}
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

const addStudent=()=>{
  let name=document.getElementById('add_name').value+" "+document.getElementById('add_last_name').value;
  let batch=document.getElementById('add_batch').value;
  let kid={
    name,
    batch
  }
  students.push(kid);

  getStudentDetails();
}
