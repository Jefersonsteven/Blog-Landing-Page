export const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">Blogr</h1>
            <div className="header__menu">
                <nav className="header__menu--nav">
                    <ul className="menu">
                        <li className="menu__option">
                            <p>Product</p>
                            <img src="#" alt="Product" />
                        </li>
                        <li className="menu__option">
                            <p>Company</p>
                            <img src="#" alt="Company" />
                        </li>
                        <li className="menu__option">
                            <p>Connect</p>
                            <img src="#" alt="Connect" />
                        </li>
                        <div className="menu__option-submenu">
                                <ul>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Newsletter</a></li>
                                    <li><a href="#">LinkedIn</a></li>
                                </ul>
                        </div>
                    </ul>
                </nav>
                <div className="header__menu--bottons">
                    <button>Login</button>
                    <button>Sign up</button>
                </div>
            </div>
        </header>
    )
}