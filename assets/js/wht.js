function printDiv() {
    var divName = document.getElementById("name").value;
    var divPlace = document.getElementById("place").value;
    var divSubject = document.getElementById("subject").value;
    var divMessage = document.getElementById("message").value;
    if (divName == "" || divPlace == "" || divMessage == "" ) {
        window.alert("Name, Place and Message are mandatory!");
    } else {
    window.open("https://wa.me/+919747994523/?text="+divSubject+"%0A%0A"+divMessage+"%0A%0AName%20:%20"+divName+"%0APlace%20:%20"+divPlace);
    
    }
}

