// Ini adalah template utama yang akan dibuat di dalam induk pages
import Navbar from './navbar'
import Footer from './footer'

// {children diberikan untuk identifikasi hasil ke pages.}
export default ({children})=>{
    return(
        <div>
            <Navbar/>
            <hr/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        {children}
                    </div>
                </div>
            </div>
            <hr/>
            <Footer/>
        </div>
    )
}