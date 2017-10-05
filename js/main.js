var setConfig = function()
{
  var propriedades = {
    'titulo':'Ajax com Jquery',
    'notas':'Desenvolvido com JQuery e PHP'
  };
  $('title').html(propriedades.titulo);
  $('#titulo-pagina').html(propriedades.titulo);
};

$(document).ready(function() {
   // Stuff to do as soon as the DOM is ready
   setConfig();
});
