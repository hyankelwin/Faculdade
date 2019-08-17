var valor;
var metodo;

function value(val) {
	this.valor = val
}

function funcaoCod(valor) {
	this.metodo = valor
	document.getElementById('metodoHtml').innerHTML = this.metodo
	document.getElementById('divInfo').style.display = 'none'
}

function gerarVetor(funcao) {
	switch (funcao) {
		case 'insercaoDiretaAleatorio':
			var uniques = chance.unique(chance.natural, this.valor, { min: 1, max: 1000000 })
			this.insercaoDireta(uniques)
			break;
		case 'insercaoDiretaCrescente':
			var uniques = chance.unique(chance.natural, this.valor, { min: 1, max: 1000000 }).sort();
			this.insercaoDireta(uniques)
			break;
		case 'insercaoDiretaDecrescente':
			var uniques = chance.unique(chance.natural, this.valor, { min: 1, max: 1000000 }).sort().reverse();
			this.insercaoDireta(uniques)
			break;
		case 'bubleSortAleatorio':
			var uniques = chance.unique(chance.natural, this.valor, { min: 1, max: 1000000 })
			this.bubleSort(uniques)
			break;
		case 'bubleSortCrescente':
			var uniques = chance.unique(chance.natural, this.valor, { min: 1, max: 1000000 }).sort();
			this.bubleSort(uniques)
			break;
		case 'bubleSortDecrescente':
			var uniques = chance.unique(chance.natural, this.valor, { min: 1, max: 1000000 }).sort().reverse();
			this.bubleSort(uniques)
			break;
		case 'selecaoDiretaAleatorio':
			var uniques = chance.unique(chance.natural, this.valor, { min: 1, max: 1000000 })
			this.selecaoDireta(uniques)
			break;
		case 'selecaoDiretaCrescente':
			var uniques = chance.unique(chance.natural, this.valor, { min: 1, max: 1000000 }).sort();
			this.selecaoDireta(uniques)
			break;
		case 'selecaoDiretaDecrescente':
			var uniques = chance.unique(chance.natural, this.valor, { min: 1, max: 1000000 }).sort().reverse();
			this.selecaoDireta(uniques)
			break;
		case 'heapSortAleatorio':
			var uniques = chance.unique(chance.natural, this.valor, { min: 1, max: 1000000 })
			this.heapSort(uniques, uniques.length);
			break;
		case 'heapSortCrescente':
			var uniques = chance.unique(chance.natural, this.valor, { min: 1, max: 1000000 }).sort();
			this.heapSort(uniques, uniques.length);
			break;
		case 'heapSortDecrescente':
			var uniques = chance.unique(chance.natural, this.valor, { min: 1, max: 1000000 }).sort().reverse();
			this.heapSort(uniques, uniques.length);
			break;
		case 'shellSortAleatorio':
			var uniques = chance.unique(chance.natural, this.valor, { min: 1, max: 1000000 })
			this.shellSort(uniques, uniques.length);
			break;
		case 'shellSortCrescente':
			var uniques = chance.unique(chance.natural, this.valor, { min: 1, max: 1000000 }).sort();
			this.shellSort(uniques, uniques.length);
			break;
		case 'shellSortDecrescente':
			var uniques = chance.unique(chance.natural, this.valor, { min: 1, max: 1000000 }).sort().reverse();
			this.shellSort(uniques, uniques.length);
			break;
		case 'quickSortAleatorio':
			var uniques = chance.unique(chance.natural, this.valor, { min: 1, max: 1000000 })
			this.quickSort(uniques, 0, uniques.length - 1);
			break;
		case 'quickSortCrescente':
			var uniques = chance.unique(chance.natural, this.valor, { min: 1, max: 1000000 }).sort();
			this.quickSort(uniques, 0, uniques.length - 1);
			break;
		case 'quickSortDecrescente':
			var uniques = chance.unique(chance.natural, this.valor, { min: 1, max: 1000000 }).sort().reverse();
			this.quickSort(uniques, 0, uniques.length - 1);
			break;
	}
}


