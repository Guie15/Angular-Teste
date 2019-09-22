angular.module("listaTelefonica", []);
angular.module("listaTelefonica").controller("listCtrl", ($scope) =>{
  $scope.hello = "Lista Telefonica!";
  $scope.contatos = [
    {nome: "Paulo", telefone: "99998888", cor: "yellow"},
    {nome: "Yasmin", telefone: "77775555", cor: "blue"},
    {nome: "Guilherme", telefone: "19981734618", cor: "purple"}
  ];
  
  $scope.operadoras = [
    {nome: "Oi", codigo: 14, categoria: "Celular"},
    {nome: "Tim", codigo: 41, categoria: "Celular" },
    {nome: "Vivo", codigo: 15, categoria: "Celular"},
    {nome: "GVT", codigo: 25, categoria: "Fixo"},
    {nome: "Embratel", codigo: 21, categoria:"Fixo"}
  ];
  
    $scope.adicionar = (contato) => {
      $scope.contatos.push(angular.copy(contato));
      delete $scope.contato;
    };
    
    $scope.apagar = (contatos) => {
      $scope.contatos = contatos.filter((contato) => {
        if (!contato.selecionado) return contato
          })
      };
      
    
    $scope.isContatoSelecionado = (contatos) =>
     {return contatos.some( (contato) => { return contato.selecionado})
    };
    
    });