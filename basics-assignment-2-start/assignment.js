const task3Element = document.getElementById("task-3");

function namewihoutPram() {
  alert("hi pradip");
}

function nameWithParam(n) {
  alert("hi !!! " + n);
}

namewihoutPram();
nameWithParam("pradip");

task3Element.addEventListener("click", namewihoutPram);

function combinedString(str1, str2, str3) {
  return str1 + str2 + str3;
}

const combinedStringResult=combinedString('pradip','gavadu','Patil');
alert(combinedStringResult);
