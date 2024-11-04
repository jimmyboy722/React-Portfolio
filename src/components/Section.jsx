// IMPORTING THE SECTION.CSS FILE SO IT IS ADDED TO THE DOM WHEN THIS COMPONENT LOADS
import '../styles/Section.css';

const styles = {
    sectionStyles: {
        background: 'rgb(60, 93, 83)',
    }
};

function Section() {
    return (
        <section style={styles.sectionStyles} className="section">
            <h2>About Me</h2>
            <p>Hi, I'm James. I'm a full-stack web developer based in good old New York, USA. I'm passionate about creating beautiful, functional websites. I specialize in React. </p>
        </section>
    );
}   

export default Section;