

$("#add-train-btn").on("click", function(event) {
    
    var trainName = $("#train-name-input").val().trim();

    var trainDestination = $("#route-input").val().trim();

    var trainStart = $("#start-input").val().trim();

    var trainStartConverted = moment(trainStart, "HH:mm");

    var trainFrequency = $("#frequency-input").val().trim();

    var nextTrainTime = moment().diff(moment(trainStartConverted), "minutes");

    console.log(trainName);
    console.log(trainDestination);
    console.log(trainStart);
    console.log(trainStartConverted);
    console.log(trainFrequency);
    console.log(nextTrainTime);
});

