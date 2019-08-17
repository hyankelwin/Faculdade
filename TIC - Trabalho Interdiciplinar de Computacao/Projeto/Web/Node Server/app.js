var express = require('express')
var app = express()
var cors = require('cors')
app.use(cors())

var bodyParser = require('body-parser')
var urlPost = bodyParser.urlencoded({ extended: true }) 
app.use(bodyParser.json());


// conecta no banco de dados
require('./connection')

app.get('/cidade', async (req, res) => {
    const db = global.db;

    let result = await db.func('eventos.selecionarCidade')
    return res.status(200).json({content: result})
})
app.post('/teste', async (req, res) => {
  const db = global.db;

  let a = await db.func('public.inserirTeste', [req.body.andar, req.body.auditorio, req.body.predio])
  return res.status(200).json({message: a})
})

// -------------------------------- LOCAL -----------------------------//

//LOCAL - POST
app.post('/localCadastrar', async (req, res) => {
  const db = global.db;

  let a = await db.func('eventos.inserirLocal', [req.body.cod_cidade, req.body.nome, req.body.rua, req.body.numero, req.body.complemento, req.body.bairro])
  return res.status(200).json({message: a})
})
//LOCAL - GET
app.get('/localSelecionar', async (req, res) => {
  const db = global.db;

  let result = await db.func('eventos.selecionarLocal')
  return res.status(200).json({content: result})
})
//LOCAL - PUT
app.put('/localAtualizar/:cod_local', async (req, res) => {
  const db = global.db;

  let result = await db.func('eventos.alterarLocal', [req.params.cod_local, req.body.cod_cidade, req.body.nome, req.body.rua, req.body.numero, req.body.complemento, req.body.bairro])
  return res.status(200).json({content: result})
})
//LOCAL - DELETE
app.delete('/localDeletar/:cod_local', async (req, res) => {
  const db = global.db;

  let result = await db.func('eventos.deletarLocal', [req.params.cod_local])
  return res.status(200).json({content: result})
})

// ----------------------------------- PALESTRANTE -------------------------------------//

//PALESTRANTE - POST
app.post('/palestranteCadastrar', async (req, res) => {
  const db = global.db;

  let a = await db.func('eventos.inserirPalestrante', [req.body.nome, req.body.descricao_curriculo, req.body.foto, req.body.empresa, req.body.ativo])
  return res.status(200).json({message: a})
})
//PALESTRANTE - GET
app.get('/palestranteSelecionar', async (req, res) => {
  const db = global.db;

  let result = await db.func('eventos.selecionarPalestrante')
  return res.status(200).json({content: result})
})
//PALESTRANTE - PUT
app.put('/palestranteAtualizar/:cod_palestrante', async (req, res) => {
  const db = global.db;

  let result = await db.func('eventos.alterarPalestrante', [req.params.cod_palestrante, req.body.nome, req.body.descricao_curriculo, req.body.foto, req.body.empresa, req.body.ativo])
  return res.status(200).json({content: result})
})
//PALESTRANTE - DELETE
app.delete('/palestranteDeletar/:cod_palestrante', async (req, res) => {
  const db = global.db;

  let result = await db.func('eventos.deletarPalestrante', [req.params.cod_palestrante])
  return res.status(200).json({content: result})
})
/*------------------------------- EVENTO ---------------------------------*/

//EVENTO - POST
app.post('/eventoCadastrar', async (req, res) => {
  const db = global.db;

  let a = await db.func('eventos.inserirEvento', [req.body.cod_docente_cadastro, req.body.cod_tipo_evento, req.body.cod_local, req.body.nome, req.body.tema, req.body.data_inicio, req.body.data_fim, req.body.ativo, req.body.descricao])
  return res.status(200).json({message: a})
})
//EVENTO - GET
app.get('/eventoSelecionar', async (req, res) => {
  const db = global.db;

  let result = await db.func('eventos.selecionarEvento')
  return res.status(200).json({content: result})
})
//EVENTO - DELETE
app.delete('/eventoDeletar/:cod_evento', async (req, res) => {
  const db = global.db;

  let result = await db.func('eventos.deletarEvento', [req.params.cod_evento])
  return res.status(200).json({content: result})
})
//EVENTO - PUT
app.put('/eventoAtualizar/:cod_evento', async (req, res) => {
  const db = global.db;

  let result = await db.func('eventos.alterarEvento', [req.params.cod_evento, req.body.cod_docente_cadastro, req.body.cod_tipo_evento, req.body.cod_local, req.body.nome, req.body.tema, req.body.data_inicio, req.body.data_fim, req.body.ativo, req.body.descricao])
  return res.status(200).json({content: result})
})





/*-------------------------------- TIPO EVENTO ------------------------------*/

//TIPO_EVENTO - GET
app.get('/tipoEventoSelecionar', async (req, res) => {
  const db = global.db;

  let result = await db.func('eventos.selecionarTipoEvento')
  return res.status(200).json({content: result})
})

/*-------------------------------- CURSO ------------------------------------*/

//CURSO - GET
app.get('/cursoSelecionar', async (req, res) => {
  const db = global.db;

  let result = await db.func('institucional.selecionarCurso')
  return res.status(200).json({content: result})
})



app.listen(3000)
