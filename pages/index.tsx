import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout/Layout'
import Navbar from '../components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout title='La tienda de Mer' >
        <main className={`${styles.main}`}>
          <Navbar />
        
        
        
        </main>
      </Layout>
      
     
    </>
  )
}
