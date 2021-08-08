import Head from 'next/head'
import styles from '../../styles/posts.module.scss';

export default function Posts() {
  return(
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>12 de março 2021</time>
            <strong>O que o NextJS me oferece de configuração?</strong>
            <p>Por padrão o NextJS vem com configurações otimizadas e o pessoal da Vercel está sempre atualizando essas configurações pensando em melhorar nossa experiência de desenvolvimento.</p>
          </a>
          <a>
            <time>12 de março 2021</time>
            <strong>O que o NextJS me oferece de configuração?</strong>
            <p>Por padrão o NextJS vem com configurações otimizadas e o pessoal da Vercel está sempre atualizando essas configurações pensando em melhorar nossa experiência de desenvolvimento.</p>
          </a>
          <a>
            <time>12 de março 2021</time>
            <strong>O que o NextJS me oferece de configuração?</strong>
            <p>Por padrão o NextJS vem com configurações otimizadas e o pessoal da Vercel está sempre atualizando essas configurações pensando em melhorar nossa experiência de desenvolvimento.</p>
          </a>
        </div>
      </main>
    </>
  )
}