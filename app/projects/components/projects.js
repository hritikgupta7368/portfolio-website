import Link from "next/link";

export const Project_card = ({ name, summary, img, tech_stack }) => {
  return (
    <li className="card_root">
      <div className="card">
        <div className="summary">
          <p>{summary}</p>
        </div>
        <h1 className="card_title">{name}</h1>
      </div>
      <div className="bottom_section">
        <Link className="btn" href="./project">
          <span>&rarr;</span>
        </Link>
      </div>
    </li>
  );
};

const Hero = () => {
  return (
    <div className="project_hero ">
      <ul className="card_container">
        <Project_card
          name="Langchain and hugging face"
          summary="but really fast we found a passion and fall in love with crypto, wallets, NFTs"
          img="image.png"
          tech_stack={[]}
        />
        <Project_card name="Langchain and hugging face" summary="summary" />
        <Project_card name="Langchain and hugging face" summary="summary" />
        <Project_card name="Langchain and hugging face" summary="summary" />
      </ul>
    </div>
  );
};

export default Hero;
