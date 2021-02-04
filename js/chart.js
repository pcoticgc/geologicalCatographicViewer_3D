var identi;
var vel="";
var coherence="";
var code="";  


// Disable enable layers //////////  
var features1;
var displayProperties1;
var displayFeatures1;
var displayFeatures2;
var displayFeaturesPro;
var disKeys=[];
var disValues=[];
var graphicValuesV=[];
var graphicValuesVInt=[];
var graphicDatesValues=[];
var features = [];
// Show metadata points //////////  
map.on('click', function (e) {
    features = map.queryRenderedFeatures(e.point);
    if (!features)
    {
        console.log(features + "false");
        return false;
    }
    /* else {
        features = features[0];
        console.log(features + "true");
        return true;
    } */
    // Limit the number of properties we're displaying for ////////// 
    // Legibility and performance ////////// 
    var displayProperties = [           
    /*  'UTM_X',    
    'type',
    'id',
    'layer',
    'source',[]
    'sourceLayer',
    'state', */
    "properties"                 
    ];
     var displayFeatures = features.map(function (feat) {
        var displayFeat = {};
        displayProperties.forEach(function (prop) {
        displayFeat[prop] = feat[prop];
        });

        return displayFeat;
    });
    /* console.log(displayFeatures); */
    // Get dates of properties 
    identi=displayFeatures[0].properties;      
    code= displayFeatures[0].properties.CODE;
    coherence= displayFeatures[0].properties.AUTOCORR;      
    vel= displayFeatures[0].properties.VEL; 
    dDato= displayFeatures[0].properties.D20160325; 

    features1=features;
    displayProperties1=displayProperties;
    displayFeatures1=displayFeatures;
    displayFeatures2=displayFeatures[0];
    displayFeaturesPro=displayFeatures[0].properties;
    // Keys to value of data
    disKeys=Object.keys(displayFeaturesPro);
    // Values to value of data
    disValues=Object.values(displayFeaturesPro);
    // delete 7 first elements
    disKeys.splice(0,6);
    disValues.splice(0,6);
    //Convert arry of strings to numbers
    graphicValuesV=disValues.map((i) => Number(i));
    
     //change string data to number data
    for (var i = 0; i < graphicValuesV.length; i++) {
        graphicValuesVInt.push(parseInt(graphicValuesV[i]));
    }
     //change string data to number data

    for (var i = 0; i <  disKeys.length; i++) {
        var year = disKeys[i].substr(1,[4]);
        var month = disKeys[i].substr(5,[2]);
        var day = disKeys[i].substr(7,[2]);
        graphicDatesValues.push([new Date(year, month, day), disValues[i]]);
        /* graphicDatesValues.push(disValues[i]);  */

        /* console.log( year + month + day +"data and value"); */
    }
    /* for (var i = 0; i <  graphicDatesValues.length; i++) {
        console.log( graphicDatesValues[i] + " graphicDatesValues");
    } */
    //change float data to integer data
    function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
    }
    graphicValuesVInt = graphicValuesVInt.filter( onlyUnique ); 
    //change float data to integer data

    /* for (var i = 0; i <  graphicValuesVInt.length; i++) {
        console.log( graphicValuesVInt[i] + "pepesup");
    } */
    
   
    /* onsole.log(graphicValuesV + "graphicValuesV");  */
    // Call googleCghart ////////
    if (code!=null){ 
        document.getElementById('chart__Div').style.display="block";      
        google.charts.setOnLoadCallback(drawChart);
}
   
    


                      
});
// Show metadata points ////////// 
// Close graphic window ////////// 
function closeX(){
document.getElementById('chart__Div').style.display="none";
}
// Close graphic window ////////// 

function dragWindow() {
	document.getElementById('chart__Div').style.draggable;
  }

// Add google chart  //////////
// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});



// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {       
// Create the data table.
var data = new google.visualization.DataTable();
data.addColumn('date', 'Month');
data.addColumn('number', 'Desplaçament');   
data.addRows(graphicDatesValues
    
   /*  [['pepe', 0.15889716486200001],['', 0.40283864421],['', 0.6338940884520000],['', 0.84453165208100001],['', 1.02763655559],
             ['', 1.37351576657],['', 1.32918865159],['', 0.75549323967100002],['', 0.59679569578799996],['', 0.46779412498599998],]
              */);
var espacio ="\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
var espacioData ="\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";

valorsGraficaH = [-20, -15, -10, -5, 0, 5, 10, 15, 20];
// Set chart options
var options = {'title': "id: " + code +espacio+ "vel: " + vel +espacio+   "coherence: " + coherence ,
    /* 'width':1500,
	'height':600,   */  
    lineWidth: 1,
    pointSize: 4,
    pointShape: 'square',
    legend: 'none',
    vAxis: {
        title: 'Displacement [mm]',
             ticks: valorsGraficaH
           },
    hAxis: {
        title: 'from 2016 to 2019',			   
        titleFontSize: 15 
    }  
};

// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.LineChart(document.getElementById('chart__Div__View'));
    chart.draw(data, options);
    features1;
displayProperties1;
displayFeatures1;
displayFeatures2;
displayFeaturesPro;
disKeys=[];
disValues=[];
graphicValuesV=[];
graphicValuesVInt=[];
graphicDatesValues=[];
}
// Add google chart  //////////

$( function() {
	$( "#chart__Div" ).draggable();
  } );
