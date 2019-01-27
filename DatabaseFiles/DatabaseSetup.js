const firstNames = ["Mike","Brendon","Mot", "Hunter", "Tom"];
const lastNames = ["Keohane", "Urie", "Ydarb", "Hancock", "Holland"];
const emails = ["mkeohane@gatech.edu", "burie@gmail.com", "goat@gmail.com", "hhancock@gmail.com", "tholland@gmail.com"];
const descriptions = ["Student seeking opportunities to work in real world industries",
"Adaptable : Ready to Learn : Web Developer : I may be 'old fashioned' but I have 'high hopes' for the future",
"Touchdown","I like to do front end development and designing amazing UIs", "My mission in life is to help other people with my abilities"];
const locations = ["Boston, MA", "Acworth, GA", "Atlanta, GA", "Savannah, GA", "Douglasville, GA"];
const highSchools = ["Saint John's", "Georgia High School", "Michigan High School", "Wachusette Regional High School", "East High"];
const icons = ["/images/people/joe.jpg", "/images/people/elliot.jpg", "/images/people/christian.jpg", "/images/people/steve.jpg", "/images/people/matthew.png"];
const skills = [["Java", "Android Studio", "Pseudocode"], ["Python", "Perl"], ["Xcode","Swift"], ["Java", "Python"], ["HTML", "JavaScript"]];


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
createTasks(["Python"], 16, "Library Organizer", "ArgoAI", "Creating an organized system of folders for our files", "$50", null, null, "open", "January 11, 2019", "Data Processing");
createTasks(["Android Studio", "Java"], 16, "Android App Developer", "Supercell", "Implementing the next update for Clash of Clans", "$100", null, null, "open", "January 18, 2019", "Android App Development");

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
            createCompanies("Dave's Groceries", "We have some of the most diverse options in Southern GA", "www.DavesGroceries.com", "/images/daves.png", docRef.id, "daves@gmail.com", "Buford, GA");
        } else if(skills[0] == "Java"){
            createCompanies("Rovio Entertainment", "All the news that's fit to fly!", "http://www.rovio.com/", "/images/rovio.png", docRef.id, "rovio@gmail.com", "Atlanta, GA");
        } else if(skills[0] == "HTML"){
            createCompanies("Shrewsbury Youth and Family Services", "The mission of Shrewsbury Youth and Family Services, Inc. (SYFS) is provide counseling and other supportive services to members of our community.",
"http://www.syfs-ma.org/mission--history.html", "/images/syfs.png", docRef.id, "syfs@gmail.com", "Shrewsbury, GA");
        } else if(skills[0] == "Python"){
            createCompanies("Argo AI", "Developing the future of self driving cars", "www.ArgoAI.com", "/images/argoai.png", docRef.id, "argoai@gmail.com", "Norcross, GA");
        } else if(skills[0] == "Android Studio"){
            createCompanies("Supercell", "The best mobile app developes in the world!", "www.supercell.com", "/images/supercell.png", docRef.id, "supercell@gmail.com", "Cartersville, GA");
        }
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    
}

// Initial Setup for Users
for(var i = 0; i < 5; i++) {
    const userRef = firestore.collection("Users");
    userRef.add({
        FirstName: firstNames[i],
        LastName: lastNames[i],
        Email: emails[i],
        Description: descriptions[i],
        Location: locations[i],
        PowerLevel: parseInt(Math.random() * 35 + 5),
        ProfilePic: icons[i],
        HighSchool: highSchools[i],
        Skills: skills[i]
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
"https://www.amazon.com/", "/images/amazon.png", "amazon@gmail.com", "Atlanta, GA");

function createCompanies(name, description, website, logo, id, email, location) {
    const companyRef = firestore.collection("Companies");
    companyRef.add({
        Name: name,
        Description: description,
        Website: website,
        Logo: logo,
        Email: email,
        Location: location
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

function createDemoCompany(name, description, website, logo, email, location) {
    const companyRef = firestore.collection("Companies");
    companyRef.add({
        Name: name,
        Description: description,
        Website: website,
        Logo: logo,
        Email: email,
        Location: location
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

createDefaultUser();
function createDefaultUser() {
    const defaultRef = firestore.collection("Users");
    defaultRef.doc("Sa871ME9#2peR91C6X").set({
        FirstName: "Jackson",
        LastName: "Harriet",
        Email: "jharriet@gmail.com",
        Description: "Hard worker who is willing to learn whatever it takes to get the job done right",
        Location: "Johns Creek, GA",
        PowerLevel: parseInt(Math.random() * 15 + 5),
        ProfilePic: "/images/people/daniel.jpg",
        HighSchool: "Freemont High School",
        Skills: ["Java", "C++", "Python", "Arduino"]
    })
    .then(function(docRef) {
        console.log("Document written ");
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

// create default company
const companyRef = firestore.collection("Companies");
    companyRef.doc("Ca871ME9#2peR91C6X")({
        Name: "Google",
        Description: "Make science fiction a reality",
        Website: "www.google.com",
        Logo: "/images/google.png",
        Email: "google@gmail.com",
        Location: "Athens, GA"
    })
    .then(function(docRef) {
        console.log("Document written ");
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });