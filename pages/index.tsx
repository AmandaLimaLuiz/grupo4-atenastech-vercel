import * as React from 'react';
import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const List = styled.li`
  padding: 0;
  margin-top: 1px;
  alignItems:'left';
  min-width: 120px;
  text-align: left;
  font-size: 20px;
  color: #282a36;
  font-weight: bold;
  list-style: none;
  &:hover{
    cursor:pointer;
    background-color: rgba(40, 42, 54, 0.5);
    border: 1px solid #ced4da;
    border-radius: 10px;
  }
  `

  const gitHub = [
   'https://github.com/AmandaLimaLuiz',
   'https://github.com/beatrizattorre',
   'https://github.com/Camis-souto',
   'https://github.com/Daphyne-Pires',
   'https://github.com/NathassiaAlmeida',
   'https://github.com/rebecaoliveiraturma16',
  ]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      

      <main className={styles.main}>
        <h1 className={styles.title}>
        Executando React com Next.JS
        </h1>

        <h2>Site criado em TypeScript publicado na Vercel.</h2>
        <div>
      <Accordion>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontWeight:'bold'}}>Grupo 4 - Atenas Tech</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>          
              <List><Link href={gitHub[0]} ><a target="_blank" href={gitHub[0]}>Amanda Lima</a></Link></List>
              <List><Link href={gitHub[1]} ><a target="_blank" href={gitHub[1]}>Beatriz</a></Link></List>
              <List><Link href={gitHub[2]} ><a target="_blank" href={gitHub[2]}>Camila</a></Link></List>
              <List><Link href={gitHub[3]}><a target="_blank" href={gitHub[3]}>Daphyne</a></Link></List>
              <List><Link href={gitHub[4]}><a target="_blank" href={gitHub[4]}>Nathássia</a></Link></List>
              <List><Link href={gitHub[5]}><a target="_blank" href={gitHub[5]}>Rebeca</a></Link></List>            
          </Typography>
        </AccordionDetails>
      </Accordion>           
    </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
