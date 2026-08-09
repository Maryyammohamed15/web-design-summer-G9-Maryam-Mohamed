let degreeInput = prompt("Enter degree:")

if (degreeInput === null || degreeInput.trim() === '' || isNaN(degreeInput)) {
    alert("null");
} else {
    let degree = Number(degreeInput);

    if (degree > 100 || degree < 0) {
        alert("null");
    } else if (degree > 90) {
        alert("Grade: A");
    } else if (degree >= 80) {
        alert("Grade: B");
    } else if (degree >= 70) {
        alert("Grade: C");
    } else {
        alert("Grade: F");
    }
}