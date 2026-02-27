export async function Turma(){

    const pSair = document.getElementById('text-sair')
    pSair.textContent = 'Voltar'

    const divVoltar = document.querySelector('.sair')
    divVoltar.addEventListener('click', () => {
        window.location.hash = ''
    })

    const main = document.getElementById("app")
    const turmaID = sessionStorage.getItem("turmaId")

    const alunos = await getAllStudats(turmaID)

    const nomeTurma = document.createElement('h1')
    if(turmaID == 1)
        nomeTurma.textContent = "Desenvolvimento de sistemas"
    else
        nomeTurma.textContent = "Redes"

    nomeTurma.className = 'nome-turma'
    main.appendChild(nomeTurma)

    const divAlunos = document.createElement('div')
    divAlunos.className = "alunos"
    main.appendChild(divAlunos)
    
    
    alunos.forEach(aluno => {
        criarCardAluno(aluno)
    })

    document.querySelectorAll('.card-aluno').forEach(card => {
        card.addEventListener("click", () => {
            const id = card.id
            sessionStorage.setItem('id', id)
            window.location.hash = '#/aluno'
        })
    })
  
}

export async function getAllStudats(id) {
    const url = `https://lion-school-phbo.onrender.com/alunos?curso_id=${id}`
    const respone = await fetch(url)
    const alunos = await respone.json()
    return alunos    
}

function criarCardAluno(aluno){
    const divAlunos = document.querySelector('.alunos')
    const cardAluno = document.createElement('div')
    cardAluno.className = "card-aluno"
    cardAluno.id = aluno.id
    const nome = document.createElement('p')
    nome.className = "nome"
    const imagem = document.createElement('img')
    
    
    divAlunos.appendChild(cardAluno)
    cardAluno.append(imagem)
    cardAluno.appendChild(nome)

    nome.textContent = aluno.nome
    imagem.src = aluno.foto
 
}










    


