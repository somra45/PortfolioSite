const SplashPage = () => {
    return (
        <>
            <div id="wrapper">
            <div id="bg"></div>
            <div id="overlay"></div>
            <div id="main">
                    <header id="header">
                        <h1>Harvinder Somra</h1>
                        <p>Full Stack Software Engineer &nbsp;&bull;&nbsp; Adventurer &nbsp;&bull;&nbsp; Get to know me</p>
                        <nav>
                            <ul>
                                <li><a href="https://www.linkedin.com/in/harvinder-somra-39ba536a/" target='_blank' class="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
                                <li><a href="https://www.facebook.com/harvinder.somra" target="_blank" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
                                <li><a href="/info" class="icon fa-info"><span class="label">Info</span></a></li>
                                <li><a href="https://github.com/somra45" target="_blank" class="icon fa-github"><span class="label">Github</span></a></li>
                                <li><a href="mailto:somra45@gmail.com" target="_blank" class="icon fa-envelope-o"><span class="label">Email</span></a></li>
                            </ul>
                        </nav>
                    </header>
                    <footer id="footer">
                        <span class="copyright">&copy; Untitled. Design: <a href="http://html5up.net">HTML5 UP</a>.</span>
                    </footer>
            </div>
            </div>
        </>
    )
}

export default SplashPage;