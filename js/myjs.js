function modo() {

    let radios = document.getElementsByName('melhorDe');
    let selecionado;

    radios.forEach(radio => {
        if (radio.checked) {
            selecionado = radio.value;
        }
    });
    
    return selecionado;
}

function iniciarJogo() {
    // Verifica se uma das opções de "melhor de" foi selecionada
    let selecionado = modo(); // Reutiliza a função "modo"
    
    if (selecionado) {        
        // Habilitar os botões do jogo
        let botoes = document.querySelectorAll('.botao');
        botoes.forEach(botao => botao.removeAttribute('disabled'));
    } else {
        alert('Por favor, selecione uma das opções: Melhor de 3 ou Melhor de 5.');
    }
}

    let pPC = 0;
    let pU = 0;
    let rodada = 1;

function escolha(opcao){
    //Array com as opções que vai sortear
    let opcoes = ['Pedra', 'Papel', 'Tesoura'];
 
    //Math.floor pra arrendodar
    let sorteio = Math.floor(Math.random() * 3);

    //Sorteio eh a posição no array/vetor
    let sorteado = opcoes[sorteio];
 
    //Preparando o resultado
    let resultado = '';
 
    if(sorteado === 'Pedra'){
        document.getElementsByClassName('pc')[0].innerHTML = '<img src="img/pedrapc.png" alt="Imagem exemplo">';

    }else if(sorteado === 'Papel'){
        document.getElementsByClassName('pc')[0].innerHTML = '<img src="img/papelpc.png" alt="Imagem exemplo">';
    }else{
        document.getElementsByClassName('pc')[0].innerHTML = '<img src="img/tesourapc.png" alt="Imagem exemplo">';
    }

    if(opcao === 'Pedra'){
        document.getElementsByClassName('usuario')[0].innerHTML = '<img src="img/pedrausuario.png" alt="Imagem exemplo">';

    }else if(opcao === 'Papel'){
        document.getElementsByClassName('usuario')[0].innerHTML = '<img src="img/papelusuario.png" alt="Imagem exemplo">';
    }else{
        document.getElementsByClassName('usuario')[0].innerHTML = '<img src="img/tesourausuario.png" alt="Imagem exemplo">';
    }

//--------------------------------------------------
    let nome = document.getElementById('nome').value;

    let tBody = document.querySelector('.table tbody'); //pega o body
    let linha = document.createElement('tr'); // cria a linha

    let colrodada = document.createElement('td');
    let colNome = document.createElement('td');
    let colPontoPC = document.createElement('td');
    let colPontoUsuario = document.createElement('td');
//--------------------------------------------------
    if(opcao === sorteado){
        resultado = 'EMPATE!';
    }else if(opcao === 'Pedra' && sorteado === 'Tesoura' || opcao === 'Tesoura' && sorteado === 'Papel' || opcao === 'Papel' && sorteado === 'Pedra'){
        pU++;
        resultado = 'VOCÊ GANHOU!</br>' + pPC + ' x ' + pU;
    }else{
        pPC++;
        resultado = 'VOCÊ PERDEU!</br>' + pPC + ' x ' + pU;
    }

    colrodada.innerHTML = rodada;
    colNome.innerHTML = nome;
    colPontoPC.innerHTML = pPC;
    colPontoUsuario.innerHTML = pU;

    linha.appendChild(colrodada);
    linha.appendChild(colNome);
    linha.appendChild(colPontoPC);
    linha.appendChild(colPontoUsuario);
    tBody.appendChild(linha);

    let a = modo();

    if(a === '3'){
        if(pPC >= 2){
            alert('Voce perdeu por ' + pU +' x '+ pPC);
            rodada++;
            resetar();
        }
        if(pU >= 2){
            alert('Voce ganhou por ' + pU +' x '+ pPC);
            rodada++;
            resetar();
        }
    }
    if(a === '5'){
        if(pPC >= 3){
            alert('Voce perdeu por ' + pU +' x '+ pPC);
            rodada++;
            resetar();
        }
        if(pU >= 3){
            alert('Voce ganhou por ' + pU +' x '+ pPC);
            rodada++;
            resetar();
        }
    }
    document.getElementsByClassName('resultado')[0].innerHTML = resultado;
}

function resetar() {
    pPC = 0;
    pU = 0;
}
