const config = {
  database: 'loja_teste',
  username: 'root',
  password: '',
  params: {
    dialect: 'mysql',
    define: {
      underscored: true,
      engine: 'MYISAM'
    },
  },
  jwtSecret: 'est0que',
  jwtSession: { session: false }
};

export default config;