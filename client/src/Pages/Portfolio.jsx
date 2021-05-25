import WorkTemplate from "../components/WorkTemplate";
import Works from "../utils/works";

function Portfolio() {
  return (
    <>
      {Works.map((work, i) => {
        return <WorkTemplate key={i} work={work} />;
      })}
    </>
  );
}

export default Portfolio;
