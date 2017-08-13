const config = {
  database: 'loja_teste',
  username: 'root',
  password: '',
  params: {
    dialect: 'mysql',
    define: {
      underscored: true,
    },
  },
  jwtSecret: 'est0que',
  jwtSession: { session: false }
};

export default config;