'use client';
import {useRouter} from 'next/navigation'
import styles from './main.module.css'

const Logo = () => {
const router = useRouter();

const handleClick = () =>{
    router.refresh();
    console.log('refreshed')
}

  return (
    <div className={styles.logo}onClick={handleClick}>Logo</div>
  )
}

export default Logo