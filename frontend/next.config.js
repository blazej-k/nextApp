/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    GET_USER: process.env.GET_USER,
    GET_ALL_USERS: process.env.GET_ALL_USERS,
    GET_NEW_USERS: process.env.GET_NEW_USERS,
  }
}