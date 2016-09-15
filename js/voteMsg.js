$( document ).ready ( function() { 
    // Vote start date
    var startDate = new Date("9/15/2016");

    // Vote end date
    var endDate = new Date("9/17/2016");

    // Today's date
    var todaysDate = new Date();

    // call setHours to take the time out of the comparison
    if (startDate.setHours(0,0,0,0) > todaysDate.setHours(0,0,0,0)) {
        // Date before vote date
        document.getElementById("voteMsg").innerHTML = "Remember to vote on <b>Thursday 15th September</b> until <b>Saturday 17th September!</b>";
    } else if (endDate.setHours(0,0,0,0) > todaysDate.setHours(0,0,0,0)) {
        // Date is vote date
        document.getElementById("voteMsg").innerHTML = "<a href='https://docs.google.com/a/student.unimelb.edu.au/forms/d/e/1FAIpQLScAuMtjw1nJiOetL-duy0pPvT7vn8XL8L0GRykYykBkcEt_RQ/viewform'>Voting is now open until <b>Saturday 17th September!</b></a>";
    } else {
        // Date past vote date
        document.getElementById("voteMsg").innerHTML = "Voting is now closed, thanks for supporting me!";
    };
});