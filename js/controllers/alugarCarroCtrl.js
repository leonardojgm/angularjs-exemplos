aluguelCarro.controller("alugarCarroCtrl", function($scope) {
    $scope.nomeAplicacao = "Aluguel de Carros - Versão 5";
    $scope.carros = [
        { marca: "Chevrolet", modelo: "Onix", placa: "ABC-1234", tipo: "Hatch", cor: "Preta", anoModelo: "2018", combustivel: "Flexível", dataInclusao: new Date(), valorDiaria: 60 },
        { marca: "Chevrolet", modelo: "Blazer", placa: "DEF-5678", tipo: "SUV", cor: "Prata", anoModelo: "2016", combustivel: "Diesel", dataInclusao: new Date(), valorDiaria: 120 },
        { marca: "Ford", modelo: "Fiesta Hatch", placa: "GHI-9012", tipo: "Hatch", cor: "Branca", anoModelo: "2016", combustivel: "Flexível", dataInclusao: new Date(), valorDiaria: 60 },
        { marca: "Fiat", modelo: "Argo", placa: "JKL-3456", tipo: "Hatch", cor: "Cinza", anoModelo: "2018", combustivel: "Flexível", dataInclusao: new Date(), valorDiaria: 60 },
        { marca: "Honda", modelo: "City", placa: "MNO-7890", tipo: "Sedã", cor: "Preta", anoModelo: "2017", combustivel: "Flexível", dataInclusao: new Date(), valorDiaria: 60 },
        { marca: "Toyota", modelo: "Corolla", placa: "PQR-1234", tipo: "Sedã", cor: "Cinza", anoModelo: "2016", combustivel: "Flexível", dataInclusao: new Date(), valorDiaria: 80 },
        { marca: "Toyota", modelo: "Hilux", placa: "STU-5678", tipo: "Picape", cor: "Prata", anoModelo: "2017", combustivel: "Diesel", dataInclusao: new Date(), valorDiaria: 120 },
    ];
    $scope.marcas = [
        { codigoMarca: 1, nomeMarca: "Chevrolet" }, 
        { codigoMarca: 2, nomeMarca: "Ford" }, 
        { codigoMarca: 3, nomeMarca: "Volkswagen" }, 
        { codigoMarca: 4, nomeMarca: "Fiat" }, 
        { codigoMarca: 5, nomeMarca: "Honda" },	 
        { codigoMarca: 6, nomeMarca: "Toyota" }, 
        { codigoMarca: 7, nomeMarca: "Audi" }
    ];
    $scope.cores = [
        { codigoCor: 1, nomeCor: "Branca" }, 
        { codigoCor: 2, nomeCor: "Preta" }, 
        { codigoCor: 3, nomeCor: "Prata" }, 
        { codigoCor: 4, nomeCor: "Cinza" }, 
        { codigoCor: 5, nomeCor: "Vermelha" }, 
        { codigoCor: 6, nomeCor: "Azul" }
    ];
    $scope.tipos = [
        { codigoTipo: 1, nomeTipo: "Hatch", classeVeiculo: "Carro de passeio" }, 
        { codigoTipo: 2, nomeTipo: "Cupê", classeVeiculo: "Carro de passeio" }, 
        { codigoTipo: 3, nomeTipo: "Sedã", classeVeiculo: "Carro de passeio" }, 
        { codigoTipo: 4, nomeTipo: "Perua", classeVeiculo: "Carro de passeio" }, 
        { codigoTipo: 5, nomeTipo: "Picape", classeVeiculo: "Utilitário" }, 
        { codigoTipo: 6, nomeTipo: "Van", classeVeiculo: "Utilitário" }, 
        { codigoTipo: 7, nomeTipo: "Minivan", classeVeiculo: "Utilitário" }, 
        { codigoTipo: 8, nomeTipo: "SUV", classeVeiculo: "Utilitário" }
    ];
    $scope.combustiveis = [
        { codigoCombustivel: 1, nomeCombustivel: "Gasolina" }, 
        { codigoCombustivel: 2, nomeCombustivel: "Álcool" }, 
        { codigoCombustivel: 3, nomeCombustivel: "Diesel" }, 
        { codigoCombustivel: 4, nomeCombustivel: "Gás/GLP" }, 
        { codigoCombustivel: 5, nomeCombustivel: "Flexível" }
    ];
    $scope.adicionarCarro = function(carro) {
        carro.dataInclusao = new Date();
        $scope.carros.push(carro);
        delete $scope.carro;
        $scope.CadastroVeiculo.$setPristine();	
    };
});