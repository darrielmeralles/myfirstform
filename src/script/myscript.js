var form = document.getElementById("myform");
form.onsubmit = function(e){
    e.preventDefault();
    // console.log(form.firstname.value);
    console.log(final());
    // console.log(check());
    form.reset();
}

function check() {
  var checks = document.getElementsByClassName('checks');
  var chkstr ="";

  for (i = 0; i < 3; i++){
    if ( checks[i].checked === true){
    chkstr += checks[i].value + "\n";
    }
  }
  // alert(chkstr);
  return chkstr;
}

function getval(){

  // var chkstr = console.log(check());
  var fields = [form.firstname, form.lastname, form.email, form.phone, form.Dropdown, form.work];
  var str ="";

  for (i = 0; i < fields.length; i++){
    str += fields[i].value + "\n";
  }
  return str;
}

function final(){
  return getval();
  // return check();
  // return chks(myform, name);
}

function chks(myform, name) {
  // returns array of checked checkboxes with 'name' in 'form_id'
  var form = document.getElementById("myform");
  var inputs = form.getElementsByTagName("input");
  var values = [];
  for (var i = 0; i < inputs.length; ++i) {
      if (inputs[i].type === "checkbox" && 
          inputs[i].name === name &&
          inputs[i].checked) 
      {
          values.push(inputs[i].value);
      }
  }
  return values;
}