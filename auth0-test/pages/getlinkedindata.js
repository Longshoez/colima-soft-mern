import { useUser } from '@auth0/nextjs-auth0'
import React, { useState } from 'react'
import cheerio from 'cheerio'
import axios from 'axios'

// export const getServerSideProps = async (context) => {

//   // const { user } = useUser()

//   const { html } = await axios.get('https://www.theguardian.com/uk')
//   const $ = cheerio.load(html)

//   const title = $('.fc-it-em__title').first().text()

//   return {
//     props: { title }
// W,O[= REQdaszxc  }
// }


const examplepage = () => {

  const html = async () => {
    let data
    return data = await axios.get('https://www.theguardian.com/uk')
  }

  console.log(html())

  return (
    <div>
      {/* <h1>{title}</h1> */}
    </div>
  )
}

export default examplepage


// const url = 'https://www.theguardian.com/uk'

// app.get('/', function (req, res) {
//     res.json('This is my webscraper')
// })

// app.get('/results', (req, res) => {
//     axios(url)
//         .then(response => {
//             const html = response.data
//             const $ = cheerio.load(html)
//             const articles = []

//             $('.fc-item__title', html).each(function () { //<-- cannot be a function expression
//                 const title = $(this).text()
//                 const url = $(this).find('a').attr('href')
//                 articles.push({
//                     title,
//                     url
//                 })
//             })
//             res.json(articles)
//         }).catch(err => console.log(err))

// })


// app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))