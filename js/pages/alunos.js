export async function Alunos(){
    const main = document.getElementById("app")
    const turmaID = sessionStorage.getItem("turmaId")

    const alunos = await getAllStudats(turmaID)

    const divAlunos = document.createElement('div')
    divAlunos.className = "alunos"
    main.appendChild(divAlunos)
    
    

    alunos.forEach(aluno => {
        criarCardAluno(aluno)
    })
    
}

async function getAllStudats(id) {
    const url = `https://lion-school-phbo.onrender.com/alunos?curso_id=${id}`
    const respone = await fetch(url)
    const alunos = await respone.json()
    console.log(alunos)
    return alunos    
}

function criarCardAluno(aluno){
    const divAlunos = document.querySelector('.alunos')
    const cardAluno = document.createElement('div')
    cardAluno.className = "card-aluno"
    const nome = document.createElement('p')
    nome.className = "nome"
    const imagem = document.createElement('img')
    
    
    divAlunos.appendChild(cardAluno)
    cardAluno.append(imagem)
    cardAluno.appendChild(nome)

    nome.textContent = aluno.nome
    imagem.src = aluno.foto
        
}


    


