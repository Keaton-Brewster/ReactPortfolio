import WorkTemplate from "../components/WorkTemplate";
import Works from "../utils/works";

function Portfolio() {
  return (
    <>
      {Works.map((work, i) => {
        return (
          <>
            <h1 className="text-center">{work.title}</h1>
            <WorkTemplate work={work} />;
          </>
        );
      })}
    </>
  );
}

export default Portfolio;
