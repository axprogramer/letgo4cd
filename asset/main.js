function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '10px';
    }
  }
  


function btnClick1(){
    console.log("Student's Book")
}
function btnClick2(){
    console.log("Skills Book")
}
function btnClick3(){
    console.log("Quiz")
}
