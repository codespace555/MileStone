
// for popup
function popupForm() {
    document.getElementById("popup_form").classList.toggle("active")
}

// form






// // Open or create a database
const request = indexedDB.open('myDatabase', 1);
let db;

request.onerror = function (event) {
    console.error("Database error: " + event.target.errorCode);
};

request.onsuccess = function (event) {
    db = event.target.result;
    console.log("Database opened successfully");

    displayData();
};

request.onupgradeneeded = function (event) {
    db = event.target.result;
    const objectStore = db.createObjectStore('formData', { autoIncrement: true });
    objectStore.createIndex('Url', { unique: false });
    objectStore.createIndex('Title', { unique: false });
    objectStore.createIndex('Discription', { unique: false });
    objectStore.createIndex('blog_contant');
};

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data
    const Url = document.getElementById('post_Url').value;
    const Title = document.getElementById('title').value;
    const Discription = document.getElementById('discription').value;
    const blog_contant = document.getElementById('blog_contant').value;

    // Save form data to IndexedDB
    const transaction = db.transaction(['formData'], 'readwrite');
    const objectStore = transaction.objectStore('formData');

    const formData = {
        Url: Url,
        Title: Title,
        Discription: Discription,
        blog_contant: blog_contant
    };

    objectStore.add(formData);

    // Show the data on the webpage
    displayData();
});

function displayData() {
    const transaction = db.transaction(['formData']);
    const objectStore = transaction.objectStore('formData');
    const request = objectStore.getAll();

    request.onsuccess = function (event) {
        const data = event.target.result;

        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
          
        `;

        data.forEach(function (formData) {
        const readid = formData.Title

            resultDiv.innerHTML += `
            <div class="card">
            <img src="${formData.Url}" alt="">
               
                <strong>${formData.Title}</strong>
                <p>${formData.Discription}</p>
                
                <button onclick = "read()">Read</button>
                
                
                </div>
            `;
            
        });
    };
}

    // Read data from IndexedDB


function read() {
    // Read data from IndexedDB
    const transaction = db.transaction(['formData'], 'readonly');
    const objectStore = transaction.objectStore('formData');
    const request = objectStore.getAll();

    request.onsuccess = function (event) {
        const data = event.target.result;
        if (data.length === 0) {
            alert('No data available to open.');
            return;
        }
        


        // Prepare the data to be sent to the other webpage
        const dataToSend = JSON.stringify(data);

        // Open the other webpage in a new tab/window
        const newWindow = window.open('read.html');

        // Pass the data to the other webpage using local storage
        newWindow.addEventListener('load', function () {
            newWindow.localStorage.setItem('formData', dataToSend);
        });
    };
};

