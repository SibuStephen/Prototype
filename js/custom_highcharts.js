 $(function () {
    $.get('dummy_data.json', function (res) {
        localStorage.setItem("selection", false);
        var data = res;
        $('#chart').highcharts('StockChart', {
            chart: {
              events: {
                selection: function (event) {
                  var sel = localStorage.getItem("selection");
                 if(sel === "true") {
                  document.getElementById('modelbox').style.display = "block";
                 } 
                }
            },
              zoomType: 'x',
             // panning: true
            },
            rangeSelector : {
              allButtonsEnabled: true,
                buttons: [{
                    type: 'minute',
                    count: 60,
                    text: '1H',
                    order: 'reverse',
                }, {
                    type: 'minute',
                    count: 180,
                    text: '3H',
                },
                {
                    type: 'minute',
                    count: 240,
                    text: '6H',
                },
                {
                    type: 'minute',
                    count: 480,
                    text: '12H',
                }, 
                {
                    type: 'all',
                    text: 'All',
                }],
                buttonTheme: {
                    width: 60
                },
                inputBoxWidth: 60,
                inputBoxHeight: 18,
                inputStyle: {
                  //color: '#039',
                  fontWeight: 'bold'
                },
                inputDateFormat: '%H:%M',
                inputEditDateFormat: '%H:%M',
                selected: 4
            },
            navigator: {
                enabled: false
              },
              scrollbar: {
                enabled: false
              },
              xAxis: {
                reversed: true,
                showFirstLabel: false,
                showLastLabel: true
            },
            title : {
                text : 'Hourly Temperature in Vik i Sogan,Norway,2009-2015',
                align: 'left',
                color: '#FF00FF',
                fontWeight: 'bold',
               // verticalAlign: 'top',
              //  y: 40,
                //margin: 10
            },
           

        series : data
        }, function (chart) { // on complete

        chart.renderer.image('images/selection.gif', '97%', '3%', 30, 30)
            .on('click', function() {
                //localStorage.setItem("selection", true);
                if(localStorage.getItem("selection") === "false") {
                  localStorage.setItem("selection", true);
                }
                else
                {
                  localStorage.setItem("selection", false);
                }  
              }).add();
    });
      });

});
function close_div(id) {
    if(id === 1) {
        jQuery("#modelbox").hide();
    }
}