function insercaoDireta(vetor) {
	var start = window.performance.now();
	var atual;
	for (var i = 1; i < vetor.length; i++) {
		var anterior = i - 1
		atual = vetor[i];
		while (vetor[anterior] > atual) {
			vetor[anterior + 1] = vetor[anterior];
			anterior = anterior - 1;
		}
		vetor[anterior + 1] = atual;
	}
	var end = window.performance.now();
	document.getElementById('divInfo').style.display = 'block'
	document.getElementById('info').innerHTML = end - start;
}


//BUBLESORT
function bubleSort(vetor) {
	var start = window.performance.now();
	var atual;
	for (var i = 1; i < vetor.length; i++) {
		var anterior = i - 1
		atual = vetor[i];
		while (vetor[anterior] > atual) {
			vetor[anterior + 1] = vetor[anterior];
			anterior = anterior - 1;
		}
		vetor[anterior + 1] = atual;
	}
	var end = window.performance.now();
	document.getElementById('divInfo').style.display = 'block'
	document.getElementById('info').innerHTML = end - start;
}



// Seleção Direta 
function selecaoDireta(vetor) {
	var start = window.performance.now();
	var i, j, menor, aux;
	for (i = 0; i < vetor.length - 1; ++i) {
		menor = i;
		for (j = i + 1; j < vetor.length; ++j) {
			if (vetor[j] < vetor[menor])
				menor = j;
		}
		aux = vetor[i];
		vetor[i] = vetor[menor];
		vetor[menor] = aux;
	}
	var end = window.performance.now();
	document.getElementById('divInfo').style.display = 'block'
	document.getElementById('info').innerHTML = end - start;
}


//HEAPSORT
function heapSort(vetor, tam) {
	var start = window.performance.now();
	var i = tam / 2, pai, filho, t;
	for (; ;) {
		if (i > 0) {
			i--;
			t = vetor[i];
		}
		else {
			tam--;
			if (tam == 0)
				return;
			t = vetor[tam];
			vetor[tam] = vetor[0];
		}
		pai = i;
		filho = i * 2 + 1;
		while (filho < tam) {
			if ((filho + 1 < tam) && (vetor[filho + 1] > vetor[filho]))
				filho++;
			if (vetor[filho] > t) {
				vetor[pai] = vetor[filho];
				pai = filho;
				filho = pai * 2 + 1;
			}
			else
				break;
		}
		vetor[pai] = t;
		var end = window.performance.now();
		document.getElementById('divInfo').style.display = 'block'
		document.getElementById('info').innerHTML = end - start;
	}
}


//SHELLSORT
function shellSort(vetor, tam) {
	var start = window.performance.now();	
	var i, j, value;
	var gap = 1;
	while (gap < tam) {
		gap = 3 * gap + 1;
	}
	while (gap > 1) {
		gap = parseInt(gap / 3);
		for (i = gap; i < tam; i++) {
			value = vetor[i];
			j = i - gap;
			while ((j >= 0) && (value < vetor[j])) {
				vetor[j + gap] = vetor[j];
				j = j - gap;
			}
			vetor[j + gap] = value;
		}
	}
	var end = window.performance.now();
	document.getElementById('divInfo').style.display = 'block'
	document.getElementById('info').innerHTML = end - start;
}

//QUICKSORT
function quickSort(array, left, right) {
	var start = window.performance.now();
	var i = left;
	var j = right;
	var tmp;
	pivotidx = (left + right) / 2;
	var pivot = parseInt(array[pivotidx.toFixed()]);
	while (i <= j) {
		while (parseInt(array[i]) < pivot)
			i++;
		while (parseInt(array[j]) > pivot)
			j--;
		if (i <= j) {
			tmp = array[i];
			array[i] = array[j];
			array[j] = tmp;
			i++;
			j--;
		}
	}

	if (left < j)
		quickSort(array, left, j);
	if (i < right)
		quickSort(array, i, right);
	var end = window.performance.now();
	document.getElementById('divInfo').style.display = 'block'
	document.getElementById('info').innerHTML = end - start;
}