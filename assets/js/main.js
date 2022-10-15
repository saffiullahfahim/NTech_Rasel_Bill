BillNo.focus();
newpage = header.innerHTML;
BillNo.oninput = function () {
  document.getElementById("billno").innerText = "Bill No. - " + this.value;
};
Session.oninput = function () {
  document.getElementById("session").innerText = this.value;
  if (this.value.length == 3) {
    document.getElementById("month").value = this.value;
  }
};
ADDBTN.onclick = function () {
  Add();
};
Print.onclick = function () {
  window.print();
};
function intToEnglish(number) {
  var NS = [
    { value: 10000000, str: "Crore" },
    { value: 100000, str: "Lakh" },
    { value: 1000, str: "Thousand" },
    { value: 100, str: "Hundred" },
    { value: 90, str: "Ninety" },
    { value: 80, str: "Eighty" },
    { value: 70, str: "Seventy" },
    { value: 60, str: "Sixty" },
    { value: 50, str: "Fifty" },
    { value: 40, str: "Forty" },
    { value: 30, str: "Thirty" },
    { value: 20, str: "Twenty" },
    { value: 19, str: "Nineteen" },
    { value: 18, str: "Eighteen" },
    { value: 17, str: "Seventeen" },
    { value: 16, str: "Sixteen" },
    { value: 15, str: "Fifteen" },
    { value: 14, str: "Fourteen" },
    { value: 13, str: "Thirteen" },
    { value: 12, str: "Twelve" },
    { value: 11, str: "Eleven" },
    { value: 10, str: "Ten" },
    { value: 9, str: "Nine" },
    { value: 8, str: "Eight" },
    { value: 7, str: "Seven" },
    { value: 6, str: "Six" },
    { value: 5, str: "Five" },
    { value: 4, str: "Four" },
    { value: 3, str: "Three" },
    { value: 2, str: "Two" },
    { value: 1, str: "One" },
  ];

  var result = "";
  for (var n of NS) {
    if (number >= n.value) {
      if (number <= 99) {
        result += n.str;
        number -= n.value;
        if (number > 0) result += " ";
      } else {
        var t = Math.floor(number / n.value);
        // console.log(t);
        var d = number % n.value;
        if (d > 0) {
          return intToEnglish(t) + " " + n.str + " " + intToEnglish(d);
        } else {
          return intToEnglish(t) + " " + n.str;
        }
      }
    }
  }
  return result;
}

