import { GetStaticProps } from 'next';
import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client'
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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'posts')
  ],
    {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100,
    }
  )
  console.log(response)
  return {
    props: {}
  }
}