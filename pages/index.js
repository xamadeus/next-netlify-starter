import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>W3.CSS</title>
      </Head>
      <main>
      <div class="w3-container">

<h2>Progress Bar</h2>
<p>The w3-container class can be used for a progress bar.</p>
<p>The CSS width property can be used to set the height and width.</p>

<div class="w3-border">
  <div class="w3-grey" style="height:24px;width:20%"></div>
</div>

</div>
      </main>

      <Footer />
    </div>
  )
}
