var courses = ["HTML", "CSS", "JavaScript", "Bootstrap"];

 var course = prompt("Enter course name");


     var index = courses.indexOf(course);

    if (index != -1) {
   alert("Course exists at index:" + index);
        console.log(index);

    } else {

        courses.push(course);
        alert("Update list:" + courses.join(","));

        console.log(courses);
    }