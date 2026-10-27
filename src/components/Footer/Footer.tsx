import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="contents">
                    {/* Copyright Text */}
                    <div className="contents__copyright">
                        <p> &copy;2026 Kylene Anne Aguila </p>
                    </div>
                    <div className="contents__attribution">
                        <p> Free icons from <a href="https://streamlinehq.com/">Streamline</a> </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}