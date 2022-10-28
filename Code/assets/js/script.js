{/* <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> */ }
const setA = new Set();
const setB = new Set();
const feiraDaSemana = new Set();
const item = document.querySelector('#item');
const res = document.querySelector('#res');
const legumes = document.querySelector('#legumes');
const verduras = document.querySelector('#verduras');


function add() {
    if (item.value == '' && (legumes.checked || verduras.checked)) {
        swal({
            title: "Nenhum valor recebido!",
            text: "Adicione um legume ou verdura a lista!",
            icon: "error",
        });

    }
    if (legumes.checked == false && verduras.checked == false) {
        swal({
            title: "Nenhum valor selecionado!",
            text: "Marque legume ou verdura!",
            icon: "error",
        });
    }

    if (legumes.checked) {
        setA.add(item.value);
        console.log(setA)
        info();
    } else if (verduras.checked) {
        setB.add(item.value);
        console.log(setB)
        info();
    }
}

function remove() {
    if (setA.size() > 0) {
        let contRemove = setA.delete(item.value);
        console.log(setA)
        info();
        if (contRemove > setA.size()) {
            res.innerHTML = '';
        }
    } else {
        swal({
            title: "Lista Vazia!",
            text: "Não há nada para remover!",
            icon: "warning",
        });
    }
}

function unir() {
    if (!setA.size() == 0 && !setB.size() == 0) {
        feiraDaSemana.union(setA).union(setB);
        res.innerHTML = `Feira da Semana: ${feiraDaSemana.union(setA).union(setB).values()}`
    }
}

function limparlista() {
    if (legumes.checked) {
        setA.clear();
        res.innerHTML = 'Lista de legumes está vazia'
    } else if (verduras.checked) {
        setB.clear();
        info();
    }
}

function info() {
    if (legumes.checked && !item.value == '') {
        res.innerHTML = `Lista de legumes: ${setA.values()}`;
    } else if (verduras.checked && !item.value == '') {
        res.innerHTML = `Lista de verduras: ${setB.values()}`;
    }

}

function save() {
    let name = "Feira de Semana";
    let text = feiraDaSemana.union(setA).union(setB).values();

    var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, name);
}
// const setB = new Set();

// setA.add('Banana');
// setA.add('Uva');
// setA.add('Laranja');
// setA.add('Maça');
// setA.add('Pera');

// setA.delete('Pera'); // pq pera é rui

// console.log(setA);

// setB.add('Alface');
// setB.add('Cebolinha');
// setB.add('Couve');
// setB.add('Salsa');
// setB.add('Coentro');

// console.log(setB);

// console.log(setA.union(setB).values());