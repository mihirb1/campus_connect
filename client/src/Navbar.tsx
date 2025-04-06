const Navbar = () => {
    return (
        <div className="navbar">
            <div className = "nav-title">
                <img src="/lilccletittapwithdabass.jpg" className="logo" alt="CampusConnect logo" />
                <a href = "/" className = "cc">CampusConnect</a>
            </div>
            <div className = "nav-items">
                <a href = "/" className = "nav-item">About</a>
                <a href = "/" className = "nav-item">Home</a>
                <a href  = "/" className = "nav-item">Create Event</a>
            </div>
        </div>
    );
};

export default Navbar;
