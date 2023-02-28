const Projects = () => {
  const PROJECT_LIST = [
    { name: "Spotify Playlist", id: "p1",  description: "", img: "" },
    { name: "Fantasy Football", id: "p2",  description: "", img: "" },
    { name: "Food Order App", id: "p3",  description: "", img: "" },
  ];
  const mappedList = PROJECT_LIST.map((project) => {
    return (
      
        <li id={project.id} key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <img src={project.img} alt={project.name} />
        </li>
   
    );
  });

  return <ul>{mappedList}</ul>;
};

export default Projects;
