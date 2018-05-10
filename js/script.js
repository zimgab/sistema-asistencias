$(document).ready(function() {
    $('select').material_select();
    $(".button-collapse").sideNav();

    $('.datepicker').pickadate({
      labelMonthNext: 'Siguiente',
      labelMonthPrev: 'Anterior',
      labelMonthSelect: 'Selecciona un mes',
      labelYearSelect: 'Selecciona un año',
      monthsFull: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
      monthsShort: [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
      weekdaysFull: [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ],
      weekdaysShort: [ 'Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb' ],
      weekdaysLetter: [ 'D', 'L', 'M', 'X', 'J', 'V', 'S' ],
      today: 'Hoy',
      clear: 'Limpiar',
      close: 'Ok',
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 30, // Creates a dropdown of 15 years to control year
      //max: new Date(2018,1,1),
      format: 'yyyy/mm/dd'
    });

    $('#test77l').click(function () {
      $(this).hide();
    });

    $('#est4').click(function() {
      $('#noestudia').addClass('hide');
      $('#siestudia').removeClass('hide');
    });

    $('#est5').click(function() {
      $('#siestudia').addClass('hide');
      $('#noestudia').removeClass('hide');
    });

    $('input.autocomplete').autocomplete({
      data: {
        "Asareel Mata Guadarrama": null,
        "Uzi Jonadab Rodríguez Alcántara": null,
        "Zimram Gabbai Carreón Armenta": null
      },
      limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
      onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
      },
      minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
    });

    $('#passwd-generate').click(function() {
      $('#new-item').show();
    });

    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
     });

    /*
    $('#trigger-spinner').click(function() {
      $('#preloader-div').removeClass('hide');
      $('#form-container').addClass('opacity');
      $('#succes-dialog').slideUp(100).delay(4000).fadeIn(500);
    });

    $('#trigg-error').click(function() {
      $('#error-div').removeClass('hide');
    });v*/
  });
