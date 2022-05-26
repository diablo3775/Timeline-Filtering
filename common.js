function displayAllSageCRMID() {
  // Declare a new array
  let newArray = [];
  // Declare an empty object
  let uniqueData = {};
  // Loop for the array elements
  for (let i in jsondata) {
    // Extract the title
    let sageCRMid = jsondata[i]['ComputerName'];
    // Use the title as the index
    uniqueData[sageCRMid] = jsondata[i];
  }
  // Loop to push unique object into array
  for (i in uniqueData) {
    newArray.push(uniqueData[i]);
  }
  // Display the unique objects
  let option = "";
  for (let i = 0; i < newArray.length; i++) {
    option += `<option value="${newArray[i].ComputerName}">${newArray[i].ComputerName}</option>`
  }
  document.getElementById("sageCRMid").innerHTML = option;
}

$(document).ready(function () {
    //For displaying dropdown values 
    displayAllSageCRMID();
    // The first time the page loads, the graph will be rendered
    loadTimeLineGraph($('#sageCRMid').val());
    // The first time the page loads, the count number will be rendered
    ($('#totalRecords').text(`Total Number Of Updates : ${16}`).val());
});

$('#sageCRMid').on('change', function () {
  // The graph will be rendered when the dropdown is changed
  loadTimeLineGraph(this.value);
  // Count Number is displayed based on the dropdown selection
  let objSageCRM = jsondata.filter(data => data.ComputerName === $('#sageCRMid').val() && data.PatchCategory != "");
  let count = objSageCRM.length;
  $('#totalRecords').text(`Total Number Of Updates : ${count}`);
});

// Filering the data based on the search input field
$('#search').on('input', function () {
  // The graph will be rendered when the input search field is changed
  loadTimeLineGraph($('#sageCRMid').val())
});

function loadTimeLineGraph(sageCRMid) {
  let objSageCRM = jsondata.filter(data => data.ComputerName === sageCRMid && data.PatchCategory != "");
// If the input field is empty then all the data will be rendered else the data will be filtered based on the input field
    milestones('.timeline')
    .mapping({
        'timestamp': 'InstallDate',
        'text': 'PatchCategory'
    })
    .optimize(true)
    .aggregateBy('day')
    .render([document.getElementById("search").value === "" ? 
                                                 objSageCRM : 
                                                 objSageCRM.slice(0, document.getElementById("search").value)]) 
  }


// User Cannot type a negative number
let number = document.getElementById('search');
// Listen for input event on numInput
number.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}
