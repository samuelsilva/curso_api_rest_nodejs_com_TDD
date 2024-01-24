module.exports = (app) => {

  const findAll = (req,res) => {
    /* // Não preciso mais dessa consulta
    const users = [
      {'name':'John Doe', 'mail':'john@mail.com'}
    ];
    res.status(200).json(users);
    */
    app.services.user.findAll()
      .then(result => res.status(200).json(result));
  };
        
  const create = async (req,res) => {
    const result = await app.services.user.save(req.body);   // aqui retorna tudo que existe no banco
    res.status(201).json(result[0]); //o que vier no send deve retornar como resposta no body
  };

  return {findAll, create};
}