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
import { getAllStudats } from "../pages/turma.js"

beforeEach(() => {
  Object.defineProperty(window, 'sessionStorage', {
    value: {
      getItem: jest.fn(() => 1),
      setItem: jest.fn()
    },
    writable: true
  })
})

// Substitui o fetch por uma função espiã, que permite ver número de chamadas, os parâmetros e definir retornos
global.fetch = jest.fn()

// Reposta fake do que é esperado de retorno da API na função que será testada
const mockAlunos = [
  {
    id: 1,
    nome: "Mariana Silva Santos",
    curso_id: 1,
    foto: "https://i.pravatar.cc/300?img=25",
    desempenho: []
  }
]

// Definir o comportamento do fetch - uma Promise resolvida(porque a função sendo testada é async) - por isso o "await"
//                                    sendo esperado um objeto que retorne "json" poruqe a função usa(response.json)

fetch.mockResolvedValue({
  json: async () => mockAlunos
})

// Teste para quando tiver um ID válido
test("Deve retornar um array de alunos quando o ID for válido", async () => {

  // Usando a função mas usando o fetch fake
  const resultado = await getAllStudats(1)

  // Validando se a url está correta
  expect(fetch).toHaveBeenCalledWith(
    "https://lion-school-phbo.onrender.com/alunos?curso_id=1"
  )

  // E esperadi que a resposta seja um Array
  expect(Array.isArray(resultado)).toBe(true)

  // Validando se a resposta é maior que 0
  expect(resultado.length).toBeGreaterThan(0)

  // Verificando se o retorno é igual ao esperado que foi criado
  expect(resultado).toEqual(mockAlunos)
})

// Teste para quando o ID da turma for inválido
test("Deve chamar a API mesmo com id inválido", async () => {

  // Nesse caso é esperadoa que o fetch retorne um array vazio
  fetch.mockResolvedValue({
    json: async () => []
  })

  // Passando um número inválido para ID da turma 
  const resultado = await getAllStudats(3)

  // Validando se a url está correta
  expect(fetch).toHaveBeenCalledWith(
    "https://lion-school-phbo.onrender.com/alunos?curso_id=3"
  )
  
  expect(resultado).toEqual([])
})