import Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('items').insert([
    { title: 'Lâmpadas', image: 'lampadas.svg' },
    { title: 'Pilhas e Baterias', image: 'baterias.svg' },
    { title: 'Papéis de Papelão', image: 'papeis-papelao.svg' },
    { title: 'Rêsíduos Eletrônicos', image: 'eletronicos.svg' },
    { title: 'Rêsíduos Orgânicos', image: 'organicos.svg' },
    { title: 'Óleo de Cozinha', image: 'oleo.svg' },
  ]);
};