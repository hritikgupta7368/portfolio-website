import { Project_card } from "./projects";

const Other = () => {
  return (
    <div className="skills_root">
      <h1>Other projects</h1>
      <ul className="card_container ">
        <Project_card name="Langchain and hugging face" summary="summary" />
        <Project_card name="Langchain and hugging face" summary="summary" />
        <Project_card name="Langchain and hugging face" summary="summary" />
      </ul>
    </div>
  );
};

export default Other;
