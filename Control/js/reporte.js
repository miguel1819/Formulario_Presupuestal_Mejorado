function mustra_graph(){
    let json = '[{"ID": "1","SECRETARIA": "SEP","SUBSECRETARIA": "basica","PROYECTO": "basico sep 1","PRESUPUESTO_ORI": 800000,"PRESUPUESTO_MOD": 200000,"PRESUPUESTO_COM": 400000,"PRESUPUESTO_DEV": 403000},{"ID": "2","SECRETARIA": "SEP","SUBSECRETARIA": "basica","PROYECTO": "basico sep 2","PRESUPUESTO_ORI": 300000,"PRESUPUESTO_MOD": 204000,"PRESUPUESTO_COM": 420000,"PRESUPUESTO_DEV": 400500}]';
    let objetoJS =JSON.parse(json);
    $("#presupuesto").text(objetoJS[0].PRESUPUESTO_ORI);
    //alert("entro a cargar la grafica");
    
    var Pre_Ori=objetoJS[0].PRESUPUESTO_ORI;
    var Pre_Mod=objetoJS[0].PRESUPUESTO_MOD;
    var Pre_Compro=objetoJS[0].PRESUPUESTO_COM;
    var Pre_dev=objetoJS[0].PRESUPUESTO_DEV;
    var Pre_pag=objetoJS[1].PRESUPUESTO_ORI;
    var Pre_Ejer=objetoJS[1].PRESUPUESTO_MOD;
    var Pre_No_ejer=objetoJS[1].PRESUPUESTO_COM;
    var Sal_no_Ejer=objetoJS[1].PRESUPUESTO_DEV;
    var Sal_no_Ejer_ets=objetoJS[0].PRESUPUESTO_ORI;
    var Sal_no_Ejer_fed=objetoJS[0].PRESUPUESTO_MOD;
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Total Secretaria'
        },
        xAxis: {
            categories: [
                'Presupuesto <br/> Original',
                'Presepuesto <br/> Modificado',
                'Presupuesto <br/> Comprometido',
                'Presupuesto <br/> devengado',
                'Presupuesto <br/> pagado',
                'Presupuesto <br/> Ejercido',
                'Saldo No <br/> Ejercido',
                'Saldo no <br/> ejercido estatal',
                'Saldo no <br/> ejercido federal'
            ],
            labels: {
                rotation: 0
            },
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.4,
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: ' $ {y}'
                }
            }
        },
        series: [{
            name: 'Avance Presupuestal',
            data: [Pre_Ori, Pre_Mod, Pre_Compro, Pre_dev, Pre_pag, Pre_Ejer, Pre_No_ejer, Sal_no_Ejer, Sal_no_Ejer_ets],
            //data: [Pre_Ori, 3, 4, 5, 6, 7, 8, 9000000]
            color: '#2271b3'
        }]
    });
}