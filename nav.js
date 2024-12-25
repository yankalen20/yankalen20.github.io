

const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
    		<img src="cloth.png" class="brand-logo" alt="">
    	<div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search brand, product">
                <button class="search-btn">search</button>
            </div>
            <a href="user.html"><img src="user.png" alt=""></a>
            <a href="cart.html"><img src="cart.png" alt=""></a>
        </div>
    </div>
    </nav>
        <ul class="links-container">
        <li class="link-item"><a href="uts.html" class="link">home</a></li>
        <li class="link-item"><a href="men.html" class="link">men</a></li>
        <li class="link-item"><a href="women.html" class="link">women</a></li>
        <li class="link-item"><a href="accessories.html" class="link">accessories</a></li>
	    <li class="link-item"><a href="about.html" class="link">about us</a></li>
        <li class="link-item"><a href="help.html" class="link">help desk</a></li>
        </ul>
    `;
}

createNav();


