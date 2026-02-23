import { Home } from "./pages/home.js";
import { Alunos } from "./pages/alunos.js";

export function router() {
    const app = document.getElementById("app");
    const pageStyle = document.getElementById("page-style");
    const path = window.location.hash;

    switch (path) {
        case "#/alunos":
            app.innerHTML = Alunos();
            pageStyle.href = "css/pages/alunos.css";
        break;

        default:
            app.innerHTML = Home();
            pageStyle.href = "css/pages/home.css"; 
        
    }

    document.querySelectorAll(".btn-turma").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const turmaId = e.currentTarget.dataset.id
          sessionStorage.setItem("turmaId", turmaId)
          window.location.hash = "#/alunos"
          
        })
        
    })
}
