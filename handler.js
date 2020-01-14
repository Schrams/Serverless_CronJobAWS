'use strict';

module.exports.FuncioCada50min = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Aquesta funció s executa cada 50 minuts de manera automàtica!',
        input: event,
      },
      null,
      2
    ),
  };
};


module.exports.funcioCadaDia12PM = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Aquesta funció s executa cada dia a les 12 del matí',
        input: event,
      },
      null,
      2
    ),
  };
};