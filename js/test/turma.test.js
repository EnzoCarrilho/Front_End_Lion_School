/**********************************************************************************************
 * Objetivo: Arquivo responsável pelo Teste Unitário (Unit Test) do arquivo de js da página
 *           de alunos. Onde será validado as funções criadas no arquivo.
 * 
 * Data: 24/02
 * Autor Test: Enzo
 * Autor Dev: Enzo
 * Versão: 1.0
 *********************************************************************************************/
// Import do arquivos das funções que serão testadas
const alunos = require('../pages/alunos.js')

// Teste da função que faz o fetch para o get de Alunos na API
test('Validação do retorno da função que faz fetch na API:', () => {
    expect(alunos.getAllStudats(1).toBeInstanceOf(Array))
    expect(alunos.getAllStudats(1).toBeInstanceOf(Array))
})