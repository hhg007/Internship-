var total = 0;

var apiData = [
  {
    name: "rajiv",
    marks: {
      Maths: 18,
      English: 21,
      Science: 45,
    },
    rollNumber: "KV2017-5A2",
  },
  {
    name: "abhishek",
    marks: {
      Maths: 43,
      English: 30,
      Science: 37,
    },
    rollNumber: "KV2017-5A1",
  },
  {
    name: "zoya",
    marks: {
      Maths: 42,
      English: 31,
      Science: 50,
    },
    rollNumber: "KV2017-5A3",
  },
];

function sort_name(a, b){
        // a should come before b in the sorted order
        if(a.name < b.name){
                return -1;
        // a should come after b in the sorted order
        }else if(a.name > b.name){
                return 1;
        // a and b are the same
        }else{
                return 0;
        }
}

apiData.sort(sort_name)


total = apiData.map((e1) => {
  return e1.marks.English + e1.marks.Maths + e1.marks.Science;
});

var maxindex = total.indexOf(Math.max(...total));

function constructTable(selector){
  var heading = `
      <tr>
        <thead><strong>Student Result Board</strong></thead>
      </tr>
      <tr>
        <td><strong><i>Student Name</i></strong></td>
        <td><strong><i>Roll Number</i></strong></td>
        <td><strong><i>Total Marks</i></strong></td>
        <td><strong><i>Status</i></strong></td>
      </tr>
  `;
  document.querySelector(selector).insertAdjacentHTML('afterbegin', heading);

  for (var i = 0 ; i<apiData.length; i++){
    if (apiData[i].marks.English<20 || apiData[i].marks.Maths<20 || apiData[i].marks.Science<20){
      addRow(apiData[i], 'Fail');
    }
    else if (i == maxindex){
      addRow(apiData[i], 'Topper');
    }
    else{
      addRow(apiData[i], 'Pass');
    }
  }
}

function addRow(data, result){
  var color;
  if (result == 'Fail'){
    color = 'red';
  } else if(result == 'Topper'){
    color = 'green';
  } else{
    color = '';
  }

  var row = `
      <tr style="color:${color}">
        <td>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</td>
        <td>${data.rollNumber}</td>
        <td>${data.marks.English + data.marks.Science + data.marks.Maths}</td>
        <td>${result}</td>
      </tr>
  `;

  document.querySelector('#table').insertAdjacentHTML('beforeend',row);
}
