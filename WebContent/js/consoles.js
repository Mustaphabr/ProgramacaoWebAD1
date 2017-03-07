/**
 * 
 */

var consoles = [ {
	nome : 'Microsoft',
	itens : [ {
		nome : 'Xbox 360 500 Gb',
		preco : '1.150,00'
	}, {
		nome : 'Xbox One 500 Gb',
		preco : '1.400,00'
	} ]
}, {
	nome : 'Nintendo',
	itens : [ {
		nome : 'Nintendo 3DS',
		preco : '1.300,00'
	} ]
}, {
	nome : 'Sony',
	itens : [ {
		nome : 'Playstation 3 Slim 500 Gb',
		preco : '1.100,00'
	}, {
		nome : 'Playstation 4 PRO 1 Tb',
		preco : '2.700,00'
	} ]
}

];
/** obtem a tag com o id listaConsoles da arvore DOM para colocar a listagem nela */
var listaConsoles = document.getElementById('listaConsoles');

var consolesHTML = '<ol>';
/** Inicia o codigo html da lista ordenada */
for (var i = 0; i < consoles.length; i++) {
	/** percorre os consoles */
	var c = consoles[i];
	consolesHTML += '<li>' + c.nome + '<\/li>';
	/** acrescenta um item na lista ordenada com o nome do console */
	consolesHTML += '<ul>';
	/** inicia a lista não ordenada com os items do console */
	for (var u = 0; u < c.itens.length; u++) {
		/** percorre os itens do console para expor o preço */
		var item = c.itens[u];
		/** obtem o item do console */
		consolesHTML += '<li>' + item.nome + ' - <label class=\"preco\">R$ '
				+ item.preco + '<\/label><\/li>';
		/**
		 * inclui um item na lista não ordenada de itens, respeitando o css do
		 * preço
		 */
	}
	consolesHTML += '<\/ul>';
	/** fecha a lista não ordenada */
}

consolesHTML += '<\/ol>';
/** fecha o codigo html da lista ordenada */
listaConsoles.innerHTML = consolesHTML;/** coloca o html na listagem */
