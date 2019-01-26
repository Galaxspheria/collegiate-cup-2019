const firstNames = ["Mike","Brendon","Mot"];
const lastNames = ["Keohane", "Urie", "Ydarb"];
const emails = ["mkeohane@gatech.edu", "burie@gmail.com", "goat@gmail.com"];
const descriptions = ["Student seeking opportunities to work in real world industries",
"Adaptable : Ready to Learn : Web Developer : I may be 'old fashioned' but I have 'high hopes' for the future",
"Touchdown"];
const locations = ["Boston, MA", "Acworth, GA", "Atlanta, GA"];
const highSchools = ["Saint John's", "Georgia High School", "Michigan High School"];


// Initialize Firebase
var config = {
    apiKey: "AIzaSyDLCujwqD9Ix9TNBu_SHsDEwMR_-iSVawE",
    authDomain: "workbettercc.firebaseapp.com",
    databaseURL: "https://workbettercc.firebaseio.com",
    projectId: "workbettercc",
    storageBucket: "workbettercc.appspot.com",
    messagingSenderId: "482314606873"
  };
  firebase.initializeApp(config);
  var firestore = firebase.firestore();

// Initial Setup for Tasks
createTasks(["Swift","Xcode"], 0, "Angry Birds UI", "Rovio Entertainment", "Developing a settings menu", "$250", null, null, "open", "January 24, 2019", "iOS App Development");
createTasks(["Java"], 0, "Bubble Sort Algorithm", "Dave's Grocerie's", "Designing an algorithm to sort items in a grocery store", "$40", null, null, "open", "January 26, 2019", "Data Processing");
createTasks(["HTML"], 16, "SYFS Web Designer", "Shrewsbury Youth and Family Services", "Creating a basic website for SYFS", "$0", null, null, "open", "January 17, 2019", "Web Development");

function createTasks(skills, service, title, company, description, wage, applied, accepted, status, date, category) {
    const taskRef = firestore.collection("Tasks");
    taskRef.add({
        Skills: skills,
        ServiceHours: service,
        Title: title,
        CompanyName: company,
        Description: description,
        Wage: wage,
        AppliedUsers: applied,
        AcceptedUser: accepted,
        Status: status,
        DateCreated: date,
        Category: category
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        if(skills[0] =="Swift") {
            createCompanies("Dave's Groceries", "We have some of the most diverse options in Southern GA", "www.DavesGroceries.com", "/images/daves.png", docRef.id);
        } else if(skills[0] == "Java"){
            createCompanies("Rovio Entertainment", "All the news that's fit to fly!", "http://www.rovio.com/", "/images/rovio.png", docRef.id);
        } else if(skills[0] == "HTML"){
            createCompanies("Shrewsbury Youth and Family Services", "The mission of Shrewsbury Youth and Family Services, Inc. (SYFS) is provide counseling and other supportive services to members of our community.",
"http://www.syfs-ma.org/mission--history.html", "/images/syfs.png", docRef.id);
        }
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    
}

// Initial Setup for Users
for(var i = 0; i < 3; i++) {
    const userRef = firestore.collection("Users");
    userRef.add({
        FirstName: firstNames[i],
        LastName: lastNames[i],
        Email: emails[i],
        Description: descriptions[i],
        Location: locations[i],
        PowerLevel: parseInt(Math.random() * 35 + 5),
        ProfilePic: "/images/image.png",
        HighSchool: highSchools[i]
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

// Initial Setup for Companies
createDemoCompany("Amazon", "Our vision is to be earth's most customer-centric company; to build a place where people can come to find and discover anything they might want to buy online.",
"https://www.amazon.com/", "/images/amazon.png");

function createCompanies(name, description, website, logo, id) {
    const companyRef = firestore.collection("Companies");
    companyRef.add({
        Name: name,
        Description: description,
        Website: website,
        Logo: logo
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        companyRef.doc(docRef.id).collection("Tasks").doc(id).set({
            
        })
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

function createDemoCompany(name, description, website, logo) {
    const companyRef = firestore.collection("Companies");
    companyRef.add({
        Name: name,
        Description: description,
        Website: website,
        Logo: logo
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

function addTaskToStudent(student, task) {

}