import Logo from './Logo.png'
import Image from 'next/image'

const Home = () => {
    return (
        <div align="center">
            <Image
                src= {Logo}
                width={500}
                height={500}
                alt="Picture of the author"
            />
            
        </div>
    )
}

export default Home