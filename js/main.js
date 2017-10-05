var setConfig = function()
{
  var propriedades = {
    'titulo':'Ajax com Jquery',
    'notas':'Desenvolvido com JQuery e PHP'
  };
  $('title').html(propriedades.titulo);
  $('#titulo-pagina').html(propriedades.titulo);
};

var testAjax = function(){

  $('#AjaxRequest').submit(function(event){
      //alert('ok');
      //Não executar a ação padrão do formulário - submit
      event.preventDefault();

      //Faz a requisição para o servidor utilizando os parametros abaixo
      var request = $.ajax({
          method:"GET",
          url:"post.php",
          data:{
              nome: $(':input[name=nome]').val(),
              email:$(':input[name=email]').val(),
              tel:$(':input[name=tel]').val()
          }
      });

      //Aguarda a resposta da requisicao
      request.always(function(e)
      {
        console.log(e);
      });

      //Não executar a ação padrão do formulário - submit -
      //Usado o preventDefault pela acao
      //return false;
  });
};

$(document).ready(function() {
   // Stuff to do as soon as the DOM is ready
   setConfig();
   testAjax();
});
