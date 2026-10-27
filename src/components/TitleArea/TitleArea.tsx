import "./TitleArea.css";

type TitleAreaProps = {
    sectionName: string;
    sectionTitle: string;
}

export default function TitleArea({sectionName, sectionTitle}: TitleAreaProps) {
    return (
        <div 
            className={`title-area title-area__${sectionName}`}
        >
            <h2> {sectionTitle} </h2>
        </div>
    );
}