import Logo from '../../xx (1).png'
import Image from 'next/image'

const Home = () => {
    return (
        <div>
            <Image
                src= {Logo}
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <h1>Welcom Attapol Pumchai</h1>
        </div>
    )
}

export default Home