interface ExpCardProps {
    title: string;
    content: string;
    time: string;
}

function ExperienceCard (props:ExpCardProps) {
    const { title, time, content } = props;

    return (
        <>
            <div className="card">
              <div className="box">
                <img src="/images/foodieIcon.png" alt="foodie-icon" />
                <h3>
                  Foodie {title}
                </h3>
              </div>
              <p>
                This was a site developed with Typescript and Tailwind CSS {content}
              </p>
            </div>
        </>
    );
}

export default ExperienceCard;