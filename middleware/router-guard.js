// middlewares run before rendering either a page or a group of pages.
// Doc: https://nuxtjs.org/guide/routing#middleware

export default function (context) {
  console.log('\x1B[36m%s\x1B[0m', '=test===Router Guard====')
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
}
