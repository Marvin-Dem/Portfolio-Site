import "./App.css";

export default function App() {
    return (
        <div>
            <img
                src="https://profile-images.xing.com/images/69f8e0b08c631937469942a9f88c7ce6-1/marvin-demirkaya.1024x1024.jpg"
                width="150"
            />
            <h1 className="text-shadow">Hi, i`m Marvin!</h1>
            <p className="text text-shadow">
                I`m a junior software developer since April 2024 at{" "}
                <a href="https://progani.com" target="_blank">
                    Progani GmbH.
                </a>
                <br />
                Welcome to my Page! Feel free to explore my own little Pokemon
                Wiki Pokacid!
            </p>
            <div className="linkwrapper">
                <a
                    href="https://pokacid.vercel.app/"
                    target="_blank"
                    className="a"
                >
                    <i className="fab "></i>Pokacid
                </a>
                <a
                    href="https://github.com/Marvin-Dem/Pokacid"
                    target="_blank"
                    className="a"
                >
                    <i className="fab fa-github"></i> GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/marvin-demirkaya-2a2171302/"
                    target="_blank"
                    className="a"
                >
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
            </div>
        </div>
    );
}
