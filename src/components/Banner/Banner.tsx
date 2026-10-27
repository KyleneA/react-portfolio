import "./Banner.css";

export default function Banner() {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner-card">
                    <div className="banner-card__title-area">
                        <h1> Hello! Bonjour! </h1>
                        <h2> Welcome to my little corner of UX Design and Web Design </h2>
                    </div>

                    <div className=".banner-card__text">
                        <p> I'm Kylene Anne Aguila, a budding designer and UX Researcher from Montreal, Canada. I'm currently learning web design at Vanier College. I'm truly passionate about crafting designs that sincerely address real problems with a user-centric touch. My background in psychology and anthropology is my quiet strength, which gives me a unique approach to creating design solutions. </p>
                        <p> While I'm still finding my way in the vast realm of UX and Web Design, I am eager and genuinely excited to continue to learn and grow. </p>
                        <p> Join me on this journey of continuous improvement and creating designs that make a positive impact. I'm here to soak in every bit of knowledge and experience I possibly can. </p>                    
                    </div>
                </div>
            </div>
        </section>
    );
}