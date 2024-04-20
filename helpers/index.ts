export const SQL_QUERIES = {
  GET_ALL_USERS: '',
  CREATE_REGISTRATION: `INSERT INTO ${process.env.NODE_ENV === 'development' ? 'dev_registrations' : 'registrations'}`,
}
