


function hideAll(){
  $('.login-container').css('display', 'none');
  $('.whole').css('display', 'none');
  $('.exit-page').css('display', 'none');
}

function login(){
  let user = $('#username').val();
  let pass = $('#password').val();

    if(!user||!pass){
    Swal.fire({
      icon:'error',
      title:'Login failed',
      text:'Please fill the blank space!'
    });
    return;
    }

  if(user !== "raven" || pass !== "1234"){
    Swal.fire({
      icon:'error',
      title:'Login failed',
      text:'Incorrect username or password!'
    });
  }else{
    hideAll();
    $('.whole').css('display', 'flex');
    Swal.fire({
      icon:'success',
      title:'Login Success',
      text:'Proceeding..'
    });
  }
}
// array dito napupunta mga input ni user
let users = [];

function saveUser(){
  // pag kuha ng id and ng value 
  let firstName = $("#firstName").val();
  let middleName = $("#middleName").val();
  let lastName = $("#lastName").val();
  let email = $("#email").val();
  let age = $("#age").val();
  
  if(firstName === "" || lastName === "" || email === "" || age === ""){
    Swal.fire({
      icon: "error",
      title: "Failed",
      text: "Empty Space Detected",
      confirmButtonColor: '#d33'
    });
    return;
  } else {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Saved Successfully",
      confirmButtonColor: 'rgba(36, 185, 22, 1)'
    });
  }
// .push pag pasok ng input ni user sa array
  users.push({firstName,middleName,lastName,email,age});
// console.log just optional para macheck lang kung pumapasok sa array yung input
  console.log(users);




  
  let tbody = $("#userTableBody");

  //.html("") para hindi ma duplicate yung input ni user kada save
  $("#userTableBody").html("");
  //loop for each click lalabas yung laman ng row sa usertablebody
  users.forEach(user =>{
    let row = `<tr>
      <td>${user.firstName}</td>
      <td>${user.middleName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      <td>${user.age}</td>
    </tr>`;

    // reason bakit pumapasok yung row sa tablebody/thead
    $("#userTableBody").append(row);
  });
  // para kada click sa saved mawawala yung tinype ni user sa input
  $("#firstName").val("");
  $("#middleName").val("");
  $("#lastName").val("");
  $("#email").val("");
  $("#age").val("");
}
// dito ishoshow yung login dahil sa display flex tapos mahihide yung show form and exit page
function showLogin(){
  hideAll();
  $('.login-container').css('display', 'flex');
  
}

function showForm(){
  hideAll();
  $('.whole').css('display', 'flex');
 
}

function exitPage(){
  hideAll();
  $('.exit-page').css('display', 'block');

}

function goBack(){
  showLogin();
}

$('#contact').on('click', function(e) {
  e.preventDefault(); 
  Swal.fire({
    title: 'My Contact',
    html: `
      <p><strong>Email:</strong> ravenbaluyot49@gmail.com</p>
      <strong>Phone:</strong> 0938 3000 642</p>
    `,
    icon: 'info',
    confirmButtonText: 'Close',
    confirmButtonColor: 'rgba(36, 185, 22, 1)'
  });
});

$('#aboutLink').on('click', function(e) {
  e.preventDefault(); 
  Swal.fire({
    title: 'About This Project',
    html: `
      <p><strong>Project:</strong> User Information Form</p>
      <p><strong>Purpose:</strong> Collect user data and display it in a table.</p>
      <p><strong>Technologies:</strong> HTML, CSS, JavaScript, jQuery, SweetAlert2</p>
      <p><strong>Author:</strong> Raven</p>
    `,
    icon: 'info',
    confirmButtonText: 'Close',
    confirmButtonColor: 'rgba(36, 185, 22, 1)'
  });
});
