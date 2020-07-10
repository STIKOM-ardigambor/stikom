//karena Componen bersifat statis, maka bisa dibuatkan function
import Head from 'next/head'
import Link from 'next/link'
export default ()=>{
    return(
        <div>
            <Head>
                <title>STIKOM PGRI Banyuwangi</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="../css/bootstrap.css" rel="stylesheet"/>
                <script src="../js/jquery.js"></script>
                <script src="../js/bootstrap.js"></script>   
            </Head>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Welcome</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link href="/">
                    <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                    </Link>
                </li>
                <li className="nav-item">
                <Link href="/berita">
                    <a className="nav-link">Berita</a>
                </Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            </nav>
        </div>
    )
}