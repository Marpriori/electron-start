Usuario.create({
  nome: 'Alan',
  sobrenome: 'Hoffmeister',
  senha: '123',
  aniversario: new Date(1989, 9, 10)
}).then(function(usuario){
  // Neste ponto o nosso usuário já está criado no banco de dados
  // verifique o seu terminal para ver qual query o Sequelize executou
  console.log('Usuário inserido!', usuario.get());

  // Agora buscamos por um usuário com o sobrenome 'Hoffmeister', já que
  // este ORM trabalha com promises, basta retornar uma promise aqui
  return Usuario.find({
    where: {
      senha: '123'
    }
  });

}).then(function(usuario){
  // Aqui a pesquisa já terá retonado, vamos modificar este usuário para a 
  // data correta e salvar o mesmo no banco de dados.
  usuario.set({
    aniversario: new Date(1989, 9, 14)
  });

  // Novamente, basta retornar uma promise
  return usuario.save();

}).then(function(usuario){
  // A instância atualizada do usuário está aqui nesta função, podemos
  // agora remover este usuário usando o método destroy
  return usuario.destroy();

}).then(function(){
  console.log('Terminamos de criar, pesquisar, atualizar e excluir!');
});