no = 0;
limit = 0;
date1 = "";
totalliter = 0;
totaltaka = 0;
function Add() {
  if (vehicle.value == "1") {
    vehicle.value = "14-0660";
  }
  if (vehicle.value == "2") {
    vehicle.value = "11-003";
  }
  if (vehicle.value == "3") {
    vehicle.value = "14-2603";
  }
  if (vehicle.value == "4") {
    vehicle.value = "14-2633";
  }
  if (vehicle.value == "5") {
    vehicle.value = "14-2399";
  }
  if (BillNo.value == "") {
    BillNo.focus();
  } else if (Session.value == "") {
    Session.focus();
  } else if (month.value == "") {
    month.focus();
  } else if (day.value == "") {
    day.focus();
  } else if (year.value == "") {
    year.focus();
  } else if (vehicle.value == "") {
    vehicle.focus();
  } else if (liter.value == "") {
    liter.focus();
  } 
  // else if (AddBtn.value == "") {
  //   AddBtn.value = "done";
  //   ADDBTN.focus();
  // } 
  else {
    var d = new Date(day.value + " " + month.value + " " + year.value);
    limit++;
    if (limit == 1) {
      date1 =
        String(d.getDate()).padStart("2", 0) +
        "-" +
        String(d.getMonth() + 1).padStart("2", 0) +
        "-" +
        d.getFullYear();
    }
    if (limit <= 20) {
      no++;
      interval.innerText =
        date1 +
        " to " +
        String(d.getDate()).padStart("2", 0) +
        "-" +
        String(d.getMonth() + 1).padStart("2", 0) +
        "-" +
        d.getFullYear();
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      var td4 = document.createElement("td");
      var td5 = document.createElement("td");
      var td6 = document.createElement("td");
      var td7 = document.createElement("td");
      td1.setAttribute("contenteditable", "");
      td2.setAttribute("contenteditable", "");
      td3.setAttribute("contenteditable", "");
      td4.setAttribute("contenteditable", "");
      td5.setAttribute("contenteditable", "");
      td6.setAttribute("contenteditable", "");
      td7.setAttribute("contenteditable", "");
      td1.innerText = String(no).padStart("2", 0);
      td2.innerText =
        String(d.getDate()).padStart("2", 0) +
        "-" +
        String(d.getMonth() + 1).padStart("2", 0) +
        "-" +
        d.getFullYear();
      td3.innerText = vehicle.value;
      td4.innerText = liter.value;
      td5.innerText = rate.value;
      td6.innerText = liter.value * rate.value;
      table.appendChild(tr);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(td6);
      tr.appendChild(td7);
      totalliter = totalliter + Number(liter.value);
      totaltaka = totaltaka + liter.value * rate.value;
      inword.innerText = intToEnglish(Number(totaltaka));
      //date.value =""
      vehicle.value = "";
      liter.value = "";
      day.value = "";
      AddBtn.value = "";
      day.focus();
      TOTAL();
    } else {
      limit = 0;
      footer.remove();
      Total.remove();
      billno.removeAttribute("id");
      session.removeAttribute("id");
      interval.removeAttribute("id");
      table.removeAttribute("id");

      header.innerHTML += newpage;
      document.getElementById("billno").innerText =
        "Bill No. - " + BillNo.value;
      document.getElementById("session").innerText = Session.value;
      Add();
    }
  }
}

/*function Print(){
var tr = document.createElement("tr")
var td1 = document.createElement("th")
var td2 = document.createElement("th")
var td3 = document.createElement("th")
var td4 = document.createElement("th")
var td5 = document.createElement("th")
var td6 = document.createElement("th")
var td7 = document.createElement("th")
//td1.setAttribute("contenteditable","")
//td2.setAttribute("contenteditable","")
td3.setAttribute("contenteditable","")
td4.setAttribute("contenteditable","")
//td5.setAttribute("contenteditable","")
td6.setAttribute("contenteditable","")
//td7.setAttribute("contenteditable","")
////td1.innerText = String(no).padStart('2',0)
//td2.innerText = String(d.getDate()).padStart('2',0)+"-"+String(d.getMonth()+1).padStart('2',0)+"-"+d.getFullYear()
td3.innerText = "Total"
td4.innerText = totalliter
//td5.innerText = 
td6.innerText = totaltaka
table.appendChild(tr)
tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)
tr.appendChild(td4)
tr.appendChild(td5)
tr.appendChild(td6)
tr.appendChild(td7)
window.print()
}*/

function TOTAL() {
  Total.remove();
  var tr = document.createElement("tr");
  tr.setAttribute("id", "Total");
  var td1 = document.createElement("th");
  var td2 = document.createElement("th");
  var td3 = document.createElement("th");
  var td4 = document.createElement("th");
  var td5 = document.createElement("th");
  var td6 = document.createElement("th");
  var td7 = document.createElement("th");
  //td1.setAttribute("contenteditable","")
  //td2.setAttribute("contenteditable","")
  td3.setAttribute("contenteditable", "");
  td4.setAttribute("contenteditable", "");
  //td5.setAttribute("contenteditable","")
  td6.setAttribute("contenteditable", "");
  //td7.setAttribute("contenteditable","")
  ////td1.innerText = String(no).padStart('2',0)
  //td2.innerText = String(d.getDate()).padStart('2',0)+"-"+String(d.getMonth()+1).padStart('2',0)+"-"+d.getFullYear()
  td3.innerText = "Total";
  td4.innerText = totalliter;
  //td5.innerText =
  td6.innerText = totaltaka;
  table.appendChild(tr);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td7);
}
