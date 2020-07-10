// Componen memanggil fungsi class componen bawaan react
import {Component} from 'react'
import Layout from '../component/template'

export default class extends Component {
    //didalam class komponen kita tidak bisa menulis function
    // didalam componen harus memanggil render
    // Semua html ada didalam render.
    render(){
        // Didalam render, harus ada return
        // Didalam retur hanya bisa dibungkus oleh satu div atau element html <> </>
        // Nantinya konten ada di pages. karena konten sering berubah - ubah
        return (
           <div>
               <Layout>
                   <div className="row">
                    <div className="col-sm alert-primary">
                    Ini adlah conten 1
                    </div>
                    <div className="col-sm alert-danger">
                    Content 2
                    </div>
                   </div>
               </Layout>
               
           </div> 
        )
    }

}

// Untuk hosting di zeith.co anda harus login dulu dengan github
// dan jika sudah login, bisa melakukan update 
// kemudian ketik now di terminal
// untuk melakukan upload ke zeith. Ketik 'now' login dan mengurut sesuai keinginan
// jika error install : 'npm install -g now'
// Jika igin update : 'now --prod'