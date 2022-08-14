const firebaseConfig = {

  apiKey: "AIzaSyDcgy5PdIyQDxv_IKpqqHaiDLHm58ttE58",

  authDomain: "html-98a3d.firebaseapp.com",

  databaseURL: "https://talabat-87a75-default-rtdb.firebaseio.com",

  projectId: "html-98a3d",

  storageBucket: "html-98a3d.appspot.com",

  messagingSenderId: "257281441182",

  appId: "1:257281441182:web:943ef0f51325ab462cea8f",

  measurementId: "G-MCEFD6W52F"

};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var age = getElementVal("age");
  var number = getElementVal("number");
  var msgContent = getElementVal("msgContent");
  var name = getElementVal("name");
  var edu = getElementVal("edu");

  

  

  saveMessages(age,name, number, msgContent,edu);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (age, name, emailid, msgContent,edu) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    age: age,
    name: name,
    emailid: emailid,
    msgContent: msgContent,
    edu:edu,
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
