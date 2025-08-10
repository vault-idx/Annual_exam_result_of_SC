const password = "Hello Sourav";

function login() {
    const enteredPass = document.getElementById("passwordInput").value;
    if (enteredPass === password) {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("resultPage").classList.remove("hidden");
        loadResults();
    } else {
        document.getElementById("error").style.display = "block";
    }
}

function getGPA(marks) {
    if (marks >= 80) return 5.00;
    else if (marks >= 70) return 4.00;
    else if (marks >= 60) return 3.50;
    else if (marks >= 50) return 3.00;
    else if (marks >= 40) return 2.00;
    else if (marks >= 33) return 1.00;
    else return 0.00;
}

function getRating(gpa) {
    if (gpa === 5.00) return "🌟 Excellent Student";
    else if (gpa >= 4.00) return "👍 Very Good";
    else if (gpa >= 3.00) return "🙂 Good";
    else if (gpa >= 2.00) return "😐 Average";
    else return "⚠ Needs Improvement";
}

function loadResults() {
    const subjects = [
        { name: "Bangla", theory: 65, mcq: 20, practical: 0 },
        { name: "English", theory: 72, mcq: 0, practical: 0 },
        { name: "ICT", theory: 55, mcq: 20, practical: 15 },
        { name: "Physics", theory: 60, mcq: 15, practical: 15 },
        { name: "Chemistry", theory: 58, mcq: 18, practical: 15 },
        { name: "Biology", theory: 62, mcq: 17, practical: 15 },
        { name: "Higher Math", theory: 70, mcq: 20, practical: 15 }
    ];

    let tableBody = document.getElementById("resultTable");
    let subtotalMarks = 0;
    let totalGPA = 0;

    tableBody.innerHTML = "";

    subjects.forEach(sub => {
        let total = sub.theory + sub.mcq + sub.practical;
        let gpa = getGPA(total);
        subtotalMarks += total;
        totalGPA += gpa;

        let row = `<tr>
            <td>${sub.name}</td>
            <td>${sub.theory}</td>
            <td>${sub.mcq}</td>
            <td>${sub.practical}</td>
            <td>${total}</td>
            <td>${gpa.toFixed(2)}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });

    let avgGPA = totalGPA / subjects.length;
    document.getElementById("subtotalMarks").innerText = subtotalMarks;
    document.getElementById("totalGPA").innerText = avgGPA.toFixed(2);
    document.getElementById("studentRating").innerText = "Student Rating: " + getRating(avgGPA);
}