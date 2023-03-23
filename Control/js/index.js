let json = '[{"ID": "1","SECRETARIA": "SEP","SUBSECRETARIA": "basico","PROYECTO": "basico sep 1","PRESUPUESTO_ORI": "100000","PRESUPUESTO_MOD": "200000","PRESUPUESTO_COM": "400000","PRESUPUESTO_DEV": "403000"},{"ID": "2","SECRETARIA": "SEP","SUBSECRETARIA": "basico","PROYECTO": "basico sep 2","PRESUPUESTO_ORI": "300000","PRESUPUESTO_MOD": "204000","PRESUPUESTO_COM": "420000","PRESUPUESTO_DEV": "4005000"},{"ID": "3","SECRETARIA": "SEP","SUBSECRETARIA": "medio","PROYECTO": "medio sep 1","PRESUPUESTO_ORI": "500000","PRESUPUESTO_MOD": "400000","PRESUPUESTO_COM": "300000","PRESUPUESTO_DEV": "402000"},{"ID": "4","SECRETARIA": "SEDENA","SUBSECRETARIA": "defenza","PROYECTO": "defenza 1","PRESUPUESTO_ORI": "500000","PRESUPUESTO_MOD": "400000","PRESUPUESTO_COM": "300000","PRESUPUESTO_DEV": "402000"}]';

function Muestra_cards(){//carga la data en los cards
    let objetoJS =JSON.parse(json);
    console.log( JSON.parse(json));
        $("#presupuesto").text(objetoJS[0].PRESUPUESTO_ORI);
        $("#ejercido").text(objetoJS[0].PRESUPUESTO_MOD);
        $("#No_ejercido").text(objetoJS[0].PRESUPUESTO_COM);
}
function loading_Cbx(){//funcion que carga los combobox con valores para CBX SECRETARIA
    let objetoJS =JSON.parse(json);
        $("#cbxSecretaria").html("<option value=0>SECRETARIA</option>,<option value=SEP>SEP</option>,<option value=SEDENA>SEDENA</option>");
}
function FiltrocbxSecretaria(){//carga los datos en CBX SECRETARIA
    Vstatus = $("#cbxSecretaria").val().trim();
    if(Vstatus=="SEDENA"){
        $("#cbxSSecretaria").html("<option value=0>SUBSECRETARIA</option>,<option value=defenza>defenza</option>,<option value=guardia>guardia</option>");
    }else if(Vstatus=="SEP"){
        $("#cbxSSecretaria").html("<option value=0>SUBSECRETARIA</option>,<option value=basico>basico</option>,<option value=medio>medio</option>");
    }
}
function FiltrocbxSUBSecretaria(){//carga los datos en CBX SUBSECRETARIA
    Vstatus = $("#cbxSSecretaria").val().trim();
    if(Vstatus=="basico"){
        $("#cbxProyecto").html("<option value=0>PROYECTO</option>,<option value='basico sep 1'>basico sep 1</option>,<option value='basico sep 2'>basico sep 2</option>");
    }else if(Vstatus=="medio"){
        $("#cbxProyecto").html("<option value=0>PROYECTO</option>,<option value='medio sep 1'>medio sep 1</option>");
    }else if(Vstatus=="defenza"){
        $("#cbxProyecto").html("<option value=0>PROYECTO</option>,<option value='defenza 1'>defenza 1</option>");
    }else if(Vstatus=="guardia"){
        $("#cbxProyecto").html("<option value=0>NO PROYECTOS</option>");
    }
}
function limpiartabla(){//limpia combobox filtros y datos en tabla
    $("#cbxSecretaria").val("0");
    $("#cbxSSecretaria").val("0");;
    $("#cbxProyecto").val("0");
    $("#data").empty();
}
function tabla(){//limpia la data del cuerpo de la tabla
    $("#data").empty();
    filtro_table();
}
function filtro_table(){//filtra la tabla con parametros de combobox
    CbxSecretaria = $("#cbxSecretaria").val().trim();
    CbxSSecretaria = $("#cbxSSecretaria").val().trim();
    CbxProyecto = $("#cbxProyecto").val().trim();
    if(CbxSecretaria!='0' && CbxSSecretaria != '0' && CbxProyecto !='0'){
    let objetoJS =JSON.parse(json);//parseo para la manipulacion de JSON.
    let arreglo = []; //Arreglo vacío para llenarse con los datos del la consulta filtros
        objetoJS.forEach(function(valor) {
            if(valor["SECRETARIA"]==CbxSecretaria && valor["SUBSECRETARIA"]==CbxSSecretaria && valor["PROYECTO"]==CbxProyecto){
                arreglo["data"]=valor;
                var d=d+ '<tr>'+
                '<td>'+arreglo["data"].SECRETARIA+'</td>'+
                '<td>'+arreglo["data"].SUBSECRETARIA+'</td>'+
                '<td>'+arreglo["data"].PROYECTO+'</td>'+
                '<td>'+arreglo["data"].PRESUPUESTO_ORI+'</td>'+
                '<td>'+arreglo["data"].PRESUPUESTO_MOD+'</td>'+
                '<td>'+arreglo["data"].PRESUPUESTO_COM+'</td>'+
                '<td>'+arreglo["data"].PRESUPUESTO_DEV+'</td>'+
                '</tr>';
                $("#data").append(d);//agrega la data ala tabla con jquery
            }
        });
    }
    else{
      swal("Error", "Selecciona los filtros", "warning");//swal alert de error
    }
  }
function onmouseover() {//estilo que cambia color cuando cursor esta dentro de elemento
    document.getElementById("btn_filtrar").style.color = "grey";
}
function onMouseout() {//estilo que cambia el color cuando el cursor esta fuera del elemento
    document.getElementById("btn_filtrar").style.color = "red";
}
