export function Home(){
    return ` 
    
        <div class="devices">
            <p>Escolha um <span>curso</span> 
            <br> para gerenciar</p>
            <img src="./img/devices.svg" alt="">
        </div>
        <img src="./img/studant.svg" alt="">
        <div class="cursos">
            <button class="btn-turma" data-id="1">
                <img src="./img/ds.svg" alt="">
                <p>DS</p>
            </button>
            <button class="btn-turma" data-id="2">
                <img src="./img/redes.svg" alt="">
                <p>REDES</p>
            </button>
        </div>
   `
}