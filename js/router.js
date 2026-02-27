import { Home } from "./pages/home.js"
import { Turma } from "./pages/turma.js"
import { Aluno } from "./pages/aluno.js"

export function router() {
    const app = document.getElementById("app")
    const pageStyle = document.getElementById("page-style")
    const path = window.location.hash

    switch (path) {
        case "#/turma":
            app.innerHTML = Turma()
            pageStyle.href = "css/pages/turma.css"
        break;

        case "#/aluno":
            app.innerHTML = Aluno()
            pageStyle.href = "css/pages/aluno.css"
        break;

        default:
            app.innerHTML = Home()
            pageStyle.href = "css/pages/home.css"
        
    }

    document.querySelectorAll(".btn-turma").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const turmaId = e.currentTarget.dataset.id
          sessionStorage.setItem("turmaId", turmaId)
          window.location.hash = "#/turma"
          
        })
       
        
    })
}
