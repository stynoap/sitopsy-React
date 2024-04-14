import "./Header.css";

const Header = () => {

    return (
        <header className="header">
            <div className="logo-psy"></div>
            <div>
                <h1>Giulia Pinna</h1>
                <div className="sottotitolo-header">
                    <h3>psicologa</h3>
                    {/* <p><i>specializzanda in psicoterapia ad indirizzo analitico</i></p> */}
                </div>

            </div>

        </header>
    );
}

export default Header;