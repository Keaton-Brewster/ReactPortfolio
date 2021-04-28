import WorkTemplate from '../components/WorkTemplate'
import Works from '../utils/works';


function Portfolio() {
    return (
        <>
            {Works.map(work => {
                return <WorkTemplate work={work} />
            })}
        </>
    )
}

export default Portfolio;