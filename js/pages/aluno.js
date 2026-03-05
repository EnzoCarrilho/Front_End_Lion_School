export async function Aluno() {
    const id = sessionStorage.getItem('id')
    
    const aluno = await getStudantById(id)

    criarTelaAluno(aluno)
   
}

export async function getStudantById(id) {
    const url = `https://lion-school-phbo.onrender.com/alunos/${id}`
    const respone = await fetch(url)
    const aluno = await respone.json()
    return aluno    
}

function criarTelaAluno(aluno){
   
    criarCardAluno(aluno)

    criarCardNotas(aluno)

}

function criarCardAluno(aluno){
    const main = document.getElementById("app")

    const cardImagem = document.createElement('div')
    cardImagem.className = 'card-imagem'
    const imagemAluno = document.createElement('img')
    const nomeAluno = document.createElement('p')
    imagemAluno.src = aluno.foto
    nomeAluno.textContent = aluno.nome

    
    cardImagem.appendChild(imagemAluno)
    cardImagem.appendChild(nomeAluno)

    main.appendChild(cardImagem)
}

function criarCardNotas(aluno){

    const main = document.getElementById("app")
    const cardNotas = document.createElement('div')
    cardNotas.className = 'card-nota'
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    const div4 = document.createElement('div')
    const div5 = document.createElement('div')

    const valorNota1 = document.createElement('p')
    const valorNota2 = document.createElement('p')
    const valorNota3 = document.createElement('p')
    const valorNota4 = document.createElement('p')
    const valorNota5 = document.createElement('p')

    valorNota1.textContent = aluno.desempenho[0].valor
    valorNota2.textContent = aluno.desempenho[1].valor
    valorNota3.textContent = aluno.desempenho[2].valor
    valorNota4.textContent = aluno.desempenho[3].valor
    valorNota5.textContent = aluno.desempenho[4].valor

    div1.className = 'div-nota'
    div2.className = 'div-nota'
    div3.className = 'div-nota'
    div4.className = 'div-nota'
    div5.className = 'div-nota'

    const nota1 = document.createElement('div')
    const nota2 = document.createElement('div')
    const nota3 = document.createElement('div')
    const nota4 = document.createElement('div')
    const nota5 = document.createElement('div')

    const porcentagemNota1 = document.createElement('div')
    const porcentagemNota2 = document.createElement('div')
    const porcentagemNota3 = document.createElement('div')
    const porcentagemNota4 = document.createElement('div')
    const porcentagemNota5 = document.createElement('div')

    porcentagemNota1.className = 'nota-porcentagem'
    porcentagemNota2.className = 'nota-porcentagem'
    porcentagemNota3.className = 'nota-porcentagem'
    porcentagemNota4.className = 'nota-porcentagem'
    porcentagemNota5.className = 'nota-porcentagem'

    const materia1 = document.createElement("span")
    const materia2 = document.createElement("span")
    const materia3 = document.createElement("span")
    const materia4 = document.createElement("span")
    const materia5 = document.createElement("span")

    materia1.textContent = aluno.desempenho[0].categoria
    materia2.textContent = aluno.desempenho[1].categoria
    materia3.textContent = aluno.desempenho[2].categoria
    materia4.textContent = aluno.desempenho[3].categoria
    materia5.textContent = aluno.desempenho[4].categoria

    div1.appendChild(valorNota1)
    div1.appendChild(nota1)
    div1.appendChild(materia1)
    nota1.appendChild(porcentagemNota1)

    const numeroNota1 = valorNota1.textContent + "%"
    porcentagemNota1.style.height = numeroNota1
        

    div2.appendChild(valorNota2)
    div2.appendChild(nota2)
    div2.appendChild(materia2)
    nota2.appendChild(porcentagemNota2)
    const numeroNota2 = valorNota2.textContent + "%"
    porcentagemNota2.style.height = numeroNota2


    div3.appendChild(valorNota3)
    div3.appendChild(nota3)
    div3.appendChild(materia3)
    nota3.appendChild(porcentagemNota3)
    const numeroNota3 = valorNota3.textContent + "%"
    porcentagemNota3.style.height = numeroNota3
    


    div4.appendChild(valorNota4)
    div4.appendChild(nota4)
    div4.appendChild(materia4)
    nota4.appendChild(porcentagemNota4)
    const numeroNota4 = valorNota4.textContent + "%"
    porcentagemNota4.style.height = numeroNota4


    div5.appendChild(valorNota5)
    div5.appendChild(nota5)
    div5.appendChild(materia5)
    nota5.appendChild(porcentagemNota5)
    const numeroNota5= valorNota5.textContent + "%"
    porcentagemNota5.style.height = numeroNota5


    cardNotas.appendChild(div1)
    cardNotas.appendChild(div2)
    cardNotas.appendChild(div3)
    cardNotas.appendChild(div4)
    cardNotas.appendChild(div5)

    
    main.appendChild(cardNotas)

}

