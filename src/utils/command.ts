import { v4 as uuidv4 } from 'uuid';

export const Commander = (() => {
  const options = {
    get: (props: any) => {
      return {
        headers: {
          uudi: uuidv4(),
          date: new Date(),
        },
        data: props,
        status: !!props,
      };
    },
    post: (props: any) => {
      return {
        headers: {
          uudi: uuidv4(),
          date: new Date(),
        },
        data: props,
        status: !!props,
      };
    },
    patch: (props: any) => {
      return {
        headers: {
          uudi: uuidv4(),
          date: new Date(),
        },
        data: props,
        status: !!props,
      };
    },
    put: (props: any) => {
      return {
        headers: {
          uudi: uuidv4(),
          date: new Date(),
        },
        data: props,
        status: !!props,
      };
    },
    delete: (props: any) => {
      return {
        headers: {
          uudi: uuidv4(),
          date: new Date(),
        },
        data: props,
        status: !!props,
      };
    },
    error: () => {
      return {
        headers: {
          uudi: uuidv4(),
          date: new Date(),
        },
        data: null,
        status: false,
        message: 'Tipo de comando no valido, revisar interceptor respuesta.',
      };
    },
  };

  return {
    run: (comando: string, argumentos: any) => {
      if (!options[comando]) {
        return options['error']();
      }

      return options[comando](argumentos);
    },
  };
})();