import MyImage from '../Assets/images/Maritory.png'

const Navbar = () => {
    return ( 
            <nav class="navbar bg-light">
                <div class="container">
                    
                    <a class="navbar-brand"  href="/index.html"><img src={MyImage} alt=""  style={{width: '40%', height: 'auto'}} />Maritory</a>
                    <form class="d-flex col-5" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    
                    <div className="col-2">
                    <button type="button" class="btn btn-secondary">Masuk</button>
                    <button type="button" class="btn btn-warning">Daftar</button>
                    </div>
                </div>
            </nav>
     );
}
 
export default Navbar;