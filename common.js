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
    displayAllSageCRMID();
    loadTimeLineGraph($('#sageCRMid').val());
});

$('#sageCRMid').on('change', function () {
  loadTimeLineGraph(this.value);
});

$('#search').on('input', function () {
  loadTimeLineGraph($('#sageCRMid').val())
});

// Using If Else
//   function loadTimeLineGraph(sageCRMid){
//     let objSageCRM = jsondata.filter(data => data.ComputerName === sageCRMid);
//         // If the input field is empty then render all the data else filter the data based on the input field
//         if (document.getElementById("search").value === "") {
//           milestones('.timeline')
//           .mapping({
//             'timestamp': 'InstallDate',
//             'text': 'PatchCategory'
//           })
//           .optimize(true)
//           .aggregateBy('day')
//           .render([objSageCRM]);
//         } else {
//         // The x number of data should be filtered onchange of the input field, and those data should be rendered
//           $('#sageCRMid').on('change', function () {
//             let x = document.getElementById("search").value;
//             let objSageCRM1 = objSageCRM.slice(0, x);
//             milestones('.timeline')
//             .mapping({
//               'timestamp': 'InstallDate',
//               'text': 'PatchCategory'
//             })
//             .optimize(true)
//             .aggregateBy('day')
//             .render([objSageCRM1]);
//           });
//         }
//   }

// Using Terinary Operator
function loadTimeLineGraph(sageCRMid) {
    let objSageCRM = jsondata.filter(data => data.ComputerName === sageCRMid);
  //   Terinary Operator to check if the input field is empty or not
  //   If the input field is empty then render all the data else filter the data based on the input field
      document.getElementById("search").value === "" ? milestones('.timeline')
      .mapping({
          'timestamp': 'InstallDate',
          'text': 'PatchCategory'
      })
      .optimize(true)
      .aggregateBy('day')
      .render([objSageCRM]) : milestones('.timeline')
      .mapping({
          'timestamp': 'InstallDate',
          'text': 'PatchCategory'
      })
      .optimize(true)
      .aggregateBy('day')
      .render([objSageCRM.slice(0, document.getElementById("search").value)]);
}
