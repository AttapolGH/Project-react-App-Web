import light from '../image/light(1).svg'
import dark from '../image/dark(1).svg'
import { useContext } from 'react'
import { ThemeContext } from '@/app/page'
import Image from 'next/image'

const Content = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <main className={theme === "dark" ? "dark" : "light"}>
            <div>
                <h1>Attapol Pumchai</h1>
                <p>DarkMode Workshop</p>
            </div>
            <Image
                src={theme === "dark" ? dark : light}
                width={500}
                height={500}
                Logo
            />
        </main>
    )
}
export default Content;