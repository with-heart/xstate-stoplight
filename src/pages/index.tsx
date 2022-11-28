import Head from 'next/head'
import {Stoplight} from '../stoplight'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stoplight with React, XState, and SCSS</title>
        <meta
          name="description"
          content="Using React and SCSS to render a stoplight and XState to control its behavior"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Stoplight />
      </main>
    </div>
  )
}
