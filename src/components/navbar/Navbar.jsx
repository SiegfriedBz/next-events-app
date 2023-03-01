import Link from 'next/link'
// import Image from 'next/image'

const Navbar = () => {
    return (
        <div className="nav--wrapper">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid px-1">
                    {/*<a className="navbar-brand" href="/">*/}
                    {/*    <Image*/}
                    {/*        width={50}*/}
                    {/*        height={50}*/}
                    {/*        src='/next.svg'*/}
                    {/*        alt="logo"*/}
                    {/*        className="logo" />*/}
                    {/*</a>*/}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link ps-0 active nav-home-text" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/events">Events</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="src/components/shared/Navbar#" id="navbarScrollingDropdown"
                                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Events By City
                                </Link>
                                <ul className="dropdown-menu navbar-dark bg-dark" aria-labelledby="navbarScrollingDropdown">
                                    <li className='ps-1'><Link className="nav-link" href="/events/London">London</Link></li>
                                    <li className='ps-1'><Link className="nav-link" href="/events/San-Francisco">San-Francisco</Link></li>
                                    <li className='ps-1'><Link className="nav-link" href="/events/Barcelona">Barcelona</Link></li>
                                    <li className='ps-1'><Link className="nav-link" href="/events">All Events</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/pages/about-us">About Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
