import Link from 'next/link'

export default function faq(){
    return(
        <div className = "faqPage">
            <div className = "Navbar">
                <div className = "leftNav">
                    <Link href = "https://acmutd.co/" className = "link">
                        <img src= '../HackUTD8Assets/Logo.png' width = '47px' height = '55px' padding-right= '30px'></img>
                    </Link>
                    <Link href = "/schedule" className = "link">
                        <a className = "link">Schedule</a>
                    </Link>
                    <Link href = "/speakers" className = "link">
                        <a className = "link">Speakers</a>
                    </Link>
                    <Link href = "/sponsers" className = "link">
                        <a className = "link">Sponsers</a>
                    </Link>
                    <Link href = "/faq" className = "link">
                        <a className = "link">FAQ</a>
                    </Link>
                </div>
        
                <button className= 'SigninButton'>Sign-in</button>
            </div>
            <h4>
                FAQs
            </h4>
        </div>
    )
}