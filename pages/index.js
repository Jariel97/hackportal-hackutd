import Link from 'next/link'
//Navbar has all links besides signup and doesn't have acm logo asset
//outline for homepage completed
export default function Home() {
  return (
    <div>
      <div className = "Navbar">
        <Link href = "https://acmutd.co/">
          <a>ACM Logo</a>
        </Link>
        <Link href = "/schedule">
          <a>Schedule</a>
        </Link>
        <Link href = "/speakers">
          <a>Speakers</a>
        </Link>
        <Link href = "/sponsers">
          <a>Sponsers</a>
        </Link>
        <Link href = "/faq">
          <a>FAQ</a>
        </Link>
        
      </div>

      <div className = "Jumbotron">
        Jumbotron
      </div>
      
      <div className = "Stats">
        Stats Here
      </div>
      
      <div className = "AboutHackUTD">
        <h6>
          About HackUTD
        </h6>
      </div>
    </div>
  )
}
